# 使用指定的基础镜像作为基础
FROM nginx:latest

# 将前端项目的构建产物复制到Nginx的默认网站目录
COPY ./public /usr/share/nginx/html
