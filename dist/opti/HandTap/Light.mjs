var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && c(a, e, t[e]);
  if (m)
    for (var e of m(t))
      l.call(t, e) && c(a, e, t[e]);
  return a;
};
var v = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && l.call(a, r) && (e[r] = a[r]);
  return e;
};
import A, { forwardRef as s } from "react";
import V from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var o = r, { children: a } = o, t = v(o, ["children"]);
  return /* @__PURE__ */ A.createElement(V, p({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M58,76a58,58,0,0,1,116,0,6,6,0,0,1-12,0,46,46,0,0,0-92,0,6,6,0,0,1-12,0Zm138,46a25.87,25.87,0,0,0-14.59,4.49A26,26,0,0,0,142,110.1V76a26,26,0,0,0-52,0v87l-7.53-12.1a26,26,0,0,0-45,26.13l29.32,50A6,6,0,0,0,77.16,221L47.87,171a14,14,0,0,1,24.25-14,1,1,0,0,0,.1.17l18.68,30A6,6,0,0,0,102,184V76a14,14,0,0,1,28,0v68a6,6,0,0,0,12,0V132a14,14,0,0,1,28,0v20a6,6,0,0,0,12,0v-4a14,14,0,0,1,28,0v36c0,22.13-7.3,37.18-7.37,37.32a6,6,0,0,0,2.69,8A5.83,5.83,0,0,0,208,230a6,6,0,0,0,5.38-3.32c.35-.7,8.63-17.55,8.63-42.68V148A26,26,0,0,0,196,122Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
