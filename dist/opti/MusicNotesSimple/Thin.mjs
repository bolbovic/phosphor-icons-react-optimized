var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var i = (e, t, a) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, l = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && i(e, a, t[a]);
  if (m)
    for (var a of m(t))
      A.call(t, a) && i(e, a, t[a]);
  return e;
};
var n = (e, t) => {
  var a = {};
  for (var r in e)
    p.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && m)
    for (var r of m(e))
      t.indexOf(r) < 0 && A.call(e, r) && (a[r] = e[r]);
  return a;
};
import c, { forwardRef as s } from "react";
import V from "../../lib/OptiBase.mjs";
const d = s((r, a) => {
  var o = r, { children: e } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ c.createElement(V, l({ ref: a }, t), e, /* @__PURE__ */ c.createElement("path", { d: "M210.46,20.85a4,4,0,0,0-3.43-.73l-128,32A4,4,0,0,0,76,56V174.87A32,32,0,1,0,84,196V59.12l120-30V142.87A32,32,0,1,0,212,164V24A4,4,0,0,0,210.46,20.85ZM52,220a24,24,0,1,1,24-24A24,24,0,0,1,52,220Zm128-32a24,24,0,1,1,24-24A24,24,0,0,1,180,188Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
