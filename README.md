# Chrome-ex-vue-Demo
一个基于Vue.js的Chrome扩展开发模板，框架已搭好，直接编写功能即可。（由于在学习webpack基础所以并没有使用vue-cli直接生成）

### 目录结构

```js
|-- Chrome-ex-vue-Demo //项目文件夹
    |-- .gitignore
    |-- App.vue 
    |-- LICENSE
    |-- package-lock.json
    |-- package.json
    |-- README.md
    |-- webpack.config.js
    |-- dist //打包后的项目,也是在chrome安装扩展时选择的目录
    |   |-- bundle.js //自动生成，webpack打包后的js
    |   |-- index.html //自动生成，webpack打包后的html
    |   |-- manifest.json //手动添加，chrome扩展配置文件
    |   |-- images//手动添加，扩展的图标文件
    |       |-- icon128.png
    |       |-- icon16.png
    |       |-- icon19.png
    |       |-- icon38.png
    |       |-- icon48.png
    |-- src //打包前的项目
        |-- index.html
        |-- main.js
        |-- components
        |-- css
        |-- js
        |-- static
```
### 如何使用扩展
1. 打开Chrome设置界面
2. 点击左侧下方扩展程序
3. 打开右上角“开发者模式”开关
4. 点击左上角“加载已解压的扩展程序”
5. 选择dist目录
6. 点击地址栏右侧新增的扩展（白色圆形时钟图标）

### 如何修改扩展
+ 编辑dist目录下的manifest.json文件

### 调试
1. 根目录下运行`npm install`
2. `npm run dev`
### 打包
+ 根目录下运行`npm run build`(新生成的文件会覆盖dist目录下已有的文件)
### 注意事项
+ manifest.json下的`"content_security_policy"`属性为必填项，否则会报错，[原因](https://www.cnblogs.com/smartXiang/p/6929617.html)。
+ 已添加的plugin和loader有
    + VueLoaderPlugin
    + HtmlWebpackPlugin
    + vue-loader
    + style-loader
    + css-loader
    + less-loader
### 参考资料
+ [webpack](https://www.webpackjs.com/)
+ [Chrome扩展及应用开发（首发版）](https://www.ituring.com.cn/book/1421)
+ [Chrome扩展非官方中文版文档](https://crxdoc-zh.appspot.com/extensions/getstarted)
+ [Chrome扩展官方文档](https://developer.chrome.com/extensions)
+ [Vue.js官方文档](https://cn.vuejs.org/index.html)
+ [使用Vue.js开发的扩展案例](https://github.com/lavyun/Easy-todo)
### 最后
如果有帮到你请给我个star，谢谢！