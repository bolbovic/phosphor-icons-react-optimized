var n = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && H(a, e, t[e]);
  if (r)
    for (var e of r(t))
      A.call(t, e) && H(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && A.call(a, m) && (e[m] = a[m]);
  return e;
};
import p, { forwardRef as v } from "react";
import M from "../../lib/OptiBase.mjs";
const V = v((m, e) => {
  var h = m, { children: a } = h, t = i(h, ["children"]);
  return /* @__PURE__ */ p.createElement(M, Z({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M108,104a4,4,0,0,1-4,4H92v44a4,4,0,0,1-8,0V108H72a4,4,0,0,1,0-8h32A4,4,0,0,1,108,104ZM228,92.74V152a36,36,0,0,1-35.44,36,60,60,0,0,1-113.13,0H40a12,12,0,0,1-12-12V80A12,12,0,0,1,40,68h62.07a36,36,0,0,1,66.48-27.36,28,28,0,0,1,35,43.36h15.69A8.75,8.75,0,0,1,228,92.74ZM171.23,48.61A36,36,0,0,1,158.64,84H184a20,20,0,1,0-12.77-35.39ZM110.71,68H136a12,12,0,0,1,12,12v1.29A28,28,0,1,0,110.71,68ZM40,180h96a4,4,0,0,0,4-4V80a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4v96A4,4,0,0,0,40,180Zm148-12V96a4,4,0,0,0-4-4H148v84a12,12,0,0,1-12,12H88a52,52,0,0,0,100-20Zm32-75.26a.74.74,0,0,0-.74-.74h-24a11.8,11.8,0,0,1,.7,4v72a60.23,60.23,0,0,1-1.18,11.86A28,28,0,0,0,220,152Z" }));
});
V.displayName = "Thin";
export {
  V as Thin
};
