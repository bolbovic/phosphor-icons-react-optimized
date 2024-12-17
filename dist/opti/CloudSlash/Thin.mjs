var h = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      A.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && A.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const l = s((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(d, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M51,37.31A4,4,0,0,0,45,42.69L86.16,87.93q-1.38,2.55-2.59,5.19A60,60,0,1,0,72,212h88a83.19,83.19,0,0,0,32.88-6.69L205,218.69a4,4,0,1,0,5.92-5.38ZM160,204H72a52,52,0,0,1,0-104,52.92,52.92,0,0,1,8.54.72A84.21,84.21,0,0,0,76,128a4,4,0,0,0,8,0,76,76,0,0,1,7.9-33.76L187.13,199A75.37,75.37,0,0,1,160,204Zm84-76a83.86,83.86,0,0,1-21.34,55.94,4,4,0,1,1-6-5.33A76,76,0,0,0,115,66.75a4,4,0,0,1-4.74-6.45A84,84,0,0,1,244,128Z" }));
});
l.displayName = "Thin";
export {
  l as Thin
};
