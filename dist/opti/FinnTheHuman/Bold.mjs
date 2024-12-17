var c = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var p = (a, m, e) => m in a ? c(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, l = (a, m) => {
  for (var e in m || (m = {}))
    Z.call(m, e) && p(a, e, m[e]);
  if (o)
    for (var e of o(m))
      d.call(m, e) && p(a, e, m[e]);
  return a;
};
var A = (a, m) => {
  var e = {};
  for (var t in a)
    Z.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      m.indexOf(t) < 0 && d.call(a, t) && (e[t] = a[t]);
  return e;
};
import H, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const i = f((t, e) => {
  var r = t, { children: a } = r, m = A(r, ["children"]);
  return /* @__PURE__ */ H.createElement(h, l({ ref: e }, m), a, /* @__PURE__ */ H.createElement("path", { d: "M160,96H96a52,52,0,0,0,0,104h64a52,52,0,0,0,0-104Zm0,80H96a28,28,0,0,1,0-56h64a28,28,0,0,1,0,56Zm-48-28a16,16,0,1,1-16-16A16,16,0,0,1,112,148Zm64,0a16,16,0,1,1-16-16A16,16,0,0,1,176,148ZM212,36a36,36,0,0,0-33.94,24H77.94A36,36,0,0,0,8,72v76a88.1,88.1,0,0,0,88,88h64a88.1,88.1,0,0,0,88-88V72A36,36,0,0,0,212,36Zm12,112a64.07,64.07,0,0,1-64,64H96a64.07,64.07,0,0,1-64-64V72a12,12,0,0,1,24,0A12,12,0,0,0,68,84H188a12,12,0,0,0,12-12,12,12,0,0,1,24,0Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
