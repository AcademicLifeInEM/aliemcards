webpackJsonp([9,12],{544:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(7),s=n(u),l=r(216),f=r(76),p=function(e){function t(e){o(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={categories:[],loading:!0},r}return i(t,e),c(t,[{key:"componentDidMount",value:function(){var e=this;(0,l.post)("/graphql",{query:"query {\n        categories {\n          id\n          name\n        }\n      }"}).then(function(t){if(200!==t.status)throw t.status;var r=t.data.data.categories;e.setState({categories:r,loading:!1})}).catch(function(e){return console.error("Error: API response status code = "+e)})}},{key:"render",value:function(){return s.default.createElement("div",null,s.default.createElement("h1",null,"Categories"),s.default.createElement(d,{categories:this.state.categories}))}}]),t}(u.PureComponent);t.default=p;var d=function(e){var t=e.categories;return s.default.createElement("div",{className:"card-list"},t.map(function(e){return s.default.createElement("div",{key:e.id,className:"card-list__item"},s.default.createElement(f.Link,{to:"/categories/"+e.id,className:"card-list__item-title"},e.name))}))};d.propTypes={categories:u.PropTypes.arrayOf(u.PropTypes.shape({id:u.PropTypes.string,name:u.PropTypes.string}))}}});