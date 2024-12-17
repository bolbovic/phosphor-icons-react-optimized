var l = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? l(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, o = (a, t) => {
  for (var e in t || (t = {}))
    r.call(t, e) && V(a, e, t[e]);
  if (H)
    for (var e of H(t))
      Z.call(t, e) && V(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var m in a)
    r.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && H)
    for (var m of H(a))
      t.indexOf(m) < 0 && Z.call(a, m) && (e[m] = a[m]);
  return e;
};
import i, { forwardRef as p } from "react";
import v from "../../lib/OptiBase.mjs";
const L = p((m, e) => {
  var h = m, { children: a } = h, t = A(h, ["children"]);
  return /* @__PURE__ */ i.createElement(v, o({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M200,26H72A14,14,0,0,0,58,40V66H40A14,14,0,0,0,26,80v96a14,14,0,0,0,14,14H58v26a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V40A14,14,0,0,0,200,26Zm-42,76h44v52H158Zm44-62V90H158V80a14,14,0,0,0-14-14h-2V38h58A2,2,0,0,1,202,40ZM70,40a2,2,0,0,1,2-2h58V66H70ZM38,176V80a2,2,0,0,1,2-2H144a2,2,0,0,1,2,2v96a2,2,0,0,1-2,2H40A2,2,0,0,1,38,176Zm32,40V190h60v28H72A2,2,0,0,1,70,216Zm130,2H142V190h2a14,14,0,0,0,14-14V166h44v50A2,2,0,0,1,200,218ZM67.39,148.16,84.19,128l-16.8-20.16a6,6,0,1,1,9.22-7.68L92,118.63l15.39-18.47a6,6,0,0,1,9.22,7.68L99.81,128l16.8,20.16a6,6,0,1,1-9.22,7.68L92,137.37,76.61,155.84a6,6,0,0,1-9.22-7.68Z" }));
});
L.displayName = "Light";
export {
  L as Light
};
