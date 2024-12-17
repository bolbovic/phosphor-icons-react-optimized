var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((m, e) => {
  var l = m, { children: a } = l, t = n(l, ["children"]);
  return /* @__PURE__ */ c.createElement(d, Z({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M226.83,221.17,173.35,167.7a56.83,56.83,0,0,0,9.79-2.6,56,56,0,0,0,33.47-71.77,4,4,0,0,0-5.13-2.39l-55.31,20.13a56.78,56.78,0,0,0,7.06-11.38,56,56,0,0,0-69.9-76.28,4,4,0,0,0-2.39,5.12l20.13,55.32a56.33,56.33,0,0,0-11.38-7.06,56,56,0,0,0-76.28,69.9A4,4,0,0,0,25.47,149a4,4,0,0,0,3.06.13L83.85,129a56,56,0,0,0,62.84,87.66,4,4,0,0,0,2.39-5.13L129,156.17a56.5,56.5,0,0,0,11.38,7.06,55.88,55.88,0,0,0,22.48,5.24l58.36,58.36a4,4,0,0,0,5.66-5.66ZM99.88,29.71a48,48,0,0,1,32.72,89.9Zm25.21,92.67-7.45,2.71-2.72-7.45,7.46-2.72ZM29.71,140.14a48,48,0,0,1,89.9-32.72Zm110.43,70.17a48,48,0,0,1-32.72-89.9Zm24.29-49.82a48.08,48.08,0,0,1-44-27.89l89.9-32.72a48,48,0,0,1-45.79,60.61Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
