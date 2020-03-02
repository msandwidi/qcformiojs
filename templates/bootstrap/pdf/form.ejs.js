Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '';
__p += '<div class="' +
((__t = (ctx.classes)) == null ? '' : __t) +
'" ref="webform">\r\n	<span data-noattach="true" ref="zoomIn" style="position:absolute;right:10px;top:10px;cursor:pointer;" class="btn btn-default btn-secondary no-disable">\r\n		<i class="' +
((__t = ( ctx.iconClass('zoom-in') )) == null ? '' : __t) +
'"></i>\r\n	</span>\r\n	<span data-noattach="true" ref="zoomOut" style="position:absolute;right:10px;top:60px;cursor:pointer;" class="btn btn-default btn-secondary no-disable">\r\n		<i class="' +
((__t = ( ctx.iconClass('zoom-out') )) == null ? '' : __t) +
'"></i>\r\n	</span>\r\n  <div data-noattach="true" ref="iframeContainer"></div>\r\n  <button type="button" class="btn btn-primary" ref="submitButton">' +
((__t = (ctx.t('Submit'))) == null ? '' : __t) +
'</button>\r\n</div>\r\n';
return __p
}