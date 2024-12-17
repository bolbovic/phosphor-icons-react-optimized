var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var l = (a, r, e) => r in a ? i(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, L = (a, r) => {
  for (var e in r || (r = {}))
    o.call(r, e) && l(a, e, r[e]);
  if (m)
    for (var e of m(r))
      p.call(r, e) && l(a, e, r[e]);
  return a;
};
var c = (a, r) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import R from "../../lib/OptiBase.mjs";
const V = s((t, e) => {
  var H = t, { children: a } = H, r = c(H, ["children"]);
  return /* @__PURE__ */ f.createElement(R, L({ ref: e }, r), a, /* @__PURE__ */ f.createElement("path", { d: "M170.34,85.66a8,8,0,0,1,11.32-11.32L192,84.69V48a8,8,0,0,1,16,0V84.69l10.34-10.35a8,8,0,0,1,11.32,11.32l-24,24a8,8,0,0,1-11.32,0ZM240,160v40a16,16,0,0,1-16,16H168a8,8,0,0,1-5.88-2.57L68.5,112H32A16,16,0,0,1,16,96V56A16,16,0,0,1,32,40H88a8,8,0,0,1,5.88,2.57L187.5,144H224A16,16,0,0,1,240,160Zm-16,0H184a8,8,0,0,1-5.88-2.57L84.5,56H32V96H72a8,8,0,0,1,5.88,2.57L171.5,200H224Z" }));
});
V.displayName = "Regular";
export {
  V as Regular
};
