var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var l = (a, r, e) => r in a ? s(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, c = (a, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && l(a, e, r[e]);
  if (m)
    for (var e of m(r))
      V.call(r, e) && l(a, e, r[e]);
  return a;
};
var f = (a, r) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && V.call(a, t) && (e[t] = a[t]);
  return e;
};
import i, { forwardRef as A } from "react";
import R from "../../lib/OptiBase.mjs";
const Z = A((t, e) => {
  var o = t, { children: a } = o, r = f(o, ["children"]);
  return /* @__PURE__ */ i.createElement(R, c({ ref: e }, r), a, /* @__PURE__ */ i.createElement("path", { d: "M184,64V192a8,8,0,0,1-16,0V64a8,8,0,0,1,16,0Zm40-8a8,8,0,0,0-8,8V192a8,8,0,0,0,16,0V64A8,8,0,0,0,224,56Zm-80,72a15.76,15.76,0,0,1-7.33,13.34L48.48,197.49A15.91,15.91,0,0,1,24,184.15V71.85A15.91,15.91,0,0,1,48.48,58.51l88.19,56.15A15.76,15.76,0,0,1,144,128Zm-16.18,0L40,72.08V183.93Z" }));
});
Z.displayName = "Regular";
export {
  Z as Regular
};
