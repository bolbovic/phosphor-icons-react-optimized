var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var L = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && L(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && L(a, e, t[e]);
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
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((r, e) => {
  var o = r, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ c.createElement(d, l({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M202.84,186.83a18.61,18.61,0,0,0,0,26.34,4,4,0,0,1-5.66,5.66,26.63,26.63,0,0,1,0-37.66l9.38-9.37a18.63,18.63,0,1,0-26.35-26.34L113.45,212.2a26.63,26.63,0,0,1-37.66-37.66L174.55,75.8A18.63,18.63,0,1,0,148.2,49.46L81.45,116.2A26.63,26.63,0,0,1,43.79,78.54L85.17,37.17a4,4,0,1,1,5.65,5.66L49.44,84.2a18.63,18.63,0,1,0,26.35,26.34L142.55,43.8a26.63,26.63,0,0,1,37.66,37.66L81.45,180.2a18.63,18.63,0,1,0,26.35,26.34l66.75-66.74a26.63,26.63,0,0,1,37.66,37.66Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
