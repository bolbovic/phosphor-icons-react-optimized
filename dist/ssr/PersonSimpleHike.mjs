var p = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (r, e, o) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, t = (r, e) => {
  for (var o in e || (e = {}))
    l.call(e, o) && i(r, o, e[o]);
  if (m)
    for (var o of m(e))
      n.call(e, o) && i(r, o, e[o]);
  return r;
}, a = (r, e) => s(r, f(e));
import S, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/PersonSimpleHike.mjs";
const k = c((r, e) => /* @__PURE__ */ S.createElement(R, a(t({ ref: e }, r), { weights: d })));
k.displayName = "PersonSimpleHike";
export {
  k as PersonSimpleHike
};
