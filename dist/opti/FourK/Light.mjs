var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, L = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      H.call(t, e) && i(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && H.call(a, r) && (e[r] = a[r]);
  return e;
};
import Z, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((r, e) => {
  var o = r, { children: a } = o, t = l(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(h, L({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M26,48a6,6,0,0,1,6-6H224a6,6,0,0,1,0,12H32A6,6,0,0,1,26,48ZM224,202H32a6,6,0,0,0,0,12H224a6,6,0,0,0,0-12ZM144,74a6,6,0,0,0-6,6v96a6,6,0,0,0,12,0V146.25l15.42-17.62L194.82,179a6,6,0,0,0,5.19,3,5.91,5.91,0,0,0,3-.82,6,6,0,0,0,2.16-8.2L173.76,119.1,204.52,84a6,6,0,0,0-9-7.9L150,128V80A6,6,0,0,0,144,74ZM90,176V158H40a6,6,0,0,1-4.74-9.68l56-72A6,6,0,0,1,102,80v66h10a6,6,0,0,1,0,12H102v18a6,6,0,0,1-12,0Zm0-30V97.49L52.27,146Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
