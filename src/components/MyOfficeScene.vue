<template>
  <div class="three-container" ref="divDom"></div>
</template>
<script>
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { onMounted, getCurrentInstance, watch } from 'vue'
import { useThemeState } from '@/store'
import gsap from 'gsap'
// import GUI from 'lil-gui'
export default {
  name: 'MyOfficeScene',
  setup() {
    /*==================== 初始化场景 ====================*/
    const scene = new THREE.Scene()
    /*==================== 创建一个渲染器 ====================*/
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
    })
    renderer.useLegacyLights = true
    renderer.outputEncoding = THREE.sRGBEncoding
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    /*==================== 加载模型 ====================*/
    let chair = null,
      screen = null
    // 设置椅子旋转
    const chairAnimate = () => {
      gsap.to(chair.rotation, {
        y: 0.7,
        duration: 10,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      })
    }
    // mac屏幕播放视频
    const setScreen = () => {
      const video = document.createElement('video')
      video.src = '/3D/kda.mp4'
      video.muted = true
      video.playsInline = true
      video.autoplay = true
      video.loop = true
      video.play()
      const videoTexture = new THREE.VideoTexture(video)
      videoTexture.minFilter = THREE.NearestFilter
      videoTexture.magFilter = THREE.NearestFilter
      videoTexture.generateMipmaps = false
      videoTexture.encoding = THREE.sRGBEncoding
      // console.log(screen.material)
      screen.material = new THREE.MeshStandardMaterial({
        map: videoTexture,
      })
    }
    // 加载glb模型
    const gltfLoader = new GLTFLoader()
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('/draco/')
    gltfLoader.setDRACOLoader(dracoLoader)
    gltfLoader.load('/3D/officeScene.glb', (glb) => {
      // console.log(glb.scene)
      glb.scene.scale.set(1.8, 1.8, 1.8)
      glb.scene.position.y = -1.5
      // 获取椅子和电脑屏幕用于添加动画
      glb.scene.children.forEach((item) => {
        item.castShadow = true
        item.receiveShadow = true
        if (item.name === 'Chair') {
          chair = item
        } else if (item.name === 'mac-screen') {
          screen = item
        }
      })
      chairAnimate()
      setScreen()
      scene.add(glb.scene)
      renderer.render(scene, camera)
    })
    /*==================== 创建相机 ====================*/
    // const camera = new THREE.PerspectiveCamera(45, 1, 1, 1000)
    const camera = new THREE.OrthographicCamera()
    //设置相机位置
    camera.position.set(-9.72, 5.27, -2.25)
    //设置相机方向
    camera.lookAt(0, 0, 0)
    /*==================== 创建灯光 ====================*/
    // 环境光
    const ambient = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambient)
    // 太阳光
    const sunLight = new THREE.DirectionalLight(0xffffff)
    sunLight.castShadow = true
    sunLight.shadow.camera.far = 20
    sunLight.shadow.mapSize.set(2048, 2048)
    sunLight.shadow.normalBias = 0.05
    sunLight.position.set(-1.5, 7, 3)
    scene.add(sunLight)
    // 台灯光
    const pointLight = new THREE.PointLight(0xffffff)
    pointLight.castShadow = true
    pointLight.position.set(0.6, 4, -2.3)
    pointLight.shadow.camera.far = 20
    pointLight.shadow.mapSize.set(2048, 2048)
    pointLight.shadow.normalBias = 0.05
    // const pointlightHelper = new THREE.PointLightHelper(pointLight,0.2)
    // scene.add(pointlightHelper)
    scene.add(pointLight)
    // 调试器
    // const gui = new GUI()
    // const obj = {
    //   ambitentColor: { r: 255, g: 255, b: 255 },
    //   sunLightColor: { r: 255, g: 255, b: 255 },
    //   pointLightColor: { r: 255, g: 255, b: 255 },
    //   ambientIntensity: 3,
    //   sunLightIntensity: 3,
    //   pointLightIntensity: 3,
    // }
    // gui.addColor(obj, 'ambitentColor').onChange(() => {
    //   ambient.color.copy(obj.ambitentColor)
    //   console.log("ambitentColor",obj.ambitentColor)
    // })
    // gui.addColor(obj, 'sunLightColor').onChange(() => {
    //   sunLight.color.copy(obj.sunLightColor)
    //   console.log("sunLightColor",obj.sunLightColor)
    // })
    // gui.addColor(obj, 'pointLightColor').onChange(() => {
    //   pointLight.color.copy(obj.pointLightColor)
    //   console.log("pointLightColor",obj.pointLightColor)
    // })
    // gui.add(obj, 'ambientIntensity', 0, 10).onChange(() => {
    //   ambient.intensity = obj.ambientIntensity
    // })
    // gui.add(obj, 'sunLightIntensity', 0, 10).onChange(() => {
    //   sunLight.intensity = obj.sunLightIntensity
    // })
    // gui.add(obj, 'pointLightIntensity', 0, 10).onChange(() => {
    //   pointLight.intensity = obj.pointLightIntensity
    // })
    /*==================== 初始化相机以及render尺寸 ====================*/
    const size = {
      width: 0,
      height: 0,
      aspect: 1,
      frustrum: 10,
      pixelRatio: Math.min(window.devicePixelRatio, 2),
    }
    // 获取页面的实例对象
    const pageInstance = getCurrentInstance()
    const initSize = () => {
      size.width = pageInstance.refs.divDom.offsetWidth
      size.height = pageInstance.refs.divDom.offsetHeight
      size.aspect = size.width / size.height
      size.pixelRatio = Math.min(window.devicePixelRatio, 3)
      // camera.aspect = size.aspect
      camera.left = (-size.aspect * size.frustrum) / 2
      camera.right = (size.aspect * size.frustrum) / 2
      camera.top = size.frustrum / 2
      camera.bottom = -size.frustrum / 2
      camera.updateProjectionMatrix()
      renderer.setSize(size.width, size.height)
      renderer.setPixelRatio(size.pixelRatio)
    }
    /*==================== 控制器 ====================*/
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.maxAzimuthAngle = -1
    controls.minAzimuthAngle = Math.PI * 1.2
    controls.maxPolarAngle = Math.PI / 3 //控制器垂直方向最大旋转角度（理解为逆时针旋转角度）
    controls.minPolarAngle = Math.PI / 6 //控制器垂直方向最大小旋转角度（理解为顺时针旋转角度）
    controls.enableZoom = false
    /*==================== 动画 ====================*/
    const animate = () => {
      requestAnimationFrame(animate)
      renderer.render(scene, camera)
    }
    /*==================== 切换主题 ====================*/
    const theme = useThemeState().theme
    const switchTheme = () => {
      if (theme.value === 'light') {
        gsap.to(sunLight, {
          intensity: 0.78,
        })
        gsap.to(ambient, {
          intensity: 0.78,
        },)
        gsap.to(pointLight, {
          intensity: 0,
        })
        gsap.to(ambient.color, {
          r: 1,
          g: 1,
          b: 1,
        })
      } else {
        gsap.to(sunLight, {
          intensity: 0,
        })
        gsap.to(ambient, {
          intensity: 1.03,
        })
        gsap.to(pointLight, {
          intensity: 1.68,
        })
        gsap.to(ambient.color, {
          b: 0.9568627450980393,
          g: 0.24313725490196078,
          r: 0.3607843137254902
        })
      }
    }
    watch(theme, () => {
      switchTheme()
    })
    onMounted(() => {
      initSize()
      animate()
      switchTheme()
      pageInstance.refs.divDom.appendChild(renderer.domElement)
    })
  },
}
</script>

<style lang="scss" scoped>
.three-container {
  width: 100%;
  height: 100%;
}
</style>>
