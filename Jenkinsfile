pipeline  {
    agent any
    stages {
        stage('Pull') {
            steps {
                git credentialsId: 'gitee-183', url: 'https://gitee.com/fangchenjia/my-portfolio-web.git'
            }
        }
        stage('Install') {
            steps {
                nodejs(nodeJSInstallationName: 'v14.13.0') {
                    sh '''node -v
                    npm -v
                    npm i'''
                }
            }
        }
        stage('Bulid') {
            steps {
                nodejs(nodeJSInstallationName: 'v14.13.0') {
                    sh '''npm run build
                    tar -zcvf dist.tar.gz dist'''
                }
            }
        }
        stage('Deploy') {
            steps {
                sshPublisher(publishers: [sshPublisherDesc(configName: 'myServer', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: '''cd /opt/MyDocker/dockerData/nginx/html/
                rm -rf portfolio
                mkdir portfolio
                tar -zxvf dist.tar.gz -C portfolio/
                rm -rf dist.tar.gz''', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: 'opt/MyDocker/dockerData/nginx/html/', remoteDirectorySDF: false, removePrefix: '', sourceFiles: 'dist.tar.gz')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
            }
        }
    }
}