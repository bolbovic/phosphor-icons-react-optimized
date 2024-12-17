var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && H(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && H(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var o in a)
    l.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && p.call(a, o) && (e[o] = a[o]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const A = i((o, e) => {
  var m = o, { children: a } = m, t = d(m, ["children"]);
  return /* @__PURE__ */ c.createElement(s, V({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M216,68H133.39l-26-29.29a20,20,0,0,0-15-6.71H40A20,20,0,0,0,20,52V200.62A19.41,19.41,0,0,0,39.38,220H216.89A19.13,19.13,0,0,0,236,200.89V88A20,20,0,0,0,216,68ZM90.61,56l10.67,12H44V56ZM212,196H44V92H212Zm-72-76v12h12a12,12,0,0,1,0,24H140v12a12,12,0,0,1-24,0V156H104a12,12,0,0,1,0-24h12V120a12,12,0,0,1,24,0Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};
