var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && A(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && A(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var r in a)
    c.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import Z, { forwardRef as s } from "react";
import M from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var o = r, { children: a } = o, t = l(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(M, p({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M227.74,212.69a6,6,0,0,1-8.42-.94C218,210.05,186,169.17,186,88A58,58,0,0,0,70,88c0,81.17-31.95,122.05-33.31,123.75a6,6,0,0,1-9.38-7.49C27.68,203.79,58,164.56,58,88a70,70,0,0,1,140,0c0,76.63,30.38,115.87,30.69,116.26A6,6,0,0,1,227.74,212.69ZM100,90a10,10,0,1,0,10,10A10,10,0,0,0,100,90Zm66,10a10,10,0,1,0-10,10A10,10,0,0,0,166,100ZM98.69,130.63a6,6,0,0,0-5.37,10.74l32,16A6,6,0,0,0,128,158a6.07,6.07,0,0,0,2.69-.63l32-16a6,6,0,0,0-5.37-10.74L128,145.29ZM128,178a52.07,52.07,0,0,0-45.24,27.08,6,6,0,0,0,10.49,5.84,39.33,39.33,0,0,1,69.51,0A6,6,0,0,0,168,214a5.89,5.89,0,0,0,2.91-.76,6,6,0,0,0,2.33-8.16A52.09,52.09,0,0,0,128,178Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
