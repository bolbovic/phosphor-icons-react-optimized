var p = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, v = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? p(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && r(a, e, t[e]);
  if (H)
    for (var e of H(t))
      v.call(t, e) && r(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && H)
    for (var m of H(a))
      t.indexOf(m) < 0 && v.call(a, m) && (e[m] = a[m]);
  return e;
};
import i, { forwardRef as V } from "react";
import n from "../../lib/OptiBase.mjs";
const c = V((m, e) => {
  var h = m, { children: a } = h, t = Z(h, ["children"]);
  return /* @__PURE__ */ i.createElement(n, A({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M220,152a4,4,0,0,1-4,4H188v24h20a4,4,0,0,1,0,8H188v20a4,4,0,0,1-8,0V152a4,4,0,0,1,4-4h32A4,4,0,0,1,220,152ZM88,172a24,24,0,0,1-24,24H52v12a4,4,0,0,1-8,0V152a4,4,0,0,1,4-4H64A24,24,0,0,1,88,172Zm-8,0a16,16,0,0,0-16-16H52v32H64A16,16,0,0,0,80,172Zm80,8a32,32,0,0,1-32,32H112a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4h16A32,32,0,0,1,160,180Zm-8,0a24,24,0,0,0-24-24H116v48h12A24,24,0,0,0,152,180ZM44,112V40A12,12,0,0,1,56,28h96a4,4,0,0,1,2.83,1.17l56,56A4,4,0,0,1,212,88v24a4,4,0,0,1-8,0V92H152a4,4,0,0,1-4-4V36H56a4,4,0,0,0-4,4v72a4,4,0,0,1-8,0ZM156,84h42.34L156,41.65Z" }));
});
c.displayName = "Thin";
export {
  c as Thin
};
