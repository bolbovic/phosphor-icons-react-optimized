var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    Z.call(t, e) && p(a, e, t[e]);
  if (o)
    for (var e of o(t))
      c.call(t, e) && p(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var m in a)
    Z.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && c.call(a, m) && (e[m] = a[m]);
  return e;
};
import l, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const s = d((m, e) => {
  var r = m, { children: a } = r, t = A(r, ["children"]);
  return /* @__PURE__ */ l.createElement(f, n({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M128,160a32,32,0,1,1-32-32A32,32,0,0,1,128,160Z", opacity: "0.2" }), /* @__PURE__ */ l.createElement("path", { d: "M96,120a40,40,0,1,0,40,40A40,40,0,0,0,96,120Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,96,184Zm125.66-61.66a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32-11.32l48-48A8,8,0,0,1,221.66,122.34Zm-56,11.32a8,8,0,0,1-11.32-11.32l24-24a8,8,0,0,1,11.32,11.32Zm64-64-16,16a8,8,0,0,1-11.32-11.32l16-16a8,8,0,0,1,11.32,11.32ZM122.34,90.34l72-72a8,8,0,1,1,11.32,11.32l-72,72a8,8,0,0,1-11.32-11.32ZM146.91,199.6a8,8,0,0,1,0,11.31A72,72,0,1,1,45.09,109.09l82.74-82.75a8,8,0,1,1,11.32,11.32L56.4,120.4a56,56,0,0,0,79.2,79.2A8,8,0,0,1,146.91,199.6Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};
