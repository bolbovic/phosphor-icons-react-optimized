var V = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? V(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, f = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      c.call(t, e) && i(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && c.call(a, r) && (e[r] = a[r]);
  return e;
};
import H, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const l = d((r, e) => {
  var o = r, { children: a } = o, t = s(o, ["children"]);
  return /* @__PURE__ */ H.createElement(h, f({ ref: e }, t), a, /* @__PURE__ */ H.createElement("path", { d: "M230,172a34,34,0,0,1-68,0V70H94V200a6,6,0,0,1-12,0V70H72a42,42,0,0,0-42,42,6,6,0,0,1-12,0A54.06,54.06,0,0,1,72,58H224a6,6,0,0,1,0,12H174V172a22,22,0,0,0,44,0,6,6,0,0,1,12,0Z" }));
});
l.displayName = "Light";
export {
  l as Light
};
