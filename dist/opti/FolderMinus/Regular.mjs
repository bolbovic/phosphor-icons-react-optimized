var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var H = (e, r, a) => r in e ? i(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, A = (e, r) => {
  for (var a in r || (r = {}))
    l.call(r, a) && H(e, a, r[a]);
  if (m)
    for (var a of m(r))
      p.call(r, a) && H(e, a, r[a]);
  return e;
};
var c = (e, r) => {
  var a = {};
  for (var t in e)
    l.call(e, t) && r.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && m)
    for (var t of m(e))
      r.indexOf(t) < 0 && p.call(e, t) && (a[t] = e[t]);
  return a;
};
import f, { forwardRef as s } from "react";
import M from "../../lib/OptiBase.mjs";
const R = s((t, a) => {
  var o = t, { children: e } = o, r = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(M, A({ ref: a }, r), e, /* @__PURE__ */ f.createElement("path", { d: "M216,72H131.31L104,44.69A15.86,15.86,0,0,0,92.69,40H40A16,16,0,0,0,24,56V200.62A15.4,15.4,0,0,0,39.38,216H216.89A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72ZM92.69,56l16,16H40V56ZM216,200H40V88H216ZM104,136h48a8,8,0,0,1,0,16H104a8,8,0,0,1,0-16Z" }));
});
R.displayName = "Regular";
export {
  R as Regular
};
