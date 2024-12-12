var d = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, f = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && m(a, e, t[e]);
  if (l)
    for (var e of l(t))
      p.call(t, e) && m(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as h } from "react";
import i from "../../lib/OptiBase.mjs";
const R = h((r, e) => {
  var V = r, { children: a } = V, t = s(V, ["children"]);
  return /* @__PURE__ */ c.createElement(i, f({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M213.38,221.92a8,8,0,0,1-11.3-.54L136,148.69V192h24a8,8,0,0,1,0,16H96a8,8,0,0,1,0-16h24V131.09L64,69.49V88a8,8,0,0,1-16,0V56a8,8,0,0,1,.72-3.31l-6.64-7.31A8,8,0,1,1,53.92,34.62l160,176A8,8,0,0,1,213.38,221.92ZM105.79,64H120V80.43a8,8,0,0,0,16,0V64h56V88a8,8,0,0,0,16,0V56a8,8,0,0,0-8-8H105.79a8,8,0,0,0,0,16Z" }));
});
R.displayName = "Regular";
export {
  R as Regular,
  R as default
};
