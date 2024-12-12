var i = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, v = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && r(a, e, t[e]);
  if (H)
    for (var e of H(t))
      v.call(t, e) && r(a, e, t[e]);
  return a;
};
var o = (a, t) => {
  var e = {};
  for (var m in a)
    h.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && H)
    for (var m of H(a))
      t.indexOf(m) < 0 && v.call(a, m) && (e[m] = a[m]);
  return e;
};
import A, { forwardRef as p } from "react";
import c from "../../lib/OptiBase.mjs";
const f = p((m, e) => {
  var V = m, { children: a } = V, t = o(V, ["children"]);
  return /* @__PURE__ */ A.createElement(c, Z({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M184,42H72A54.06,54.06,0,0,0,18,96v96a14,14,0,0,0,14,14H224a14,14,0,0,0,14-14V96A54.06,54.06,0,0,0,184,42Zm42,54v10H190V54.44A42.05,42.05,0,0,1,226,96Zm-88,42H118V102h20Zm-26,12h32a6,6,0,0,0,6-6V118h28v76H78V118h28v26A6,6,0,0,0,112,150Zm38-44V96a6,6,0,0,0-6-6H112a6,6,0,0,0-6,6v10H78V54H178v52ZM66,54.44V106H30V96A42.05,42.05,0,0,1,66,54.44ZM30,192V118H66v76H32A2,2,0,0,1,30,192Zm194,2H190V118h36v74A2,2,0,0,1,224,194Z" }));
});
f.displayName = "Light";
export {
  f as Light
};
