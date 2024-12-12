var A = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      h.call(t, e) && o(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var r in a)
    H.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && h.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const v = f((r, e) => {
  var V = r, { children: a } = V, t = p(V, ["children"]);
  return /* @__PURE__ */ c.createElement(s, i({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M200,42H160a14,14,0,0,0-14,14v88a18,18,0,0,1-36,0V56A14,14,0,0,0,96,42H56A14,14,0,0,0,42,56v88a86,86,0,0,0,86,86h.65c47.06-.35,85.35-39.38,85.35-87V56A14,14,0,0,0,200,42ZM160,54h40a2,2,0,0,1,2,2V90H158V56A2,2,0,0,1,160,54ZM56,54H96a2,2,0,0,1,2,2V90H54V56A2,2,0,0,1,56,54Zm72.56,164H128a74,74,0,0,1-74-74V102H98v42a30,30,0,0,0,60,0V102h44v41C202,184.05,169.06,217.7,128.56,218Z" }));
});
v.displayName = "Light";
export {
  v as Light
};
