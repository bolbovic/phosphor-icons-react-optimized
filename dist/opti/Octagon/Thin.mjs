var c = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var r in a)
    A.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((r, e) => {
  var m = r, { children: a } = m, t = h(m, ["children"]);
  return /* @__PURE__ */ n.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M224.49,83.06,172.94,31.51A12,12,0,0,0,164.45,28H91.55a12,12,0,0,0-8.49,3.51L31.51,83.06A12,12,0,0,0,28,91.55v72.9a12,12,0,0,0,3.51,8.49l51.55,51.55A12,12,0,0,0,91.55,228h72.9a12,12,0,0,0,8.49-3.51l51.55-51.55a12,12,0,0,0,3.51-8.49V91.55A12,12,0,0,0,224.49,83.06ZM220,164.45a4,4,0,0,1-1.17,2.83l-51.55,51.55a4,4,0,0,1-2.83,1.17H91.55a4,4,0,0,1-2.83-1.17L37.17,167.28A4,4,0,0,1,36,164.45V91.55a4,4,0,0,1,1.17-2.83L88.72,37.17A4,4,0,0,1,91.55,36h72.9a4,4,0,0,1,2.83,1.17l51.55,51.55A4,4,0,0,1,220,91.55Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
