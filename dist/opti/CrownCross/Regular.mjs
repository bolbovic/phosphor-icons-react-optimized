var i = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var V = (a, r, e) => r in a ? i(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, l = (a, r) => {
  for (var e in r || (r = {}))
    o.call(r, e) && V(a, e, r[e]);
  if (c)
    for (var e of c(r))
      p.call(r, e) && V(a, e, r[e]);
  return a;
};
var f = (a, r) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && c)
    for (var t of c(a))
      r.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import h, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const C = s((t, e) => {
  var m = t, { children: a } = m, r = f(m, ["children"]);
  return /* @__PURE__ */ h.createElement(A, l({ ref: e }, r), a, /* @__PURE__ */ h.createElement("path", { d: "M180,56c-17.74,0-33.21,6.48-44,17.16V40h16a8,8,0,0,0,0-16H136V8a8,8,0,0,0-16,0V24H104a8,8,0,0,0,0,16h16V73.16C109.21,62.48,93.74,56,76,56a60.07,60.07,0,0,0-60,60c0,29.86,14.54,48.85,26.73,59.52A90.48,90.48,0,0,0,64,189.34V208a16,16,0,0,0,16,16h96a16,16,0,0,0,16-16V189.34a90.48,90.48,0,0,0,21.27-13.82C225.46,164.85,240,145.86,240,116A60.07,60.07,0,0,0,180,56Zm1.47,120.41A8,8,0,0,0,176,184v24H80V184a8,8,0,0,0-5.47-7.59C74.1,176.27,32,161.7,32,116A44.05,44.05,0,0,1,76,72c25.5,0,44,16.82,44,40v64a8,8,0,0,0,16,0V112c0-23.18,18.5-40,44-40a44.05,44.05,0,0,1,44,44C224,161.4,183.18,175.83,181.47,176.41Z" }));
});
C.displayName = "Regular";
export {
  C as Regular
};
