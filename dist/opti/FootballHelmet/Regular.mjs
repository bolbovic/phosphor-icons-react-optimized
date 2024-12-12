var f = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? f(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, p = (a, r) => {
  for (var e in r || (r = {}))
    A.call(r, e) && o(a, e, r[e]);
  if (l)
    for (var e of l(r))
      H.call(r, e) && o(a, e, r[e]);
  return a;
};
var c = (a, r) => {
  var e = {};
  for (var t in a)
    A.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && l)
    for (var t of l(a))
      r.indexOf(t) < 0 && H.call(a, t) && (e[t] = a[t]);
  return e;
};
import Z, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const R = i((t, e) => {
  var m = t, { children: a } = m, r = c(m, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, p({ ref: e }, r), a, /* @__PURE__ */ Z.createElement("path", { d: "M96,164a12,12,0,1,1-12-12A12,12,0,0,1,96,164Zm136,12v32a16,16,0,0,1-16,16H180a16.1,16.1,0,0,1-15.35-11.47L153.84,176H131.91l3.56,12a5.44,5.44,0,0,1,.15.54A16,16,0,0,1,120,208H72.14a8,8,0,0,1-4.52-1.4A100,100,0,0,1,24,124c0-54.36,44.24-99.2,98.58-100A100,100,0,0,1,224,124v4a8,8,0,0,1-8,8H158.71l7.09,24H216A16,16,0,0,1,232,176ZM120,192l-15.45-52a4.77,4.77,0,0,1-.15-.54A16,16,0,0,1,120,120h87.91A84,84,0,0,0,122.8,40C77.16,40.64,40,78.31,40,124a84,84,0,0,0,34.67,68Zm29.13-32L142,136H120l7.14,24ZM216,176H170.52L180,208h36Z" }));
});
R.displayName = "Regular";
export {
  R as Regular
};
