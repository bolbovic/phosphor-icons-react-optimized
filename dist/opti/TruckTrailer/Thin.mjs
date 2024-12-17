var n = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && h(a, e, t[e]);
  if (r)
    for (var e of r(t))
      V.call(t, e) && h(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && V.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((m, e) => {
  var A = m, { children: a } = A, t = p(A, ["children"]);
  return /* @__PURE__ */ Z.createElement(f, i({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M220,100.22V96a52.06,52.06,0,0,0-52-52h-8a12,12,0,0,0-12,12V180H124V72a4,4,0,0,0-4-4H16A12,12,0,0,0,4,80V184a28,28,0,0,0,52,14.41A28,28,0,0,0,107.71,188h88.58A28,28,0,0,0,252,184V136A36.06,36.06,0,0,0,220,100.22ZM12,80a4,4,0,0,1,4-4H116V180h-8.29A28,28,0,0,0,56,169.59a28,28,0,0,0-44-5.16ZM32,204a20,20,0,1,1,20-20A20,20,0,0,1,32,204Zm48,0a20,20,0,1,1,20-20A20,20,0,0,1,80,204Zm144,0a20,20,0,1,1,20-20A20,20,0,0,1,224,204Zm0-48a28,28,0,0,0-27.71,24H156V56a4,4,0,0,1,4-4h8a44.05,44.05,0,0,1,44,44v8a4,4,0,0,0,4,4,28,28,0,0,1,28,28v28.43A27.9,27.9,0,0,0,224,156Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
