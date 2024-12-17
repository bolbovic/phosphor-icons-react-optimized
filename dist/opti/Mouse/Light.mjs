var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var h = (e, a, t) => a in e ? f(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, A = (e, a) => {
  for (var t in a || (a = {}))
    i.call(a, t) && h(e, t, a[t]);
  if (r)
    for (var t of r(a))
      p.call(a, t) && h(e, t, a[t]);
  return e;
};
var H = (e, a) => {
  var t = {};
  for (var m in e)
    i.call(e, m) && a.indexOf(m) < 0 && (t[m] = e[m]);
  if (e != null && r)
    for (var m of r(e))
      a.indexOf(m) < 0 && p.call(e, m) && (t[m] = e[m]);
  return t;
};
import c, { forwardRef as s } from "react";
import v from "../../lib/OptiBase.mjs";
const V = s((m, t) => {
  var o = m, { children: e } = o, a = H(o, ["children"]);
  return /* @__PURE__ */ c.createElement(v, A({ ref: t }, a), e, /* @__PURE__ */ c.createElement("path", { d: "M144,18H112A62.07,62.07,0,0,0,50,80v96a62.07,62.07,0,0,0,62,62h32a62.07,62.07,0,0,0,62-62V80A62.07,62.07,0,0,0,144,18Zm50,62v26H134V30h10A50.06,50.06,0,0,1,194,80ZM112,30h10v76H62V80A50.06,50.06,0,0,1,112,30Zm32,196H112a50.06,50.06,0,0,1-50-50V118H194v58A50.06,50.06,0,0,1,144,226Z" }));
});
V.displayName = "Light";
export {
  V as Light
};
