var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && i(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    l.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const H = s((r, e) => {
  var o = r, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ c.createElement(d, h({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M177.66,188l25.17-25.17a4,4,0,0,0-5.66-5.66L172,182.34,121.66,132H124a48,48,0,0,0,0-96H72a4,4,0,0,0-4,4V192a4,4,0,0,0,8,0V132h34.34l56,56-25.17,25.17a4,4,0,0,0,5.66,5.66L172,193.66l25.17,25.17a4,4,0,0,0,5.66-5.66ZM76,44h48a40,40,0,0,1,0,80H76Z" }));
});
H.displayName = "Thin";
export {
  H as Thin
};
