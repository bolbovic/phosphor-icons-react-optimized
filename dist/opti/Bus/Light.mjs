var p = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? p(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, v = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && r(a, e, t[e]);
  if (H)
    for (var e of H(t))
      o.call(t, e) && r(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var m in a)
    V.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && H)
    for (var m of H(a))
      t.indexOf(m) < 0 && o.call(a, m) && (e[m] = a[m]);
  return e;
};
import i, { forwardRef as A } from "react";
import M from "../../lib/OptiBase.mjs";
const c = A((m, e) => {
  var Z = m, { children: a } = Z, t = h(Z, ["children"]);
  return /* @__PURE__ */ i.createElement(M, v({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M184,34H72A30,30,0,0,0,42,64V208a14,14,0,0,0,14,14H80a14,14,0,0,0,14-14V190h68v18a14,14,0,0,0,14,14h24a14,14,0,0,0,14-14V64A30,30,0,0,0,184,34ZM54,178V118H202v60ZM54,78H202v28H54ZM72,46H184a18,18,0,0,1,18,18v2H54V64A18,18,0,0,1,72,46ZM82,208a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V190H82Zm118,2H176a2,2,0,0,1-2-2V190h28v18A2,2,0,0,1,200,210Zm-98-62a10,10,0,1,1-10-10A10,10,0,0,1,102,148Zm72,0a10,10,0,1,1-10-10A10,10,0,0,1,174,148Zm72-68v24a6,6,0,0,1-12,0V80a6,6,0,0,1,12,0ZM22,80v24a6,6,0,0,1-12,0V80a6,6,0,0,1,12,0Z" }));
});
c.displayName = "Light";
export {
  c as Light
};
