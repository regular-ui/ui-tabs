(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("regularjs"));
	else if(typeof define === 'function' && define.amd)
		define(["Regular"], factory);
	else if(typeof exports === 'object')
		exports["RGUI"] = factory(require("regularjs"));
	else
		root["RGUI"] = factory(root["Regular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _rguiUiListview = __webpack_require__(1);\n\nObject.keys(_rguiUiListview).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _rguiUiListview[key];\n    }\n  });\n});\n\nvar _rguiUiBase = __webpack_require__(3);\n\nObject.keys(_rguiUiBase).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _rguiUiBase[key];\n    }\n  });\n});\n\nvar _index = __webpack_require__(12);\n\nObject.keys(_index).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _index[key];\n    }\n  });\n});\n\n/*****************\n ** WEBPACK FOOTER\n ** ./.rgui-cache/js/index.js\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./.rgui-cache/js/index.js?");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Item = exports.ListView = undefined;\n\nvar _listView = __webpack_require__(2);\n\nvar _listView2 = _interopRequireDefault(_listView);\n\nvar _item = __webpack_require__(10);\n\nvar _item2 = _interopRequireDefault(_item);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.ListView = _listView2.default;\nexports.Item = _item2.default;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/rgui-ui-listview/index.js\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/rgui-ui-listview/index.js?");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _rguiUiBase = __webpack_require__(3);\n\nvar _index = __webpack_require__(9);\n\nvar _index2 = _interopRequireDefault(_index);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * @class ListView\n * @extend Component\n * @param {object}                  options.data                     =  绑定属性\n * @param {var}                     options.data.value              <=> 当前选择的值\n * @param {boolean=false}           options.data.multiple            => 是否可以多选\n * @param {boolean=false}           options.data.cancelable          => 是否可以取消选择\n * @param {boolean=false}           options.data.readonly            => 是否只读\n * @param {boolean=false}           options.data.disabled            => 是否禁用\n * @param {boolean=true}            options.data.visible             => 是否显示\n * @param {string=''}               options.data.class               => 补充class\n */\nvar ListView = _rguiUiBase.Component.extend({\n    name: 'listView',\n    template: _index2.default,\n    /**\n     * @protected\n     * @override\n     */\n    config: function config() {\n        this.data = Object.assign({\n            _list: [],\n            _selected: undefined,\n            value: undefined,\n            multiple: false,\n            cancelable: false\n        }, this.data);\n        this.supr();\n        this.watch();\n    },\n\n    /**\n     * @protected\n     * @override\n     */\n    watch: function watch() {\n        var _this = this;\n\n        this.$watch('value', function (newValue, oldValue) {\n            if (!_this.data._selected || _this.data._selected.data.value !== newValue) _this.data._selected = _this.data._list.find(function (item) {\n                return item.data.value === newValue;\n            });\n\n            /**\n             * @event change 选择值改变时触发\n             * @property {object} sender 事件发送对象\n             * @property {Item} selected 改变后的选择项\n             * @property {var} value 改变后的选择值\n             */\n            _this.$emit('change', {\n                sender: _this,\n                selected: _this.data._selected,\n                value: newValue\n            });\n        });\n\n        this.$watch('_selected', function (newValue, oldValue) {\n            // 改变item的选择状态\n            oldValue && (oldValue.data.selected = false);\n            newValue && (newValue.data.selected = true);\n            // 设置value\n            _this.data.value = newValue ? newValue.data.value : newValue;\n        });\n    },\n\n    /**\n     * @method select(item) 选择某一项\n     * @public\n     * @param  {Item} item 选择项\n     * @return {void}\n     */\n    select: function select(item) {\n        if (this.data.readonly || this.data.disabled) return;\n\n        if (this.data.multiple) item.data.selected = !item.data.selected;else if (this.data.cancelable && this.data._selected === item) this.data._selected = undefined;else this.data._selected = item;\n\n        /**\n         * @event select 选择某一项时触发\n         * @property {object} sender 事件发送对象\n         * @property {Item} selected 当前选择项\n         * @property {var} value 当前选择值\n         */\n        this.$emit('select', {\n            sender: this,\n            selected: item,\n            value: item.data.value\n        });\n    }\n});\n\nexports.default = ListView;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/rgui-ui-listview/listView/index.js\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/rgui-ui-listview/listView/index.js?");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports._ = exports.Component = undefined;\n\nvar _component = __webpack_require__(4);\n\nvar _component2 = _interopRequireDefault(_component);\n\nvar _util = __webpack_require__(8);\n\nvar _util2 = _interopRequireDefault(_util);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.Component = _component2.default;\nexports._ = _util2.default;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/rgui-ui-base/index.js\n ** module id = 3\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/rgui-ui-base/index.js?");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _regularjs = __webpack_require__(5);\n\nvar _regularjs2 = _interopRequireDefault(_regularjs);\n\nvar _filter = __webpack_require__(6);\n\nvar _filter2 = _interopRequireDefault(_filter);\n\nvar _directive = __webpack_require__(7);\n\nvar _directive2 = _interopRequireDefault(_directive);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * @class Component\n * @extend Regular\n * @param {boolean=false}           options.data.readonly            => 是否只读\n * @param {boolean=false}           options.data.disabled            => 是否禁用\n * @param {boolean=true}            options.data.visible             => 是否显示\n * @param {string=''}               options.data.class               => 补充class\n */\nvar Component = _regularjs2.default.extend({\n    /**\n     * @protected\n     */\n    config: function config() {\n        this.data = Object.assign({\n            readonly: false,\n            disabled: false,\n            visible: true,\n            'class': ''\n        }, this.data);\n        this.supr();\n    }\n}).filter(_filter2.default).directive(_directive2.default);\n\nexports.default = Component;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/rgui-ui-base/component/index.js\n ** module id = 4\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/rgui-ui-base/component/index.js?");

/***/ },
/* 5 */
/***/ function(module, exports) {

	eval("module.exports = __WEBPACK_EXTERNAL_MODULE_5__;\n\n/*****************\n ** WEBPACK FOOTER\n ** external {\"root\":\"Regular\",\"amd\":\"Regular\",\"commonjs\":\"regularjs\",\"commonjs2\":\"regularjs\"}\n ** module id = 5\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%7B%22root%22:%22Regular%22,%22amd%22:%22Regular%22,%22commonjs%22:%22regularjs%22,%22commonjs2%22:%22regularjs%22%7D?");

/***/ },
/* 6 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar filter = {};\n\nfilter.dateFormat = function () {\n    var fix = function fix() {\n        var str = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];\n\n        str = str + '';\n        return str.length <= 1 ? '0' + str : str;\n    };\n\n    var MAPS = {\n        yyyy: function yyyy(date) {\n            return date.getFullYear();\n        },\n        MM: function MM(date) {\n            return fix(date.getMonth() + 1);\n        },\n        dd: function dd(date) {\n            return fix(date.getDate());\n        },\n        HH: function HH(date) {\n            return fix(date.getHours());\n        },\n        mm: function mm(date) {\n            return fix(date.getMinutes());\n        },\n        ss: function ss(date) {\n            return fix(date.getSeconds());\n        }\n    };\n\n    var trunk = new RegExp(Object.keys(MAPS).join('|'), 'g');\n\n    return function (value) {\n        var format = arguments.length <= 1 || arguments[1] === undefined ? 'yyyy-MM-dd HH:mm' : arguments[1];\n\n        if (!value) return '';\n        value = new Date(value);\n\n        return format.replace(trunk, function (capture) {\n            return MAPS[capture] ? MAPS[capture](value) : '';\n        });\n    };\n}();\n\nfilter.format = function (value, type) {\n    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n        args[_key - 2] = arguments[_key];\n    }\n\n    return filter[type + 'Format'].apply(filter, [value].concat(args));\n};\n\nexports.default = filter;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/rgui-ui-base/filter/index.js\n ** module id = 6\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/rgui-ui-base/filter/index.js?");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _util = __webpack_require__(8);\n\nvar _util2 = _interopRequireDefault(_util);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar directive = {};\n\ndirective['z-crt'] = _util2.default.createBoolClassDirective('z-crt');\ndirective['z-sel'] = _util2.default.createBoolClassDirective('z-sel');\ndirective['z-chk'] = _util2.default.createBoolClassDirective('z-chk');\ndirective['z-dis'] = _util2.default.createBoolClassDirective('z-dis');\n\ndirective['r-show'] = _util2.default.createBoolDirective(function (elem, value) {\n    elem.style.display = value ? 'block' : '';\n});\n\ndirective['r-autofocus'] = _util2.default.createBoolDirective(function (elem, value) {\n    value && setTimeout(function () {\n        return elem.focus();\n    }, 0);\n});\n\nexports.default = directive;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/rgui-ui-base/directive/index.js\n ** module id = 7\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/rgui-ui-base/directive/index.js?");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; };\n\nvar _regularjs = __webpack_require__(5);\n\nvar _ = {};\n\n_.createBoolDirective = function (func) {\n    return function (elem, value) {\n        var _this = this;\n\n        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.type === 'expression') {\n            this.$watch(value, function (newValue, oldValue) {\n                if (!newValue === !oldValue) return;\n                func.call(_this, elem, newValue);\n            });\n        } else if (!!value || value === '') func.call(this, elem, true);\n    };\n};\n\n_.createBoolClassDirective = function (boolClass) {\n    return _.createBoolDirective(function (elem, value) {\n        _regularjs.dom[value ? 'addClass' : 'delClass'](elem, boolClass);\n    });\n};\n\nexports.default = _;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/rgui-ui-base/util/index.js\n ** module id = 8\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/rgui-ui-base/util/index.js?");

/***/ },
/* 9 */
/***/ function(module, exports) {

	eval("module.exports =[{\"type\":\"element\",\"tag\":\"ul\",\"attrs\":[{\"type\":\"attribute\",\"name\":\"class\",\"value\":{\"type\":\"expression\",\"body\":\"['m-listView ',c._sg_('class', d, e)].join('')\",\"constant\":false,\"setbody\":false}},{\"type\":\"attribute\",\"name\":\"z-dis\",\"value\":{\"type\":\"expression\",\"body\":\"c._sg_('disabled', d, e)\",\"constant\":false,\"setbody\":\"c._ss_('disabled',p_,d, '=', 1)\"}},{\"type\":\"attribute\",\"name\":\"r-hide\",\"value\":{\"type\":\"expression\",\"body\":\"(!c._sg_('visible', d, e))\",\"constant\":false,\"setbody\":false}}],\"children\":[{\"type\":\"text\",\"text\":\"\\n    \"},{\"type\":\"template\",\"content\":{\"type\":\"expression\",\"body\":\"c._sg_('$body', c)\",\"constant\":false,\"setbody\":\"c._ss_('$body',p_,c, '=', 0)\"}},{\"type\":\"text\",\"text\":\"\\n\"}]}]\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/rgui-ui-listview/listView/index.rgl\n ** module id = 9\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/rgui-ui-listview/listView/index.rgl?");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _rguiUiBase = __webpack_require__(3);\n\nvar _index = __webpack_require__(11);\n\nvar _index2 = _interopRequireDefault(_index);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * @class Item\n * @extend Component\n * @param {object}                  options.data                     =  绑定属性\n * @param {var}                     options.data.value              <=> 该项的值\n * @param {boolean=false}           options.data.selected           <=> 该项是否被选中\n * @param {boolean=false}           options.data.divider             => 设置该项为分隔线\n * @param {string}                  options.data.title               => 该项的工具提示\n * @param {boolean=false}           options.data.disabled            => 禁用该项\n * @param {boolean=true}            options.data.visible             => 是否显示\n * @param {string=''}               options.data.class               => 补充class\n */\nvar Item = _rguiUiBase.Component.extend({\n    name: 'item',\n    template: _index2.default,\n    /**\n     * @protected\n     * @override\n     */\n    config: function config() {\n        this.data = Object.assign({\n            value: undefined,\n            selected: false,\n            disabled: false,\n            divider: false,\n            title: undefined\n        }, this.data);\n        this.supr();\n\n        // 没有$outer就直接报错\n        this.$outer.data._list.push(this);\n\n        // 多选时不使用`value`和`_selected`\n        if (this.$outer.data.multiple) return;\n        // 与$outer的value相等时自动设为选中\n        if (this.data.value !== undefined && this.$outer.data.value === this.data.value) this.data.selected = true;\n        // 初始化时选择selected为true的item\n        if (this.data.selected) this.$outer.data._selected = this;\n    },\n\n    /**\n     * @protected\n     * @override\n     */\n    destroy: function destroy() {\n        if (this.$outer.data._selected === this) this.$outer.data._selected = undefined;\n        // 从$outer组件的列表中删除自己\n        var index = this.$outer.data._list.indexOf(this);\n        ~index && this.$outer.data._list.splice(index, 1);\n        this.supr();\n    },\n\n    /**\n     * @method select() 选择该项\n     * @public\n     * @return {void}\n     */\n    select: function select() {\n        if (this.data.disabled || this.data.divider) return;\n\n        this.$outer.select(this);\n\n        /**\n         * @event select 选择该项时触发\n         * @property {object} sender 事件发送对象\n         * @property {Item} selected 当前选择项\n         * @property {var} value 当前选择值\n         */\n        this.$emit('select', {\n            sender: this,\n            selected: this,\n            value: this.data.value\n        });\n    }\n}).directive({\n    'z-divider': _rguiUiBase._.createBoolClassDirective('z-divider')\n});\n\nexports.default = Item;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/rgui-ui-listview/item/index.js\n ** module id = 10\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/rgui-ui-listview/item/index.js?");

/***/ },
/* 11 */
/***/ function(module, exports) {

	eval("module.exports =[{\"type\":\"element\",\"tag\":\"li\",\"attrs\":[{\"type\":\"attribute\",\"name\":\"class\",\"value\":{\"type\":\"expression\",\"body\":\"c._sg_('class', d, e)\",\"constant\":false,\"setbody\":\"c._ss_('class',p_,d, '=', 1)\"}},{\"type\":\"attribute\",\"name\":\"z-sel\",\"value\":{\"type\":\"expression\",\"body\":\"c._sg_('selected', d, e)\",\"constant\":false,\"setbody\":\"c._ss_('selected',p_,d, '=', 1)\"}},{\"type\":\"attribute\",\"name\":\"z-dis\",\"value\":{\"type\":\"expression\",\"body\":\"c._sg_('disabled', d, e)\",\"constant\":false,\"setbody\":\"c._ss_('disabled',p_,d, '=', 1)\"}},{\"type\":\"attribute\",\"name\":\"z-divider\",\"value\":{\"type\":\"expression\",\"body\":\"c._sg_('divider', d, e)\",\"constant\":false,\"setbody\":\"c._ss_('divider',p_,d, '=', 1)\"}},{\"type\":\"attribute\",\"name\":\"title\",\"value\":{\"type\":\"expression\",\"body\":\"c._sg_('title', d, e)\",\"constant\":false,\"setbody\":\"c._ss_('title',p_,d, '=', 1)\"}},{\"type\":\"attribute\",\"name\":\"r-hide\",\"value\":{\"type\":\"expression\",\"body\":\"(!c._sg_('visible', d, e))\",\"constant\":false,\"setbody\":false}},{\"type\":\"attribute\",\"name\":\"on-click\",\"value\":{\"type\":\"expression\",\"body\":\"c['select']()\",\"constant\":false,\"setbody\":false}}],\"children\":[{\"type\":\"text\",\"text\":\"\\n    \"},{\"type\":\"template\",\"content\":{\"type\":\"expression\",\"body\":\"c._sg_('$body', c)\",\"constant\":false,\"setbody\":\"c._ss_('$body',p_,c, '=', 0)\"}},{\"type\":\"text\",\"text\":\"\\n\"}]}]\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/rgui-ui-listview/item/index.rgl\n ** module id = 11\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/rgui-ui-listview/item/index.rgl?");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Tab = exports.Tabs = undefined;\n\nvar _tabs = __webpack_require__(13);\n\nvar _tabs2 = _interopRequireDefault(_tabs);\n\nvar _tab = __webpack_require__(15);\n\nvar _tab2 = _interopRequireDefault(_tab);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.Tabs = _tabs2.default;\nexports.Tab = _tab2.default;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./index.js\n ** module id = 12\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./index.js?");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _rguiUiListview = __webpack_require__(1);\n\nvar _index = __webpack_require__(14);\n\nvar _index2 = _interopRequireDefault(_index);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * @class Tabs\n * @extend ListView\n * @param {object}                  options.data                     =  绑定属性\n * @param {number=0}                options.data.current            <=> 当前选择页索引\n * @param {string}                  options.data.titleTemplate      @=> 标题模板\n * @param {boolean=false}           options.data.readonly            => 是否只读\n * @param {boolean=false}           options.data.disabled            => 是否禁用\n * @param {boolean=true}            options.data.visible             => 是否显示\n * @param {string=''}               options.data.class               => 补充class\n */\nvar Tabs = _rguiUiListview.ListView.extend({\n    name: 'tabs',\n    template: _index2.default,\n    /**\n     * @protected\n     * @override\n     */\n    config: function config() {\n        this.data = Object.assign({\n            // @inherited _list: [],\n            // @inherited _selected: undefined,\n            current: 0,\n            titleTemplate: undefined\n        }, this.data);\n        this.supr();\n    },\n\n    /**\n     * @protected\n     * @override\n     */\n    watch: function watch() {\n        var _this = this;\n\n        this.$watch('current', function (newValue, oldValue) {\n            _this.data._selected = _this.data._list[newValue];\n\n            /**\n             * @event change 选择页改变时触发\n             * @property {object} sender 事件发送对象\n             * @property {number} current 改变后的选择页索引\n             * @property {Tab} selected 改变后的选择页\n             */\n            _this.$emit('change', {\n                sender: _this,\n                selected: _this.data._selected,\n                current: newValue\n            });\n        });\n\n        this.$watch('_selected', function (newValue, oldValue) {\n            // 设置current\n            _this.data.current = newValue ? _this.data._list.indexOf(newValue) : newValue;\n        });\n    },\n\n    /**\n     * @method select(tab) 选择某一项\n     * @public\n     * @param  {Tab} tab 选择项\n     * @return {void}\n     */\n    select: function select(tab) {\n        if (this.data.readonly || this.data.disabled) return;\n\n        this.data._selected = tab;\n\n        /**\n         * @event select 选择某一项时触发\n         * @property {object} sender 事件发送对象\n         * @property {number} current 当前选择页索引\n         * @property {Tab} selected 当前选择页\n         */\n        this.$emit('select', {\n            sender: this,\n            selected: tab,\n            current: this.data._list.indexOf(tab)\n        });\n    }\n});\n\nexports.default = Tabs;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./tabs/index.js\n ** module id = 13\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./tabs/index.js?");

/***/ },
/* 14 */
/***/ function(module, exports) {

	eval("module.exports =[{\"type\":\"element\",\"tag\":\"div\",\"attrs\":[{\"type\":\"attribute\",\"name\":\"class\",\"value\":{\"type\":\"expression\",\"body\":\"['m-tabs ',c._sg_('class', d, e)].join('')\",\"constant\":false,\"setbody\":false}},{\"type\":\"attribute\",\"name\":\"z-dis\",\"value\":{\"type\":\"expression\",\"body\":\"c._sg_('disabled', d, e)\",\"constant\":false,\"setbody\":\"c._ss_('disabled',p_,d, '=', 1)\"}},{\"type\":\"attribute\",\"name\":\"r-hide\",\"value\":{\"type\":\"expression\",\"body\":\"(!c._sg_('visible', d, e))\",\"constant\":false,\"setbody\":false}}],\"children\":[{\"type\":\"text\",\"text\":\"\\n    \"},{\"type\":\"element\",\"tag\":\"ul\",\"attrs\":[{\"type\":\"attribute\",\"name\":\"class\",\"value\":\"tabs_hd\"}],\"children\":[{\"type\":\"text\",\"text\":\"\\n        \"},{\"type\":\"list\",\"sequence\":{\"type\":\"expression\",\"body\":\"c._sg_('_list', d, e)\",\"constant\":false,\"setbody\":\"c._ss_('_list',p_,d, '=', 1)\"},\"alternate\":[],\"variable\":\"item\",\"body\":[{\"type\":\"text\",\"text\":\"\\n        \"},{\"type\":\"element\",\"tag\":\"li\",\"attrs\":[{\"type\":\"attribute\",\"name\":\"z-crt\",\"value\":{\"type\":\"expression\",\"body\":\"c._sg_('item', d, e)===c._sg_('_selected', d, e)\",\"constant\":false,\"setbody\":false}},{\"type\":\"attribute\",\"name\":\"z-dis\",\"value\":{\"type\":\"expression\",\"body\":\"c._sg_('disabled', c._sg_('data', c._sg_('item', d, e)))\",\"constant\":false,\"setbody\":\"c._ss_('disabled',p_,c._sg_('data', c._sg_('item', d, e)), '=', 0)\"}},{\"type\":\"attribute\",\"name\":\"title\",\"value\":{\"type\":\"expression\",\"body\":\"c._sg_('title', c._sg_('data', c._sg_('item', d, e)))\",\"constant\":false,\"setbody\":\"c._ss_('title',p_,c._sg_('data', c._sg_('item', d, e)), '=', 0)\"}},{\"type\":\"attribute\",\"name\":\"r-hide\",\"value\":{\"type\":\"expression\",\"body\":\"(!c._sg_('visible', c._sg_('data', c._sg_('item', d, e))))\",\"constant\":false,\"setbody\":false}},{\"type\":\"attribute\",\"name\":\"on-click\",\"value\":{\"type\":\"expression\",\"body\":\"c._sg_('item', d, e)['select']()\",\"constant\":false,\"setbody\":false}}],\"children\":[{\"type\":\"text\",\"text\":\"\\n            \"},{\"type\":\"if\",\"test\":{\"type\":\"expression\",\"body\":\"c._sg_('titleTemplate', d, e)\",\"constant\":false,\"setbody\":\"c._ss_('titleTemplate',p_,d, '=', 1)\",\"once\":true},\"consequent\":[{\"type\":\"text\",\"text\":\"\\n                \"},{\"type\":\"template\",\"content\":{\"type\":\"expression\",\"body\":\"c._sg_('titleTemplate', d, e)\",\"constant\":false,\"setbody\":\"c._ss_('titleTemplate',p_,d, '=', 1)\",\"once\":true}},{\"type\":\"text\",\"text\":\"\\n            \"}],\"alternate\":[{\"type\":\"text\",\"text\":\"\\n                \"},{\"type\":\"element\",\"tag\":\"span\",\"attrs\":[],\"children\":[{\"type\":\"expression\",\"body\":\"c._sg_('title', c._sg_('data', c._sg_('item', d, e)))\",\"constant\":false,\"setbody\":\"c._ss_('title',p_,c._sg_('data', c._sg_('item', d, e)), '=', 0)\"}]},{\"type\":\"text\",\"text\":\"\\n            \"}]},{\"type\":\"text\",\"text\":\"\\n        \"}]},{\"type\":\"text\",\"text\":\"\\n        \"}]},{\"type\":\"text\",\"text\":\"\\n    \"}]},{\"type\":\"text\",\"text\":\"\\n    \"},{\"type\":\"element\",\"tag\":\"div\",\"attrs\":[{\"type\":\"attribute\",\"name\":\"class\",\"value\":\"tabs_bd\"}],\"children\":[{\"type\":\"text\",\"text\":\"\\n        \"},{\"type\":\"template\",\"content\":{\"type\":\"expression\",\"body\":\"c._sg_('$body', c)\",\"constant\":false,\"setbody\":\"c._ss_('$body',p_,c, '=', 0)\"}},{\"type\":\"text\",\"text\":\"\\n    \"}]},{\"type\":\"text\",\"text\":\"\\n\"}]}]\n\n/*****************\n ** WEBPACK FOOTER\n ** ./tabs/index.rgl\n ** module id = 14\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./tabs/index.rgl?");

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _rguiUiListview = __webpack_require__(1);\n\n/**\n * @class Tab\n * @extend Item\n * @param {object}                  options.data                     =  绑定属性\n * @param {boolean=false}           options.data.selected           <=> 该项是否被选中\n * @param {string=''}               options.data.title               => 该项的工具提示\n * @param {boolean=false}           options.data.disabled            => 禁用该项\n * @param {boolean=true}            options.data.visible             => 是否显示\n * @param {string=''}               options.data.class               => 补充class\n */\nvar Tab = _rguiUiListview.Item.extend({\n    name: 'tab',\n    template: '<div r-hide={this.$outer.data._selected !== this}>{#inc this.$body}</div>',\n    /**\n     * @protected\n     * @override\n     */\n    config: function config() {\n        this.data = Object.assign({\n            // @inherited selected: false,\n            // @inherited disabled: false,\n            title: ''\n        }, this.data);\n        this.supr();\n    }\n});\n\nexports.default = Tab;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./tab/index.js\n ** module id = 15\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./tab/index.js?");

/***/ }
/******/ ])
});
;