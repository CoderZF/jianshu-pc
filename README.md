## 目录
- [技术栈](#user-content-技术栈)
- [项目结构及技术点介绍](#user-content-项目结构及技术点介绍)
- [Bugs and feature requests](#Bugs-and-feature-requests)
- [License](#License)

# 技术栈：
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

#### 项目结构：
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

#### styled components：
使用styled components，可将组件分为逻辑组件和展示组件，逻辑组件只关注逻辑相关的部分，展示组件只关注样式。通过解耦成两种组件，可以使代码变得更加清晰可维护。当逻辑有变化，如后台拉取的数据的格式有所变化时，只需关注并修改逻辑组件上的代码，展示组件的代码不用动。而当UI需要变化时，只需改变展示组件上的代码，并保证展示组件暴露的props接口不变即可。逻辑组件和展示组件各司其职，修改代码时错误发生率也会有所减少。
``` javascript
import { injectGlobal } from 'styled-components';

injectGlobal`
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
    ...
`
```
上面js可以看出全局公用样式使用injectGlobal，所有css写在字符串模板中，vscode下载vscode-styled-components插件可支持语法高亮。

``` javascript
 import styled from "styled-components";

 export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`;
 export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${props => props.imgUrl});
  background-size: contain;
`;
```
``` js
import { RecommendWrapper, RecommendItem } from '../style';

class Recommend extends PureComponent {
	render() {
		return (
			<RecommendWrapper>
				{
					this.props.list.map((item) => {
						return <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}/>
					})
				}
			</RecommendWrapper>
		)
	}
}
```
上面2个js就是styled components最常用的使用方法，将视图和逻辑彻底分离。

#### 使用iconfont嵌入图标
![image.png](https://upload-images.jianshu.io/upload_images/1517219-ce2bf5c272f293f5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/1517219-4ea045f8f4ef401e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




## 代码和性能优化：

