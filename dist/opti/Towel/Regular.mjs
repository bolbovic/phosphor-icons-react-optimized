var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var V = (a, r, e) => r in a ? i(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, H = (a, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && V(a, e, r[e]);
  if (m)
    for (var e of m(r))
      l.call(r, e) && V(a, e, r[e]);
  return a;
};
var c = (a, r) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && l.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const R = s((t, e) => {
  var o = t, { children: a } = o, r = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(A, H({ ref: e }, r), a, /* @__PURE__ */ f.createElement("path", { d: "M200,24H72A24,24,0,0,0,48,48V216a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V48a8,8,0,0,1,16,0V152a8,8,0,0,0,16,0V48A24,24,0,0,0,200,24ZM72,40H177.37A23.84,23.84,0,0,0,176,48V184H64V48A8,8,0,0,1,72,40ZM64,216V200H176v16Z" }));
});
R.displayName = "Regular";
export {
  R as Regular
};
