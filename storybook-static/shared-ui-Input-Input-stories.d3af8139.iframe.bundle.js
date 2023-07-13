"use strict";(self.webpackChunkeslint=self.webpackChunkeslint||[]).push([[387],{"./src/shared/ui/Input/Input.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Primary$parameters,_Primary$parameters2,_Primary$parameters2$,shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/ui/Input/Input.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={title:"shared/Input",component:shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_1__.I,argTypes:{backgroundColor:{control:"color"}}};var Template=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_1__.I,_objectSpread({},args))};Template.displayName="Template";var Primary=Template.bind({});Primary.args={placeholder:"Type text",value:"123123"},Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Input {...args} />"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source)})});var __namedExportsOrder=["Primary"]},"./src/shared/lib/classNames/className.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||_unsupportedIterableToArray(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function classNames(cls){var mods=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return[cls].concat(_toConsumableArray((arguments.length>2&&void 0!==arguments[2]?arguments[2]:[]).filter(Boolean)),_toConsumableArray(Object.entries(mods).filter((function(_ref){var _ref2=_slicedToArray(_ref,2),value=(_ref2[0],_ref2[1]);return Boolean(value)})).map((function(_ref3){return _slicedToArray(_ref3,1)[0]})))).join(" ")}__webpack_require__.d(__webpack_exports__,{A:()=>classNames})},"./src/shared/ui/Input/Input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Input});var react=__webpack_require__("./node_modules/react/index.js"),classNames_className=__webpack_require__("./src/shared/lib/classNames/className.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Input_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Input/Input.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Input_module.Z,options);const Input_Input_module=Input_module.Z&&Input_module.Z.locals?Input_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var _excluded=["className","value","onChange","type","placeholder","autofocus"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Input=(0,react.memo)((function(props){var className=props.className,value=props.value,onChange=props.onChange,_props$type=props.type,type=void 0===_props$type?"text":_props$type,placeholder=props.placeholder,autofocus=props.autofocus,otherProps=_objectWithoutProperties(props,_excluded),ref=(0,react.useRef)(null),_useState2=_slicedToArray((0,react.useState)(!1),2),isFocused=_useState2[0],setIsFocused=_useState2[1],_useState4=_slicedToArray((0,react.useState)(0),2),caretPosition=_useState4[0],setCaretPosition=_useState4[1];(0,react.useEffect)((function(){var _ref$current;autofocus&&(setIsFocused(!0),null===(_ref$current=ref.current)||void 0===_ref$current||_ref$current.focus())}),[autofocus]);return(0,jsx_runtime.jsxs)("div",{className:(0,classNames_className.A)(Input_Input_module.InputWrapper,{},[className]),children:[placeholder&&(0,jsx_runtime.jsx)("div",{className:Input_Input_module.placeholder,children:"".concat(placeholder,">")}),(0,jsx_runtime.jsxs)("div",{className:Input_Input_module.caretWrapper,children:[(0,jsx_runtime.jsx)("input",_objectSpread({ref,type,value,onChange:function onChangeHandler(e){null==onChange||onChange(e.target.value),setCaretPosition(e.target.value.length)},className:Input_Input_module.input,onFocus:function onFocus(){setIsFocused(!0)},onBlur:function onBlur(){setIsFocused(!1)},onSelect:function onSelect(e){var _e$target;setCaretPosition((null==e||null===(_e$target=e.target)||void 0===_e$target?void 0:_e$target.selectionStart)||0)}},otherProps)),isFocused&&(0,jsx_runtime.jsx)("span",{className:Input_Input_module.caret,style:{left:"".concat(9*caretPosition,"px")}})]})]})}));try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(value: string) => void"}},autofocus:{defaultValue:null,description:"",name:"autofocus",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Input/Input.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/shared/ui/Input/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Input/Input.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-shared-ui-Input-Input-module__InputWrapper--LuFDU{display:flex}.src-shared-ui-Input-Input-module__placeholder--emAQQ{margin-right:5px}.src-shared-ui-Input-Input-module__input--LVdIP{background:rgba(0,0,0,0);border:none;outline:none;width:100%;color:rgba(0,0,0,0);text-shadow:0 0 0 var(--primary-color)}.src-shared-ui-Input-Input-module__input--LVdIP:focus{outline:none}.src-shared-ui-Input-Input-module__caretWrapper--y1GiF{flex-grow:1;position:relative}.src-shared-ui-Input-Input-module__caret--lqMFG{height:3px;width:9px;background:var(--primary-color);bottom:0;left:0;position:absolute;animation:src-shared-ui-Input-Input-module__blink--M7n8f .7s forwards infinite}@keyframes src-shared-ui-Input-Input-module__blink--M7n8f{0%{opacity:0}50%{opacity:.01}100%{opacity:1}}","",{version:3,sources:["webpack://./src/shared/ui/Input/Input.module.scss"],names:[],mappings:"AAAA,uDACI,YAAA,CAGJ,sDACI,gBAAA,CAGJ,gDACI,wBAAA,CACA,WAAA,CACA,YAAA,CACA,UAAA,CACA,mBAAA,CACA,sCAAA,CAEA,sDACI,YAAA,CAIR,uDACI,WAAA,CACA,iBAAA,CAGJ,gDACI,UAAA,CACA,SAAA,CACA,+BAAA,CACA,QAAA,CACA,MAAA,CACA,iBAAA,CACA,8EAAA,CAGJ,0DACI,GACI,SAAA,CAGJ,IACI,WAAA,CAGJ,KACI,SAAA,CAAA",sourcesContent:[".InputWrapper {\n    display: flex;\n}\n\n.placeholder {\n    margin-right: 5px;\n}\n\n.input {\n    background: transparent;\n    border: none;\n    outline: none;\n    width: 100%;\n    color: transparent;\n    text-shadow: 0 0 0 var(--primary-color);\n\n    &:focus {\n        outline: none;\n    }\n}\n\n.caretWrapper {\n    flex-grow: 1;\n    position: relative;\n}\n\n.caret {\n    height: 3px;\n    width: 9px;\n    background: var(--primary-color);\n    bottom: 0;\n    left: 0;\n    position: absolute;\n    animation: blink 0.7s forwards infinite;\n}\n\n@keyframes blink {\n    0% {\n        opacity: 0;\n    }\n\n    50% {\n        opacity: 0.01;\n    }\n\n    100% {\n        opacity: 1;\n    }\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={InputWrapper:"src-shared-ui-Input-Input-module__InputWrapper--LuFDU",placeholder:"src-shared-ui-Input-Input-module__placeholder--emAQQ",input:"src-shared-ui-Input-Input-module__input--LVdIP",caretWrapper:"src-shared-ui-Input-Input-module__caretWrapper--y1GiF",caret:"src-shared-ui-Input-Input-module__caret--lqMFG",blink:"src-shared-ui-Input-Input-module__blink--M7n8f"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);