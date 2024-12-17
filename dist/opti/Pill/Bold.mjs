var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && r(a, e, t[e]);
  if (m)
    for (var e of m(t))
      d.call(t, e) && r(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var l in a)
    p.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && d.call(a, l) && (e[l] = a[l]);
  return e;
};
import i, { forwardRef as L } from "react";
import Z from "../../lib/OptiBase.mjs";
const n = L((l, e) => {
  var o = l, { children: a } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ i.createElement(Z, c({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M219.26,36.77a57.28,57.28,0,0,0-81,0L36.77,138.26a57.26,57.26,0,0,0,81,81L219.26,117.74A57.33,57.33,0,0,0,219.26,36.77ZM100.78,202.26a33.26,33.26,0,1,1-47-47L96,113l47,47Zm101.5-101.49L160,143,113,96l42.27-42.26a33.26,33.26,0,0,1,47,47Zm-9.77-25.26a12,12,0,0,1,0,17l-24,24a12,12,0,1,1-17-17l24-24A12,12,0,0,1,192.51,75.51Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
