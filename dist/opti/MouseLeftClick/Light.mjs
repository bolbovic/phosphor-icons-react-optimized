var L = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? L(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && h(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && h(a, e, t[e]);
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
import H, { forwardRef as V } from "react";
import c from "../../lib/OptiBase.mjs";
const f = V((m, e) => {
  var o = m, { children: a } = o, t = Z(o, ["children"]);
  return /* @__PURE__ */ H.createElement(c, A({ ref: e }, t), a, /* @__PURE__ */ H.createElement("path", { d: "M144,18H112A62.07,62.07,0,0,0,50,80v96a62.07,62.07,0,0,0,62,62h32a62.07,62.07,0,0,0,62-62V80A62.07,62.07,0,0,0,144,18Zm50,62v26H134V30h10A50.06,50.06,0,0,1,194,80ZM122,30V65.51L91.09,34.6A49.74,49.74,0,0,1,112,30ZM80.62,41.11,122,82.49V106h-7.51L66.9,58.42A50.3,50.3,0,0,1,80.62,41.11ZM62,80a50.17,50.17,0,0,1,.78-8.73L97.51,106H62Zm82,146H112a50.06,50.06,0,0,1-50-50V118H194v58A50.06,50.06,0,0,1,144,226Z" }));
});
f.displayName = "Light";
export {
  f as Light
};
