var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var l = (a, r, e) => r in a ? i(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, A = (a, r) => {
  for (var e in r || (r = {}))
    o.call(r, e) && l(a, e, r[e]);
  if (m)
    for (var e of m(r))
      p.call(r, e) && l(a, e, r[e]);
  return a;
};
var f = (a, r) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import h, { forwardRef as s } from "react";
import H from "../../lib/OptiBase.mjs";
const R = s((t, e) => {
  var c = t, { children: a } = c, r = f(c, ["children"]);
  return /* @__PURE__ */ h.createElement(H, A({ ref: e }, r), a, /* @__PURE__ */ h.createElement("path", { d: "M168,224a8,8,0,0,1-8,8H96a8,8,0,1,1,0-16h64A8,8,0,0,1,168,224Zm-24-88H127l23.7-35.56A8,8,0,0,0,144,88H112a8,8,0,0,0,0,16h17.05l-23.7,35.56A8,8,0,0,0,112,152h32a8,8,0,0,0,0-16Zm77.84,56A15.8,15.8,0,0,1,208,200H48a16,16,0,0,1-13.8-24.06C39.75,166.38,48,139.34,48,104a80,80,0,1,1,160,0c0,35.33,8.26,62.38,13.81,71.94A15.89,15.89,0,0,1,221.84,192ZM208,184c-7.73-13.27-16-43.95-16-80a64,64,0,1,0-128,0c0,36.06-8.28,66.74-16,80Z" }));
});
R.displayName = "Regular";
export {
  R as Regular
};
