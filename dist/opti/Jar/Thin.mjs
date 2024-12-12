var M = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? M(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && m(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var V in a)
    o.call(a, V) && t.indexOf(V) < 0 && (e[V] = a[V]);
  if (a != null && r)
    for (var V of r(a))
      t.indexOf(V) < 0 && i.call(a, V) && (e[V] = a[V]);
  return e;
};
import n, { forwardRef as Z } from "react";
import c from "../../lib/OptiBase.mjs";
const f = Z((V, e) => {
  var h = V, { children: a } = h, t = A(h, ["children"]);
  return /* @__PURE__ */ n.createElement(c, p({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M180,52.23V32a12,12,0,0,0-12-12H88A12,12,0,0,0,76,32V52.23A36,36,0,0,0,44,88V200a36,36,0,0,0,36,36h96a36,36,0,0,0,36-36V88A36,36,0,0,0,180,52.23ZM172,32V52H148V28h20A4,4,0,0,1,172,32ZM116,52V28h24V52ZM88,28h20V52H84V32A4,4,0,0,1,88,28ZM204,200a28,28,0,0,1-28,28H80a28,28,0,0,1-28-28V88A28,28,0,0,1,80,60h96a28,28,0,0,1,28,28Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
