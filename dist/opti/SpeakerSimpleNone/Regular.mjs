var A = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var l = (e, r, a) => r in e ? A(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, f = (e, r) => {
  for (var a in r || (r = {}))
    p.call(r, a) && l(e, a, r[a]);
  if (m)
    for (var a of m(r))
      c.call(r, a) && l(e, a, r[a]);
  return e;
};
var i = (e, r) => {
  var a = {};
  for (var t in e)
    p.call(e, t) && r.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && m)
    for (var t of m(e))
      r.indexOf(t) < 0 && c.call(e, t) && (a[t] = e[t]);
  return a;
};
import s, { forwardRef as H } from "react";
import R from "../../lib/OptiBase.mjs";
const d = H((t, a) => {
  var o = t, { children: e } = o, r = i(o, ["children"]);
  return /* @__PURE__ */ s.createElement(R, f({ ref: a }, r), e, /* @__PURE__ */ s.createElement("path", { d: "M163.51,24.81a8,8,0,0,0-8.42.88L85.25,80H40A16,16,0,0,0,24,96v64a16,16,0,0,0,16,16H85.25l69.84,54.31A8,8,0,0,0,168,224V32A8,8,0,0,0,163.51,24.81ZM152,207.64,92.91,161.69A7.94,7.94,0,0,0,88,160H40V96H88a7.94,7.94,0,0,0,4.91-1.69L152,48.36Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};
