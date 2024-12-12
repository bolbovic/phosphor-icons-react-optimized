var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var p = (a, r, e) => r in a ? i(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, L = (a, r) => {
  for (var e in r || (r = {}))
    l.call(r, e) && p(a, e, r[e]);
  if (m)
    for (var e of m(r))
      A.call(r, e) && p(a, e, r[e]);
  return a;
};
var c = (a, r) => {
  var e = {};
  for (var t in a)
    l.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && A.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import R from "../../lib/OptiBase.mjs";
const d = s((t, e) => {
  var o = t, { children: a } = o, r = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(R, L({ ref: e }, r), a, /* @__PURE__ */ f.createElement("path", { d: "M216,48V88a8,8,0,0,1-16,0V67.31L156.28,111A8,8,0,0,1,145,99.72L188.69,56H168a8,8,0,0,1,0-16h40A8,8,0,0,1,216,48Zm-8,112a8,8,0,0,0-8,8v20.69L53.66,42.34A8,8,0,0,0,42.34,53.66L188.69,200H168a8,8,0,0,0,0,16h40a8,8,0,0,0,8-8V168A8,8,0,0,0,208,160ZM99.72,145,42.34,202.34a8,8,0,0,0,11.32,11.32L111,156.28A8,8,0,0,0,99.72,145Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};
