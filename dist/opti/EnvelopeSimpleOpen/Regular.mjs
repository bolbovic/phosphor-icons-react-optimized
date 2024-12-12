var R = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? R(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, f = (a, l) => {
  for (var e in l || (l = {}))
    p.call(l, e) && o(a, e, l[e]);
  if (t)
    for (var e of t(l))
      c.call(l, e) && o(a, e, l[e]);
  return a;
};
var i = (a, l) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && l.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      l.indexOf(r) < 0 && c.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as V } from "react";
import d from "../../lib/OptiBase.mjs";
const n = V((r, e) => {
  var m = r, { children: a } = m, l = i(m, ["children"]);
  return /* @__PURE__ */ s.createElement(d, f({ ref: e }, l), a, /* @__PURE__ */ s.createElement("path", { d: "M228.44,89.34l-96-64a8,8,0,0,0-8.88,0l-96,64A8,8,0,0,0,24,96V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V96A8,8,0,0,0,228.44,89.34ZM128,41.61l81.91,54.61-67,47.78H113.11l-67-47.78ZM40,200V111.53l65.9,47a8,8,0,0,0,4.65,1.49h34.9a8,8,0,0,0,4.65-1.49l65.9-47V200Z" }));
});
n.displayName = "Regular";
export {
  n as Regular
};
