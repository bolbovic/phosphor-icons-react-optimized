var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (e, r, a) => r in e ? s(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, Z = (e, r) => {
  for (var a in r || (r = {}))
    p.call(r, a) && o(e, a, r[a]);
  if (m)
    for (var a of m(r))
      l.call(r, a) && o(e, a, r[a]);
  return e;
};
var f = (e, r) => {
  var a = {};
  for (var t in e)
    p.call(e, t) && r.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && m)
    for (var t of m(e))
      r.indexOf(t) < 0 && l.call(e, t) && (a[t] = e[t]);
  return a;
};
import i, { forwardRef as v } from "react";
import H from "../../lib/OptiBase.mjs";
const R = v((t, a) => {
  var c = t, { children: e } = c, r = f(c, ["children"]);
  return /* @__PURE__ */ i.createElement(H, Z({ ref: a }, r), e, /* @__PURE__ */ i.createElement("path", { d: "M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.27,47,25.53a8,8,0,0,0,4.2,0c1-.26,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm0,16v56c0,2.71-.08,5.37-.23,8H136V56ZM48,56h72v64H48.23c-.15-2.63-.23-5.29-.23-8Zm2.06,80H120v84.55a130.85,130.85,0,0,1-30.93-18.74C67.92,184.51,54.87,162.44,50.08,136ZM167.4,201.42A131.31,131.31,0,0,1,136,220.53V136h69.91C201.16,162.24,188.27,184.18,167.4,201.42Z" }));
});
R.displayName = "Regular";
export {
  R as Regular
};
