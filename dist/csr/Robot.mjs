var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var m = (t, o, e) => o in t ? i(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, a = (t, o) => {
  for (var e in o || (o = {}))
    c.call(o, e) && m(t, e, o[e]);
  if (r)
    for (var e of r(o))
      R.call(o, e) && m(t, e, o[e]);
  return t;
}, f = (t, o) => p(t, s(o));
import n, { forwardRef as b } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/Robot.mjs";
const w = b((t, o) => /* @__PURE__ */ n.createElement(d, f(a({ ref: o }, t), { weights: l })));
w.displayName = "Robot";
export {
  w as Robot
};