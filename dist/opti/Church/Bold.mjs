var v = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? v(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    m.call(t, e) && r(a, e, t[e]);
  if (l)
    for (var e of l(t))
      p.call(t, e) && r(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var V in a)
    m.call(a, V) && t.indexOf(V) < 0 && (e[V] = a[V]);
  if (a != null && l)
    for (var V of l(a))
      t.indexOf(V) < 0 && p.call(a, V) && (e[V] = a[V]);
  return e;
};
import h, { forwardRef as A } from "react";
import c from "../../lib/OptiBase.mjs";
const f = A((V, e) => {
  var o = V, { children: a } = o, t = d(o, ["children"]);
  return /* @__PURE__ */ h.createElement(c, H({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M230.17,141.71,196,121.21V104A12,12,0,0,0,190,93.58L140,65V52h12a12,12,0,0,0,0-24H140V16a12,12,0,0,0-24,0V28H104a12,12,0,0,0,0,24h12V65L66.05,93.58A12,12,0,0,0,60,104v17.21l-34.17,20.5A12,12,0,0,0,20,152v64a12,12,0,0,0,12,12h76a12,12,0,0,0,12-12V172a8,8,0,0,1,16,0v44a12,12,0,0,0,12,12h76a12,12,0,0,0,12-12V152A12,12,0,0,0,230.17,141.71ZM44,158.79l16-9.6V204H44ZM128,140a32,32,0,0,0-32,32v32H84V111l44-25.14L172,111v93H160V172A32,32,0,0,0,128,140Zm84,64H196V149.19l16,9.6Z" }));
});
f.displayName = "Bold";
export {
  f as Bold
};
