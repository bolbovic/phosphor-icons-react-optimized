var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      L.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && L.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const n = d((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(h, l({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M134,98.27V58.6l30.91,18.54a6,6,0,1,0,6.18-10.28L139.66,48l31.43-18.85a6,6,0,1,0-6.18-10.29L128,41,91.09,18.86a6,6,0,1,0-6.18,10.29L116.34,48,84.91,66.86a6,6,0,1,0,6.18,10.28L122,58.6V98.27a70,70,0,1,0,12,0ZM128,226a58,58,0,1,1,58-58A58.07,58.07,0,0,1,128,226Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
