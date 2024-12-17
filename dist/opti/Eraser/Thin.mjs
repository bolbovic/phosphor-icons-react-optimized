var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    l.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as L } from "react";
import d from "../../lib/OptiBase.mjs";
const h = L((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(d, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M222.15,83.22,180.77,41.85a20,20,0,0,0-28.28,0L33.85,160.48a20,20,0,0,0,0,28.29l30.06,30.06A4,4,0,0,0,66.74,220H216a4,4,0,0,0,0-8H121.66L222.15,111.51A20,20,0,0,0,222.15,83.22ZM110.34,212H68.4L39.51,183.11a12,12,0,0,1,0-17L96,109.65,154.35,168ZM216.49,105.85,160,162.34,101.65,104l56.49-56.48a12,12,0,0,1,17,0l41.37,41.37A12,12,0,0,1,216.49,105.85Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
