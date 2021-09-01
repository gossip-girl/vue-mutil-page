# vuemultipage

=======

# vueoa

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

# 多页面应用：

## 配置

### 一般情况下使用 vuecli3 创建的项目默认都单页面应用，但 vue cli 给我们预留了可以配置多页面的方法，即在 vue.config.js 中的 pages 对象；

### 官网链接： https://cli.vuejs.org/zh/config/#indexpath

---

#### 配置方式：在 multi-page 模式下构建应用。每个“page”应该有一个对应的 JavaScript 入口文件。其值应该是一个对象，对象的 key 是入口的名字，value 是：

#### 一个指定了 entry, template, filename, title 和 chunks 的对象 (除了 entry 之外都是可选的)；

#### 或一个指定其 entry 的字符串。

```
module.exports = {
    pages: {
        index:{
            entry:'src/mainView/main.js',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        //配置展开写法
        pagetwo: {
            // 必需项:应用入口配置，相当于单页面应用的main.js
            entry: 'src/modules/pagetwo/main.js',

            //可选项： 应用的html模版，相当于单页面应用的public/index.html，，省略时默认与模块名一致
            template: 'public/pagetwo.html',

            // 编译后在dist目录的输出文件名，可选项，省略时默认与模块名一致
            filename: 'pagetwo.html',

            // 可选项，html中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'pagetwo page',

            //可选项，需要引入的打包后的块
            chunks: ['chunk-vendors','pagetwo']
        },
        // 配置简写：直接用字符串表示模块入口，其他采用默认
        pagethree: 'src/modules/pagethree/main.js'
    }
}
```

## 单页面应用 vs 多页面应用

### 单页面应用原理

#### 单页 Web 应用 (single-page application 简称为 SPA) 是一种特殊的 Web 应用。它将所有的活动局限于一个 Web 页面中，仅在该 Web 页面初始化时加载相应的 HTML、JavaScript 和 CSS。一旦页面加载完成了，SPA 不会因为用户的操作而进行页面的重新加载或跳转。取而代之的是利用 JavaScript 动态的变换 HTML 的内容，从而实现 UI 与用户的交互

---

### 优点：

1.无刷新界面，给用户体验原生的应用感觉、

2.前后端分离开发

2.减轻服务器压力

3.共用一套后端程序代码 不用修改后端程序代码就可以同时用于 Web 界面、手机、平板等多种客户端；

### 缺点

1.初次加载耗时多

2.业务随着代码量增加而增加，不利于首屏优化

3.不利于搜索引擎抓取

---

## vue router 中 hash history 路由实现原理

### 对于 vue 这类渐进式前端开发框架，为了构建 SPA（单页面应用），需要引入前端路由系统，这也就是 Vue-Router 存在的意义。前端路由的核心，就在于 —— 改变视图的同时不会向后端发出请求。

由此,浏览器提供了以下两种支持：

    1.hash —— 即地址栏 URL 中的 # 符号（此 hash 不是密码学里的散列运算）。比如这个 URL：http://www.abc.com/#/hello，hash 的值为 #/hello。它的特点在于：hash 虽然出现在 URL 中，但不会被包括在 HTTP 请求中，对后端完全没有影响，因此改变 hash 不会重新加载页面。

        Hash值的改变，都会在浏览器访问历史中增加一个记录，因此我们能通过浏览器的回退、前进控制按钮控制hash的切换
        vue-router也主要使用h5中的onhashchange来实现路由跳转的

    2.history —— 利用了 HTML5 History Interface 中新增的 pushState() 和 replaceState() 方法。（需要特定浏览器支持）这两个方法应用于浏览器的历史记录栈，在当前已有的 back、forward、go 的基础之上，它们提供了对历史记录进行修改的功能。只是当它们执行修改时，虽然改变了当前的 URL，但浏览器不会立即向后端发送请求。

    因此可以说，hash 模式和 history 模式都属于浏览器自身的特性，Vue-Router 只是利用了这两个特性（通过调用浏览器提供的接口）来实现前端路由.

## 多页面应用：

页面之间的路由跳转只能依赖于路径跳转模式，路由仅使用于相同页面内的跳转

---


## 总结： https://juejin.cn/post/6844903512107663368

