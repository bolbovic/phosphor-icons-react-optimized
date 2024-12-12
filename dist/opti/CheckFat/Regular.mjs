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
import s, { forwardRef as d } from "react";
import n from "../../lib/OptiBase.mjs";
const L = d((r, e) => {
  var m = r, { children: a } = m, l = i(m, ["children"]);
  return /* @__PURE__ */ s.createElement(n, f({ ref: e }, l), a, /* @__PURE__ */ s.createElement("path", { d: "M243.28,68.24l-24-23.56a16,16,0,0,0-22.59,0L104,136.23l-36.69-35.6a16,16,0,0,0-22.58.05l-24,24a16,16,0,0,0,0,22.61l71.62,72a16,16,0,0,0,22.63,0L243.33,90.91A16,16,0,0,0,243.28,68.24ZM103.62,208,32,136l24-24a.6.6,0,0,1,.08.08l42.35,41.09a8,8,0,0,0,11.19,0L208.06,56,232,79.6Z" }));
});
L.displayName = "Regular";
export {
  L as Regular
};
