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
import i, { forwardRef as Z } from "react";
import n from "../../lib/OptiBase.mjs";
const q = Z((m, e) => {
  var r = m, { children: a } = r, t = f(r, ["children"]);
  return /* @__PURE__ */ i.createElement(n, l({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M172,76a16,16,0,1,1-16-16A16,16,0,0,1,172,76Zm64,.66c.32,31.85-7.55,59.77-22.74,80.76-15.66,21.65-38.89,36.21-69,43.29-19.2,4.52-41.39,6-66.36,4.38q2.27,15.49,6,32.34a12,12,0,1,1-23.44,5.14q-4.58-20.85-7.08-39.91-19-2.5-39.87-7.07a12,12,0,0,1,5.14-23.44q16.83,3.67,32.31,6c-1.58-25-.13-47.12,4.38-66.3,7.08-30.14,21.64-53.36,43.27-69,21-15.21,48.92-23.1,80.78-22.77,21.79.21,42,4.42,45.8,6.64a12,12,0,0,1,4.24,4.23C231.57,34.64,235.78,54.87,236,76.66Zm-58.46,83.28A116.08,116.08,0,0,1,96.06,78.46c-9.21,12.16-15.56,27.57-18.93,46-3,16.39-3.66,35.25-2,56.39,21.16,1.65,40,1,56.42-2C150,175.49,165.37,169.14,177.53,159.94ZM209,47c-15.9-3-59.3-8.45-92.26,12.44a92,92,0,0,0,79.81,79.82C217.43,106.32,212,62.92,209,47Z" }));
});
q.displayName = "Bold";
export {
  q as Bold
};