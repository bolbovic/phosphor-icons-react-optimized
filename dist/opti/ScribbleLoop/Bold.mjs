var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && m(a, e, t[e]);
  return a;
};
var C = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && d.call(a, o) && (e[o] = a[o]);
  return e;
};
import f, { forwardRef as s } from "react";
import n from "../../lib/OptiBase.mjs";
const B = s((o, e) => {
  var c = o, { children: a } = c, t = C(c, ["children"]);
  return /* @__PURE__ */ f.createElement(n, l({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M252.9,152c-1.33-1.47-23.75-25.85-60.21-40.69-2.15-18.28-9.1-34.9-20.1-47.71C157.12,45.52,134.79,36,108,36,54.44,36,19.69,83.79,18.24,85.82a12,12,0,0,0,19.53,14C38.05,99.38,66.65,60,108,60c19.85,0,35.45,6.45,46.38,19.18a61.35,61.35,0,0,1,12.4,24A143.6,143.6,0,0,0,136.61,100c-27,0-49.79,7.13-65.85,20.63C56.3,132.79,48,149.78,48,167.25,48,193.46,67.44,220,104.61,220c51.93,0,82.34-40.28,87.87-82.43a156.46,156.46,0,0,1,42.62,30.48A12,12,0,1,0,252.9,152ZM152.37,173.74C144.09,183.9,129.09,196,104.61,196,82.08,196,72,181.56,72,167.25,72,146.42,92.22,124,136.61,124a119.85,119.85,0,0,1,32.64,4.62C168.24,145.44,162.21,161.66,152.37,173.74Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
