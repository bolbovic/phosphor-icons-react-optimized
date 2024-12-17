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
import H from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var o = r, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ c.createElement(H, l({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M138.83,130.83l-40,40a4,4,0,0,1-5.66-5.66L126.34,132H24a4,4,0,0,1,0-8H126.34L93.17,90.83a4,4,0,0,1,5.66-5.66l40,40A4,4,0,0,1,138.83,130.83ZM200,36H136a4,4,0,0,0,0,8h60V212H136a4,4,0,0,0,0,8h64a4,4,0,0,0,4-4V40A4,4,0,0,0,200,36Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
