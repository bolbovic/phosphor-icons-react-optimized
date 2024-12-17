var Z = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var l in a)
    c.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && i.call(a, l) && (e[l] = a[l]);
  return e;
};
import L, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((l, e) => {
  var r = l, { children: a } = r, t = A(r, ["children"]);
  return /* @__PURE__ */ L.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ L.createElement("path", { d: "M152,78a30,30,0,1,0-30-30A30,30,0,0,0,152,78Zm0-48a18,18,0,1,1-18,18A18,18,0,0,1,152,30Zm46,114v88a6,6,0,0,1-12,0V149.81c-26.23-1.73-34.76-14.89-42.35-26.59-3.43-5.3-6.68-10.31-11.5-14.52L117,143.61l38.52,27.51A6,6,0,0,1,158,176v56a6,6,0,0,1-12,0V179.09l-33.92-24.23L77.5,234.39a6,6,0,0,1-11-4.78L124,97.29a6,6,0,0,1,8.25-2.94,38.89,38.89,0,0,1,7.65,5.21c6.15,5.34,10,11.33,13.79,17.13C161.44,128.59,167.54,138,192,138A6,6,0,0,1,198,144ZM72,150a6,6,0,0,0,5.52-3.64l24-56a6,6,0,0,0-3.16-7.88l-28-12a6,6,0,0,0-7.87,3.16l-24,56a6,6,0,0,0,3.15,7.87l28,12A6,6,0,0,0,72,150ZM51.88,128.85l19.27-45,17,7.27-19.27,45Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
