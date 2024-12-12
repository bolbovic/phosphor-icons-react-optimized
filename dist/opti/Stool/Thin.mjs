var n = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      A.call(t, e) && i(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && A.call(a, r) && (e[r] = a[r]);
  return e;
};
import l, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((r, e) => {
  var o = r, { children: a } = o, t = h(o, ["children"]);
  return /* @__PURE__ */ l.createElement(f, H({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M196,64V40a12,12,0,0,0-12-12H72A12,12,0,0,0,60,40V64A12,12,0,0,0,72,76H83.32L60.05,223.38A4,4,0,0,0,63.38,228,4.46,4.46,0,0,0,64,228,4,4,0,0,0,68,224.62L76.26,172H179.74l8.31,52.62A4,4,0,0,0,192,228a4.46,4.46,0,0,0,.63-.05,4,4,0,0,0,3.33-4.57L172.68,76H184A12,12,0,0,0,196,64ZM68,64V40a4,4,0,0,1,4-4H184a4,4,0,0,1,4,4V64a4,4,0,0,1-4,4H72A4,4,0,0,1,68,64ZM178.48,164h-101l13.9-88h73.16Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
