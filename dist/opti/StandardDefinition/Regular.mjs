var f = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? f(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, s = (a, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && o(a, e, r[e]);
  if (c)
    for (var e of c(r))
      l.call(r, e) && o(a, e, r[e]);
  return a;
};
var H = (a, r) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && c)
    for (var t of c(a))
      r.indexOf(t) < 0 && l.call(a, t) && (e[t] = a[t]);
  return e;
};
import Z, { forwardRef as i } from "react";
import M from "../../lib/OptiBase.mjs";
const R = i((t, e) => {
  var m = t, { children: a } = m, r = H(m, ["children"]);
  return /* @__PURE__ */ Z.createElement(M, s({ ref: e }, r), a, /* @__PURE__ */ Z.createElement("path", { d: "M144,72a8,8,0,0,0-8,8v96a8,8,0,0,0,8,8h24a56,56,0,0,0,0-112Zm64,56a40,40,0,0,1-40,40H152V88h16A40,40,0,0,1,208,128ZM24,48a8,8,0,0,1,8-8H224a8,8,0,0,1,0,16H32A8,8,0,0,1,24,48ZM232,208a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16H224A8,8,0,0,1,232,208ZM104,152c0-9.48-8.61-13-26.88-18.26C61.37,129.2,41.78,123.55,41.78,104c0-18.24,16.43-32,38.22-32,15.72,0,29.18,7.3,35.12,19a8,8,0,1,1-14.27,7.22C97.64,91.93,89.65,88,80,88c-12.67,0-22.22,6.88-22.22,16,0,7,9,10.1,23.77,14.36C97.78,123,120,129.45,120,152c0,17.64-17.94,32-40,32s-40-14.36-40-32a8,8,0,0,1,16,0c0,8.67,11,16,24,16S104,160.67,104,152Z" }));
});
R.displayName = "Regular";
export {
  R as Regular
};
