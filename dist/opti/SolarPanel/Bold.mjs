var d = Object.defineProperty;
var Z = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? d(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, H = (a, l) => {
  for (var e in l || (l = {}))
    r.call(l, e) && o(a, e, l[e]);
  if (Z)
    for (var e of Z(l))
      A.call(l, e) && o(a, e, l[e]);
  return a;
};
var M = (a, l) => {
  var e = {};
  for (var t in a)
    r.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && Z)
    for (var t of Z(a))
      l.indexOf(t) < 0 && A.call(a, t) && (e[t] = a[t]);
  return e;
};
import p, { forwardRef as h } from "react";
import c from "../../lib/OptiBase.mjs";
const f = h((t, e) => {
  var m = t, { children: a } = m, l = M(m, ["children"]);
  return /* @__PURE__ */ p.createElement(c, H({ ref: e }, l), a, /* @__PURE__ */ p.createElement("path", { d: "M32,100A12,12,0,0,1,44,88h8a12,12,0,0,1,0,24H44A12,12,0,0,1,32,100Zm96-64a12,12,0,0,0,12-12V16a12,12,0,0,0-24,0v8A12,12,0,0,0,128,36ZM65.77,54.74a12,12,0,1,0,17-17l-5.66-5.65a12,12,0,0,0-17,17Zm116,3.52a12,12,0,0,0,8.49-3.52l5.65-5.65a12,12,0,0,0-17-17l-5.66,5.65a12,12,0,0,0,8.49,20.49ZM192,100a12,12,0,0,0,12,12h8a12,12,0,0,0,0-24h-8A12,12,0,0,0,192,100ZM88,112a12,12,0,0,0,12-12,28,28,0,0,1,56,0,12,12,0,0,0,24,0,52,52,0,0,0-104,0A12,12,0,0,0,88,112ZM242.36,222.05A12,12,0,0,1,232,228H24a12,12,0,0,1-10.45-17.9l43-76A12,12,0,0,1,67,128H189a12,12,0,0,1,10.45,6.1l43,76A12,12,0,0,1,242.36,222.05ZM182,152H140v12h48.82ZM74,152l-6.78,12H116V152ZM44.57,204H116V188H53.61Zm166.86,0-9-16H140v16Z" }));
});
f.displayName = "Bold";
export {
  f as Bold
};
