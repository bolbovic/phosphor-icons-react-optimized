var c = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && l(a, e, t[e]);
  if (H)
    for (var e of H(t))
      i.call(t, e) && l(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && H)
    for (var r of H(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import n, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((r, e) => {
  var m = r, { children: a } = m, t = A(m, ["children"]);
  return /* @__PURE__ */ n.createElement(h, p({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M242.72,122.63l-40-80A11.93,11.93,0,0,0,192,36H64a11.93,11.93,0,0,0-10.73,6.63l-40,80A12,12,0,0,0,24,140H124v72H96a4,4,0,0,0,0,8h64a4,4,0,0,0,0-8H132V140H232a12,12,0,0,0,10.73-17.37Zm-7.33,7.47A3.94,3.94,0,0,1,232,132H24a4,4,0,0,1-3.58-5.79l40-80A4,4,0,0,1,64,44H192a4,4,0,0,1,3.58,2.21l40,80A3.94,3.94,0,0,1,235.39,130.1ZM188,104a4,4,0,0,1-4,4H72a4,4,0,0,1,0-8H184A4,4,0,0,1,188,104Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
