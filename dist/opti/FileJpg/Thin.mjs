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
import n from "../../lib/OptiBase.mjs";
const v = Z((h, e) => {
  var r = h, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ s.createElement(n, i({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M120,148H104a4,4,0,0,0-4,4v56a4,4,0,0,0,8,0V196h12a24,24,0,0,0,0-48Zm0,40H108V156h12a16,16,0,0,1,0,32Zm92-4v16.87a4,4,0,0,1-1.11,2.77A26.11,26.11,0,0,1,192,212c-15.44,0-28-14.36-28-32s12.56-32,28-32a25.41,25.41,0,0,1,14.24,4.43,4,4,0,1,1-4.48,6.63A17.45,17.45,0,0,0,192,156c-11,0-20,10.77-20,24s9,24,20,24a17.87,17.87,0,0,0,12-4.82V188h-4a4,4,0,0,1,0-8h8A4,4,0,0,1,212,184ZM76,152v38a22,22,0,0,1-44,0,4,4,0,0,1,8,0,14,14,0,0,0,28,0V152a4,4,0,0,1,8,0ZM210.83,85.17l-56-56A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40v72a4,4,0,0,0,8,0V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52v20a4,4,0,0,0,8,0V88A4,4,0,0,0,210.83,85.17ZM156,84V41.65L198.34,84Z" }));
});
v.displayName = "Thin";
export {
  v as Thin
};
