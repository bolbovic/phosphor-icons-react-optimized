var H = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, v = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    r.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      v.call(t, e) && o(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var V in a)
    r.call(a, V) && t.indexOf(V) < 0 && (e[V] = a[V]);
  if (a != null && m)
    for (var V of m(a))
      t.indexOf(V) < 0 && v.call(a, V) && (e[V] = a[V]);
  return e;
};
import A, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const c = Z((V, e) => {
  var l = V, { children: a } = l, t = p(l, ["children"]);
  return /* @__PURE__ */ A.createElement(d, h({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M48,128a12,12,0,0,0,12-12V44h76V92a12,12,0,0,0,12,12h48v12a12,12,0,0,0,24,0V88a12,12,0,0,0-3.51-8.49l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40v76A12,12,0,0,0,48,128ZM183,80H160V57ZM68,160v48a12,12,0,0,1-24,0V196H32v12a12,12,0,0,1-24,0V160a12,12,0,0,1,24,0v12H44V160a12,12,0,0,1,24,0Zm60,0a12,12,0,0,1-12,12h-4v36a12,12,0,0,1-24,0V172H84a12,12,0,0,1,0-24h32A12,12,0,0,1,128,160Zm72,0v48a12,12,0,0,1-24,0v-9.36l-.11.16a12,12,0,0,1-19.78,0l-.11-.16V208a12,12,0,0,1-24,0V160a12,12,0,0,1,21.89-6.8L166,170.82l12.11-17.62A12,12,0,0,1,200,160Zm56,48a12,12,0,0,1-12,12H220a12,12,0,0,1-12-12V160a12,12,0,0,1,24,0v36h12A12,12,0,0,1,256,208Z" }));
});
c.displayName = "Bold";
export {
  c as Bold
};