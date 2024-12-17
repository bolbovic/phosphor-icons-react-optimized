var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && c(a, e, t[e]);
  if (m)
    for (var e of m(t))
      l.call(t, e) && c(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && l.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as C } from "react";
import d from "../../lib/OptiBase.mjs";
const h = C((r, e) => {
  var o = r, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ f.createElement(d, p({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M128,20C92.87,20,44,86.52,44,152a84,84,0,0,0,168,0C212,86.52,163.13,20,128,20Zm0,208a76.08,76.08,0,0,1-76-76c0-28.46,10-59.73,27.33-85.78C94.81,43,113.91,28,128,28c11.39,0,26.05,9.8,39.42,25.82L125,101.34a4,4,0,0,0,2,6.54l28.3,7.08-7.25,36.26a4,4,0,0,0,3.14,4.7,3.44,3.44,0,0,0,.78.08,4,4,0,0,0,3.92-3.22l8-40a4,4,0,0,0-2.95-4.66l-25.58-6.4L172.44,60.2q2.16,2.91,4.23,6C194,92.27,204,123.54,204,152A76.08,76.08,0,0,1,128,228Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
