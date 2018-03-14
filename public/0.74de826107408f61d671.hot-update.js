webpackHotUpdate(0,{

/***/ 354:
/* no static exports found */
/* all exports used */
/*!***********************************!*\
  !*** ./frontend/actions/index.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.addBioInfo = undefined;\n\nvar _types = __webpack_require__(/*! ./types */ 159);\n\nvar types = _interopRequireWildcard(_types);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nvar addBioInfo = exports.addBioInfo = function addBioInfo(header, content) {\n\treturn {\n\t\ttype: types.ADD_BIO_INFO,\n\t\theader: header,\n\t\tcontent: content\n\t};\n}; // Action Creators//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzU0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2FjdGlvbnMvaW5kZXguanM/NGI1OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBY3Rpb24gQ3JlYXRvcnNcblxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBhZGRCaW9JbmZvID0gKGhlYWRlciwgY29udGVudCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IHR5cGVzLkFERF9CSU9fSU5GTyxcblx0XHRoZWFkZXI6IGhlYWRlcixcblx0XHRjb250ZW50OiBjb250ZW50XG5cdH07XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9hY3Rpb25zL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7QUFDQTtBQURBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///354\n");

/***/ }),

/***/ 654:
/* no static exports found */
/* all exports used */
/*!*******************************************!*\
  !*** ./frontend/components/AddBioInfo.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ 73);\n\nvar _index = __webpack_require__(/*! ../actions/index */ 354);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar AddBioInfo = function (_Component) {\n\t_inherits(AddBioInfo, _Component);\n\n\tfunction AddBioInfo(props) {\n\t\t_classCallCheck(this, AddBioInfo);\n\n\t\tvar _this = _possibleConstructorReturn(this, (AddBioInfo.__proto__ || Object.getPrototypeOf(AddBioInfo)).call(this, props));\n\n\t\t_this.state = {\n\t\t\theader: '',\n\t\t\tcontent: ''\n\t\t};\n\t\t_this.handleInputChange = _this.handleInputChange.bind(_this);\n\t\t_this.submitBioInfo = _this.submitBioInfo.bind(_this);\n\t\treturn _this;\n\t}\n\n\t_createClass(AddBioInfo, [{\n\t\tkey: 'submitBioInfo',\n\t\tvalue: function submitBioInfo() {\n\t\t\tvar content = this.state.content;\n\n\t\t\t/**if (content.length == 0) {\n   \talert(\"Cannot submit empty bio information.\");\n   \treturn;\n   } */\n\n\t\t\tvar add = this.props.add;\n\n\t\t\tadd(content);\n\t\t}\n\t}, {\n\t\tkey: 'handleInputChange',\n\t\tvalue: function handleInputChange(event) {\n\t\t\tthis.setState({ name: event.target.value });\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar content = this.state.content;\n\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\t_react2.default.createElement('input', { type: 'text', value: content, onChange: this.handleInputChange }),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'button',\n\t\t\t\t\t{ onClick: this.submitBioInfo },\n\t\t\t\t\t'Add'\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn AddBioInfo;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n\treturn {};\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n\treturn {\n\t\tadd: function add(content) {\n\t\t\tdispatch((0, _index.addBioInfo)(content));\n\t\t}\n\t};\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AddBioInfo);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjU0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvQWRkQmlvSW5mby5qcz8zOThlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IGFkZEJpb0luZm8gfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuXG5jbGFzcyBBZGRCaW9JbmZvIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGhlYWRlcjogJycsXG5cdFx0XHRjb250ZW50OiAnJ1xuXHRcdH1cblx0XHR0aGlzLmhhbmRsZUlucHV0Q2hhbmdlID0gdGhpcy5oYW5kbGVJbnB1dENoYW5nZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc3VibWl0QmlvSW5mbyA9IHRoaXMuc3VibWl0QmlvSW5mby5iaW5kKHRoaXMpO1xuXHR9XG5cblx0c3VibWl0QmlvSW5mbygpIHtcblx0XHRjb25zdCB7IGNvbnRlbnQgfSA9IHRoaXMuc3RhdGU7XG5cblx0XHQvKippZiAoY29udGVudC5sZW5ndGggPT0gMCkge1xuXHRcdFx0YWxlcnQoXCJDYW5ub3Qgc3VibWl0IGVtcHR5IGJpbyBpbmZvcm1hdGlvbi5cIik7XG5cdFx0XHRyZXR1cm47XG5cdFx0fSAqL1xuXG5cdFx0Y29uc3R7IGFkZCB9ID0gdGhpcy5wcm9wcztcblx0XHRhZGQoY29udGVudCk7XG5cdH1cblxuXHRoYW5kbGVJbnB1dENoYW5nZShldmVudCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe25hbWU6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgY29udGVudCB9ID0gdGhpcy5zdGF0ZTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGlucHV0IHR5cGU9J3RleHQnIHZhbHVlPXtjb250ZW50fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0gLz5cblx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnN1Ym1pdEJpb0luZm99PkFkZDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XG5cdHJldHVybiB7fTtcbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xuXHRyZXR1cm4ge1xuXHRcdGFkZDogY29udGVudCA9PiB7XG5cdFx0XHRkaXNwYXRjaChhZGRCaW9JbmZvKGNvbnRlbnQpKTtcblx0XHR9XG5cdH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFkZEJpb0luZm8pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9jb21wb25lbnRzL0FkZEJpb0luZm8uanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQUVBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBUEE7QUFRQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFFQTs7Ozs7QUFIQTtBQUNBO0FBUUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUtBOzs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///654\n");

/***/ })

})