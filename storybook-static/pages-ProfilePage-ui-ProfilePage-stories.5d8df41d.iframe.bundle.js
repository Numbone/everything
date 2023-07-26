"use strict";(self.webpackChunkeslint=self.webpackChunkeslint||[]).push([[311],{"./src/pages/ProfilePage/ui/ProfilePage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dark:()=>Dark,Light:()=>Light,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Light$parameters,_Light$parameters2,_Light$parameters2$do,_Dark$parameters,_Dark$parameters2,_Dark$parameters2$doc,shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx"),app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/providers/ThemeProvider/index.ts"),shared_config_storybook_StoreDecorator_StoreDecorator__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/shared/config/storybook/StoreDecorator/StoreDecorator.tsx"),_ProfilePage__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/pages/ProfilePage/ui/ProfilePage.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={title:"pages/ProfilePage",component:_ProfilePage__WEBPACK_IMPORTED_MODULE_4__.Z,argTypes:{backgroundColor:{control:"color"}}};var Template=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ProfilePage__WEBPACK_IMPORTED_MODULE_4__.Z,_objectSpread({},args))};Template.displayName="Template";var Light=Template.bind({});Light.args={},Light.decorators=[(0,shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__.F)(app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.Q2.LIGHT),(0,shared_config_storybook_StoreDecorator_StoreDecorator__WEBPACK_IMPORTED_MODULE_3__.l)({})];var Dark=Template.bind({});Dark.args={},Dark.decorators=[(0,shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__.F)(app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.Q2.DARK),(0,shared_config_storybook_StoreDecorator_StoreDecorator__WEBPACK_IMPORTED_MODULE_3__.l)({})],Light.parameters=_objectSpread(_objectSpread({},Light.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Light$parameters=Light.parameters)||void 0===_Light$parameters?void 0:_Light$parameters.docs),{},{source:_objectSpread({originalSource:"args => <ProfilePage {...args} />"},null===(_Light$parameters2=Light.parameters)||void 0===_Light$parameters2||null===(_Light$parameters2$do=_Light$parameters2.docs)||void 0===_Light$parameters2$do?void 0:_Light$parameters2$do.source)})}),Dark.parameters=_objectSpread(_objectSpread({},Dark.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Dark$parameters=Dark.parameters)||void 0===_Dark$parameters?void 0:_Dark$parameters.docs),{},{source:_objectSpread({originalSource:"args => <ProfilePage {...args} />"},null===(_Dark$parameters2=Dark.parameters)||void 0===_Dark$parameters2||null===(_Dark$parameters2$doc=_Dark$parameters2.docs)||void 0===_Dark$parameters2$doc?void 0:_Dark$parameters2$doc.source)})});var __namedExportsOrder=["Light","Dark"]},"./src/pages/ProfilePage/ui/ProfilePage.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ui_ProfilePage});var react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),classNames_className=__webpack_require__("./src/shared/lib/classNames/className.ts"),DynamicModuleLoader=__webpack_require__("./src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx"),useAppDispatch=__webpack_require__("./src/shared/lib/hooks/useAppDispatch/useAppDispatch.ts"),Profile=__webpack_require__("./src/entities/Profile/index.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ProfilePage_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ProfilePage/ui/ProfilePage.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ProfilePage_module.Z,options);const ui_ProfilePage_module=ProfilePage_module.Z&&ProfilePage_module.Z.locals?ProfilePage_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),reducers={profile:Profile.Cn},ProfilePage=function ProfilePage(_ref){_ref.className,(0,es.$G)().t;var dispatch=(0,useAppDispatch.T)();return(0,react.useEffect)((function(){dispatch((0,Profile.bN)())}),[dispatch]),(0,jsx_runtime.jsx)(DynamicModuleLoader.W,{reducers,removeAfterUnmount:!0,children:(0,jsx_runtime.jsx)("div",{className:(0,classNames_className.A)(ui_ProfilePage_module.ProfilePage,{},[]),children:(0,jsx_runtime.jsx)(Profile.PP,{})})})};ProfilePage.displayName="ProfilePage";const ui_ProfilePage=ProfilePage;try{ProfilePage.displayName="ProfilePage",ProfilePage.__docgenInfo={description:"",displayName:"ProfilePage",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pages/ProfilePage/ui/ProfilePage.tsx#ProfilePage"]={docgenInfo:ProfilePage.__docgenInfo,name:"ProfilePage",path:"src/pages/ProfilePage/ui/ProfilePage.tsx#ProfilePage"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>DynamicModuleLoader});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_redux__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-redux/es/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var DynamicModuleLoader=function DynamicModuleLoader(props){var children=props.children,reducers=props.reducers,removeAfterUnmount=props.removeAfterUnmount,store=(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.oR)(),dispatch=(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.I0)();return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){return Object.entries(reducers).forEach((function(_ref){var _ref2=_slicedToArray(_ref,2),name=_ref2[0],reducer=_ref2[1];store.reducerManager.add(name,reducer),dispatch({type:"@INIT ".concat(name," reducer")})})),function(){removeAfterUnmount&&Object.entries(reducers).forEach((function(_ref3){var _ref4=_slicedToArray(_ref3,2),name=_ref4[0];_ref4[1];store.reducerManager.remove(name),dispatch({type:"@DESTROY ".concat(name," reducer")})}))}}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children})};try{DynamicModuleLoader.displayName="DynamicModuleLoader",DynamicModuleLoader.__docgenInfo={description:"",displayName:"DynamicModuleLoader",props:{reducers:{defaultValue:null,description:"",name:"reducers",required:!0,type:{name:"ReducersList"}},removeAfterUnmount:{defaultValue:null,description:"",name:"removeAfterUnmount",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx#DynamicModuleLoader"]={docgenInfo:DynamicModuleLoader.__docgenInfo,name:"DynamicModuleLoader",path:"src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx#DynamicModuleLoader"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/lib/hooks/useAppDispatch/useAppDispatch.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>useAppDispatch});var react_redux__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-redux/es/index.js"),useAppDispatch=function useAppDispatch(){return(0,react_redux__WEBPACK_IMPORTED_MODULE_0__.I0)()}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ProfilePage/ui/ProfilePage.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);