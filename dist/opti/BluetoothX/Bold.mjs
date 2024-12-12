var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var L = (a, l, e) => l in a ? i(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, d = (a, l) => {
  for (var e in l || (l = {}))
    m.call(l, e) && L(a, e, l[e]);
  if (o)
    for (var e of o(l))
      p.call(l, e) && L(a, e, l[e]);
  return a;
};
var c = (a, l) => {
  var e = {};
  for (var t in a)
    m.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import n from "../../lib/OptiBase.mjs";
const B = s((t, e) => {
  var r = t, { children: a } = r, l = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(n, d({ ref: e }, l), a, /* @__PURE__ */ f.createElement("path", { d: "M183.2,166.4,132,128l11.61-8.71a12,12,0,1,0-14.4-19.2L124,104V56l5.21,3.91a12,12,0,1,0,14.4-19.2L119.2,22.4A12,12,0,0,0,100,32v72L55.2,70.4A12,12,0,0,0,40.8,89.6L92,128,40.8,166.4a12,12,0,1,0,14.4,19.2L100,152v72a12,12,0,0,0,19.2,9.6l64-48a12,12,0,0,0,0-19.2ZM124,200V152l32,24ZM240.49,95.51a12,12,0,0,1-17,17L208,97l-15.51,15.52a12,12,0,1,1-17-17L191,80,175.52,64.49a12,12,0,1,1,17-17L208,63l15.51-15.52a12,12,0,0,1,17,17L225,80Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
