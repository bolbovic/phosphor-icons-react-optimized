var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && l(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && l(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as L } from "react";
import f from "../../lib/OptiBase.mjs";
const s = L((m, e) => {
  var c = m, { children: a } = c, t = A(c, ["children"]);
  return /* @__PURE__ */ Z.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M220.24,172.24,200.49,192l19.75,19.76a6,6,0,1,1-8.48,8.48L192,200.49l-19.76,19.75a6,6,0,0,1-8.48-8.48L183.51,192l-19.75-19.76a6,6,0,0,1,8.48-8.48L192,183.51l19.76-19.75a6,6,0,0,1,8.48,8.48ZM230,128a6,6,0,0,1-6,6H94.13a128.29,128.29,0,0,0,18.68,62.37c9.35,15.11,18.85,22.88,18.95,22.95A6,6,0,0,1,128,230h0A102,102,0,1,1,230,128ZM143.46,39.33c11.95,14.44,28.89,41.9,30.43,82.67H217.8A90.19,90.19,0,0,0,143.46,39.33Zm-30.65,20.3A128.29,128.29,0,0,0,94.13,122h67.74a128.29,128.29,0,0,0-18.68-62.37A109.19,109.19,0,0,0,128,40.18,109.19,109.19,0,0,0,112.81,59.63ZM38.2,122H82.11c1.54-40.77,18.48-68.23,30.43-82.67A90.19,90.19,0,0,0,38.2,122Zm43.91,12H38.2a90.19,90.19,0,0,0,74.34,82.67C100.59,202.23,83.65,174.77,82.11,134Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
