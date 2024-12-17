var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import H, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((r, e) => {
  var V = r, { children: a } = V, t = n(V, ["children"]);
  return /* @__PURE__ */ H.createElement(s, h({ ref: e }, t), a, /* @__PURE__ */ H.createElement("path", { d: "M44,44V212H64a4,4,0,0,1,0,8H40a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4H64a4,4,0,0,1,0,8Zm172-8H192a4,4,0,0,0,0,8h20V212H192a4,4,0,0,0,0,8h24a4,4,0,0,0,4-4V40A4,4,0,0,0,216,36ZM152,92a28,28,0,0,0-24,13.6,28,28,0,0,0-44-5.17V96a4,4,0,0,0-8,0v64a4,4,0,0,0,8,0V120a20,20,0,0,1,40,0v40a4,4,0,0,0,8,0V120a20,20,0,0,1,40,0v40a4,4,0,0,0,8,0V120A28,28,0,0,0,152,92Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
