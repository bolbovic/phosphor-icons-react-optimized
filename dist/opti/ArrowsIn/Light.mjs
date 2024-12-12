var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    L.call(t, e) && H(a, e, t[e]);
  if (r)
    for (var e of r(t))
      V.call(t, e) && H(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    L.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && V.call(a, m) && (e[m] = a[m]);
  return e;
};
import l, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((m, e) => {
  var o = m, { children: a } = o, t = p(o, ["children"]);
  return /* @__PURE__ */ l.createElement(h, i({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M146,104V64a6,6,0,0,1,12,0V89.51l45.76-45.75a6,6,0,0,1,8.48,8.48L166.48,98H192a6,6,0,0,1,0,12H152A6,6,0,0,1,146,104Zm-42,42H64a6,6,0,0,0,0,12H89.52L43.76,203.76a6,6,0,1,0,8.48,8.48L98,166.48V192a6,6,0,0,0,12,0V152A6,6,0,0,0,104,146Zm62.48,12H192a6,6,0,0,0,0-12H152a6,6,0,0,0-6,6v40a6,6,0,0,0,12,0V166.48l45.76,45.76a6,6,0,0,0,8.48-8.48ZM104,58a6,6,0,0,0-6,6V89.51L52.24,43.76a6,6,0,0,0-8.48,8.48L89.52,98H64a6,6,0,0,0,0,12h40a6,6,0,0,0,6-6V64A6,6,0,0,0,104,58Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
