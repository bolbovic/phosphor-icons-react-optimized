var M = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (e, t, a) => t in e ? M(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, H = (e, t) => {
  for (var a in t || (t = {}))
    Z.call(t, a) && r(e, a, t[a]);
  if (m)
    for (var a of m(t))
      p.call(t, a) && r(e, a, t[a]);
  return e;
};
var d = (e, t) => {
  var a = {};
  for (var l in e)
    Z.call(e, l) && t.indexOf(l) < 0 && (a[l] = e[l]);
  if (e != null && m)
    for (var l of m(e))
      t.indexOf(l) < 0 && p.call(e, l) && (a[l] = e[l]);
  return a;
};
import L, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const h = c((l, a) => {
  var o = l, { children: e } = o, t = d(o, ["children"]);
  return /* @__PURE__ */ L.createElement(f, H({ ref: a }, t), e, /* @__PURE__ */ L.createElement("path", { d: "M241,141.65,172.59,29.51l-.07-.11a19.85,19.85,0,0,0-17-9.4H100.44a19.85,19.85,0,0,0-17,9.4l-.07.11L15,141.65a20,20,0,0,0-.36,20.46L42,209.92A20,20,0,0,0,59.33,220H196.67A20,20,0,0,0,214,209.92l27.32-47.81A20,20,0,0,0,241,141.65ZM211.88,140H174.79L142,85.33l18.12-30.19ZM54.8,184,43.36,164H66.81Zm40-20h66.4l19.2,32H75.6Zm14.4-24L128,108.66,146.8,140Zm80,24h23.45L201.2,184ZM128,62,117.19,44h21.62ZM95.89,55.14,114,85.33,81.21,140H44.12Z" }));
});
h.displayName = "Bold";
export {
  h as Bold
};
