var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? h(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, L = (a, l) => {
  for (var e in l || (l = {}))
    i.call(l, e) && o(a, e, l[e]);
  if (r)
    for (var e of r(l))
      p.call(l, e) && o(a, e, l[e]);
  return a;
};
var c = (a, l) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const n = s((t, e) => {
  var m = t, { children: a } = m, l = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(d, L({ ref: e }, l), a, /* @__PURE__ */ f.createElement("path", { d: "M244.24,59.76l-48-48a6,6,0,0,0-8.48,8.48L207.52,40l-73.86,73.86L97.9,78.1a14,14,0,0,0-19.8,0l-56,56A13.94,13.94,0,0,0,18,144v80a14,14,0,0,0,14,14h80a13.94,13.94,0,0,0,9.9-4.1l56-56a14,14,0,0,0,0-19.8l-35.76-35.76L216,48.48l19.76,19.76a6,6,0,1,0,8.48-8.48ZM169.41,166.58a2,2,0,0,1,0,2.84l-56,56A2,2,0,0,1,112,226H32a2,2,0,0,1-2-2V144a2,2,0,0,1,.58-1.42l56-56A2,2,0,0,1,88,86a2.07,2.07,0,0,1,1.42.58l35.75,35.76L83.76,163.76a6,6,0,1,0,8.48,8.48l41.42-41.41Z" }));
});
n.displayName = "Light";
export {
  n as Light
};