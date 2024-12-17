var i = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    m.call(t, e) && r(a, e, t[e]);
  if (l)
    for (var e of l(t))
      p.call(t, e) && r(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var c in a)
    m.call(a, c) && t.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && l)
    for (var c of l(a))
      t.indexOf(c) < 0 && p.call(a, c) && (e[c] = a[c]);
  return e;
};
import f, { forwardRef as n } from "react";
import A from "../../lib/OptiBase.mjs";
const B = n((c, e) => {
  var o = c, { children: a } = o, t = s(o, ["children"]);
  return /* @__PURE__ */ f.createElement(A, d({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M238.15,78.54,177.46,17.86a20,20,0,0,0-28.3,0L97.2,70c-12.43-3.33-36.68-5.72-61.74,14.5a20,20,0,0,0-1.6,29.73l45.46,45.47-39.8,39.8a12,12,0,0,0,17,17l39.8-39.81,45.47,45.46A20,20,0,0,0,155.91,228c.46,0,.93,0,1.4-.05A20,20,0,0,0,171.87,220c4.69-6.23,11-16.13,14.44-28s3.45-22.88.16-33.4l51.7-51.87A20,20,0,0,0,238.15,78.54Zm-74.26,68.79a12,12,0,0,0-2.23,13.84c3.43,6.86,6.9,21-6.28,40.65L54.08,100.53c21.09-14.59,39.53-6.64,41-6a11.67,11.67,0,0,0,13.81-2.29l54.43-54.61,55,55Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
