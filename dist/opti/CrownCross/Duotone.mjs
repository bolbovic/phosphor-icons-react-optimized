var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && V(a, e, t[e]);
  if (o)
    for (var e of o(t))
      n.call(t, e) && V(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var c in a)
    p.call(a, c) && t.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && o)
    for (var c of o(a))
      t.indexOf(c) < 0 && n.call(a, c) && (e[c] = a[c]);
  return e;
};
import r, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const f = s((c, e) => {
  var m = c, { children: a } = m, t = h(m, ["children"]);
  return /* @__PURE__ */ r.createElement(d, A({ ref: e }, t), a, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M232,116c0,52-48,68-48,68v24a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V184s-48-16-48-68A52,52,0,0,1,76,64c28.72,0,52,19.28,52,48,0-28.72,23.28-48,52-48A52,52,0,0,1,232,116Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M180,56c-17.74,0-33.21,6.48-44,17.16V40h16a8,8,0,0,0,0-16H136V8a8,8,0,0,0-16,0V24H104a8,8,0,0,0,0,16h16V73.16C109.21,62.48,93.74,56,76,56a60.07,60.07,0,0,0-60,60c0,29.86,14.54,48.85,26.73,59.52A90.48,90.48,0,0,0,64,189.34V208a16,16,0,0,0,16,16h96a16,16,0,0,0,16-16V189.34a90.48,90.48,0,0,0,21.27-13.82C225.46,164.85,240,145.86,240,116A60.07,60.07,0,0,0,180,56Zm1.47,120.41A8,8,0,0,0,176,184v24H80V184a8,8,0,0,0-5.47-7.59C74.1,176.27,32,161.7,32,116A44.05,44.05,0,0,1,76,72c25.5,0,44,16.82,44,40v64a8,8,0,0,0,16,0V112c0-23.18,18.5-40,44-40a44.05,44.05,0,0,1,44,44C224,161.4,183.18,175.83,181.47,176.41Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};