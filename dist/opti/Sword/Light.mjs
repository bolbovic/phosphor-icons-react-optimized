var f = Object.defineProperty;
var L = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var m = (a, l, e) => l in a ? f(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, p = (a, l) => {
  for (var e in l || (l = {}))
    o.call(l, e) && m(a, e, l[e]);
  if (L)
    for (var e of L(l))
      i.call(l, e) && m(a, e, l[e]);
  return a;
};
var h = (a, l) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && L)
    for (var t of L(a))
      l.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = s((t, e) => {
  var r = t, { children: a } = r, l = h(r, ["children"]);
  return /* @__PURE__ */ c.createElement(Z, p({ ref: e }, l), a, /* @__PURE__ */ c.createElement("path", { d: "M216,34H152a6,6,0,0,0-4.76,2.34l-65.39,85L70.6,110.1a14,14,0,0,0-19.8,0L38.1,122.8a14,14,0,0,0,0,19.81h0L59.51,164,30.1,193.42a14,14,0,0,0,0,19.8l12.69,12.69a14,14,0,0,0,19.8,0L92,196.5l21.4,21.4a14,14,0,0,0,19.8,0l12.7-12.69a14,14,0,0,0,0-19.81l-11.25-11.25,85-65.39A6,6,0,0,0,222,104V40A6,6,0,0,0,216,34ZM54.1,217.42a2,2,0,0,1-2.83,0L38.59,204.73a2,2,0,0,1,0-2.82L68,172.5,83.51,188Zm83.31-20.7-12.69,12.7a2,2,0,0,1-2.84,0l-75.29-75.3h0a2,2,0,0,1,0-2.83l12.69-12.7a2,2,0,0,1,2.84,0l75.29,75.3A2,2,0,0,1,137.41,196.72ZM210,101.05,126.09,165.6,112.49,152l51.75-51.76a6,6,0,0,0-8.48-8.48L104,143.51l-13.6-13.6L155,46H210Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
