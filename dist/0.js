webpackJsonp([0,12],{543:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(7),o=n(a),i=r(553),s=n(i);t.default=function(){return o.default.createElement("div",null,o.default.createElement("h1",null,"Cards"),o.default.createElement(s.default,{filter:!0}))}},552:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(7),o=n(a),i=r(76),s=function(e){var t=e.cards,r=e.categories,n=e.filter,a=e.filterhandler,s=e.filtervalue,l=e.editortools;return o.default.createElement("div",null,n&&o.default.createElement("select",{value:s,onChange:a},o.default.createElement("option",{value:""},"Filter by Category:"),r.map(function(e){return o.default.createElement("option",{key:e.id,value:e.id},e.name)})),o.default.createElement("div",{className:"card-list"},t.map(function(e){return o.default.createElement("div",{key:e.id,className:"card-list__item"},l&&o.default.createElement("span",{className:"card-list__item-meta "},new Date(e.created).toLocaleDateString("en-US")),o.default.createElement(i.Link,{to:"/cards/"+e.id,className:"card-list__item-title"},e.title)," ",e.categories.map(function(t){return o.default.createElement(i.Link,{to:"/categories/"+t.id,key:e.id+"-"+t.id,className:"card-list__item-meta"},t.name.toLowerCase())}))})))};s.propTypes={cards:a.PropTypes.arrayOf(a.PropTypes.shape({id:a.PropTypes.string,title:a.PropTypes.string,categories:a.PropTypes.arrayOf(a.PropTypes.shape({id:a.PropTypes.string,name:a.PropTypes.string}))})),categories:a.PropTypes.arrayOf(a.PropTypes.shape({id:a.PropTypes.string,name:a.PropTypes.string})),editortools:a.PropTypes.bool,filter:a.PropTypes.bool,filtervalue:a.PropTypes.string,filterhandler:a.PropTypes.func},t.default=s},553:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(7),c=n(l),u=r(216),d=r(552),f=n(d),p=function(e){function t(e){a(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.handleChange=r.handleChange.bind(r),r.state={categoryFilter:"",cards:[],categories:[],loading:!0},r}return i(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this;(0,u.post)("/graphql",{query:"query {\n        cards {\n          id\n          title\n          categories {\n            id\n            name\n          }\n        }\n        categories {\n          id\n          name\n        }\n      }"}).then(function(t){if(200!==t.status)throw t.status;var r=t.data.data,n=r.cards,a=r.categories;e.setState({cards:n,categories:a,categoryFilter:"",loading:!1})}).catch(function(e){return console.error("Error: API response status code = "+e)})}},{key:"handleChange",value:function(e){var t=e.currentTarget.value;this.setState({categoryFilter:t})}},{key:"render",value:function(){var e=this.state.categoryFilter,t=void 0;return t=e?this.state.cards.filter(function(t){return t.categories.findIndex(function(t){return t.id===e})!==-1}):this.state.cards,c.default.createElement(f.default,{cards:t,categories:this.state.categories,filter:this.props.filter,filterhandler:this.handleChange,filtervalue:this.state.categoryFilter,editortools:this.props.editortools})}}]),t}(l.PureComponent);t.default=p,p.propTypes={editortools:l.PropTypes.bool,filter:l.PropTypes.bool}}});