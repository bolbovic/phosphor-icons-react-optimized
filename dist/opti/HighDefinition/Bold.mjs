var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && H(a, e, t[e]);
  if (o)
    for (var e of o(t))
      d.call(t, e) && H(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && d.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as h } from "react";
import i from "../../lib/OptiBase.mjs";
const s = h((m, e) => {
  var r = m, { children: a } = r, t = Z(r, ["children"]);
  return /* @__PURE__ */ c.createElement(i, l({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M180,68H156a12,12,0,0,0-12,12v96a12,12,0,0,0,12,12h24a60,60,0,0,0,0-120Zm0,96H168V92h12a36,36,0,0,1,0,72Zm-76,12V140H56v36a12,12,0,0,1-24,0V80a12,12,0,0,1,24,0v36h48V80a12,12,0,0,1,24,0v96a12,12,0,0,1-24,0ZM20,44A12,12,0,0,1,32,32H224a12,12,0,0,1,0,24H32A12,12,0,0,1,20,44ZM236,212a12,12,0,0,1-12,12H32a12,12,0,0,1,0-24H224A12,12,0,0,1,236,212Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
