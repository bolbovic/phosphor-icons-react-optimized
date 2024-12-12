var Z = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, t, a) => t in e ? Z(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, f = (e, t) => {
  for (var a in t || (t = {}))
    l.call(t, a) && o(e, a, t[a]);
  if (c)
    for (var a of c(t))
      p.call(t, a) && o(e, a, t[a]);
  return e;
};
var s = (e, t) => {
  var a = {};
  for (var r in e)
    l.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && c)
    for (var r of c(e))
      t.indexOf(r) < 0 && p.call(e, r) && (a[r] = e[r]);
  return a;
};
import A, { forwardRef as d } from "react";
import i from "../../lib/OptiBase.mjs";
const M = d((r, a) => {
  var m = r, { children: e } = m, t = s(m, ["children"]);
  return /* @__PURE__ */ A.createElement(i, f({ ref: a }, t), e, /* @__PURE__ */ A.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm88,104c0,6-17,16.23-48.77,21.17.51-7,.77-14.08.77-21.17,0-32.24-5.35-64.72-15.74-84.6A88.17,88.17,0,0,1,216,128ZM128,40c8.15,0,24,31.06,24,88,0,8.24-.34,15.92-.93,23.07-7.15.59-14.83.93-23.07.93-56.94,0-88-15.85-88-24A88.1,88.1,0,0,1,128,40ZM43.4,152.26C63.28,162.65,95.76,168,128,168c7.09,0,14.19-.26,21.17-.77C144.23,199,134,216,128,216A88.17,88.17,0,0,1,43.4,152.26ZM152.26,212.6c6.29-12,10.73-28.67,13.26-47.08,18.41-2.53,35-7,47.08-13.26A88.4,88.4,0,0,1,152.26,212.6Z" }));
});
M.displayName = "Regular";
export {
  M as Regular,
  M as default
};
