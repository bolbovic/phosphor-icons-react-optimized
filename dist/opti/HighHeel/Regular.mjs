var A = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var l = (a, r, e) => r in a ? A(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, f = (a, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && l(a, e, r[e]);
  if (m)
    for (var e of m(r))
      c.call(r, e) && l(a, e, r[e]);
  return a;
};
var i = (a, r) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && c.call(a, t) && (e[t] = a[t]);
  return e;
};
import s, { forwardRef as H } from "react";
import R from "../../lib/OptiBase.mjs";
const d = H((t, e) => {
  var o = t, { children: a } = o, r = i(o, ["children"]);
  return /* @__PURE__ */ s.createElement(R, f({ ref: e }, r), a, /* @__PURE__ */ s.createElement("path", { d: "M231,156.19,180,144.7,69.66,34.34a8,8,0,0,0-11.56.26C36.11,58.64,24,89,24,120v72a16,16,0,0,0,16,16H72a16,16,0,0,0,16-16V143.06c2.49,1.45,4.94,3,7.34,4.64a112.45,112.45,0,0,1,40.55,50.39A15.9,15.9,0,0,0,150.72,208H240a16,16,0,0,0,16-16v-4.73A31.72,31.72,0,0,0,231,156.19ZM72,192H40V128.29a110.88,110.88,0,0,1,32,7.12Zm168,0H150.68a128.36,128.36,0,0,0-46.27-57.46,126.9,126.9,0,0,0-64.12-22.26A110.67,110.67,0,0,1,64.46,51.78L170.34,157.66a8,8,0,0,0,3.9,2.14l53.24,12A15.81,15.81,0,0,1,240,187.31Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};
