var l = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? l(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      V.call(t, e) && o(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    A.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && V.call(a, m) && (e[m] = a[m]);
  return e;
};
import H, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const h = c((m, e) => {
  var Z = m, { children: a } = Z, t = p(Z, ["children"]);
  return /* @__PURE__ */ H.createElement(f, i({ ref: e }, t), a, /* @__PURE__ */ H.createElement("path", { d: "M232,50H16a6,6,0,0,0-6,6V208a6,6,0,0,0,12,0V190H42v18a6,6,0,0,0,12,0V190H74v18a6,6,0,0,0,12,0V190h20v18a6,6,0,0,0,12,0V190H232a14,14,0,0,0,14-14V64A14,14,0,0,0,232,50Zm2,126a2,2,0,0,1-2,2H22V62H232a2,2,0,0,1,2,2ZM176,82a38,38,0,1,0,38,38A38,38,0,0,0,176,82Zm26,38a25.81,25.81,0,0,1-3.88,13.64L162.36,97.88A26,26,0,0,1,202,120Zm-52,0a25.81,25.81,0,0,1,3.88-13.64l35.76,35.76A26,26,0,0,1,150,120ZM80,82a38,38,0,1,0,38,38A38,38,0,0,0,80,82Zm26,38a25.81,25.81,0,0,1-3.88,13.64L66.36,97.88A26,26,0,0,1,106,120Zm-52,0a25.81,25.81,0,0,1,3.88-13.64l35.76,35.76A26,26,0,0,1,54,120Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
