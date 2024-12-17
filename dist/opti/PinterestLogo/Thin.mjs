var s = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, t, a) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, l = (e, t) => {
  for (var a in t || (t = {}))
    i.call(t, a) && o(e, a, t[a]);
  if (c)
    for (var a of c(t))
      p.call(t, a) && o(e, a, t[a]);
  return e;
};
var n = (e, t) => {
  var a = {};
  for (var r in e)
    i.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && c)
    for (var r of c(e))
      t.indexOf(r) < 0 && p.call(e, r) && (a[r] = e[r]);
  return a;
};
import f, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const A = d((r, a) => {
  var m = r, { children: e } = m, t = n(m, ["children"]);
  return /* @__PURE__ */ f.createElement(h, l({ ref: a }, t), e, /* @__PURE__ */ f.createElement("path", { d: "M220,112c0,21.53-7.5,41.18-21.12,55.34C186.26,180.47,169.17,188,152,188c-21.35,0-33.52-8.76-39.76-15.57L99.89,224.92A4,4,0,0,1,96,228a4.2,4.2,0,0,1-.92-.11,4,4,0,0,1-3-4.81l32-136a4,4,0,0,1,7.78,1.84l-17.28,73.45C117,166.42,127,180,152,180c29.49,0,60-25.44,60-68A76,76,0,1,0,70.17,150a4,4,0,0,1-6.93,4A84,84,0,1,1,220,112Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};
