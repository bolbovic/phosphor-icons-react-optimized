var n = Object.defineProperty;
var A = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && m(a, e, t[e]);
  if (A)
    for (var e of A(t))
      i.call(t, e) && m(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && A)
    for (var r of A(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import l, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((r, e) => {
  var V = r, { children: a } = V, t = H(V, ["children"]);
  return /* @__PURE__ */ l.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M184,28H72A12,12,0,0,0,60,40V76a12,12,0,0,0,4.8,9.6L121.33,128,64.8,170.4A12,12,0,0,0,60,180v36a12,12,0,0,0,12,12H184a12,12,0,0,0,12-12V180.36a12.05,12.05,0,0,0-4.76-9.57L134.63,128l56.61-42.79A12.05,12.05,0,0,0,196,75.64V40A12,12,0,0,0,184,28ZM72,36H184a4,4,0,0,1,4,4V60H68V40A4,4,0,0,1,72,36ZM188,180.36V216a4,4,0,0,1-4,4H72a4,4,0,0,1-4-4V180a4,4,0,0,1,1.6-3.2L128,133l58.42,44.16A4,4,0,0,1,188,180.36ZM186.41,78.83,128,123,69.6,79.2A4,4,0,0,1,68,76V68H188v7.64A4,4,0,0,1,186.41,78.83Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
