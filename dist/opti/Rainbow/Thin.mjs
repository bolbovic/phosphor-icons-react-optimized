var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, v = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      v.call(t, e) && i(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && v.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((r, e) => {
  var o = r, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ c.createElement(d, V({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M180,168v16a4,4,0,0,1-8,0V168a44,44,0,0,0-88,0v16a4,4,0,0,1-8,0V168a52,52,0,0,1,104,0ZM128,84a84.09,84.09,0,0,0-84,84v16a4,4,0,0,0,8,0V168a76,76,0,0,1,152,0v16a4,4,0,0,0,8,0V168A84.09,84.09,0,0,0,128,84Zm0-32A116.13,116.13,0,0,0,12,168v16a4,4,0,0,0,8,0V168a108,108,0,0,1,216,0v16a4,4,0,0,0,8,0V168A116.13,116.13,0,0,0,128,52Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
