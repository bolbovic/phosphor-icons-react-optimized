var s = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, r, e) => r in a ? s(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, c = (a, r) => {
  for (var e in r || (r = {}))
    o.call(r, e) && m(a, e, r[e]);
  if (l)
    for (var e of l(r))
      p.call(r, e) && m(a, e, r[e]);
  return a;
};
var f = (a, r) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && l)
    for (var t of l(a))
      r.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import i, { forwardRef as R } from "react";
import d from "../../lib/OptiBase.mjs";
const n = R((t, e) => {
  var H = t, { children: a } = H, r = f(H, ["children"]);
  return /* @__PURE__ */ i.createElement(d, c({ ref: e }, r), a, /* @__PURE__ */ i.createElement("path", { d: "M248,128H200.94l-28-56H192a8,8,0,0,0,0-16H64a8,8,0,0,0,0,16H83.06l-28,56H8a8,8,0,0,0,0,16H47.06L24.84,188.42a8,8,0,0,0,3.58,10.73A7.9,7.9,0,0,0,32,200a8,8,0,0,0,7.17-4.42L64.94,144H191.06l25.78,51.58A8,8,0,0,0,224,200a7.9,7.9,0,0,0,3.57-.85,8,8,0,0,0,3.58-10.73L208.94,144H248a8,8,0,0,0,0-16ZM72.94,128l28-56h54.12l28,56Z" }));
});
n.displayName = "Regular";
export {
  n as Regular
};
