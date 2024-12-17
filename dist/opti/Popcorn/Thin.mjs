var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var L = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && L(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && L(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import n, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((m, e) => {
  var l = m, { children: a } = l, t = A(l, ["children"]);
  return /* @__PURE__ */ n.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M226.76,77.11a4,4,0,0,0-3.86-1l-3.49,1A40,40,0,0,0,165.7,46.64a40,40,0,0,0-75.4,0A40,40,0,0,0,36.59,77.15l-3.49-1a4,4,0,0,0-5,4.77L58.66,210.75A11.94,11.94,0,0,0,70.34,220H185.66a11.94,11.94,0,0,0,11.68-9.25L227.89,80.92A4,4,0,0,0,226.76,77.11ZM76,52a32.08,32.08,0,0,1,15,3.72,4,4,0,0,0,5.78-2.66,32,32,0,0,1,62.47,0A4,4,0,0,0,165,55.72a32,32,0,0,1,46.65,23.64L168.22,91.78,132.46,77.47a12,12,0,0,0-8.92,0L87.78,91.78,44.33,79.36A32,32,0,0,1,76,52ZM70.34,212a4,4,0,0,1-3.9-3.08l-29-123.2L84.38,99.13,99.43,212Zm37.16,0L92.38,98.56,126.52,84.9a4,4,0,0,1,3,0l34.13,13.66L148.5,212Zm82.06-3.08a4,4,0,0,1-3.9,3.08H156.57L171.62,99.13l46.92-13.41Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
