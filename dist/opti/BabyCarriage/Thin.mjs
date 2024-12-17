var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var h = (a, m, e) => m in a ? c(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, A = (a, m) => {
  for (var e in m || (m = {}))
    i.call(m, e) && h(a, e, m[e]);
  if (r)
    for (var e of r(m))
      p.call(m, e) && h(a, e, m[e]);
  return a;
};
var Z = (a, m) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import n, { forwardRef as f } from "react";
import l from "../../lib/OptiBase.mjs";
const s = f((t, e) => {
  var o = t, { children: a } = o, m = Z(o, ["children"]);
  return /* @__PURE__ */ n.createElement(l, A({ ref: e }, m), a, /* @__PURE__ */ n.createElement("path", { d: "M160,36h-8a12,12,0,0,0-12,12v60H51.77A36,36,0,0,0,16,76a4,4,0,0,0,0,8,28,28,0,0,1,28,28,76.08,76.08,0,0,0,76,76h40a76,76,0,0,0,0-152Zm67.87,72H155.4l53.71-43A67.76,67.76,0,0,1,227.87,108ZM152,44h8a67.72,67.72,0,0,1,43.2,15.52L148,103.68V48A4,4,0,0,1,152,44Zm8,136H120a68.08,68.08,0,0,1-67.88-64H227.88A68.08,68.08,0,0,1,160,180Zm-60,44a12,12,0,1,1-12-12A12,12,0,0,1,100,224Zm104,0a12,12,0,1,1-12-12A12,12,0,0,1,204,224Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
