var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as l } from "react";
import s from "../../lib/OptiBase.mjs";
const H = l((m, e) => {
  var A = m, { children: a } = A, t = c(A, ["children"]);
  return /* @__PURE__ */ f.createElement(s, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M244,128a4,4,0,0,1-4,4H211.9a83.08,83.08,0,0,1-7.24,30.38,4,4,0,0,1-3.65,2.37,3.94,3.94,0,0,1-1.63-.36,4,4,0,0,1-2-5.28A76.06,76.06,0,0,0,103.62,56a4,4,0,1,1-2.56-7.57A83.56,83.56,0,0,1,124,44.1V16a4,4,0,0,1,8,0V44.1A84.11,84.11,0,0,1,211.9,124H240A4,4,0,0,1,244,128Zm-33,85.31a4,4,0,1,1-5.92,5.38l-23.56-25.91A83.81,83.81,0,0,1,132,211.9V240a4,4,0,0,1-8,0V211.9A84.11,84.11,0,0,1,44.1,132H16a4,4,0,0,1,0-8H44.1A84.24,84.24,0,0,1,68.6,68.61L45,42.69A4,4,0,0,1,51,37.31L184.77,184.5h0Zm-34.87-26.47L74,74.53a76,76,0,0,0,102.1,112.31Z" }));
});
H.displayName = "Thin";
export {
  H as Thin
};
