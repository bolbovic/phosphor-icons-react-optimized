var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      l.call(t, e) && i(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && l.call(a, r) && (e[r] = a[r]);
  return e;
};
import h, { forwardRef as V } from "react";
import d from "../../lib/OptiBase.mjs";
const n = V((r, e) => {
  var o = r, { children: a } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ h.createElement(d, c({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M212.44,212,52.44,36A6,6,0,0,0,43.56,44L58,59.92V216a22,22,0,0,0,22,22h96a22,22,0,0,0,22-22v-2.08l5.56,6.12a6,6,0,0,0,8.88-8.08ZM186,216a10,10,0,0,1-10,10H80a10,10,0,0,1-10-10V73.12l116,127.6ZM70.7,24a6,6,0,0,1,6-6H176a22,22,0,0,1,22,22V150.83a6,6,0,1,1-12,0V40a10,10,0,0,0-10-10H76.7A6,6,0,0,1,70.7,24Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
