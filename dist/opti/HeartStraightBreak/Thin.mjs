var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import f, { forwardRef as L } from "react";
import d from "../../lib/OptiBase.mjs";
const h = L((l, e) => {
  var m = l, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(d, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M220.21,59.8a54.06,54.06,0,0,0-76.34,0L128,75,112.18,59.8a54,54,0,0,0-76.4,76.35l89.37,90.66a4,4,0,0,0,5.7,0l89.36-90.64A54.07,54.07,0,0,0,220.21,59.8Zm-5.68,70.74L128,218.3,41.45,130.52a46,46,0,0,1,65.13-65l15.65,15.07-13,12.52A4,4,0,0,0,108,96a4,4,0,0,0,1.17,2.86L138.35,128l-13.18,13.17a4,4,0,1,0,5.66,5.66l16-16a4,4,0,0,0,0-5.66L117.71,96l31.77-30.58a46,46,0,1,1,65.05,65.08Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
