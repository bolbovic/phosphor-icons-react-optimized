var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    l.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      c.call(e, a) && t(r, a, e[a]);
  return r;
}, i = (r, e) => p(r, s(e));
import E, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/Equalizer.mjs";
const q = R((r, e) => /* @__PURE__ */ E.createElement(d, i(m({ ref: e }, r), { weights: n })));
q.displayName = "Equalizer";
export {
  q as Equalizer
};