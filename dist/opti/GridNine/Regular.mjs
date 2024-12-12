var l = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var V = (e, m, a) => m in e ? l(e, m, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[m] = a, h = (e, m) => {
  for (var a in m || (m = {}))
    Z.call(m, a) && V(e, a, m[a]);
  if (t)
    for (var a of t(m))
      o.call(m, a) && V(e, a, m[a]);
  return e;
};
var p = (e, m) => {
  var a = {};
  for (var r in e)
    Z.call(e, r) && m.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && t)
    for (var r of t(e))
      m.indexOf(r) < 0 && o.call(e, r) && (a[r] = e[r]);
  return a;
};
import v, { forwardRef as M } from "react";
import c from "../../lib/OptiBase.mjs";
const f = M((r, a) => {
  var H = r, { children: e } = H, m = p(H, ["children"]);
  return /* @__PURE__ */ v.createElement(c, h({ ref: a }, m), e, /* @__PURE__ */ v.createElement("path", { d: "M216,48H40A16,16,0,0,0,24,64V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48ZM104,144V112h48v32Zm48,16v32H104V160ZM40,112H88v32H40Zm64-16V64h48V96Zm64,16h48v32H168Zm48-16H168V64h48ZM88,64V96H40V64ZM40,160H88v32H40Zm176,32H168V160h48v32Z" }));
});
f.displayName = "Regular";
export {
  f as Regular
};
