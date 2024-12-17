var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var r = (a, e, l) => e in a ? s(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, c = (a, e) => {
  for (var l in e || (e = {}))
    p.call(e, l) && r(a, l, e[l]);
  if (m)
    for (var l of m(e))
      d.call(e, l) && r(a, l, e[l]);
  return a;
};
var f = (a, e) => {
  var l = {};
  for (var t in a)
    p.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      e.indexOf(t) < 0 && d.call(a, t) && (l[t] = a[t]);
  return l;
};
import i, { forwardRef as L } from "react";
import Z from "../../lib/OptiBase.mjs";
const n = L((t, l) => {
  var o = t, { children: a } = o, e = f(o, ["children"]);
  return /* @__PURE__ */ i.createElement(Z, c({ ref: l }, e), a, /* @__PURE__ */ i.createElement("path", { d: "M87.51,64.49a12,12,0,0,1,0-17l32-32a12,12,0,0,1,17,0l32,32a12,12,0,0,1-17,17L140,53V96a12,12,0,0,1-24,0V53L104.49,64.49A12,12,0,0,1,87.51,64.49Zm64,127L140,203V160a12,12,0,0,0-24,0v43l-11.51-11.52a12,12,0,0,0-17,17l32,32a12,12,0,0,0,17,0l32-32a12,12,0,0,0-17-17Zm89-72-32-32a12,12,0,0,0-17,17L203,116H160a12,12,0,0,0,0,24h43l-11.52,11.51a12,12,0,0,0,17,17l32-32A12,12,0,0,0,240.49,119.51ZM53,140H96a12,12,0,0,0,0-24H53l11.52-11.51a12,12,0,1,0-17-17l-32,32a12,12,0,0,0,0,17l32,32a12,12,0,1,0,17-17Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
