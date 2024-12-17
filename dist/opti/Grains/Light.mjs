var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && c(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && c(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as M } from "react";
import V from "../../lib/OptiBase.mjs";
const d = M((m, e) => {
  var o = m, { children: a } = o, t = Z(o, ["children"]);
  return /* @__PURE__ */ f.createElement(V, A({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M208,58a85.48,85.48,0,0,0-32.84,6.53C161.45,34.31,132,19.3,130.68,18.63a6,6,0,0,0-5.36,0c-1.33.67-30.77,15.68-44.48,45.9A85.51,85.51,0,0,0,48,58a6,6,0,0,0-6,6v80a86,86,0,0,0,172,0V64A6,6,0,0,0,208,58ZM122,217.76A74.1,74.1,0,0,1,54,144V126.24A74.1,74.1,0,0,1,122,200Zm0-61.51a86.1,86.1,0,0,0-68-42v-44A74.11,74.11,0,0,1,122,144ZM91.58,69.91c9.66-21.6,29.27-34.78,36.42-39,7.16,4.25,26.76,17.43,36.41,39A86.5,86.5,0,0,0,128,112.5,86.47,86.47,0,0,0,91.58,69.91ZM202,144a74.1,74.1,0,0,1-68,73.76V200a74.1,74.1,0,0,1,68-73.76Zm0-29.77a86.1,86.1,0,0,0-68,42V144a74.11,74.11,0,0,1,68-73.76Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
