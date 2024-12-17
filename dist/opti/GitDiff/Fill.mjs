var f = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var r = (a, c, l) => c in a ? f(a, c, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[c] = l, i = (a, c) => {
  for (var l in c || (c = {}))
    m.call(c, l) && r(a, l, c[l]);
  if (t)
    for (var l of t(c))
      o.call(c, l) && r(a, l, c[l]);
  return a;
};
var p = (a, c) => {
  var l = {};
  for (var e in a)
    m.call(a, e) && c.indexOf(e) < 0 && (l[e] = a[e]);
  if (a != null && t)
    for (var e of t(a))
      c.indexOf(e) < 0 && o.call(a, e) && (l[e] = a[e]);
  return l;
};
import V, { forwardRef as H } from "react";
import L from "../../lib/OptiBase.mjs";
const d = H((e, l) => {
  var s = e, { children: a } = s, c = p(s, ["children"]);
  return /* @__PURE__ */ V.createElement(L, i({ ref: l }, c), a, /* @__PURE__ */ V.createElement("path", { d: "M118.18,213.08c-.11.14-.24.27-.36.4l-.16.18-.17.15a4.83,4.83,0,0,1-.42.37,3.92,3.92,0,0,1-.32.25l-.3.22-.38.23a2.91,2.91,0,0,1-.3.17l-.37.19-.34.15-.36.13a2.84,2.84,0,0,1-.38.13l-.36.1c-.14,0-.26.07-.4.09l-.42.07-.35.05a7,7,0,0,1-.79,0H64a8,8,0,0,1,0-16H92.69L55,162.34a23.85,23.85,0,0,1-7-17V95a32,32,0,1,1,16,0v50.38A8,8,0,0,0,66.34,151L104,188.69V160a8,8,0,0,1,16,0v48a7,7,0,0,1,0,.8c0,.11,0,.21,0,.32s0,.3-.07.46a2.83,2.83,0,0,1-.09.37c0,.13-.06.26-.1.39s-.08.23-.12.35l-.14.39-.15.31c-.06.13-.12.27-.19.4s-.11.18-.16.28l-.24.39-.21.28ZM208,161V110.63a23.85,23.85,0,0,0-7-17L163.31,56H192a8,8,0,0,0,0-16H143.82l-.6,0c-.14,0-.28,0-.41.06l-.37,0-.43.11-.33.08-.4.14-.34.13-.35.16-.36.18a3.14,3.14,0,0,0-.31.18c-.12.07-.25.14-.36.22a3.55,3.55,0,0,0-.31.23,3.81,3.81,0,0,0-.32.24c-.15.12-.28.24-.42.37l-.17.15-.16.18c-.12.13-.25.26-.36.4l-.26.35-.21.28-.24.39c-.05.1-.11.19-.16.28s-.13.27-.19.4l-.15.31-.14.39c0,.12-.09.23-.12.35s-.07.26-.1.39a2.83,2.83,0,0,0-.09.37c0,.16,0,.31-.07.46s0,.21-.05.32a7,7,0,0,0,0,.8V96a8,8,0,0,0,16,0V67.31L189.66,105a8,8,0,0,1,2.34,5.66V161a32,32,0,1,0,16,0Z" }));
});
d.displayName = "Fill";
export {
  d as Fill
};
