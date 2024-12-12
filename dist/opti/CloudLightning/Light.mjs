var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && i(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var r in a)
    l.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const n = s((r, e) => {
  var o = r, { children: a } = o, t = h(o, ["children"]);
  return /* @__PURE__ */ c.createElement(d, A({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M156,18A74.21,74.21,0,0,0,86.11,67.3a6.18,6.18,0,0,0-1.83-.62A50.83,50.83,0,0,0,76,66a50,50,0,0,0,0,100h41.4L98.85,196.91A6,6,0,0,0,104,206h29.4l-18.55,30.91a6,6,0,0,0,10.3,6.18l24-40A6,6,0,0,0,144,194H114.6l16.8-28H156a74,74,0,0,0,0-148Zm0,136H76a38,38,0,1,1,6.31-75.48,6.82,6.82,0,0,0,.79.08A72.86,72.86,0,0,0,82,87.65a6,6,0,0,0,12,.7A62.06,62.06,0,1,1,156,154Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
