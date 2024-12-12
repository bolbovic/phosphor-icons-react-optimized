var A = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var H = (a, r, e) => r in a ? A(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, p = (a, r) => {
  for (var e in r || (r = {}))
    h.call(r, e) && H(a, e, r[e]);
  if (m)
    for (var e of m(r))
      l.call(r, e) && H(a, e, r[e]);
  return a;
};
var V = (a, r) => {
  var e = {};
  for (var t in a)
    h.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && l.call(a, t) && (e[t] = a[t]);
  return e;
};
import v, { forwardRef as Z } from "react";
import c from "../../lib/OptiBase.mjs";
const f = Z((t, e) => {
  var o = t, { children: a } = o, r = V(o, ["children"]);
  return /* @__PURE__ */ v.createElement(c, p({ ref: e }, r), a, /* @__PURE__ */ v.createElement("path", { d: "M224,160h-8v-4a28,28,0,0,0-56,0v4h-8a8,8,0,0,0-8,8v40a8,8,0,0,0,8,8h72a8,8,0,0,0,8-8V168A8,8,0,0,0,224,160Zm-48-4a12,12,0,0,1,24,0v4H176Zm40,44H160V176h56Zm0-128H131.31L104,44.69A15.86,15.86,0,0,0,92.69,40H40A16,16,0,0,0,24,56V200.62A15.4,15.4,0,0,0,39.38,216h73.18a8,8,0,0,0,0-16H40V88H216v16a8,8,0,0,0,16,0V88A16,16,0,0,0,216,72ZM92.69,56l16,16H40V56Z" }));
});
f.displayName = "Regular";
export {
  f as Regular
};
