var Z = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && r(a, e, t[e]);
  if (V)
    for (var e of V(t))
      o.call(t, e) && r(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    H.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && V)
    for (var m of V(a))
      t.indexOf(m) < 0 && o.call(a, m) && (e[m] = a[m]);
  return e;
};
import A, { forwardRef as n } from "react";
import c from "../../lib/OptiBase.mjs";
const f = n((m, e) => {
  var h = m, { children: a } = h, t = p(h, ["children"]);
  return /* @__PURE__ */ A.createElement(c, i({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M164,44.17V32a20,20,0,0,0-20-20H112A20,20,0,0,0,92,32V44.17A52.05,52.05,0,0,0,44,96V216a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V96A52.05,52.05,0,0,0,164,44.17ZM112,20h32a12,12,0,0,1,12,12V44H100V32A12,12,0,0,1,112,20Zm60,144H84V152a12,12,0,0,1,12-12h64a12,12,0,0,1,12,12Zm-88,8h56v12a4,4,0,0,0,8,0V172h24v48H84Zm120,44a4,4,0,0,1-4,4H180V152a20,20,0,0,0-20-20H96a20,20,0,0,0-20,20v68H56a4,4,0,0,1-4-4V96A44.05,44.05,0,0,1,96,52h64a44.05,44.05,0,0,1,44,44ZM148,88a4,4,0,0,1-4,4H112a4,4,0,0,1,0-8h32A4,4,0,0,1,148,88Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};