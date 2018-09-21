## 技术栈：
  react + redux + redux-thunk（让redux支持异步的中间件） +  webpack + react-router + ES6/7/8 + axios + react-transition-group（react动画库）+ react-loadable（使组件按需加载） + styled-components（css组件化） + immutable.js
  
## 运行打包（nodejs 6.0+）：
```
 git clone https://github.com/CoderZF/jianshu-pc.git

 cd jianshu-pc

 npm i  或者运行  yarn(推荐)
  
 npm start

 npm run build （发布）
```

## 项目结构及技术点介绍：
*该项目由 [Create React App](https://github.com/facebookincubator/create-react-app) 搭建.*

项目结构：
```
jianshu-pc
│   README.md
│   package.json
└───src
│   │   App.js
│   │   idnex.js
│   │   style.js
│   └───common
│   │      └───header
│   │             │   index.js
│   │             │   style.js
│   │             └───store   
│   │                  │   actionCreators.js
│   │                  │   constants.js  
│   │                  │   index.js  
│   │                  │   reducer.js  
│   └───pages
│   │      └───detail
│   │      │       │   index.js
│   │      │       │   style.js
│   │      │       │   loadable.js
│   │      │       └───store   
│   │      │           │   actionCreators.js
│   │      │           │   constants.js  
│   │      │           │   index.js  
│   │      │           │   reducer.js  
│   │      └───home
│   │      │       │   index.js
│   │      │       │   style.js
│   │      │       └───store   
│   │      │       │      actionCreators.js
│   │      │       │      constants.js  
│   │      │       │      index.js  
│   │      │       │      reducer.js   
│   │      │       └───components   
│   │      │           │   List.js
│   │      │           │   Recommend.js  
│   │      │           │   Topic.js  
│   │      │           │   Writer.js   
│   │      └───login
│   │      │       │   index.js
│   │      │       │   style.js
│   │      │       └───store   
│   │      │           │   actionCreators.js
│   │      │           │   constants.js  
│   │      │           │   index.js  
│   │      │           │   reducer.js   
│   │      └───write
│   │      │       │   index.js
│   │      │       │   style.js
│   └───statics
│   │      │   logo.png
│   │      │   ...
│   │      └───iconfont
│   │             │   iconfont.eot
│   │             │   iconfont.js
│   │             │   ...
│   └───store
│   │      │   index.js
│   │      │   reducer.js
│        
└───public
    │   ...
```

## 代码优化：

