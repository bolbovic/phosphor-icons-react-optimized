var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? s(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, H = (a, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && o(a, e, r[e]);
  if (m)
    for (var e of m(r))
      l.call(r, e) && o(a, e, r[e]);
  return a;
};
var f = (a, r) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && l.call(a, t) && (e[t] = a[t]);
  return e;
};
import i, { forwardRef as R } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = R((t, e) => {
  var c = t, { children: a } = c, r = f(c, ["children"]);
  return /* @__PURE__ */ i.createElement(Z, H({ ref: e }, r), a, /* @__PURE__ */ i.createElement("path", { d: "M152,144a8,8,0,0,1-8,8H112a8,8,0,0,1-6.65-12.44L129.05,104H112a8,8,0,0,1,0-16h32a8,8,0,0,1,6.65,12.44L127,136h17A8,8,0,0,1,152,144Zm69.84,48A15.8,15.8,0,0,1,208,200H167.19a40,40,0,0,1-78.38,0H48a16,16,0,0,1-13.8-24.06C39.75,166.38,48,139.34,48,104a80,80,0,1,1,160,0c0,35.33,8.26,62.38,13.81,71.94A15.89,15.89,0,0,1,221.84,192Zm-71.22,8H105.38a24,24,0,0,0,45.24,0ZM208,184c-7.73-13.27-16-43.95-16-80a64,64,0,1,0-128,0c0,36.06-8.28,66.74-16,80Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};
