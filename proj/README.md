# Amaze UI Touch Starter Kit

[Amaze UI Touch](https://github.com/amazeui/amazeui-touch) 快速上手套件，基于 React、Amaze UI Touch、React Router 及 Webpack 开发 SPA。

**套件中目前只包含客户部代码，亦未包含 Flux、Redux 等框架**。

## 目录结构

```
.
├── app  ------------------  样式和脚本
│   ├── js  ---------------  JS
│   └── style  ------------  样式文件（支持 Stylus 和 Less）
└── html  -----------------  其他静态资源
    ├── humans.txt
    ├── i  ----------------  图片
    ├── index.html  -------  入口 HTML
    ├── manifest.json
    ├── manifest.webapp
    └── robots.txt
```

## 使用说明

### 环境配置

- 安装 [Node.js](https://nodejs.org/en/download/)
- 模块编译环境配置：[点击查看](https://github.com/nodejs/node-gyp#installation)

### 安装开发依赖

1. 克隆或下载本项目代码；
2. 进入项目目录，执行 `npm install`；

### 开发

```
npm start
```

### 构建生产环境版本

```
npm run build
```

如果想测试生产环境版本，可以执行以下命令构建并启动本地 HTTP 服务器预览：

```
npm run preview
```
