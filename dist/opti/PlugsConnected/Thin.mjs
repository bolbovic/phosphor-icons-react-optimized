var n = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var r = (a, e, l) => e in a ? n(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, Z = (a, e) => {
  for (var l in e || (e = {}))
    A.call(e, l) && r(a, l, e[l]);
  if (t)
    for (var l of t(e))
      o.call(e, l) && r(a, l, e[l]);
  return a;
};
var i = (a, e) => {
  var l = {};
  for (var m in a)
    A.call(a, m) && e.indexOf(m) < 0 && (l[m] = a[m]);
  if (a != null && t)
    for (var m of t(a))
      e.indexOf(m) < 0 && o.call(a, m) && (l[m] = a[m]);
  return l;
};
import p, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((m, l) => {
  var L = m, { children: a } = L, e = i(L, ["children"]);
  return /* @__PURE__ */ p.createElement(f, Z({ ref: l }, e), a, /* @__PURE__ */ p.createElement("path", { d: "M234.83,21.17a4,4,0,0,0-5.66,0L173.94,76.4l-8.2-8.2a28,28,0,0,0-39.6,0L100,94.34l-9.17-9.17a4,4,0,0,0-5.66,5.66L94.34,100,68.2,126.14a28,28,0,0,0,0,39.6l8.2,8.2L21.17,229.17a4,4,0,0,0,5.66,5.66L82.06,179.6l8.2,8.2a28,28,0,0,0,39.6,0L156,161.66l9.17,9.17a4,4,0,0,0,5.66-5.66L161.66,156l26.14-26.14a28,28,0,0,0,0-39.6l-8.2-8.2,55.23-55.23A4,4,0,0,0,234.83,21.17Zm-110.63,161a20,20,0,0,1-28.28,0L73.86,160.08a20,20,0,0,1,0-28.28L100,105.66,150.34,156Zm57.94-57.94L156,150.34,105.66,100,131.8,73.86a20,20,0,0,1,28.28,0l22.06,22.06A20,20,0,0,1,182.14,124.2ZM92.29,33.49a4,4,0,1,1,7.42-3l8,20a4,4,0,0,1-2.22,5.2A3.91,3.91,0,0,1,104,56a4,4,0,0,1-3.71-2.51Zm-64,61a4,4,0,0,1,5.2-2.22l20,8A4,4,0,0,1,52,108a3.91,3.91,0,0,1-1.49-.29l-20-8A4,4,0,0,1,28.29,94.51Zm199.42,67A4,4,0,0,1,224,164a3.91,3.91,0,0,1-1.49-.29l-20-8a4,4,0,1,1,3-7.42l20,8A4,4,0,0,1,227.71,161.49Zm-64,61a4,4,0,0,1-2.22,5.2A3.91,3.91,0,0,1,160,228a4,4,0,0,1-3.71-2.51l-8-20a4,4,0,0,1,7.42-3Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};