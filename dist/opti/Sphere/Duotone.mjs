var M = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var p = (e, a, t) => a in e ? M(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, Z = (e, a) => {
  for (var t in a || (a = {}))
    n.call(a, t) && p(e, t, a[t]);
  if (c)
    for (var t of c(a))
      A.call(a, t) && p(e, t, a[t]);
  return e;
};
var i = (e, a) => {
  var t = {};
  for (var o in e)
    n.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && c)
    for (var o of c(e))
      a.indexOf(o) < 0 && A.call(e, o) && (t[o] = e[o]);
  return t;
};
import r, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const l = d((o, t) => {
  var m = o, { children: e } = m, a = i(m, ["children"]);
  return /* @__PURE__ */ r.createElement(f, Z({ ref: t }, a), e, /* @__PURE__ */ r.createElement("path", { d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z", opacity: "0.2" }), /* @__PURE__ */ r.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm88,104c0,6-17,16.23-48.77,21.17.51-7,.77-14.08.77-21.17,0-32.24-5.35-64.72-15.74-84.6A88.17,88.17,0,0,1,216,128ZM128,40c8.15,0,24,31.06,24,88,0,8.24-.34,15.92-.93,23.07-7.15.59-14.83.93-23.07.93-56.94,0-88-15.85-88-24A88.1,88.1,0,0,1,128,40ZM43.4,152.26C63.28,162.65,95.76,168,128,168c7.09,0,14.19-.26,21.17-.77C144.23,199,134,216,128,216A88.17,88.17,0,0,1,43.4,152.26ZM152.26,212.6c6.29-12,10.73-28.67,13.26-47.08,18.41-2.53,35-7,47.08-13.26A88.4,88.4,0,0,1,152.26,212.6Z" }));
});
l.displayName = "Duotone";
export {
  l as Duotone
};
