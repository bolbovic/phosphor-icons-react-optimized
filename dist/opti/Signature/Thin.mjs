var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, e, c) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: c }) : a[e] = c, h = (a, e) => {
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
import C, { forwardRef as s } from "react";
import H from "../../lib/OptiBase.mjs";
const d = s((t, c) => {
  var m = t, { children: a } = m, e = n(m, ["children"]);
  return /* @__PURE__ */ C.createElement(H, h({ ref: c }, e), a, /* @__PURE__ */ C.createElement("path", { d: "M232,172H57.32c4-7.83,8.18-16.11,12.21-24.56,15.14,3.55,34.13-8.06,56.54-34.59,3.67,12.5,12.53,34.83,29.08,35.15h.35c8.71,0,17.64-6.25,27.16-19.06C187.17,137.14,199.31,148,232,148a4,4,0,0,0,0-8c-42.88,0-44-19.24-44-20a4,4,0,0,0-7.35-2.18C168.74,136.1,160.42,140,155.48,140h-.18c-13-.25-21.29-26.52-23.38-36.61a4,4,0,0,0-7-1.69c-20.94,26.27-39.06,39.55-51.8,38.2C97.31,87.5,105.19,53.16,96.49,37.77,94,33.31,88.7,28,77.91,28,64.09,28,52.54,42.41,47,66.54A122.7,122.7,0,0,0,45.46,113c2.64,15.29,8.39,26.05,16.69,31.35-4.58,9.6-9.3,19-13.84,27.68H24a4,4,0,0,0,0,8H44.1c-12.87,24.17-23.37,41.68-23.53,41.94a4,4,0,0,0,1.37,5.49A3.93,3.93,0,0,0,24,228a4,4,0,0,0,3.43-1.94c.16-.27,11.85-19.75,25.72-46.06H232a4,4,0,0,0,0-8ZM53.34,111.61a114.81,114.81,0,0,1,1.49-43.29C58.4,52.7,66.34,36,77.91,36c7.52,0,10.23,3.26,11.61,5.7C99,58.4,79.92,106,65.6,137,59.76,132.69,55.46,123.83,53.34,111.61Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
