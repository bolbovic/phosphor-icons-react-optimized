var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && m(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && m(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var l in a)
    c.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && o)
    for (var l of o(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import f, { forwardRef as s } from "react";
import v from "../../lib/OptiBase.mjs";
const A = s((l, e) => {
  var r = l, { children: a } = r, t = V(r, ["children"]);
  return /* @__PURE__ */ f.createElement(v, d({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M220,148v36c0,13.85-1.63,26.52-4.58,35.68a12,12,0,0,1-22.84-7.36c2.14-6.65,3.42-17.24,3.42-28.32V148a8,8,0,0,0-16,0v4a12,12,0,0,1-24,0V132a8,8,0,0,0-16,0v12a12,12,0,0,1-24,0V76a8,8,0,0,0-16,0V184a12,12,0,0,1-22.18,6.34l-18.68-30-.21-.34A8,8,0,0,0,45,167.92L70.27,209.8a12,12,0,0,1-20.56,12.39l-25.31-42-.12-.2A32,32,0,0,1,76,142.83V76a32,32,0,0,1,64,0v25a32,32,0,0,1,36.78,17A32,32,0,0,1,220,148ZM252.48,47.51l-32-32a12,12,0,0,0-17,17L215,44H172a12,12,0,0,0,0,24h43L203.51,79.51a12,12,0,1,0,17,17l32-32A12,12,0,0,0,252.48,47.51Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};
