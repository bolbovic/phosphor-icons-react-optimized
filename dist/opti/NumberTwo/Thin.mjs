var l = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (e, t, a) => t in e ? l(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, c = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && i(e, a, t[a]);
  if (m)
    for (var a of m(t))
      n.call(t, a) && i(e, a, t[a]);
  return e;
};
var f = (e, t) => {
  var a = {};
  for (var r in e)
    p.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && m)
    for (var r of m(e))
      t.indexOf(r) < 0 && n.call(e, r) && (a[r] = e[r]);
  return a;
};
import h, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const A = s((r, a) => {
  var o = r, { children: e } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ h.createElement(d, c({ ref: a }, t), e, /* @__PURE__ */ h.createElement("path", { d: "M172,208a4,4,0,0,1-4,4H88a4,4,0,0,1-3.2-6.4l71.94-95.92A36,36,0,1,0,99.25,66.34,36.62,36.62,0,0,0,95,73.61a4,4,0,0,1-7.33-3.21,44.42,44.42,0,0,1,5.2-8.87,44,44,0,0,1,70.28,53L96,204h72A4,4,0,0,1,172,208Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};
