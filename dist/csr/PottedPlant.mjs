var i = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (e, t, o) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, m = (e, t) => {
  for (var o in t || (t = {}))
    s.call(t, o) && a(e, o, t[o]);
  if (r)
    for (var o of r(t))
      c.call(t, o) && a(e, o, t[o]);
  return e;
}, f = (e, t) => n(e, p(t));
import d, { forwardRef as l } from "react";
import P from "../lib/IconBase.mjs";
import w from "../defs/PottedPlant.mjs";
const I = l((e, t) => /* @__PURE__ */ d.createElement(P, f(m({ ref: t }, e), { weights: w })));
I.displayName = "PottedPlant";
export {
  I as PottedPlant
};