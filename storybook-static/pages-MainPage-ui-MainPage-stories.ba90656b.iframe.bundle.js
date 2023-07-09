"use strict";(self.webpackChunkeslint=self.webpackChunkeslint||[]).push([[384,761],{"./src/pages/MainPage/ui/MainPage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dark:()=>Dark,Light:()=>Light,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Light$parameters,_Light$parameters2,_Light$parameters2$do,_Dark$parameters,_Dark$parameters2,_Dark$parameters2$doc,shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx"),app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/providers/ThemeProvider/index.ts"),_MainPage__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/pages/MainPage/ui/MainPage.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={title:"pages/MainPage",component:_MainPage__WEBPACK_IMPORTED_MODULE_3__.default,argTypes:{backgroundColor:{control:"color"}}};var Template=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_MainPage__WEBPACK_IMPORTED_MODULE_3__.default,{})};Template.displayName="Template";var Light=Template.bind({});Light.args={};var Dark=Template.bind({});Dark.args={},Dark.decorators=[(0,shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__.F)(app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.Q2.DARK)],Light.parameters=_objectSpread(_objectSpread({},Light.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Light$parameters=Light.parameters)||void 0===_Light$parameters?void 0:_Light$parameters.docs),{},{source:_objectSpread({originalSource:"args => <MainPage />"},null===(_Light$parameters2=Light.parameters)||void 0===_Light$parameters2||null===(_Light$parameters2$do=_Light$parameters2.docs)||void 0===_Light$parameters2$do?void 0:_Light$parameters2$do.source)})}),Dark.parameters=_objectSpread(_objectSpread({},Dark.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Dark$parameters=Dark.parameters)||void 0===_Dark$parameters?void 0:_Dark$parameters.docs),{},{source:_objectSpread({originalSource:"args => <MainPage />"},null===(_Dark$parameters2=Dark.parameters)||void 0===_Dark$parameters2||null===(_Dark$parameters2$doc=_Dark$parameters2.docs)||void 0===_Dark$parameters2$doc?void 0:_Dark$parameters2$doc.source)})});var __namedExportsOrder=["Light","Dark"]},"./src/pages/MainPage/ui/MainPage.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>ui_MainPage});var es=__webpack_require__("./node_modules/react-redux/es/index.js"),Button=__webpack_require__("./src/shared/ui/Button/Button.tsx"),getCounterValue=(0,__webpack_require__("./node_modules/reselect/es/index.js").P1)((function getCounter(state){return state.counter}),(function(counter){return counter.value})),counterSlice=(0,__webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js").oM)({name:"counter",initialState:{value:0},reducers:{increment:function increment(state){state.value+=1},decrement:function decrement(state){state.value-=1},incrementByAmount:function incrementByAmount(state,action){state.value+=action.payload}}}),counterActions=counterSlice.actions,jsx_runtime=(counterSlice.reducer,__webpack_require__("./node_modules/react/jsx-runtime.js")),Counter=function Counter(){var dispatch=(0,es.I0)(),counterValue=(0,es.v9)(getCounterValue);return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("h1",{"data-testid":"value-title",children:counterValue}),(0,jsx_runtime.jsx)(Button.ZP,{onClick:function increment(){dispatch(counterActions.increment())},"data-testid":"increment-btn",children:"+"}),(0,jsx_runtime.jsx)(Button.ZP,{"data-testid":"decrement-btn",onClick:function decrement(){dispatch(counterActions.decrement())},children:"-"})]})};Counter.displayName="Counter";__webpack_require__("./node_modules/react/index.js");var dist_es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),MainPage=function MainPage(){var t=(0,dist_es.$G)().t;return(0,jsx_runtime.jsxs)("div",{children:[t("Home"),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Counter,{})})]})};MainPage.displayName="MainPage";const ui_MainPage=MainPage},"./src/shared/lib/classNames/className.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||_unsupportedIterableToArray(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function classNames(cls){var mods=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return[cls].concat(_toConsumableArray((arguments.length>2&&void 0!==arguments[2]?arguments[2]:[]).filter(Boolean)),_toConsumableArray(Object.entries(mods).filter((function(_ref){var _ref2=_slicedToArray(_ref,2),value=(_ref2[0],_ref2[1]);return Boolean(value)})).map((function(_ref3){return _slicedToArray(_ref3,1)[0]})))).join(" ")}__webpack_require__.d(__webpack_exports__,{A:()=>classNames})},"./src/shared/ui/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{qE:()=>ButtonSize,bn:()=>ButtonTheme,ZP:()=>Button_Button});__webpack_require__("./node_modules/react/index.js");var classNames_className=__webpack_require__("./src/shared/lib/classNames/className.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Button_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Button/Button.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Button_module.Z,options);const Button_Button_module=Button_module.Z&&Button_module.Z.locals?Button_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var _excluded=["className","children","theme","square","size"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var ButtonTheme=function(ButtonTheme){return ButtonTheme.CLEAR="clear",ButtonTheme.CLEAR_INVERTED="clearInverted",ButtonTheme.OUTLINE="outline",ButtonTheme.BACKGROUND="background",ButtonTheme.BACKGROUND_INVERTED="backgroundInverted",ButtonTheme}({}),ButtonSize=function(ButtonSize){return ButtonSize.M="size_m",ButtonSize.L="size_l",ButtonSize.Xl="size_xl",ButtonSize}({}),Button=function Button(props){var _mods,className=props.className,children=props.children,theme=props.theme,square=props.square,_props$size=props.size,size=void 0===_props$size?ButtonSize.L:_props$size,otherProps=_objectWithoutProperties(props,_excluded),mods=(_defineProperty(_mods={},Button_Button_module[theme],!0),_defineProperty(_mods,Button_Button_module.square,square),_defineProperty(_mods,Button_Button_module[size],!0),_mods);return(0,jsx_runtime.jsx)("button",_objectSpread(_objectSpread({type:"button",className:(0,classNames_className.A)(Button_Button_module.Button,mods,[className])},otherProps),{},{children}))};Button.displayName="Button";const Button_Button=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"clear"'},{value:'"clearInverted"'},{value:'"outline"'},{value:'"background"'},{value:'"backgroundInverted"'}]}},square:{defaultValue:null,description:"",name:"square",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"size_m"'},{value:'"size_l"'},{value:'"size_xl"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/shared/ui/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Button/Button.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-shared-ui-Button-Button-module__Button--a4nOa{padding:6px 15px;cursor:pointer;color:var(--primary-color)}.src-shared-ui-Button-Button-module__clear--FAEtI{padding:0;border:0;background:none;outline:none}.src-shared-ui-Button-Button-module__clearInverted--DYECq{padding:0;border:0;background:none;outline:none;color:var(--inverted-primary-color)}.src-shared-ui-Button-Button-module__outline--pxBl_{border:1px solid var(--primary-color);color:var(--primary-color);background-color:none}.src-shared-ui-Button-Button-module__background--nXdyj{background-color:var(--bg-color);color:var(--primary-color);border:none}.src-shared-ui-Button-Button-module__backgroundInverted--EXVU3{background-color:var(--inverted-bg-color);color:var(--inverted-primary-color);border:none}.src-shared-ui-Button-Button-module__square--pKS1A{padding:0}.src-shared-ui-Button-Button-module__square--pKS1A.src-shared-ui-Button-Button-module__size_m--xvXQX{width:var(--font-line-m);height:var(--font-line-m);font:var(--font-m)}.src-shared-ui-Button-Button-module__square--pKS1A.src-shared-ui-Button-Button-module__size_l--rsm7T{width:var(--font-line-l);height:var(--font-line-l);font:var(--font-l)}.src-shared-ui-Button-Button-module__square--pKS1A.src-shared-ui-Button-Button-module__size_xl--WJ8He{width:var(--font-line-xl);height:var(--font-line-xl);font:var(--font-xl)}.src-shared-ui-Button-Button-module__size_m--xvXQX{font:var(--font-m)}.src-shared-ui-Button-Button-module__size_l--rsm7T{font:var(--font-l)}.src-shared-ui-Button-Button-module__size_xl--WJ8He{font:var(--font-xl)}","",{version:3,sources:["webpack://./src/shared/ui/Button/Button.module.scss"],names:[],mappings:"AAAA,mDACI,gBAAA,CACA,cAAA,CACA,0BAAA,CAGJ,kDACI,SAAA,CACA,QAAA,CACA,eAAA,CACA,YAAA,CAGJ,0DACI,SAAA,CACA,QAAA,CACA,eAAA,CACA,YAAA,CACA,mCAAA,CAGJ,oDACI,qCAAA,CACA,0BAAA,CACA,qBAAA,CAGJ,uDACI,gCAAA,CACA,0BAAA,CACA,WAAA,CAGJ,+DACI,yCAAA,CACA,mCAAA,CACA,WAAA,CAGJ,mDACI,SAAA,CAGJ,qGACI,wBAAA,CACA,yBAAA,CACA,kBAAA,CAGJ,qGACI,wBAAA,CACA,yBAAA,CACA,kBAAA,CAGJ,sGACI,yBAAA,CACA,0BAAA,CACA,mBAAA,CAGJ,mDACI,kBAAA,CAGJ,mDACI,kBAAA,CAGJ,oDACI,mBAAA",sourcesContent:[".Button {\n    padding: 6px 15px;\n    cursor: pointer;\n    color: var(--primary-color);\n}\n\n.clear{\n    padding: 0;\n    border: 0;\n    background: none;\n    outline: none;\n}\n\n.clearInverted{\n    padding: 0;\n    border: 0;\n    background: none;\n    outline: none;\n    color: var(--inverted-primary-color);\n}\n\n.outline{\n    border: 1px solid var(--primary-color);\n    color: var(--primary-color);\n    background-color: none;\n}\n\n.background{\n    background-color: var(--bg-color);\n    color: var(--primary-color);\n    border: none;\n}\n\n.backgroundInverted{\n    background-color: var(--inverted-bg-color);\n    color: var(--inverted-primary-color);\n    border: none;\n}\n\n.square{\n    padding: 0;\n}\n\n.square.size_m{\n    width: var(--font-line-m);\n    height: var(--font-line-m);\n    font: var(--font-m)\n}\n\n.square.size_l{\n    width: var(--font-line-l);\n    height: var(--font-line-l);\n    font: var(--font-l)\n}\n\n.square.size_xl{\n    width: var( --font-line-xl);\n    height: var( --font-line-xl);\n    font: var(--font-xl)\n}\n\n.size_m{\n    font: var(--font-m);\n}\n\n.size_l{\n    font: var(--font-l);\n}\n\n.size_xl{\n    font: var(--font-xl);\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Button:"src-shared-ui-Button-Button-module__Button--a4nOa",clear:"src-shared-ui-Button-Button-module__clear--FAEtI",clearInverted:"src-shared-ui-Button-Button-module__clearInverted--DYECq",outline:"src-shared-ui-Button-Button-module__outline--pxBl_",background:"src-shared-ui-Button-Button-module__background--nXdyj",backgroundInverted:"src-shared-ui-Button-Button-module__backgroundInverted--EXVU3",square:"src-shared-ui-Button-Button-module__square--pKS1A",size_m:"src-shared-ui-Button-Button-module__size_m--xvXQX",size_l:"src-shared-ui-Button-Button-module__size_l--rsm7T",size_xl:"src-shared-ui-Button-Button-module__size_xl--WJ8He"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);