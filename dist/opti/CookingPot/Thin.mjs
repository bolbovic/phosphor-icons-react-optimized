var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as l } from "react";
import s from "../../lib/OptiBase.mjs";
const H = l((m, e) => {
  var V = m, { children: a } = V, t = Z(V, ["children"]);
  return /* @__PURE__ */ c.createElement(s, n({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M92,48V16a4,4,0,0,1,8,0V48a4,4,0,0,1-8,0Zm36,4a4,4,0,0,0,4-4V16a4,4,0,0,0-8,0V48A4,4,0,0,0,128,52Zm32,0a4,4,0,0,0,4-4V16a4,4,0,0,0-8,0V48A4,4,0,0,0,160,52Zm90.4,47.2L220,122v62a28,28,0,0,1-28,28H64a28,28,0,0,1-28-28V122L5.6,99.2a4,4,0,0,1,4.8-6.4L36,112V80a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4v32l25.6-19.2a4,4,0,1,1,4.8,6.4ZM212,84H44V184a20,20,0,0,0,20,20H192a20,20,0,0,0,20-20Z" }));
});
H.displayName = "Thin";
export {
  H as Thin
};
