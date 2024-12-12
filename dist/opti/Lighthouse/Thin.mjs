var n = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var L = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    m.call(t, e) && L(a, e, t[e]);
  if (r)
    for (var e of r(t))
      o.call(t, e) && L(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var H in a)
    m.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && r)
    for (var H of r(a))
      t.indexOf(H) < 0 && o.call(a, H) && (e[H] = a[H]);
  return e;
};
import p, { forwardRef as A } from "react";
import M from "../../lib/OptiBase.mjs";
const Z = A((H, e) => {
  var l = H, { children: a } = l, t = i(l, ["children"]);
  return /* @__PURE__ */ p.createElement(M, h({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M208,84a4,4,0,0,0-4,4v20H185.23L180,55.6A4,4,0,0,0,178.66,53L135.78,14.87l-.1-.09a12,12,0,0,0-15.36,0l-.1.09L77.34,53A4,4,0,0,0,76,55.6L70.77,108H52V88a4,4,0,0,0-8,0v24a4,4,0,0,0,4,4H70l-9.92,98.86A12,12,0,0,0,72,228H184a12,12,0,0,0,11.94-13.16L186,116h22a4,4,0,0,0,4-4V88A4,4,0,0,0,208,84ZM125.48,20.89a4,4,0,0,1,5,0l35,31.11h-75ZM83.62,60h88.76l4.81,48H132V88a4,4,0,0,0-8,0v20H78.81ZM187,218.69a3.94,3.94,0,0,1-3,1.31H72a4,4,0,0,1-4-4.36L72.39,172H183.61L188,215.62A3.93,3.93,0,0,1,187,218.69ZM182.81,164H73.19L78,116H178Z" }));
});
Z.displayName = "Thin";
export {
  Z as Thin
};
