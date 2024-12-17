var c = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && m(a, e, t[e]);
  if (l)
    for (var e of l(t))
      i.call(t, e) && m(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var H in a)
    o.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && l)
    for (var H of l(a))
      t.indexOf(H) < 0 && i.call(a, H) && (e[H] = a[H]);
  return e;
};
import L, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((H, e) => {
  var r = H, { children: a } = r, t = n(r, ["children"]);
  return /* @__PURE__ */ L.createElement(h, p({ ref: e }, t), a, /* @__PURE__ */ L.createElement("path", { d: "M224,92H170.61l9.33-51.28a4,4,0,1,0-7.88-1.44L162.48,92H106.61l9.33-51.28a4,4,0,1,0-7.88-1.44L98.48,92H48a4,4,0,0,0,0,8H97L86.84,156H32a4,4,0,0,0,0,8H85.39l-9.33,51.28a4,4,0,0,0,3.22,4.65A3.65,3.65,0,0,0,80,220a4,4,0,0,0,3.94-3.29L93.52,164h55.87l-9.33,51.28a4,4,0,0,0,3.22,4.65,3.65,3.65,0,0,0,.72.07,4,4,0,0,0,3.94-3.29L157.52,164H208a4,4,0,0,0,0-8H159l10.19-56H224a4,4,0,0,0,0-8Zm-73.16,64H95l10.19-56H161Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
