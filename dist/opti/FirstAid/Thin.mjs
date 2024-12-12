var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && V(a, e, t[e]);
  if (m)
    for (var e of m(t))
      o.call(t, e) && V(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var r in a)
    h.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && o.call(a, r) && (e[r] = a[r]);
  return e;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((r, e) => {
  var H = r, { children: a } = H, t = p(H, ["children"]);
  return /* @__PURE__ */ n.createElement(s, i({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M216,92H164V40a12,12,0,0,0-12-12H104A12,12,0,0,0,92,40V92H40a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12H92v52a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V164h52a12,12,0,0,0,12-12V104A12,12,0,0,0,216,92Zm4,60a4,4,0,0,1-4,4H160a4,4,0,0,0-4,4v56a4,4,0,0,1-4,4H104a4,4,0,0,1-4-4V160a4,4,0,0,0-4-4H40a4,4,0,0,1-4-4V104a4,4,0,0,1,4-4H96a4,4,0,0,0,4-4V40a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4V96a4,4,0,0,0,4,4h56a4,4,0,0,1,4,4Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
