var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      s.call(t, e) && m(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && s.call(a, o) && (e[o] = a[o]);
  return e;
};
import f, { forwardRef as n } from "react";
import A from "../../lib/OptiBase.mjs";
const B = n((o, e) => {
  var c = o, { children: a } = c, t = l(c, ["children"]);
  return /* @__PURE__ */ f.createElement(A, d({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M228,128a12,12,0,0,1-12,12H185.86A41.48,41.48,0,0,1,196,168c0,14.45-7.81,28.32-21.43,38.05C162,215.05,145.44,220,128,220s-34-4.95-46.57-13.95C67.81,196.32,60,182.45,60,168a12,12,0,0,1,24,0c0,15.18,20.15,28,44,28s44-12.82,44-28c0-12.76-9.3-20.18-35.35-28H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM75.11,100a12,12,0,0,0,12-12c0-16,17.58-28,40.89-28,17.36,0,31.37,6.65,37.48,17.78a12,12,0,0,0,21-11.56C176.13,47.3,154.25,36,128,36,91,36,63.11,58.35,63.11,88A12,12,0,0,0,75.11,100Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
