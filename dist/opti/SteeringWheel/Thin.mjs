var n = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && i(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    l.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((m, e) => {
  var o = m, { children: a } = o, t = Z(o, ["children"]);
  return /* @__PURE__ */ c.createElement(h, A({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M128,148a8,8,0,1,1,8-8A8,8,0,0,1,128,148Zm100-20A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128ZM36,128q0,4.53.44,8.94a131.94,131.94,0,0,1,183.12,0q.44-4.41.44-8.94a92,92,0,0,0-184,0Zm77.75,90.9L94.2,166.6a4,4,0,0,0-3.75-2.6H43.34A92.31,92.31,0,0,0,113.75,218.9ZM128,220c1.78,0,3.55-.06,5.3-.16l21-56.05A12,12,0,0,1,165.55,156h50.09a91.61,91.61,0,0,0,2.43-9.21,124,124,0,0,0-180.14,0A91.61,91.61,0,0,0,40.36,156H90.45a12,12,0,0,1,11.24,7.8l21,56C124.42,219.94,126.2,220,128,220Zm84.66-56H165.55a4,4,0,0,0-3.75,2.6l-19.6,52.3A92.26,92.26,0,0,0,212.66,164Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
