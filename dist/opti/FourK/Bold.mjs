var c = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (o)
    for (var e of o(t))
      A.call(t, e) && m(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var l in a)
    p.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && o)
    for (var l of o(a))
      t.indexOf(l) < 0 && A.call(a, l) && (e[l] = a[l]);
  return e;
};
import Z, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((l, e) => {
  var r = l, { children: a } = r, t = H(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(i, d({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M20,44A12,12,0,0,1,32,32H224a12,12,0,0,1,0,24H32A12,12,0,0,1,20,44ZM224,200H32a12,12,0,0,0,0,24H224a12,12,0,0,0,0-24ZM148,68a12,12,0,0,0-12,12v96a12,12,0,0,0,24,0V148.51l8.44-9.65,25.19,43.19A12,12,0,0,0,214.37,170l-29.26-50.14L213,87.9A12,12,0,1,0,195,72.1l-35,40V80A12,12,0,0,0,148,68ZM80,176V164H36a12,12,0,0,1-9.47-19.37l56-72A12,12,0,0,1,104,80v60h4a12,12,0,0,1,0,24h-4v12a12,12,0,0,1-24,0Zm0-36V115L60.54,140Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
