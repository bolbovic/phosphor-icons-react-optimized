var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var m = (r, o, e) => o in r ? f(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, a = (r, o) => {
  for (var e in o || (o = {}))
    c.call(o, e) && m(r, e, o[e]);
  if (t)
    for (var e of t(o))
      g.call(o, e) && m(r, e, o[e]);
  return r;
}, p = (r, o) => i(r, s(o));
import x, { forwardRef as R } from "react";
import b from "../lib/SSRBase.mjs";
import d from "../defs/DropboxLogo.mjs";
const l = R((r, o) => /* @__PURE__ */ x.createElement(b, p(a({ ref: o }, r), { weights: d })));
l.displayName = "DropboxLogo";
export {
  l as DropboxLogo
};