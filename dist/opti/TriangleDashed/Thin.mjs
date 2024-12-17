var n = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import h, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((l, e) => {
  var r = l, { children: a } = r, t = Z(r, ["children"]);
  return /* @__PURE__ */ h.createElement(f, A({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M156,216a4,4,0,0,1-4,4H104a4,4,0,0,1,0-8h48A4,4,0,0,1,156,216Zm77.34-25.91L228.68,182a4,4,0,1,0-6.93,4l4.65,8.08a11.45,11.45,0,0,1,0,11.72,12.47,12.47,0,0,1-10.94,6.2H192a4,4,0,0,0,0,8h23.46a20.36,20.36,0,0,0,17.86-10.2A19.52,19.52,0,0,0,233.34,190.09ZM64,212H40.54a12.47,12.47,0,0,1-10.94-6.2,11.45,11.45,0,0,1,0-11.72L34.25,186a4,4,0,1,0-6.93-4l-4.66,8.09a19.52,19.52,0,0,0,0,19.71A20.36,20.36,0,0,0,40.54,220H64a4,4,0,0,0,0-8Zm138.18-64a4,4,0,0,0,3.47-6l-23-40a4,4,0,1,0-6.93,4l23,40A4,4,0,0,0,202.18,148ZM145.88,38.22a20.75,20.75,0,0,0-35.76,0L96.42,62a4,4,0,1,0,6.94,4l13.69-23.79a12.76,12.76,0,0,1,21.9,0L152.64,66a4,4,0,0,0,6.94-4Zm-67,62.31A4,4,0,0,0,73.39,102l-23,40a4,4,0,0,0,6.94,4l23-40A4,4,0,0,0,78.85,100.53Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
