var M = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? M(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    L.call(t, e) && p(a, e, t[e]);
  if (o)
    for (var e of o(t))
      Z.call(t, e) && p(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var l in a)
    L.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && o)
    for (var l of o(a))
      t.indexOf(l) < 0 && Z.call(a, l) && (e[l] = a[l]);
  return e;
};
import r, { forwardRef as i } from "react";
import d from "../../lib/OptiBase.mjs";
const f = i((l, e) => {
  var m = l, { children: a } = m, t = n(m, ["children"]);
  return /* @__PURE__ */ r.createElement(d, c({ ref: e }, t), a, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M229.66,197,197,229.66a8,8,0,0,1-11.31,0l-18.35-18.35,44-44,18.35,18.35A8,8,0,0,1,229.66,197ZM26.34,185.66a8,8,0,0,0,0,11.31L59,229.66a8,8,0,0,0,11.31,0l18.35-18.35-44-44Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M235.32,180l-36.24-36.25L162.62,23.46A21.76,21.76,0,0,0,128,12.93,21.76,21.76,0,0,0,93.38,23.46L56.92,143.76,20.68,180a16,16,0,0,0,0,22.62l32.69,32.69a16,16,0,0,0,22.63,0L124.28,187a40.68,40.68,0,0,0,3.72-4.29,40.68,40.68,0,0,0,3.72,4.29L180,235.32a16,16,0,0,0,22.63,0l32.69-32.69A16,16,0,0,0,235.32,180ZM64.68,224,32,191.32l12.69-12.69,32.69,32.69ZM120,158.75a23.85,23.85,0,0,1-7,17L88.68,200,56,167.32l13.65-13.66a8,8,0,0,0,2-3.34l37-122.22A5.78,5.78,0,0,1,120,29.78Zm23,17a23.85,23.85,0,0,1-7-17v-129a5.78,5.78,0,0,1,11.31-1.68l37,122.22a8,8,0,0,0,2,3.34l14.49,14.49-33.4,32ZM191.32,224l-12.56-12.57,33.39-32L224,191.32Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
