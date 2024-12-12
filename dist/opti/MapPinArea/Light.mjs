var Z = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var C = (a, t) => {
  var e = {};
  for (var c in a)
    i.call(a, c) && t.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && m)
    for (var c of m(a))
      t.indexOf(c) < 0 && p.call(a, c) && (e[c] = a[c]);
  return e;
};
import f, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const l = d((c, e) => {
  var r = c, { children: a } = r, t = C(r, ["children"]);
  return /* @__PURE__ */ f.createElement(h, s({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M114,80a14,14,0,1,1,14,14A14,14,0,0,1,114,80ZM66,80a62,62,0,0,1,124,0c0,58.81-56.61,91.83-59,93.21a6,6,0,0,1-6,0C122.61,171.83,66,138.81,66,80Zm12,0c0,44.52,38.81,73.49,50,80.91,11.18-7.42,50-36.38,50-80.91A50,50,0,0,0,78,80Zm124.08,69.51a6,6,0,1,0-4.16,11.25C215.5,167.25,226,175.94,226,184c0,16.08-40.25,34-98,34s-98-17.92-98-34c0-8.06,10.5-16.75,28.08-23.24a6,6,0,1,0-4.16-11.25C30.76,158.06,18,170.31,18,184c0,13.34,12.18,25.38,34.31,33.88C72.62,225.7,99.5,230,128,230s55.38-4.3,75.69-12.12C225.82,209.38,238,197.34,238,184,238,170.31,225.24,158.06,202.08,149.51Z" }));
});
l.displayName = "Light";
export {
  l as Light
};
