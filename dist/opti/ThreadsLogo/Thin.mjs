var C = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, e, c) => e in a ? C(a, e, { enumerable: !0, configurable: !0, writable: !0, value: c }) : a[e] = c, s = (a, e) => {
  for (var c in e || (e = {}))
    i.call(e, c) && o(a, c, e[c]);
  if (r)
    for (var c of r(e))
      p.call(e, c) && o(a, c, e[c]);
  return a;
};
var n = (a, e) => {
  var c = {};
  for (var t in a)
    i.call(a, t) && e.indexOf(t) < 0 && (c[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      e.indexOf(t) < 0 && p.call(a, t) && (c[t] = a[t]);
  return c;
};
import f, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const l = d((t, c) => {
  var m = t, { children: a } = m, e = n(m, ["children"]);
  return /* @__PURE__ */ f.createElement(h, s({ ref: c }, e), a, /* @__PURE__ */ f.createElement("path", { d: "M184,126.84a59.8,59.8,0,0,0-12.42-7.16c-3-29.38-22-38.4-30.56-41-18.16-5.5-39,1-48.36,15.09a4,4,0,0,0,6.66,4.44c7.4-11.1,24.7-16.32,39.38-11.87,8.12,2.45,20.95,9.6,24.41,30.32a75.83,75.83,0,0,0-20.71-2.88c-13.14,0-25.37,3.34-34.44,9.43-10.45,7-16,17-16,28.78,0,20.7,17,31.52,33.71,31.52a44,44,0,0,0,31.47-13.58c9.56-9.94,14.68-24.19,14.82-41.23a50.18,50.18,0,0,1,7.19,4.51c11,8.32,16.81,20.34,16.81,34.78,0,11.73-6.25,24.46-16.7,34.05C170.36,210.24,154.21,220,128,220c-50.43,0-76-30.95-76-92s25.57-92,76-92c34.29,0,57.26,14.5,68.27,43.08a4,4,0,1,0,7.46-2.87C191.42,44.22,165.94,28,128,28,73.05,28,44,62.58,44,128s29.05,100,84,100c28.79,0,46.72-10.9,56.7-20.05,12.09-11.08,19.3-26,19.3-39.95C204,151,197.09,136.73,184,126.84Zm-32.6,37.55a35.92,35.92,0,0,1-25.7,11.13c-12.38,0-25.71-7.36-25.71-23.52,0-20.76,22-30.21,42.41-30.21A67.08,67.08,0,0,1,164,125.3c0,.88.05,1.78.05,2.7C164,143.25,159.65,155.83,151.41,164.39Z" }));
});
l.displayName = "Thin";
export {
  l as Thin
};
