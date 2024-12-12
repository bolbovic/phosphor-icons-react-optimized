var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && r(a, e, t[e]);
  if (m)
    for (var e of m(t))
      Z.call(t, e) && r(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var A in a)
    H.call(a, A) && t.indexOf(A) < 0 && (e[A] = a[A]);
  if (a != null && m)
    for (var A of m(a))
      t.indexOf(A) < 0 && Z.call(a, A) && (e[A] = a[A]);
  return e;
};
import l, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((A, e) => {
  var o = A, { children: a } = o, t = d(o, ["children"]);
  return /* @__PURE__ */ l.createElement(i, p({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M120,128a16,16,0,1,1-16-16A16,16,0,0,1,120,128Zm32-16a16,16,0,1,0,16,16A16,16,0,0,0,152,112Zm95.48,12.66A20,20,0,0,1,232,132H204v35.05A38,38,0,0,1,182,236H74a38,38,0,0,1-22-68.95V132H24A20,20,0,0,1,4.39,108.17a60.15,60.15,0,0,1,52-47.76A59.7,59.7,0,0,1,44,24a12,12,0,0,1,24,0,36,36,0,0,0,36,36h48a36,36,0,0,0,36-36,12,12,0,0,1,24,0,59.7,59.7,0,0,1-12.35,36.41,60.15,60.15,0,0,1,52,47.76A19.78,19.78,0,0,1,247.48,124.66ZM76,160H180V104a20,20,0,0,0-20-20H96a20,20,0,0,0-20,20ZM56.5,84.64A36.15,36.15,0,0,0,29.26,108H52v-4A43.71,43.71,0,0,1,56.5,84.64ZM196,198a14,14,0,0,0-14-14H74a14,14,0,0,0,0,28H182A14,14,0,0,0,196,198Zm30.74-90A36.15,36.15,0,0,0,199.5,84.64,43.71,43.71,0,0,1,204,104v4Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
