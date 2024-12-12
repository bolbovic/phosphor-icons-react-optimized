var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && h(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && h(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import H from "../../lib/OptiBase.mjs";
const M = s((r, e) => {
  var o = r, { children: a } = o, t = Z(o, ["children"]);
  return /* @__PURE__ */ c.createElement(H, n({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M152,36H72a4,4,0,0,0-4,4V168a76.08,76.08,0,0,0,76,76,4,4,0,0,0,4-4V172h4a68,68,0,0,0,0-136ZM76,55.27,137.16,164H76Zm64,97.46L78.84,44H140ZM76.13,172H140v63.88A68.1,68.1,0,0,1,76.13,172ZM152,164h-4V44h4a60,60,0,0,1,0,120Z" }));
});
M.displayName = "Thin";
export {
  M as Thin
};
