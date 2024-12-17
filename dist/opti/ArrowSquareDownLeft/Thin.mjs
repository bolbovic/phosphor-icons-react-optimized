var l = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? l(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      H.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && H.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as s } from "react";
import V from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(V, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36Zm4,172a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4ZM162.83,93.17a4,4,0,0,1,0,5.66L105.66,156H144a4,4,0,0,1,0,8H96a4,4,0,0,1-4-4V112a4,4,0,0,1,8,0v38.34l57.17-57.17A4,4,0,0,1,162.83,93.17Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
