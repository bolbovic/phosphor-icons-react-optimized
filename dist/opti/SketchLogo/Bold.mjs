var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (a, l, e) => l in a ? c(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, d = (a, l) => {
  for (var e in l || (l = {}))
    Z.call(l, e) && r(a, e, l[e]);
  if (m)
    for (var e of m(l))
      p.call(l, e) && r(a, e, l[e]);
  return a;
};
var L = (a, l) => {
  var e = {};
  for (var t in a)
    Z.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import M, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((t, e) => {
  var o = t, { children: a } = o, l = L(o, ["children"]);
  return /* @__PURE__ */ M.createElement(i, d({ ref: e }, l), a, /* @__PURE__ */ M.createElement("path", { d: "M249,96.1l-56-64a12,12,0,0,0-9-4.1H72a12,12,0,0,0-9,4.1L7,96.1a12,12,0,0,0,.26,16.09l112,120a12,12,0,0,0,17.54,0l112-120A12,12,0,0,0,249,96.1ZM213.55,92H182L152,52h26.55ZM71.88,116l21.19,53L43.61,116Zm86.4,0L128,191.69,97.72,116ZM104,92l24-32,24,32Zm80.12,24h28.27l-49.46,53ZM77.45,52H104L74,92H42.45Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
