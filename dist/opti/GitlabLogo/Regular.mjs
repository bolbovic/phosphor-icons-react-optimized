var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? Z(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, f = (a, l) => {
  for (var e in l || (l = {}))
    L.call(l, e) && o(a, e, l[e]);
  if (r)
    for (var e of r(l))
      p.call(l, e) && o(a, e, l[e]);
  return a;
};
var s = (a, l) => {
  var e = {};
  for (var t in a)
    L.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import A, { forwardRef as c } from "react";
import d from "../../lib/OptiBase.mjs";
const i = c((t, e) => {
  var m = t, { children: a } = m, l = s(m, ["children"]);
  return /* @__PURE__ */ A.createElement(d, f({ ref: e }, l), a, /* @__PURE__ */ A.createElement("path", { d: "M230.15,117.1,210.25,41a11.94,11.94,0,0,0-22.79-1.11L169.78,88H86.22L68.54,39.87A11.94,11.94,0,0,0,45.75,41L25.85,117.1a57.19,57.19,0,0,0,22,61l73.27,51.76a11.91,11.91,0,0,0,13.74,0l73.27-51.76A57.19,57.19,0,0,0,230.15,117.1ZM58,57.5,73.13,98.76A8,8,0,0,0,80.64,104h94.72a8,8,0,0,0,7.51-5.24L198,57.5l13.07,50L128,166.21,44.9,107.5ZM40.68,124.11,114.13,176,93.41,190.65,57.09,165A41.06,41.06,0,0,1,40.68,124.11Zm87.32,91-20.73-14.65L128,185.8l20.73,14.64ZM198.91,165l-36.32,25.66L141.87,176l73.45-51.9A41.06,41.06,0,0,1,198.91,165Z" }));
});
i.displayName = "Regular";
export {
  i as Regular,
  i as default
};
