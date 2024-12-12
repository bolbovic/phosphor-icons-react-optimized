var s = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (o)
    for (var e of o(t))
      d.call(t, e) && m(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var l in a)
    p.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && o)
    for (var l of o(a))
      t.indexOf(l) < 0 && d.call(a, l) && (e[l] = a[l]);
  return e;
};
import i, { forwardRef as A } from "react";
import M from "../../lib/OptiBase.mjs";
const V = A((l, e) => {
  var r = l, { children: a } = r, t = f(r, ["children"]);
  return /* @__PURE__ */ i.createElement(M, c({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M160,56A52,52,0,0,0,56,56v94.69a64,64,0,1,0,104,0ZM108,228a40,40,0,0,1-30.91-65.39A12,12,0,0,0,80,154.78V56a28,28,0,0,1,56,0v98.77a12,12,0,0,0,2.77,7.68A40,40,0,0,1,108,228ZM246.14,81.52l-14.72,4.79,9.1,12.52a12,12,0,1,1-19.42,14.11L212,100.42l-9.1,12.52a12,12,0,1,1-19.42-14.11l9.1-12.52-14.72-4.79a12,12,0,1,1,7.41-22.82L200,63.48V48a12,12,0,0,1,24,0V63.48l14.73-4.78a12,12,0,1,1,7.41,22.82ZM132,188a24,24,0,1,1-36-20.78V132a12,12,0,0,1,24,0v35.22A24,24,0,0,1,132,188Z" }));
});
V.displayName = "Bold";
export {
  V as Bold
};
