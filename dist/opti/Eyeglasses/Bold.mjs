var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && A(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && A(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && d.call(a, o) && (e[o] = a[o]);
  return e;
};
import f, { forwardRef as s } from "react";
import h from "../../lib/OptiBase.mjs";
const n = s((o, e) => {
  var m = o, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(h, l({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M200,36a12,12,0,0,0,0,24,12,12,0,0,1,12,12v50.46A47.94,47.94,0,0,0,142.75,148h-29.5A47.94,47.94,0,0,0,44,122.46V72A12,12,0,0,1,56,60a12,12,0,0,0,0-24A36,36,0,0,0,20,72v92a48,48,0,0,0,95.32,8h25.36A48,48,0,0,0,236,164V72A36,36,0,0,0,200,36ZM68,188a24,24,0,1,1,24-24A24,24,0,0,1,68,188Zm120,0a24,24,0,1,1,24-24A24,24,0,0,1,188,188Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
