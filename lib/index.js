'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Column = exports.Row = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: ', ';\n  align-items: ', ';\n  flex-wrap: ', ';\n  flex-grow: ', ';\n  width: ', ';\n  position: relative;\n'], ['\n  display: flex;\n  justify-content: ', ';\n  align-items: ', ';\n  flex-wrap: ', ';\n  flex-grow: ', ';\n  width: ', ';\n  position: relative;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  flex-direction: row;\n'], ['\n  flex-direction: row;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  flex-direction: column;\n'], ['\n  flex-direction: column;\n']);

var _reactEmotion = require('react-emotion');

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var justifyMap = {
  start: 'flex-start',
  end: 'flex-end',
  'space-between': 'space-between',
  'space-around': 'space-around'
};

var alignMap = {
  start: 'flex-start',
  end: 'flex-end',
  'space-between': 'space-between',
  'space-around': 'space-around',
  stretch: 'stretch'
};

var justifyContent = function justifyContent(_ref) {
  var _ref$justify = _ref.justify,
      justify = _ref$justify === undefined ? 'center' : _ref$justify;
  return justifyMap[justify];
};
var alignItems = function alignItems(_ref2) {
  var _ref2$align = _ref2.align,
      align = _ref2$align === undefined ? 'center' : _ref2$align;
  return alignMap[align];
};

var Box = (0, _reactEmotion2.default)('div')(_templateObject, function (props) {
  return justifyContent;
}, function (props) {
  return alignItems;
}, function (props) {
  return props.wrap ? 'wrap' : 'no-wrap';
}, function (props) {
  return props.grow ? 1 : 0;
}, function (props) {
  return props.inline ? 'auto' : '100%';
});

var Row = exports.Row = (0, _reactEmotion2.default)(Box)(_templateObject2);

var Column = exports.Column = (0, _reactEmotion2.default)(Box)(_templateObject3);

exports.default = Box;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJqdXN0aWZ5TWFwIiwic3RhcnQiLCJlbmQiLCJhbGlnbk1hcCIsInN0cmV0Y2giLCJqdXN0aWZ5Q29udGVudCIsImp1c3RpZnkiLCJhbGlnbkl0ZW1zIiwiYWxpZ24iLCJCb3giLCJwcm9wcyIsIndyYXAiLCJncm93IiwiaW5saW5lIiwiUm93IiwiQ29sdW1uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWE7QUFDakJDLFNBQU8sWUFEVTtBQUVqQkMsT0FBSyxVQUZZO0FBR2pCLG1CQUFpQixlQUhBO0FBSWpCLGtCQUFnQjtBQUpDLENBQW5COztBQU9BLElBQU1DLFdBQVc7QUFDZkYsU0FBTyxZQURRO0FBRWZDLE9BQUssVUFGVTtBQUdmLG1CQUFpQixlQUhGO0FBSWYsa0JBQWdCLGNBSkQ7QUFLZkUsV0FBUztBQUxNLENBQWpCOztBQVFBLElBQU1DLGlCQUFpQixTQUFqQkEsY0FBaUI7QUFBQSwwQkFBR0MsT0FBSDtBQUFBLE1BQUdBLE9BQUgsZ0NBQWEsUUFBYjtBQUFBLFNBQTRCTixXQUFXTSxPQUFYLENBQTVCO0FBQUEsQ0FBdkI7QUFDQSxJQUFNQyxhQUFhLFNBQWJBLFVBQWE7QUFBQSwwQkFBR0MsS0FBSDtBQUFBLE1BQUdBLEtBQUgsK0JBQVcsUUFBWDtBQUFBLFNBQTBCTCxTQUFTSyxLQUFULENBQTFCO0FBQUEsQ0FBbkI7O0FBRUEsSUFBTUMsTUFBTSw0QkFBTyxLQUFQLENBQU4sa0JBRWU7QUFBQSxTQUFTSixjQUFUO0FBQUEsQ0FGZixFQUdXO0FBQUEsU0FBU0UsVUFBVDtBQUFBLENBSFgsRUFJUztBQUFBLFNBQVVHLE1BQU1DLElBQU4sR0FBYSxNQUFiLEdBQXNCLFNBQWhDO0FBQUEsQ0FKVCxFQUtTO0FBQUEsU0FBVUQsTUFBTUUsSUFBTixHQUFhLENBQWIsR0FBaUIsQ0FBM0I7QUFBQSxDQUxULEVBTUs7QUFBQSxTQUFVRixNQUFNRyxNQUFOLEdBQWUsTUFBZixHQUF3QixNQUFsQztBQUFBLENBTkwsQ0FBTjs7QUFVTyxJQUFNQyxvQkFBTSw0QkFBT0wsR0FBUCxDQUFOLGtCQUFOOztBQUlBLElBQU1NLDBCQUFTLDRCQUFPTixHQUFQLENBQVQsa0JBQU47O2tCQUlRQSxHIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdyZWFjdC1lbW90aW9uJ1xuXG5jb25zdCBqdXN0aWZ5TWFwID0ge1xuICBzdGFydDogJ2ZsZXgtc3RhcnQnLFxuICBlbmQ6ICdmbGV4LWVuZCcsXG4gICdzcGFjZS1iZXR3ZWVuJzogJ3NwYWNlLWJldHdlZW4nLFxuICAnc3BhY2UtYXJvdW5kJzogJ3NwYWNlLWFyb3VuZCcsXG59XG5cbmNvbnN0IGFsaWduTWFwID0ge1xuICBzdGFydDogJ2ZsZXgtc3RhcnQnLFxuICBlbmQ6ICdmbGV4LWVuZCcsXG4gICdzcGFjZS1iZXR3ZWVuJzogJ3NwYWNlLWJldHdlZW4nLFxuICAnc3BhY2UtYXJvdW5kJzogJ3NwYWNlLWFyb3VuZCcsXG4gIHN0cmV0Y2g6ICdzdHJldGNoJyxcbn1cblxuY29uc3QganVzdGlmeUNvbnRlbnQgPSAoeyBqdXN0aWZ5ID0gJ2NlbnRlcicgfSkgPT4ganVzdGlmeU1hcFtqdXN0aWZ5XVxuY29uc3QgYWxpZ25JdGVtcyA9ICh7IGFsaWduID0gJ2NlbnRlcicgfSkgPT4gYWxpZ25NYXBbYWxpZ25dXG5cbmNvbnN0IEJveCA9IHN0eWxlZCgnZGl2JylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogJHtwcm9wcyA9PiBqdXN0aWZ5Q29udGVudH07XG4gIGFsaWduLWl0ZW1zOiAke3Byb3BzID0+IGFsaWduSXRlbXN9O1xuICBmbGV4LXdyYXA6ICR7cHJvcHMgPT4gKHByb3BzLndyYXAgPyAnd3JhcCcgOiAnbm8td3JhcCcpfTtcbiAgZmxleC1ncm93OiAke3Byb3BzID0+IChwcm9wcy5ncm93ID8gMSA6IDApfTtcbiAgd2lkdGg6ICR7cHJvcHMgPT4gKHByb3BzLmlubGluZSA/ICdhdXRvJyA6ICcxMDAlJyl9O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gXG5cbmV4cG9ydCBjb25zdCBSb3cgPSBzdHlsZWQoQm94KWBcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbmBcblxuZXhwb3J0IGNvbnN0IENvbHVtbiA9IHN0eWxlZChCb3gpYFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuYFxuXG5leHBvcnQgZGVmYXVsdCBCb3hcbiJdfQ==