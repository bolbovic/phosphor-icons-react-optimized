var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      l.call(t, e) && i(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && l.call(a, r) && (e[r] = a[r]);
  return e;
};
import h, { forwardRef as A } from "react";
import L from "../../lib/OptiBase.mjs";
const d = A((r, e) => {
  var o = r, { children: a } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ h.createElement(L, c({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M212,138a34.32,34.32,0,0,0-4.89.36L173.69,38.1A6,6,0,0,0,168,34H136a6,6,0,0,0,0,12h27.68l18.24,54.73L125.16,170H77.94a34,34,0,1,0-1.44,12H128a6,6,0,0,0,4.64-2.2l53.76-65.62,9.33,28A34,34,0,1,0,212,138ZM44,194a22,22,0,1,1,22-22A22,22,0,0,1,44,194Zm168,0a22,22,0,1,1,22-22A22,22,0,0,1,212,194Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
