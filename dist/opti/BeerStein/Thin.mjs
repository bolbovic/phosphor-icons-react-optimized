var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && V(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && V(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as n } from "react";
import f from "../../lib/OptiBase.mjs";
const s = n((m, e) => {
  var H = m, { children: a } = H, t = Z(H, ["children"]);
  return /* @__PURE__ */ c.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M216,92H196V72a36,36,0,0,0-36-36H147.31C136,25.81,120.34,20,104,20,70.92,20,44,43.33,44,72V208a12,12,0,0,0,12,12H184a12,12,0,0,0,12-12V196h20a20,20,0,0,0,20-20V112A20,20,0,0,0,216,92ZM104,28c14.89,0,29.09,5.43,39,14.89A4,4,0,0,0,145.74,44H160a28,28,0,0,1,27.71,24H52.22C54.62,45.61,76.92,28,104,28Zm84,180a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V76H188Zm40-32a12,12,0,0,1-12,12H196V100h20a12,12,0,0,1,12,12ZM100,104v80a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Zm48,0v80a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
