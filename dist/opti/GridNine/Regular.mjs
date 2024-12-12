var v = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var V = (e, m, a) => m in e ? v(e, m, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[m] = a, h = (e, m) => {
  for (var a in m || (m = {}))
    Z.call(m, a) && V(e, a, m[a]);
  if (r)
    for (var a of r(m))
      o.call(m, a) && V(e, a, m[a]);
  return e;
};
var l = (e, m) => {
  var a = {};
  for (var t in e)
    Z.call(e, t) && m.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && r)
    for (var t of r(e))
      m.indexOf(t) < 0 && o.call(e, t) && (a[t] = e[t]);
  return a;
};
import p, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const M = f((t, a) => {
  var H = t, { children: e } = H, m = l(H, ["children"]);
  return /* @__PURE__ */ p.createElement(s, h({ ref: a }, m), e, /* @__PURE__ */ p.createElement("path", { d: "M216,48H40A16,16,0,0,0,24,64V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48ZM104,144V112h48v32Zm48,16v32H104V160ZM40,112H88v32H40Zm64-16V64h48V96Zm64,16h48v32H168Zm48-16H168V64h48ZM88,64V96H40V64ZM40,160H88v32H40Zm176,32H168V160h48v32Z" }));
});
M.displayName = "Regular";
export {
  M as Regular,
  M as default
};
