var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (a, m, e) => m in a ? i(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, Z = (a, m) => {
  for (var e in m || (m = {}))
    d.call(m, e) && p(a, e, m[e]);
  if (o)
    for (var e of o(m))
      l.call(m, e) && p(a, e, m[e]);
  return a;
};
var c = (a, m) => {
  var e = {};
  for (var t in a)
    d.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      m.indexOf(t) < 0 && l.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import n from "../../lib/OptiBase.mjs";
const A = s((t, e) => {
  var r = t, { children: a } = r, m = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(n, Z({ ref: e }, m), a, /* @__PURE__ */ f.createElement("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm0-128a44.05,44.05,0,0,0-44,44,12,12,0,0,1-24,0,68.07,68.07,0,0,1,68-68,12,12,0,0,1,0,24Zm68,44a68.07,68.07,0,0,1-68,68,12,12,0,0,1,0-24,44.05,44.05,0,0,0,44-44,12,12,0,0,1,24,0Zm-68,28a28,28,0,1,1,28-28A28,28,0,0,1,128,156Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};
