var C = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? C(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, l = (a, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && o(a, e, r[e]);
  if (c)
    for (var e of c(r))
      s.call(r, e) && o(a, e, r[e]);
  return a;
};
var f = (a, r) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && c)
    for (var t of c(a))
      r.indexOf(t) < 0 && s.call(a, t) && (e[t] = a[t]);
  return e;
};
import i, { forwardRef as R } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = R((t, e) => {
  var m = t, { children: a } = m, r = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(Z, l({ ref: e }, r), a, /* @__PURE__ */ i.createElement("path", { d: "M112,80a16,16,0,1,1,16,16A16,16,0,0,1,112,80ZM64,80a64,64,0,0,1,128,0c0,59.95-57.58,93.54-60,94.95a8,8,0,0,1-7.94,0C121.58,173.54,64,140,64,80Zm16,0c0,42.2,35.84,70.21,48,78.5,12.15-8.28,48-36.3,48-78.5a48,48,0,0,0-96,0Zm122.77,67.63a8,8,0,0,0-5.54,15C213.74,168.74,224,176.92,224,184c0,13.36-36.52,32-96,32s-96-18.64-96-32c0-7.08,10.26-15.26,26.77-21.36a8,8,0,0,0-5.54-15C29.22,156.49,16,169.41,16,184c0,31.18,57.71,48,112,48s112-16.82,112-48C240,169.41,226.78,156.49,202.77,147.63Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};
