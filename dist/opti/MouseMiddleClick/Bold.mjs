var d = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, v = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && h(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && h(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var m in a)
    V.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import H, { forwardRef as l } from "react";
import Z from "../../lib/OptiBase.mjs";
const c = l((m, e) => {
  var r = m, { children: a } = r, t = A(r, ["children"]);
  return /* @__PURE__ */ H.createElement(Z, v({ ref: e }, t), a, /* @__PURE__ */ H.createElement("path", { d: "M144,12H112A68.07,68.07,0,0,0,44,80v96a68.07,68.07,0,0,0,68,68h32a68.07,68.07,0,0,0,68-68V80A68.07,68.07,0,0,0,144,12Zm44,68v20H160V88a20,20,0,0,0-20-20V36h4A44.05,44.05,0,0,1,188,80ZM120,92h16v40H120Zm-8-56h4V68A20,20,0,0,0,96,88v12H68V80A44.05,44.05,0,0,1,112,36Zm32,184H112a44.05,44.05,0,0,1-44-44V124H96v12a20,20,0,0,0,20,20h24a20,20,0,0,0,20-20V124h28v52A44.05,44.05,0,0,1,144,220Z" }));
});
c.displayName = "Bold";
export {
  c as Bold
};
