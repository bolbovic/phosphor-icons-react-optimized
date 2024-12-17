var l = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var A = (e, a, t) => a in e ? l(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, p = (e, a) => {
  for (var t in a || (a = {}))
    h.call(a, t) && A(e, t, a[t]);
  if (r)
    for (var t of r(a))
      i.call(a, t) && A(e, t, a[t]);
  return e;
};
var H = (e, a) => {
  var t = {};
  for (var m in e)
    h.call(e, m) && a.indexOf(m) < 0 && (t[m] = e[m]);
  if (e != null && r)
    for (var m of r(e))
      a.indexOf(m) < 0 && i.call(e, m) && (t[m] = e[m]);
  return t;
};
import Z, { forwardRef as V } from "react";
import c from "../../lib/OptiBase.mjs";
const f = V((m, t) => {
  var o = m, { children: e } = o, a = H(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(c, p({ ref: t }, a), e, /* @__PURE__ */ Z.createElement("path", { d: "M144,18H112A62.07,62.07,0,0,0,50,80v96a62.07,62.07,0,0,0,62,62h32a62.07,62.07,0,0,0,62-62V80A62.07,62.07,0,0,0,144,18Zm50,62v26H158.49l34.73-34.73A50.17,50.17,0,0,1,194,80Zm-4.9-21.58L141.51,106H134V82.49l41.38-41.38A50.3,50.3,0,0,1,189.1,58.42ZM164.91,34.6,134,65.51V30h10A49.74,49.74,0,0,1,164.91,34.6ZM112,30h10v76H62V80A50.06,50.06,0,0,1,112,30Zm32,196H112a50.06,50.06,0,0,1-50-50V118H194v58A50.06,50.06,0,0,1,144,226Z" }));
});
f.displayName = "Light";
export {
  f as Light
};
