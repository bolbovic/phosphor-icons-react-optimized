var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, M = Object.prototype.propertyIsEnumerable;
var t = (a, l, e) => l in a ? f(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, c = (a, l) => {
  for (var e in l || (l = {}))
    A.call(l, e) && t(a, e, l[e]);
  if (m)
    for (var e of m(l))
      M.call(l, e) && t(a, e, l[e]);
  return a;
};
var o = (a, l) => {
  var e = {};
  for (var Z in a)
    A.call(a, Z) && l.indexOf(Z) < 0 && (e[Z] = a[Z]);
  if (a != null && m)
    for (var Z of m(a))
      l.indexOf(Z) < 0 && M.call(a, Z) && (e[Z] = a[Z]);
  return e;
};
import p, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const L = i((Z, e) => {
  var r = Z, { children: a } = r, l = o(r, ["children"]);
  return /* @__PURE__ */ p.createElement(s, c({ ref: e }, l), a, /* @__PURE__ */ p.createElement("path", { d: "M174.63,81.37a80,80,0,1,0-93.26,93.26,80,80,0,1,0,93.26-93.26ZM224,160c0,1.52-.07,3-.18,4.51l-50-50A80,80,0,0,0,176,98,64.11,64.11,0,0,1,224,160ZM45.47,56.79,98.09,109.4a80.5,80.5,0,0,0-9.93,15.44L36.3,73A64,64,0,0,1,45.47,56.79ZM73,36.3l51.86,51.86a80.5,80.5,0,0,0-15.44,9.93L56.79,45.47A64,64,0,0,1,73,36.3Zm61.46,110.83-25.57-25.57a64.65,64.65,0,0,1,12.69-12.69l25.57,25.57A64.65,64.65,0,0,1,134.44,147.13ZM155.31,120,136,100.69A63.48,63.48,0,0,1,160,96,63.48,63.48,0,0,1,155.31,120Zm-54.62,16L120,155.31A63.48,63.48,0,0,1,96,160,63.48,63.48,0,0,1,100.69,136Zm45.91,21.91,52.61,52.62A64,64,0,0,1,183,219.7l-51.86-51.86A80.5,80.5,0,0,0,146.6,157.91Zm11.31-11.31a80.5,80.5,0,0,0,9.93-15.44L219.7,183a64,64,0,0,1-9.17,16.19ZM158,80.05a80,80,0,0,0-16.49,2.13l-50-50C93,32.07,94.48,32,96,32A64.11,64.11,0,0,1,158,80.05ZM32,96c0-1.52.07-3,.18-4.51l50,50A80,80,0,0,0,80.05,158,64.11,64.11,0,0,1,32,96ZM98,176a80,80,0,0,0,16.49-2.13l50,50c-1.49.11-3,.18-4.51.18A64.11,64.11,0,0,1,98,176Z" }));
});
L.displayName = "Regular";
export {
  L as Regular
};
