var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const v = h((m, e) => {
  var l = m, { children: a } = l, t = H(l, ["children"]);
  return /* @__PURE__ */ c.createElement(s, A({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M143.55,136H160v23ZM96,120h16.45L96,97Zm136,8A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-32,0a8,8,0,0,0-8-8H176V72a8,8,0,0,0-16,0v48H132.12L94.51,67.35A8,8,0,0,0,80,72v48H64a8,8,0,0,0,0,16H80v48a8,8,0,0,0,16,0V136h27.88l37.61,52.65A8,8,0,0,0,168,192a7.91,7.91,0,0,0,2.44-.38A8,8,0,0,0,176,184V136h16A8,8,0,0,0,200,128Z" }));
});
v.displayName = "Fill";
export {
  v as Fill
};
