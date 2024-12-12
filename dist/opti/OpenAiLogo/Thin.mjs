var n = Object.defineProperty;
var A = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var r = (a, m, e) => m in a ? n(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, o = (a, m) => {
  for (var e in m || (m = {}))
    L.call(m, e) && r(a, e, m[e]);
  if (A)
    for (var e of A(m))
      Z.call(m, e) && r(a, e, m[e]);
  return a;
};
var i = (a, m) => {
  var e = {};
  for (var t in a)
    L.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && A)
    for (var t of A(a))
      m.indexOf(t) < 0 && Z.call(a, t) && (e[t] = a[t]);
  return e;
};
import p, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((t, e) => {
  var l = t, { children: a } = l, m = i(l, ["children"]);
  return /* @__PURE__ */ p.createElement(f, o({ ref: e }, m), a, /* @__PURE__ */ p.createElement("path", { d: "M219.68,114.91A52,52,0,0,0,162.49,42,52,52,0,0,0,70.82,55.15a52,52,0,0,0-34.5,85.94A52,52,0,0,0,70,213.16,52.33,52.33,0,0,0,83.59,215a51.66,51.66,0,0,0,9.93-1,52,52,0,0,0,91.66-13.13,52,52,0,0,0,34.5-85.94Zm-35.8-64.34a44,44,0,0,1,29.66,58.36,51.84,51.84,0,0,0-7-4.89L162,78.35a4,4,0,0,0-4,0l-50,28.87V79.5L150.5,55A43.69,43.69,0,0,1,183.88,50.57Zm-35.88,89-20,11.54-20-11.54v-23.1l20-11.54,20,11.54ZM76,72a44,44,0,0,1,78.25-27.62A52.08,52.08,0,0,0,146.5,48L102,73.73a4,4,0,0,0-2,3.46v57.74L76,121.07ZM37.4,84.93A43.72,43.72,0,0,1,68.71,63.46,52.26,52.26,0,0,0,68,72v51.38a4,4,0,0,0,2,3.46l50,28.87L96,169.57,53.5,145A44,44,0,0,1,37.4,84.93Zm34.72,120.5a44,44,0,0,1-29.66-58.36,51.84,51.84,0,0,0,7,4.89L94,177.65a4,4,0,0,0,4,0l50-28.87V176.5L105.5,201A43.69,43.69,0,0,1,72.12,205.43ZM180,184a44,44,0,0,1-78.26,27.61A51.66,51.66,0,0,0,109.5,208L154,182.27a4,4,0,0,0,2-3.46V121.07l24,13.86Zm38.6-12.93a43.72,43.72,0,0,1-31.31,21.47A52.26,52.26,0,0,0,188,184V132.62a4,4,0,0,0-2-3.46l-50-28.87,24-13.86L202.5,111A44,44,0,0,1,218.6,171.07Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
