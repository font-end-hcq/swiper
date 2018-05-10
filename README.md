## 校宝学院 -- vue轮播组件

[在Gitlab上查看](git@git-server.chinaeast.cloudapp.chinacloudapi.cn:xueyuan/cm_swiper.git)

### 项目背景

##### vue轮播组件，基于vue-awesome-swiper，用法与swiper基本相同。

### 技术方案

##### vue2 + webpack2

* 规范：
	* ES6
* 基础库：
	* vue2
	* swiper
* 调试及构建：
    * sass
	* Webpack2

### 项目代码结构 Structure

```
├── src 					// 组件代码目录
│   ├── index.js 			// 组件入口文件			
│   └── swiper.scss 		// 组件样式文件
├── demo					// demo文件夹
│   ├── app.js 				// demo入口文件
│   └── App.vue 			// demo页面
├── dist
│   └── index.js 			// 打包出的组件文件
├── index.js
└── package.json
```

## 运行命令 ##

- npm run build: 打成umd格式的包

- npm run build:es6: 原样输出ES6格式代码

- npm run dev: 打开demo

## 版本更新说明 ##

1.0.0 第一版基于swiper完成。
