var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var m in a)
    c.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((m, e) => {
  var l = m, { children: a } = l, t = A(l, ["children"]);
  return /* @__PURE__ */ n.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M152,76a28,28,0,1,0-28-28A28,28,0,0,0,152,76Zm0-48a20,20,0,1,1-20,20A20,20,0,0,1,152,28Zm44,116v88a4,4,0,0,1-8,0V147.92c-26.68-1.13-34.8-13.66-42.67-25.79-3.53-5.46-6.87-10.61-12-15-.66-.56-1.33-1.1-2-1.6L114.5,144.29l39.83,28.45A4,4,0,0,1,156,176v56a4,4,0,0,1-8,0V178.06L111.23,151.8,75.67,233.59A4,4,0,0,1,72,236a4.08,4.08,0,0,1-1.59-.33,4,4,0,0,1-2.08-5.27L125.86,98.09a4,4,0,0,1,5.5-2,37.24,37.24,0,0,1,7.26,4.94c5.94,5.15,9.74,11,13.42,16.71C159.77,129.7,166.45,140,192,140A4,4,0,0,1,196,144ZM72,148a4,4,0,0,0,3.68-2.43l24-56a4,4,0,0,0-2.1-5.25l-28-12a4,4,0,0,0-5.26,2.1l-24,56a4,4,0,0,0,2.11,5.26l28,12A3.94,3.94,0,0,0,72,148ZM49.25,129.9,70.1,81.25,90.75,90.1,69.9,138.75Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};