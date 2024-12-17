var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && c(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && c(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import V, { forwardRef as s } from "react";
import L from "../../lib/OptiBase.mjs";
const Z = s((r, e) => {
  var o = r, { children: a } = o, t = l(o, ["children"]);
  return /* @__PURE__ */ V.createElement(L, A({ ref: e }, t), a, /* @__PURE__ */ V.createElement("path", { d: "M208,50a85.52,85.52,0,0,0-36.17,8c-14.67-25.9-40-38.79-41.15-39.37a6,6,0,0,0-5.36,0C124.18,19.21,98.84,32.1,84.17,58A85.52,85.52,0,0,0,48,50a6,6,0,0,0-6,6V96a86.1,86.1,0,0,0,80,85.77v40.52L82.68,202.63a6,6,0,0,0-5.36,10.74l48,24a6,6,0,0,0,5.36,0l48-24a6,6,0,1,0-5.36-10.74L134,222.29V181.77A86.1,86.1,0,0,0,214,96V56A6,6,0,0,0,208,50ZM128,30.88c6.46,3.84,23.07,15,33.33,32.94A86.5,86.5,0,0,0,128,104.5,86.5,86.5,0,0,0,94.67,63.82C104.93,45.83,121.54,34.71,128,30.88ZM54,96V62.24A74.11,74.11,0,0,1,122,136v33.76A74.1,74.1,0,0,1,54,96Zm148,0a74.1,74.1,0,0,1-68,73.76V136a74.11,74.11,0,0,1,68-73.76Z" }));
});
Z.displayName = "Light";
export {
  Z as Light
};
