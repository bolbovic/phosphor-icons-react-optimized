var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var H = (e, t, a) => t in e ? c(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, n = (e, t) => {
  for (var a in t || (t = {}))
    i.call(t, a) && H(e, a, t[a]);
  if (m)
    for (var a of m(t))
      p.call(t, a) && H(e, a, t[a]);
  return e;
};
var A = (e, t) => {
  var a = {};
  for (var r in e)
    i.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && m)
    for (var r of m(e))
      t.indexOf(r) < 0 && p.call(e, r) && (a[r] = e[r]);
  return a;
};
import V, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((r, a) => {
  var o = r, { children: e } = o, t = A(o, ["children"]);
  return /* @__PURE__ */ V.createElement(h, n({ ref: a }, t), e, /* @__PURE__ */ V.createElement("path", { d: "M216,44H40A12,12,0,0,0,28,56V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44ZM40,52H216a4,4,0,0,1,4,4v44H36V56A4,4,0,0,1,40,52ZM36,200V108h64v96H40A4,4,0,0,1,36,200Zm180,4H108V108H220v92A4,4,0,0,1,216,204Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
