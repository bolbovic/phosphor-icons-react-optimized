var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      h.call(t, e) && i(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && h.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import V from "../../lib/OptiBase.mjs";
const Z = s((r, e) => {
  var o = r, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ c.createElement(V, l({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M198.71,57.29A100,100,0,1,0,57.29,198.71,100,100,0,1,0,198.71,57.29ZM92,212.7V152a4,4,0,0,1,4-4h64a4,4,0,0,1,4,4v60.7a92.42,92.42,0,0,1-72,0ZM148,140H108V98.47l40-20Zm45.05,53.05A92,92,0,0,1,172,208.83V152a12,12,0,0,0-12-12h-4V72a4,4,0,0,0-5.79-3.58l-48,24A4,4,0,0,0,100,96v44H96a12,12,0,0,0-12,12v56.83a92,92,0,1,1,109.05-15.78Z" }));
});
Z.displayName = "Thin";
export {
  Z as Thin
};
