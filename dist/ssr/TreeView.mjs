var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var w = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    w.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      c.call(e, o) && m(r, o, e[o]);
  return r;
}, i = (r, e) => p(r, s(e));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/TreeView.mjs";
const S = d((r, e) => /* @__PURE__ */ R.createElement(l, i(a({ ref: e }, r), { weights: n })));
S.displayName = "TreeView";
export {
  S as TreeView
};
