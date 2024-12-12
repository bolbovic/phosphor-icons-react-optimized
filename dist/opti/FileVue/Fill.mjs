var v = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? v(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var l in a)
    A.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && i.call(a, l) && (e[l] = a[l]);
  return e;
};
import h, { forwardRef as V } from "react";
import Z from "../../lib/OptiBase.mjs";
const f = V((l, e) => {
  var m = l, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ h.createElement(Z, p({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M213.66,82.34l-56-56A8,8,0,0,0,152,24h-96a16,16,0,0,0-16,16v76a4,4,0,0,0,4,4H212a4,4,0,0,0,4-4V88A8,8,0,0,0,213.66,82.34ZM152,88V44l44,44ZM87.36,155,67.47,210.69a8,8,0,0,1-15.08,0L32.5,155A8.21,8.21,0,0,1,37,144.55a8,8,0,0,1,10.46,4.76l12.47,34.9,12.47-34.9a8,8,0,0,1,10.46-4.76A8.22,8.22,0,0,1,87.36,155ZM184,160v12h15.73a8.19,8.19,0,0,1,8.26,7.47,8,8,0,0,1-8,8.53H184v12h23.73a8.18,8.18,0,0,1,8.26,7.47,8,8,0,0,1-8,8.53H176a8,8,0,0,1-8-8V152a8,8,0,0,1,8-8h31.74a8.18,8.18,0,0,1,8.26,7.47,8,8,0,0,1-8,8.53Zm-32-8v37.45c0,14.14-11.07,26.12-25.22,26.54A26,26,0,0,1,100,190V152.27a8.18,8.18,0,0,1,7.47-8.25,8,8,0,0,1,8.54,8v37.65A10.23,10.23,0,0,0,125.27,200,10,10,0,0,0,136,190V152.27a8.18,8.18,0,0,1,7.47-8.25A8,8,0,0,1,152,152Z" }));
});
f.displayName = "Fill";
export {
  f as Fill
};
