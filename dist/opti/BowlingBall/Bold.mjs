var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (a, m, e) => m in a ? f(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, A = (a, m) => {
  for (var e in m || (m = {}))
    d.call(m, e) && p(a, e, m[e]);
  if (o)
    for (var e of o(m))
      l.call(m, e) && p(a, e, m[e]);
  return a;
};
var Z = (a, m) => {
  var e = {};
  for (var t in a)
    d.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      m.indexOf(t) < 0 && l.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((t, e) => {
  var r = t, { children: a } = r, m = Z(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, A({ ref: e }, m), a, /* @__PURE__ */ c.createElement("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm16-84a16,16,0,1,1-16-16A16,16,0,0,1,144,128Zm16-16a16,16,0,1,1,16-16A16,16,0,0,1,160,112Zm32,24a16,16,0,1,1-16-16A16,16,0,0,1,192,136Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
