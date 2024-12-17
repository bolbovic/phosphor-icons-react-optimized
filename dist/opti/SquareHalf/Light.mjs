var A = Object.defineProperty;
var h = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var V = (e, a, t) => a in e ? A(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, Z = (e, a) => {
  for (var t in a || (a = {}))
    o.call(a, t) && V(e, t, a[t]);
  if (h)
    for (var t of h(a))
      H.call(a, t) && V(e, t, a[t]);
  return e;
};
var i = (e, a) => {
  var t = {};
  for (var m in e)
    o.call(e, m) && a.indexOf(m) < 0 && (t[m] = e[m]);
  if (e != null && h)
    for (var m of h(e))
      a.indexOf(m) < 0 && H.call(e, m) && (t[m] = e[m]);
  return t;
};
import p, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((m, t) => {
  var r = m, { children: e } = r, a = i(r, ["children"]);
  return /* @__PURE__ */ p.createElement(f, Z({ ref: t }, a), e, /* @__PURE__ */ p.createElement("path", { d: "M200,42H56A14,14,0,0,0,42,56V200a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V56A14,14,0,0,0,200,42Zm-66,76h68v20H134Zm0-12V86h68v20Zm0,44h68v20H134Zm68-94V74H134V54h66A2,2,0,0,1,202,56ZM54,200V56a2,2,0,0,1,2-2h66V202H56A2,2,0,0,1,54,200Zm146,2H134V182h68v18A2,2,0,0,1,200,202Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
