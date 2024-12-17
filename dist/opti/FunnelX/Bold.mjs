var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var m = (a, l, e) => l in a ? i(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, d = (a, l) => {
  for (var e in l || (l = {}))
    p.call(l, e) && m(a, e, l[e]);
  if (o)
    for (var e of o(l))
      L.call(l, e) && m(a, e, l[e]);
  return a;
};
var c = (a, l) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      l.indexOf(t) < 0 && L.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import n from "../../lib/OptiBase.mjs";
const A = s((t, e) => {
  var r = t, { children: a } = r, l = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(n, d({ ref: e }, l), a, /* @__PURE__ */ f.createElement("path", { d: "M230.78,69.45A20,20,0,0,0,216,36H40A20,20,0,0,0,25.2,69.45l.12.14L92,140.75V216a20,20,0,0,0,31.09,16.65l32-21.34a20,20,0,0,0,8.9-16.64V140.75l66.67-71.16ZM143.23,127.8A12,12,0,0,0,140,136v56.52l-24,16V136a12,12,0,0,0-3.24-8.2L49.23,60H206.75Zm105.26,79.72a12,12,0,1,1-17,17L216,209l-15.52,15.51a12,12,0,0,1-17-17L199,192l-15.52-15.52a12,12,0,0,1,17-17L216,175l15.51-15.52a12,12,0,1,1,17,17L233,192Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};
