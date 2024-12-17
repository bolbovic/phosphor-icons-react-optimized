var Z = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var L = (e, t, a) => t in e ? Z(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, n = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && L(e, a, t[a]);
  if (l)
    for (var a of l(t))
      c.call(t, a) && L(e, a, t[a]);
  return e;
};
var A = (e, t) => {
  var a = {};
  for (var o in e)
    p.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && l)
    for (var o of l(e))
      t.indexOf(o) < 0 && c.call(e, o) && (a[o] = e[o]);
  return a;
};
import r, { forwardRef as i } from "react";
import M from "../../lib/OptiBase.mjs";
const d = i((o, a) => {
  var m = o, { children: e } = m, t = A(m, ["children"]);
  return /* @__PURE__ */ r.createElement(M, n({ ref: a }, t), e, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M220.23,110.84,128,176,35.77,110.84,53.5,43A3.93,3.93,0,0,1,61,42.62L80.65,96h94.7L195,42.62a3.93,3.93,0,0,1,7.53.38Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M230.15,117.1,210.25,41a11.94,11.94,0,0,0-22.79-1.11L169.78,88H86.22L68.54,39.87A11.94,11.94,0,0,0,45.75,41L25.85,117.1a57.19,57.19,0,0,0,22,61l73.27,51.76a11.91,11.91,0,0,0,13.74,0l73.27-51.76A57.19,57.19,0,0,0,230.15,117.1ZM58,57.5,73.13,98.76A8,8,0,0,0,80.64,104h94.72a8,8,0,0,0,7.51-5.24L198,57.5l13.07,50L128,166.21,44.9,107.5ZM40.68,124.11,114.13,176,93.41,190.65,57.09,165A41.06,41.06,0,0,1,40.68,124.11Zm87.32,91-20.73-14.65L128,185.8l20.73,14.64ZM198.91,165l-36.32,25.66L141.87,176l73.45-51.9A41.06,41.06,0,0,1,198.91,165Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};
