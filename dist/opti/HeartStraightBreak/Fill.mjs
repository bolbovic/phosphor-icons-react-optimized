var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? d(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, c = (a, l) => {
  for (var e in l || (l = {}))
    i.call(l, e) && o(a, e, l[e]);
  if (r)
    for (var e of r(l))
      p.call(l, e) && o(a, e, l[e]);
  return a;
};
var f = (a, l) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import s, { forwardRef as n } from "react";
import L from "../../lib/OptiBase.mjs";
const h = n((t, e) => {
  var m = t, { children: a } = m, l = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(L, c({ ref: e }, l), a, /* @__PURE__ */ s.createElement("path", { d: "M113.29,55.31A58,58,0,0,0,32.93,139l89.37,90.66a8,8,0,0,0,11.4,0L223,139a58,58,0,0,0-82-82.1h0l-24.4,23L143,106.32a8,8,0,0,1,0,11.32l-20.69,20.69A8,8,0,1,1,111,127l15-15L99.5,85.42a8,8,0,0,1,.22-11.53l13.55-12.78a4,4,0,0,0,0-5.8Z" }));
});
h.displayName = "Fill";
export {
  h as Fill
};
