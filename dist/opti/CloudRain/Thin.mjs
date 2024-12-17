var h = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      l.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && l.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(A, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M155.33,194.22l-32,48a4,4,0,1,1-6.66-4.44l32-48a4,4,0,0,1,6.66,4.44ZM228,92a72.08,72.08,0,0,1-72,72H130.14L99.33,210.22a4,4,0,1,1-6.66-4.44L120.53,164H76A48,48,0,1,1,87.51,69.39,72.08,72.08,0,0,1,228,92Zm-8,0A64.06,64.06,0,0,0,92,88.23a4,4,0,0,1-8-.46,71.63,71.63,0,0,1,1.42-10.65A40,40,0,1,0,76,156h80A64.07,64.07,0,0,0,220,92Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
