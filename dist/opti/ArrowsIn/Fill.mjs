var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var A = (a, l, e) => l in a ? f(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, i = (a, l) => {
  for (var e in l || (l = {}))
    o.call(l, e) && A(a, e, l[e]);
  if (m)
    for (var e of m(l))
      L.call(l, e) && A(a, e, l[e]);
  return a;
};
var p = (a, l) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      l.indexOf(t) < 0 && L.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = s((t, e) => {
  var r = t, { children: a } = r, l = p(r, ["children"]);
  return /* @__PURE__ */ c.createElement(Z, i({ ref: e }, l), a, /* @__PURE__ */ c.createElement("path", { d: "M144,104V64a8,8,0,0,1,13.66-5.66L172,72.69l30.34-30.35a8,8,0,0,1,11.32,11.32L183.31,84l14.35,14.34A8,8,0,0,1,192,112H152A8,8,0,0,1,144,104Zm-40,40H64a8,8,0,0,0-5.66,13.66L72.69,172,42.34,202.34a8,8,0,0,0,11.32,11.32L84,183.31l14.34,14.35A8,8,0,0,0,112,192V152A8,8,0,0,0,104,144Zm3.06-87.39a8,8,0,0,0-8.72,1.73L84,72.69,53.66,42.34A8,8,0,0,0,42.34,53.66L72.69,84,58.34,98.34A8,8,0,0,0,64,112h40a8,8,0,0,0,8-8V64A8,8,0,0,0,107.06,56.61ZM183.31,172l14.35-14.34A8,8,0,0,0,192,144H152a8,8,0,0,0-8,8v40a8,8,0,0,0,13.66,5.66L172,183.31l30.34,30.35a8,8,0,0,0,11.32-11.32Z" }));
});
d.displayName = "Fill";
export {
  d as Fill
};
