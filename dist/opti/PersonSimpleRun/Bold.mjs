var s = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && c(a, e, t[e]);
  if (o)
    for (var e of o(t))
      d.call(t, e) && c(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && d.call(a, m) && (e[m] = a[m]);
  return e;
};
import i, { forwardRef as n } from "react";
import B from "../../lib/OptiBase.mjs";
const C = n((m, e) => {
  var r = m, { children: a } = r, t = f(r, ["children"]);
  return /* @__PURE__ */ i.createElement(B, l({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M152,92a36,36,0,1,0-36-36A36,36,0,0,0,152,92Zm0-48a12,12,0,1,1-12,12A12,12,0,0,1,152,44Zm76,93.4a12,12,0,0,1-7,10.91,66,66,0,0,1-21.47,3.78c-14,0-34.25-3.82-59.77-19a177,177,0,0,1-10.27,21C153.12,162.83,188,183.8,188,232a12,12,0,0,1-24,0c0-18.69-6.95-33.06-21.26-43.94-9.16-7-19.55-11-27.43-13.34-.81,1-1.64,2-2.5,2.95-20,22.87-44.82,34.76-72.25,34.76a97.33,97.33,0,0,1-9.75-.49,12,12,0,1,1,2.39-23.88c52.3,5.22,77.48-45.92,85.79-67.75C84.8,102.46,63.74,118.78,63.51,119a12,12,0,0,1-15-18.72C50.08,99,88,69.44,142.75,106.62c43.1,29.31,68.1,19.92,68.5,19.76a12,12,0,0,1,16.75,11Z" }));
});
C.displayName = "Bold";
export {
  C as Bold
};
