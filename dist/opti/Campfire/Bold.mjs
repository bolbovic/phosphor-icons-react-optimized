var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    m.call(t, e) && l(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && l(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var c in a)
    m.call(a, c) && t.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && o)
    for (var c of o(a))
      t.indexOf(c) < 0 && p.call(a, c) && (e[c] = a[c]);
  return e;
};
import f, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const n = s((c, e) => {
  var r = c, { children: a } = r, t = A(r, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, d({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M227.51,227.4A12,12,0,0,1,216,236a12.15,12.15,0,0,1-3.4-.49l-84.6-25-84.6,25A12.15,12.15,0,0,1,40,236a12,12,0,0,1-3.4-23.51L85.65,198,36.6,183.51a12,12,0,0,1,6.8-23l84.6,25,84.6-25a12,12,0,1,1,6.8,23L170.35,198l49.05,14.49A12,12,0,0,1,227.51,227.4ZM64,104c0-50.59,55.93-81.28,58.31-82.57a12,12,0,0,1,11.38,0C136.07,22.72,192,53.41,192,104a64,64,0,0,1-128,0Zm64,40a12,12,0,0,0,12-12c0-6.47-2.71-12.55-8-18.07a41.26,41.26,0,0,0-4-3.57,42.49,42.49,0,0,0-4,3.57c-5.33,5.52-8,11.6-8,18.07A12,12,0,0,0,128,144ZM88,104a39.78,39.78,0,0,0,4.85,19.08c4.81-25,28.66-37.25,29.78-37.81a12,12,0,0,1,10.74,0c1.12.56,25,12.78,29.78,37.81A39.78,39.78,0,0,0,168,104c0-28.34-27.74-49.81-40-57.92C115.75,54.18,88,75.66,88,104Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
