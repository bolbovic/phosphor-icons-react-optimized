var h = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      l.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && l.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as s } from "react";
import L from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(L, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M216,36H168a4,4,0,0,0,0,8h38.34L168,82.35,146.83,61.18a4,4,0,1,0-5.66,5.65L162.34,88l-21.17,21.18a68.16,68.16,0,1,0,5.65,5.66L168,93.67l21.17,21.17a4,4,0,1,0,5.66-5.66L173.66,88,212,49.66V88a4,4,0,0,0,8,0V40A4,4,0,0,0,216,36ZM138.43,202.45A60,60,0,1,1,156,160,60.07,60.07,0,0,1,138.43,202.45Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
