var V = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var o = (e, a, t) => a in e ? V(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, i = (e, a) => {
  for (var t in a || (a = {}))
    Z.call(a, t) && o(e, t, a[t]);
  if (H)
    for (var t of H(a))
      h.call(a, t) && o(e, t, a[t]);
  return e;
};
var p = (e, a) => {
  var t = {};
  for (var m in e)
    Z.call(e, m) && a.indexOf(m) < 0 && (t[m] = e[m]);
  if (e != null && H)
    for (var m of H(e))
      a.indexOf(m) < 0 && h.call(e, m) && (t[m] = e[m]);
  return t;
};
import v, { forwardRef as A } from "react";
import c from "../../lib/OptiBase.mjs";
const f = A((m, t) => {
  var r = m, { children: e } = r, a = p(r, ["children"]);
  return /* @__PURE__ */ v.createElement(c, i({ ref: t }, a), e, /* @__PURE__ */ v.createElement("path", { d: "M200,42H56A14,14,0,0,0,42,56V200a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V56A14,14,0,0,0,200,42ZM56,54H200a2,2,0,0,1,2,2v66H54V56A2,2,0,0,1,56,54Zm50,80v68H86V134Zm12,0h20v68H118Zm32,0h20v68H150ZM54,200V134H74v68H56A2,2,0,0,1,54,200Zm146,2H182V134h20v66A2,2,0,0,1,200,202Z" }));
});
f.displayName = "Light";
export {
  f as Light
};
