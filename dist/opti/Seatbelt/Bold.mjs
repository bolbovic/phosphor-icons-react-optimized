var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && m(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && d.call(a, o) && (e[o] = a[o]);
  return e;
};
import i, { forwardRef as n } from "react";
import B from "../../lib/OptiBase.mjs";
const Z = n((o, e) => {
  var l = o, { children: a } = l, t = f(l, ["children"]);
  return /* @__PURE__ */ i.createElement(B, c({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M200,212H89.45l110.18-90.74a12,12,0,1,0-15.26-18.52l-17.78,14.64a83.34,83.34,0,0,0-17-6.55,48,48,0,1,0-43.26,0,83.9,83.9,0,0,0-58,54.49,12,12,0,0,0,22.76,7.62,60.05,60.05,0,0,1,74.54-38.3l-97.26,80.1A12,12,0,0,0,56,236H200a12,12,0,0,0,0-24ZM128,44a24,24,0,1,1-24,24A24,24,0,0,1,128,44Zm76.61,113.51a83.58,83.58,0,0,1,6.88,25.17,12,12,0,0,1-23.86,2.64,59.16,59.16,0,0,0-4.9-17.95,12,12,0,0,1,21.88-9.86Z" }));
});
Z.displayName = "Bold";
export {
  Z as Bold
};
