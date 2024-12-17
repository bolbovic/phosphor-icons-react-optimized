var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import f, { forwardRef as H } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = H((l, e) => {
  var m = l, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, A({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M60,88H196a4,4,0,0,0,4-4V40a16,16,0,0,0-16-16H72A16,16,0,0,0,56,40V84A4,4,0,0,0,60,88ZM88,48h15.73A8.18,8.18,0,0,1,112,55.47,8,8,0,0,1,104,64H88.27A8.18,8.18,0,0,1,80,56.53,8,8,0,0,1,88,48Zm136,64.06a8,8,0,0,0-8-8.06H40a8,8,0,0,0-8,8.06,96.1,96.1,0,0,0,51.68,85.08l-3.47,24.27a16.43,16.43,0,0,0,1.63,10A16,16,0,0,0,96,240h63.66a16.52,16.52,0,0,0,9.72-3,16,16,0,0,0,6.46-15.23l-3.52-24.6A96.1,96.1,0,0,0,224,112.06ZM96,224l2.93-20.5a96.15,96.15,0,0,0,58.14,0L160,224Z" }));
});
d.displayName = "Fill";
export {
  d as Fill
};
