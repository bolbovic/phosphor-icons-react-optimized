var A = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && l(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && l(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var H in a)
    o.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && m)
    for (var H of m(a))
      t.indexOf(H) < 0 && i.call(a, H) && (e[H] = a[H]);
  return e;
};
import n, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const h = c((H, e) => {
  var r = H, { children: a } = r, t = Z(r, ["children"]);
  return /* @__PURE__ */ n.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M224,156H129.05l-94-110.59A4,4,0,1,0,29,50.59L162.56,207.77A12,12,0,0,0,171.7,212H224a12,12,0,0,0,12-12V168A12,12,0,0,0,224,156Zm-55.35,46.59L135.85,164H196v40H171.7A4,4,0,0,1,168.65,202.59ZM228,200a4,4,0,0,1-4,4H204V164h20a4,4,0,0,1,4,4ZM104,183.06l-16.6,19.53a4,4,0,0,1-3,1.41H60V164H85.2a4,4,0,0,0,0-8H32a12,12,0,0,0-12,12v32a12,12,0,0,0,12,12H84.3a12,12,0,0,0,9.14-4.23l16.61-19.53a4,4,0,0,0-6.1-5.18ZM28,200V168a4,4,0,0,1,4-4H52v40H32A4,4,0,0,1,28,200Zm125.41-68.95a4,4,0,0,1-.46-5.64l68-80a4,4,0,1,1,6.1,5.18l-68,80a4,4,0,0,1-5.64.46Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
