var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && h(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && h(a, e, t[e]);
  return a;
};
var L = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as l } from "react";
import s from "../../lib/OptiBase.mjs";
const A = l((r, e) => {
  var o = r, { children: a } = o, t = L(o, ["children"]);
  return /* @__PURE__ */ c.createElement(s, H({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M208,26H72A30,30,0,0,0,42,56V224a6,6,0,0,0,6,6H192a6,6,0,0,0,0-12H54v-2a18,18,0,0,1,18-18H208a6,6,0,0,0,6-6V32A6,6,0,0,0,208,26ZM118,38h52v78L147.59,99.2a6,6,0,0,0-7.2,0L118,116Zm84,148H72a29.87,29.87,0,0,0-18,6V56A18,18,0,0,1,72,38h34v90a6,6,0,0,0,9.6,4.8L144,111.5l28.41,21.3A6,6,0,0,0,182,128V38h20Z" }));
});
A.displayName = "Light";
export {
  A as Light
};
