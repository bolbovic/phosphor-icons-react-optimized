var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && m(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var c in a)
    o.call(a, c) && t.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && r)
    for (var c of r(a))
      t.indexOf(c) < 0 && i.call(a, c) && (e[c] = a[c]);
  return e;
};
import f, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const d = s((c, e) => {
  var l = c, { children: a } = l, t = n(l, ["children"]);
  return /* @__PURE__ */ f.createElement(A, p({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M72,140H32a4,4,0,0,1,0-8H69.86l14.81-22.22a4,4,0,0,1,6.66,0l28.67,43,12.67-19A4,4,0,0,1,136,132h24a4,4,0,0,1,0,8H138.14l-14.81,22.22a4,4,0,0,1-6.66,0L88,119.21l-12.67,19A4,4,0,0,1,72,140ZM178,44c-21.44,0-39.92,10.19-50,27.07C117.92,54.19,99.44,44,78,44a58.07,58.07,0,0,0-58,58q0,1.06,0,2.13a4,4,0,1,0,8-.26c0-.62,0-1.24,0-1.87A50.06,50.06,0,0,1,78,52c21.11,0,38.85,11.31,46.3,29.51a4,4,0,0,0,7.4,0C139.15,63.31,156.89,52,178,52a50.06,50.06,0,0,1,50,50c0,58-86,109.46-100,117.42-8.47-4.82-43.5-25.61-69.63-54.12a4,4,0,0,0-5.9,5.4c30.72,33.52,71.9,55.89,73.63,56.82a4,4,0,0,0,3.8,0,333.81,333.81,0,0,0,52.7-36.73C218,160.47,236,130.59,236,102A58.07,58.07,0,0,0,178,44Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};