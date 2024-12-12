var n = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    Z.call(t, e) && H(a, e, t[e]);
  if (r)
    for (var e of r(t))
      h.call(t, e) && H(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    Z.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && h.call(a, m) && (e[m] = a[m]);
  return e;
};
import p, { forwardRef as A } from "react";
import M from "../../lib/OptiBase.mjs";
const c = A((m, e) => {
  var o = m, { children: a } = o, t = l(o, ["children"]);
  return /* @__PURE__ */ p.createElement(M, i({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M224,52H32A12,12,0,0,0,20,64V192a12,12,0,0,0,12,12H224a12,12,0,0,0,12-12V64A12,12,0,0,0,224,52ZM72,196l18-24h76l18,24Zm156-4a4,4,0,0,1-4,4H194l-22.8-30.4A4,4,0,0,0,168,164H88a4,4,0,0,0-3.2,1.6L62,196H32a4,4,0,0,1-4-4V64a4,4,0,0,1,4-4H224a4,4,0,0,1,4,4ZM176,84H80a28,28,0,0,0,0,56h96a28,28,0,0,0,0-56ZM60,112a20,20,0,1,1,20,20A20,20,0,0,1,60,112Zm39.57,20a27.94,27.94,0,0,0,0-40h56.86a27.94,27.94,0,0,0,0,40ZM176,132a20,20,0,1,1,20-20A20,20,0,0,1,176,132Z" }));
});
c.displayName = "Thin";
export {
  c as Thin
};
