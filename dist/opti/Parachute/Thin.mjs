var l = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var Z = (e, t, a) => t in e ? l(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, p = (e, t) => {
  for (var a in t || (t = {}))
    c.call(t, a) && Z(e, a, t[a]);
  if (r)
    for (var a of r(t))
      i.call(t, a) && Z(e, a, t[a]);
  return e;
};
var H = (e, t) => {
  var a = {};
  for (var m in e)
    c.call(e, m) && t.indexOf(m) < 0 && (a[m] = e[m]);
  if (e != null && r)
    for (var m of r(e))
      t.indexOf(m) < 0 && i.call(e, m) && (a[m] = e[m]);
  return a;
};
import h, { forwardRef as n } from "react";
import A from "../../lib/OptiBase.mjs";
const f = n((m, a) => {
  var o = m, { children: e } = o, t = H(o, ["children"]);
  return /* @__PURE__ */ h.createElement(A, p({ ref: a }, t), e, /* @__PURE__ */ h.createElement("path", { d: "M228,120a100,100,0,0,0-200,0,4,4,0,0,0,1.3,2.94,2.81,2.81,0,0,0,.3.26L124,194v26H112a4,4,0,0,0,0,8h32a4,4,0,0,0,0-8H132V194l94.4-70.8h0A4,4,0,0,0,228,120Zm-8.09-4H172C171,67.38,152.13,40.86,140,28.79A92.14,92.14,0,0,1,219.91,116ZM128,28.89A76.67,76.67,0,0,1,145,47.64c8.36,12.69,18.27,34.71,19,68.36H92.05c.73-33.65,10.64-55.67,19-68.36A76.47,76.47,0,0,1,128,28.89ZM161.2,124,128,183.76,94.8,124Zm-75.55,0,29.74,53.54L44,124Zm84.7,0H212l-71.39,53.54ZM116,28.79C103.87,40.86,85,67.38,84,116H36.09A92.14,92.14,0,0,1,116,28.79Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
