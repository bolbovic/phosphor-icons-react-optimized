var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import h, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const M = f((l, e) => {
  var m = l, { children: a } = m, t = H(m, ["children"]);
  return /* @__PURE__ */ h.createElement(s, A({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM190,69.27,145.63,120H176a8,8,0,0,1,0,16H131.63l-28.76,32.87A47.72,47.72,0,0,0,128,176h48a8,8,0,0,1,0,16H128a63.62,63.62,0,0,1-35.78-11L78,197.27a8,8,0,0,1-12-10.54l14.21-16.24A64,64,0,0,1,128,64h45.37L178,58.73a8,8,0,1,1,12,10.54ZM128,80h31.37l-35,40H80.68A48.07,48.07,0,0,1,128,80ZM80.68,136h29.69L90.84,158.32A47.78,47.78,0,0,1,80.68,136Z" }));
});
M.displayName = "Fill";
export {
  M as Fill
};
