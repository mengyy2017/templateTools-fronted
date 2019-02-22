

// ---------------现在这个在4.0是完全没有用的
// ---------------现在能访问时因为run的时候 使用的是webpack相关的命令
// ---------------而webpack会找webpack.config.js 在这里配置的项目入口文件是main.js
//---------------在main.js中提供了最起始的<Route path="/" component={App}/>
//---------------那么访问路径就是http://ip:port    直接就加载App组件了

// import React from 'react';
// import {Route} from 'react-router-dom';
// import App from 'components/home/App';
// import Tables from 'components/Tables'
// import Tabs from 'components/Tabs'
//
// export default (
//     <Route path="/" exact component={App}>
//         <Route path="/tables" component={Tables}/>
//         <Route path="/tabs" component={Tabs}/>
//     </Route>
// );