var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      L.call(t, e) && i(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && L.call(a, r) && (e[r] = a[r]);
  return e;
};
import l, { forwardRef as V } from "react";
import d from "../../lib/OptiBase.mjs";
const h = V((r, e) => {
  var o = r, { children: a } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ l.createElement(d, c({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M200,34a6,6,0,0,0-6,6v72.84L71.37,36.14a14,14,0,0,0-14.21-.37A13.69,13.69,0,0,0,50,47.88V208.12a13.69,13.69,0,0,0,7.16,12.11,14,14,0,0,0,14.21-.37L194,143.17V216a6,6,0,0,0,12,0V40A6,6,0,0,0,200,34Zm-6.88,95.56L65,209.69a2,2,0,0,1-2,.05,1.79,1.79,0,0,1-1-1.62V47.88a1.79,1.79,0,0,1,1-1.62A2.1,2.1,0,0,1,64,46a2,2,0,0,1,1,.31l128.12,80.13a1.82,1.82,0,0,1,0,3.12Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
