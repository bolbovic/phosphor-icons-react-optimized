var f = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, M = Object.prototype.propertyIsEnumerable;
var m = (a, l, e) => l in a ? f(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, c = (a, l) => {
  for (var e in l || (l = {}))
    A.call(l, e) && m(a, e, l[e]);
  if (t)
    for (var e of t(l))
      M.call(l, e) && m(a, e, l[e]);
  return a;
};
var o = (a, l) => {
  var e = {};
  for (var r in a)
    A.call(a, r) && l.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      l.indexOf(r) < 0 && M.call(a, r) && (e[r] = a[r]);
  return e;
};
import p, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const L = i((r, e) => {
  var Z = r, { children: a } = Z, l = o(Z, ["children"]);
  return /* @__PURE__ */ p.createElement(s, c({ ref: e }, l), a, /* @__PURE__ */ p.createElement("path", { d: "M174.63,81.37a80,80,0,1,0-93.26,93.26,80,80,0,1,0,93.26-93.26ZM224,160c0,1.52-.07,3-.18,4.51l-50-50A80,80,0,0,0,176,98,64.11,64.11,0,0,1,224,160Zm-13.47,39.21L157.91,146.6a80.5,80.5,0,0,0,9.93-15.44L219.7,183A64,64,0,0,1,210.53,199.21ZM183,219.7l-51.86-51.86a80.5,80.5,0,0,0,15.44-9.93l52.61,52.62A64,64,0,0,1,183,219.7ZM45.47,56.79,98.09,109.4a80.5,80.5,0,0,0-9.93,15.44L36.3,73A64,64,0,0,1,45.47,56.79ZM73,36.3l51.86,51.86a80.5,80.5,0,0,0-15.44,9.93L56.79,45.47A64,64,0,0,1,73,36.3ZM160,96a64.07,64.07,0,0,1-64,64A64.07,64.07,0,0,1,160,96Zm-2-16a80,80,0,0,0-16.49,2.13l-50-50C93,32.07,94.48,32,96,32A64.11,64.11,0,0,1,158,80.05ZM32,96c0-1.52.07-3,.18-4.51l50,50A80,80,0,0,0,80.05,158,64.11,64.11,0,0,1,32,96ZM98,176a80,80,0,0,0,16.49-2.13l50,50c-1.49.11-3,.18-4.51.18A64.11,64.11,0,0,1,98,176Z" }));
});
L.displayName = "Regular";
export {
  L as Regular
};
