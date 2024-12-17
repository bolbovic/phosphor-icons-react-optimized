var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, L = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    l.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const n = d((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(h, L({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M247.59,116.35,159.41,60.18a14,14,0,0,0-14.22-.46A13.83,13.83,0,0,0,138,71.84v41L55.41,60.18a14,14,0,0,0-14.22-.46A13.83,13.83,0,0,0,34,71.84V184.16a13.83,13.83,0,0,0,7.19,12.12,14,14,0,0,0,14.22-.46L138,143.21v40.95a13.83,13.83,0,0,0,7.19,12.12,14,14,0,0,0,14.22-.46l88.18-56.17a13.79,13.79,0,0,0,0-23.3ZM137.15,129.53,49,185.69a1.9,1.9,0,0,1-2,.06,1.73,1.73,0,0,1-1-1.59V71.84a1.73,1.73,0,0,1,1-1.59,2,2,0,0,1,1-.26,1.87,1.87,0,0,1,1,.32l88.19,56.16a1.8,1.8,0,0,1,0,3.06Zm104,0L153,185.69a1.9,1.9,0,0,1-2,.06,1.73,1.73,0,0,1-1-1.59V71.84a1.73,1.73,0,0,1,1-1.59,2,2,0,0,1,1-.26,1.87,1.87,0,0,1,1,.32l88.19,56.16a1.8,1.8,0,0,1,0,3.06Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
