var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var L = (a, t) => {
  var e = {};
  for (var l in a)
    A.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && i.call(a, l) && (e[l] = a[l]);
  return e;
};
import M, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((l, e) => {
  var m = l, { children: a } = m, t = L(m, ["children"]);
  return /* @__PURE__ */ M.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ M.createElement("path", { d: "M246,80a26,26,0,1,0-46.6,15.84l-29.83,36.72-26-59.76a26,26,0,1,0-31.16,0l-26,59.76L56.6,95.84a26,26,0,1,0-22.36,10.09L49,194.3A14,14,0,0,0,62.78,206H193.22A14,14,0,0,0,207,194.3l14.73-88.37A26,26,0,0,0,246,80ZM128,38a14,14,0,1,1-14,14A14,14,0,0,1,128,38ZM22,80A14,14,0,1,1,36,94,14,14,0,0,1,22,80ZM195.2,192.33a2,2,0,0,1-2,1.67H62.78a2,2,0,0,1-2-1.67L46.08,104l1.22-.55,36,44.36A6,6,0,0,0,88,150a5.52,5.52,0,0,0,.81-.06,6,6,0,0,0,4.69-3.55l29.92-68.8a25.79,25.79,0,0,0,9.16,0l29.92,68.8a6,6,0,0,0,4.69,3.55,5.52,5.52,0,0,0,.81.06,6,6,0,0,0,4.66-2.22l36-44.36,1.22.55ZM220,94a14,14,0,1,1,14-14A14,14,0,0,1,220,94Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
