var p = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var m = (a, V, e) => V in a ? p(a, V, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[V] = e, A = (a, V) => {
  for (var e in V || (V = {}))
    H.call(V, e) && m(a, e, V[e]);
  if (r)
    for (var e of r(V))
      o.call(V, e) && m(a, e, V[e]);
  return a;
};
var Z = (a, V) => {
  var e = {};
  for (var t in a)
    H.call(a, t) && V.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      V.indexOf(t) < 0 && o.call(a, t) && (e[t] = a[t]);
  return e;
};
import i, { forwardRef as M } from "react";
import n from "../../lib/OptiBase.mjs";
const c = M((t, e) => {
  var h = t, { children: a } = h, V = Z(h, ["children"]);
  return /* @__PURE__ */ i.createElement(n, A({ ref: e }, V), a, /* @__PURE__ */ i.createElement("path", { d: "M180,52.23V32a12,12,0,0,0-12-12H88A12,12,0,0,0,76,32V52.23A36,36,0,0,0,44,88V200a36,36,0,0,0,36,36h96a36,36,0,0,0,36-36V88A36,36,0,0,0,180,52.23ZM52,108H204v72H52ZM172,32V52H148V28h20A4,4,0,0,1,172,32ZM116,52V28h24V52ZM88,28h20V52H84V32A4,4,0,0,1,88,28ZM80,60h96a28,28,0,0,1,28,28v12H52V88A28,28,0,0,1,80,60Zm96,168H80a28,28,0,0,1-28-28V188H204v12A28,28,0,0,1,176,228Z" }));
});
c.displayName = "Thin";
export {
  c as Thin
};
