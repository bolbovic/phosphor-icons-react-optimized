var A = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && V(a, e, t[e]);
  if (m)
    for (var e of m(t))
      c.call(t, e) && V(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var h in a)
    o.call(a, h) && t.indexOf(h) < 0 && (e[h] = a[h]);
  if (a != null && m)
    for (var h of m(a))
      t.indexOf(h) < 0 && c.call(a, h) && (e[h] = a[h]);
  return e;
};
import s, { forwardRef as Z } from "react";
import v from "../../lib/OptiBase.mjs";
const f = Z((h, e) => {
  var r = h, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ s.createElement(v, i({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M120,146H104a6,6,0,0,0-6,6v56a6,6,0,0,0,12,0V198h10a26,26,0,0,0,0-52Zm0,40H110V158h10a14,14,0,0,1,0,28Zm94-2v16.87a6,6,0,0,1-1.67,4.15A28.06,28.06,0,0,1,192,214c-16.54,0-30-15.25-30-34s13.46-34,30-34a27.43,27.43,0,0,1,15.36,4.77,6,6,0,0,1-6.72,9.95A15.25,15.25,0,0,0,192,158c-9.93,0-18,9.87-18,22s8.07,22,18,22a15.75,15.75,0,0,0,10-3.73V190h-2a6,6,0,0,1,0-12h8A6,6,0,0,1,214,184ZM78,152v38a24,24,0,0,1-48,0,6,6,0,0,1,12,0,12,12,0,0,0,24,0V152a6,6,0,0,1,12,0ZM212.24,83.76l-56-56A6,6,0,0,0,152,26H56A14,14,0,0,0,42,40v72a6,6,0,0,0,12,0V40a2,2,0,0,1,2-2h90V88a6,6,0,0,0,6,6h50v18a6,6,0,0,0,12,0V88A6,6,0,0,0,212.24,83.76ZM158,82V46.48L193.52,82Z" }));
});
f.displayName = "Light";
export {
  f as Light
};
