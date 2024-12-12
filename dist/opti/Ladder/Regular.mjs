var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var L = (a, r, e) => r in a ? f(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, p = (a, r) => {
  for (var e in r || (r = {}))
    o.call(r, e) && L(a, e, r[e]);
  if (m)
    for (var e of m(r))
      h.call(r, e) && L(a, e, r[e]);
  return a;
};
var Z = (a, r) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && h.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const A = i((t, e) => {
  var l = t, { children: a } = l, r = Z(l, ["children"]);
  return /* @__PURE__ */ c.createElement(s, p({ ref: e }, r), a, /* @__PURE__ */ c.createElement("path", { d: "M215.52,213.26,164.51,73l9.09-25H184a8,8,0,0,0,0-16H88a8,8,0,0,0,0,16h4.58L32.48,213.26a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,40,224a8,8,0,0,0,7.52-5.27L57.24,192h47l-7.74,21.26a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,104,224a8,8,0,0,0,7.52-5.27L130,168H182l18.45,50.73A8,8,0,0,0,208,224a8.14,8.14,0,0,0,2.73-.48A8,8,0,0,0,215.52,213.26Zm-88-85.26h-47L92.15,96h47Zm29.09-80L144.94,80H98L109.6,48ZM63.06,176,74.7,144h47L110,176Zm72.72-24L156,96.41,176.21,152Z" }));
});
A.displayName = "Regular";
export {
  A as Regular
};
