var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (e, a, t) => a in e ? s(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, p = (e, a) => {
  for (var t in a || (a = {}))
    h.call(a, t) && o(e, t, a[t]);
  if (r)
    for (var t of r(a))
      i.call(a, t) && o(e, t, a[t]);
  return e;
};
var Z = (e, a) => {
  var t = {};
  for (var m in e)
    h.call(e, m) && a.indexOf(m) < 0 && (t[m] = e[m]);
  if (e != null && r)
    for (var m of r(e))
      a.indexOf(m) < 0 && i.call(e, m) && (t[m] = e[m]);
  return t;
};
import f, { forwardRef as v } from "react";
import A from "../../lib/OptiBase.mjs";
const H = v((m, t) => {
  var c = m, { children: e } = c, a = Z(c, ["children"]);
  return /* @__PURE__ */ f.createElement(A, p({ ref: t }, a), e, /* @__PURE__ */ f.createElement("path", { d: "M208,42H48A14,14,0,0,0,34,56v56c0,51.94,25.12,83.4,46.2,100.64,22.73,18.6,45.27,24.89,46.22,25.15a6,6,0,0,0,3.16,0c.95-.26,23.49-6.55,46.22-25.15C196.88,195.4,222,163.94,222,112V56A14,14,0,0,0,208,42Zm2,14v56c0,3.39-.12,6.72-.34,10H134V54h74A2,2,0,0,1,210,56ZM46,56a2,2,0,0,1,2-2h74v68H46.34c-.22-3.28-.34-6.61-.34-10Zm1.71,78H122v89.52a133.13,133.13,0,0,1-34.56-20.46C65.5,185,52.2,161.8,47.71,134Zm120.85,69.06A133.13,133.13,0,0,1,134,223.52V134h74.29C203.8,161.8,190.5,185,168.56,203.06Z" }));
});
H.displayName = "Light";
export {
  H as Light
};
