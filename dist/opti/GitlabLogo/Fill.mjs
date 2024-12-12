var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, l, a) => l in e ? s(e, l, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[l] = a, L = (e, l) => {
  for (var a in l || (l = {}))
    i.call(l, a) && o(e, a, l[a]);
  if (m)
    for (var a of m(l))
      p.call(l, a) && o(e, a, l[a]);
  return e;
};
var c = (e, l) => {
  var a = {};
  for (var t in e)
    i.call(e, t) && l.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && m)
    for (var t of m(e))
      l.indexOf(t) < 0 && p.call(e, t) && (a[t] = e[t]);
  return a;
};
import f, { forwardRef as A } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = A((t, a) => {
  var r = t, { children: e } = r, l = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, L({ ref: a }, l), e, /* @__PURE__ */ f.createElement("path", { d: "M230.15,117.1,210.25,41a11.94,11.94,0,0,0-22.79-1.11L169.78,88H86.22L68.54,39.87A11.94,11.94,0,0,0,45.75,41L25.85,117.1a57.19,57.19,0,0,0,22,61l73.27,51.76a11.91,11.91,0,0,0,13.74,0l73.27-51.76A57.19,57.19,0,0,0,230.15,117.1Zm-189.47,7L114.13,176,93.41,190.65,57.09,165A41.06,41.06,0,0,1,40.68,124.11Zm87.32,91-20.73-14.65L128,185.8l20.73,14.64ZM198.91,165l-36.32,25.66L141.87,176l73.45-51.9A41.06,41.06,0,0,1,198.91,165Z" }));
});
d.displayName = "Fill";
export {
  d as Fill
};
