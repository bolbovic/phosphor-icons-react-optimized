var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var A = (a, r, e) => r in a ? s(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, c = (a, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && A(a, e, r[e]);
  if (m)
    for (var e of m(r))
      l.call(r, e) && A(a, e, r[e]);
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
import i, { forwardRef as H } from "react";
import R from "../../lib/OptiBase.mjs";
const V = H((t, e) => {
  var o = t, { children: a } = o, r = f(o, ["children"]);
  return /* @__PURE__ */ i.createElement(R, c({ ref: e }, r), a, /* @__PURE__ */ i.createElement("path", { d: "M248,128a8,8,0,0,1-8,8H215.64a87,87,0,0,1-7.33,28,8,8,0,0,1-7.3,4.73,7.9,7.9,0,0,1-3.27-.71,8,8,0,0,1-4-10.57,72.06,72.06,0,0,0-88.81-97.69,8,8,0,1,1-5.13-15.15A87.21,87.21,0,0,1,120,40.37V16a8,8,0,0,1,16,0V40.37A88.13,88.13,0,0,1,215.63,120H240A8,8,0,0,1,248,128Zm-34.08,82.62a8,8,0,1,1-11.84,10.76L181,198.23a87.69,87.69,0,0,1-45,17.4V240a8,8,0,0,1-16,0V215.63A88.13,88.13,0,0,1,40.37,136H16a8,8,0,0,1,0-16H40.37A88.31,88.31,0,0,1,63.14,68.54L42.08,45.38A8,8,0,1,1,53.92,34.62Zm-43.72-24.3L74,80.45A72,72,0,0,0,170.2,186.32Z" }));
});
V.displayName = "Regular";
export {
  V as Regular
};
