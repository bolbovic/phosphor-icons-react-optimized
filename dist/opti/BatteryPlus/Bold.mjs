var c = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && p(a, e, t[e]);
  if (o)
    for (var e of o(t))
      d.call(t, e) && p(a, e, t[e]);
  return a;
};
var v = (a, t) => {
  var e = {};
  for (var m in a)
    H.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && d.call(a, m) && (e[m] = a[m]);
  return e;
};
import A, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((m, e) => {
  var r = m, { children: a } = r, t = v(r, ["children"]);
  return /* @__PURE__ */ A.createElement(i, l({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M152,128a12,12,0,0,1-12,12H128v12a12,12,0,0,1-24,0V140H92a12,12,0,0,1,0-24h12V104a12,12,0,0,1,24,0v12h12A12,12,0,0,1,152,128Zm72-48v96a28,28,0,0,1-28,28H28A28,28,0,0,1,0,176V80A28,28,0,0,1,28,52H196A28,28,0,0,1,224,80Zm-24,0a4,4,0,0,0-4-4H28a4,4,0,0,0-4,4v96a4,4,0,0,0,4,4H196a4,4,0,0,0,4-4Zm44,12a12,12,0,0,0-12,12v48a12,12,0,0,0,24,0V104A12,12,0,0,0,244,92Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
