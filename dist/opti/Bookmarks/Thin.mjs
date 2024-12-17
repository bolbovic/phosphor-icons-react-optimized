var n = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && A(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && A(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var r in a)
    V.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import h, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((r, e) => {
  var o = r, { children: a } = o, t = p(o, ["children"]);
  return /* @__PURE__ */ h.createElement(f, l({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M192,28H96A12,12,0,0,0,84,40V60H64A12,12,0,0,0,52,72V224a4,4,0,0,0,6.33,3.25L112,188.92l53.69,38.33A3.94,3.94,0,0,0,168,228a4.08,4.08,0,0,0,1.83-.44A4,4,0,0,0,172,224V176.92l25.68,18.33A3.94,3.94,0,0,0,200,196a4.08,4.08,0,0,0,1.83-.44A4,4,0,0,0,204,192V40A12,12,0,0,0,192,28ZM164,216.23l-49.68-35.48a4,4,0,0,0-4.65,0L60,216.23V72a4,4,0,0,1,4-4h96a4,4,0,0,1,4,4Zm32-32-24-17.14V72a12,12,0,0,0-12-12H92V40a4,4,0,0,1,4-4h96a4,4,0,0,1,4,4Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
