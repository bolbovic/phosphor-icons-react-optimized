var l = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? l(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    c.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const L = s((r, e) => {
  var V = r, { children: a } = V, t = n(V, ["children"]);
  return /* @__PURE__ */ f.createElement(A, p({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M219.79,114.38,204,109.12V56a12,12,0,0,0-12-12H132V24a4,4,0,0,0-8,0V44H64A12,12,0,0,0,52,56v53.12l-15.8,5.26A12,12,0,0,0,28,125.77V152c0,24.46,17.32,46.77,50.09,64.52A233.22,233.22,0,0,0,127,235.88a4,4,0,0,0,1.94,0,233.22,233.22,0,0,0,48.94-19.36C210.68,198.77,228,176.46,228,152V125.77A12,12,0,0,0,219.79,114.38ZM60,56a4,4,0,0,1,4-4H192a4,4,0,0,1,4,4v50.45L129.26,84.21a3.89,3.89,0,0,0-2.52,0L60,106.45Zm160,96c0,49.32-82.08,73.16-92,75.86-9.92-2.7-92-26.54-92-75.86V125.77a4,4,0,0,1,2.73-3.8L124,93.55V168a4,4,0,0,0,8,0V93.55L217.26,122a4,4,0,0,1,2.74,3.8Z" }));
});
L.displayName = "Thin";
export {
  L as Thin
};
