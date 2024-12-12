var i = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? i(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, c = (a, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && o(a, e, r[e]);
  if (l)
    for (var e of l(r))
      H.call(r, e) && o(a, e, r[e]);
  return a;
};
var f = (a, r) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && l)
    for (var t of l(a))
      r.indexOf(t) < 0 && H.call(a, t) && (e[t] = a[t]);
  return e;
};
import h, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const R = s((t, e) => {
  var m = t, { children: a } = m, r = f(m, ["children"]);
  return /* @__PURE__ */ h.createElement(A, c({ ref: e }, r), a, /* @__PURE__ */ h.createElement("path", { d: "M246.3,120.84l-40-80A15.92,15.92,0,0,0,192,32H64A15.92,15.92,0,0,0,49.7,40.84l-40,80A16,16,0,0,0,24,144h96v64H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V144h96a16,16,0,0,0,14.31-23.16ZM24,128,64,48H192l40,80Zm168-24a8,8,0,0,1-8,8H72a8,8,0,0,1,0-16H184A8,8,0,0,1,192,104Z" }));
});
R.displayName = "Regular";
export {
  R as Regular
};
