var a = Object.defineProperty, p = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var r = (o, e, t) => e in o ? a(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, i = (o, e) => {
  for (var t in e || (e = {}))
    f.call(e, t) && r(o, t, e[t]);
  if (m)
    for (var t of m(e))
      l.call(e, t) && r(o, t, e[t]);
  return o;
}, s = (o, e) => p(o, c(e));
import S, { forwardRef as N } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/MusicNotesSimple.mjs";
const n = N((o, e) => /* @__PURE__ */ S.createElement(R, s(i({ ref: e }, o), { weights: d })));
n.displayName = "MusicNotesSimple";
export {
  n as MusicNotesSimple
};