var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    L.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var l in a)
    L.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && i.call(a, l) && (e[l] = a[l]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((l, e) => {
  var m = l, { children: a } = m, t = n(m, ["children"]);
  return /* @__PURE__ */ c.createElement(d, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M51,37.31A4,4,0,0,0,45,42.69L86.77,88.6,45.08,133.27a4,4,0,0,0,1.52,6.47l60.81,22.81L92.08,239.22a4,4,0,0,0,6.84,3.51l64.83-69.46L205,218.69a4,4,0,1,0,5.92-5.38ZM102.68,227l13.24-66.2a4,4,0,0,0-2.52-4.53L55,134.36,92.17,94.54l66.18,72.79Zm8.71-158.9a4,4,0,0,1-.2-5.65l45.89-49.16a4,4,0,0,1,6.84,3.51L148.59,93.45l60.81,22.8a4,4,0,0,1,2.49,2.84,4,4,0,0,1-1,3.64l-22.3,23.89a4,4,0,0,1-5.85-5.45L201,121.64,142.6,99.74a4,4,0,0,1-2.52-4.52L153.32,29,117,67.89A4,4,0,0,1,111.39,68.08Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
