var l = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, M = Object.prototype.propertyIsEnumerable;
var m = (a, A, e) => A in a ? l(a, A, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[A] = e, p = (a, A) => {
  for (var e in A || (A = {}))
    Z.call(A, e) && m(a, e, A[e]);
  if (o)
    for (var e of o(A))
      M.call(A, e) && m(a, e, A[e]);
  return a;
};
var H = (a, A) => {
  var e = {};
  for (var t in a)
    Z.call(a, t) && A.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      A.indexOf(t) < 0 && M.call(a, t) && (e[t] = a[t]);
  return e;
};
import d, { forwardRef as V } from "react";
import c from "../../lib/OptiBase.mjs";
const f = V((t, e) => {
  var r = t, { children: a } = r, A = H(r, ["children"]);
  return /* @__PURE__ */ d.createElement(c, p({ ref: e }, A), a, /* @__PURE__ */ d.createElement("path", { d: "M240,52H16A12,12,0,0,0,4,64V192a12,12,0,0,0,12,12H240a12,12,0,0,0,12-12V64A12,12,0,0,0,240,52ZM181.21,180H74.79A60.18,60.18,0,0,0,28,133.21V122.79A60.18,60.18,0,0,0,74.79,76H181.21A60.18,60.18,0,0,0,228,122.79v10.42A60.18,60.18,0,0,0,181.21,180ZM228,97.94A36.23,36.23,0,0,1,206.06,76H228ZM49.94,76A36.23,36.23,0,0,1,28,97.94V76ZM28,158.06A36.23,36.23,0,0,1,49.94,180H28ZM206.06,180A36.23,36.23,0,0,1,228,158.06V180ZM128,88a40,40,0,1,0,40,40A40,40,0,0,0,128,88Zm0,56a16,16,0,1,1,16-16A16,16,0,0,1,128,144Z" }));
});
f.displayName = "Bold";
export {
  f as Bold
};