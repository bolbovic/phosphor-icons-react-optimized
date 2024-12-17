var Z = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var r = (a, s, e) => s in a ? Z(a, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[s] = e, p = (a, s) => {
  for (var e in s || (s = {}))
    o.call(s, e) && r(a, e, s[e]);
  if (c)
    for (var e of c(s))
      i.call(s, e) && r(a, e, s[e]);
  return a;
};
var C = (a, s) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && s.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && c)
    for (var t of c(a))
      s.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import n, { forwardRef as f } from "react";
import A from "../../lib/OptiBase.mjs";
const d = f((t, e) => {
  var m = t, { children: a } = m, s = C(m, ["children"]);
  return /* @__PURE__ */ n.createElement(A, p({ ref: e }, s), a, /* @__PURE__ */ n.createElement("path", { d: "M155.33,186.21a4,4,0,0,1-5.54,1.12C142.8,182.69,137,180,128,180s-14.8,2.69-21.79,7.33a4,4,0,1,1-4.42-6.66c7.82-5.21,15.28-8.67,26.21-8.67s18.39,3.46,26.21,8.67A4,4,0,0,1,155.33,186.21ZM181,117.33c-3.4,3.8-10.72,6.67-17,6.67s-13.62-2.87-17-6.67a4,4,0,0,0-6,5.33c4.92,5.5,14.37,9.34,23,9.34s18.06-3.84,23-9.33a4,4,0,1,0-6-5.34ZM220,48v55.78c0,35-9.4,68-26.48,92.92C176.13,222.05,152.86,236,128,236s-48.13-13.95-65.52-39.29C45.4,171.83,36,138.83,36,103.79V48a12,12,0,0,1,16.34-11.2C66.66,42.38,95.53,51.7,128,51.7s61.34-9.32,75.66-14.88A12,12,0,0,1,220,48Zm-8,0a4,4,0,0,0-5.44-3.74C191.72,50,161.77,59.7,128,59.7S64.28,50,49.44,44.27A4.14,4.14,0,0,0,48,44a3.87,3.87,0,0,0-2.23.7A4,4,0,0,0,44,48v55.77C44,172.28,81.68,228,128,228s84-55.72,84-124.21Zm-97,74.66a4,4,0,1,0-6-5.34c-3.4,3.8-10.72,6.67-17,6.67s-13.62-2.87-17-6.67a4,4,0,0,0-6,5.33c4.92,5.5,14.37,9.34,23,9.34S110.06,128.16,115,122.67Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
