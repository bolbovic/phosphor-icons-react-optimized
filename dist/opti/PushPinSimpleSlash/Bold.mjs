var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && m(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && d.call(a, o) && (e[o] = a[o]);
  return e;
};
import h, { forwardRef as s } from "react";
import n from "../../lib/OptiBase.mjs";
const A = s((o, e) => {
  var l = o, { children: a } = l, t = f(l, ["children"]);
  return /* @__PURE__ */ h.createElement(n, c({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M216.88,207.93l-160-176A12,12,0,1,0,39.12,48.07L62,73.19,45.93,164H40a12,12,0,0,0,0,24h76v52a12,12,0,0,0,24,0V188h26.33l32.79,36.07a12,12,0,0,0,17.76-16.14ZM70.3,164,82.37,95.64,144.51,164ZM90.06,40a12,12,0,0,1,12-12H192a12,12,0,0,1,0,24h-1.7l15.33,86.84a12,12,0,0,1-9.73,13.91,12.59,12.59,0,0,1-2.1.18A12,12,0,0,1,182,143L165.93,52H102.06A12,12,0,0,1,90.06,40Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};
