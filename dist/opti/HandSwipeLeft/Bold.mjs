var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && m(a, e, t[e]);
  if (o)
    for (var e of o(t))
      c.call(t, e) && m(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var l in a)
    A.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && o)
    for (var l of o(a))
      t.indexOf(l) < 0 && c.call(a, l) && (e[l] = a[l]);
  return e;
};
import v, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const V = i((l, e) => {
  var r = l, { children: a } = r, t = d(r, ["children"]);
  return /* @__PURE__ */ v.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ v.createElement("path", { d: "M256,56a12,12,0,0,1-12,12H201l11.51,11.51a12,12,0,1,1-17,17l-32-32a12,12,0,0,1,0-17l32-32a12,12,0,1,1,17,17L201,44h43A12,12,0,0,1,256,56Zm-68,60a31.86,31.86,0,0,0-11.22,2A32,32,0,0,0,140,101V76a32,32,0,0,0-64,0v66.83A32,32,0,0,0,24.28,180l.12.2,25.31,42A12,12,0,0,0,70.27,209.8L45,167.92A8,8,0,0,1,58.92,160l.21.34,18.68,30A12,12,0,0,0,100,184V76a8,8,0,0,1,16,0v68a12,12,0,0,0,24,0V132a8,8,0,0,1,16,0v20a12,12,0,0,0,24,0v-4a8,8,0,0,1,16,0v36c0,11.08-1.28,21.67-3.42,28.32a12,12,0,1,0,22.84,7.36c3-9.16,4.58-21.83,4.58-35.68V148A32,32,0,0,0,188,116Z" }));
});
V.displayName = "Bold";
export {
  V as Bold
};
