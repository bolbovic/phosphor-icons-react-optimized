var Z = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && p(a, e, t[e]);
  if (o)
    for (var e of o(t))
      n.call(t, e) && p(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var c in a)
    l.call(a, c) && t.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && o)
    for (var c of o(a))
      t.indexOf(c) < 0 && n.call(a, c) && (e[c] = a[c]);
  return e;
};
import m, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const A = d((c, e) => {
  var r = c, { children: a } = r, t = s(r, ["children"]);
  return /* @__PURE__ */ m.createElement(f, i({ ref: e }, t), a, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M180,108a52,52,0,0,1-52,52,24,24,0,0,0,24-24c0-24-24-40-24-40s-24,16-24,40a24,24,0,0,0,24,24,52,52,0,0,1-52-52c0-44,52-76,52-76S180,64,180,108Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M128,168a60.07,60.07,0,0,0,60-60c0-47.92-53.53-81.41-55.81-82.81a8,8,0,0,0-8.38,0A156,156,0,0,0,96.24,48C77.77,67.13,68,87.9,68,108A60.07,60.07,0,0,0,128,168Zm-16-32c0-13.57,10-24.46,16-29.79,6,5.33,16,16.22,16,29.79a16,16,0,0,1-32,0Zm16-94.34C139.74,50,172,76,172,108a43.83,43.83,0,0,1-12.09,30.24c.05-.74.09-1.49.09-2.24,0-28-26.44-45.91-27.56-46.66a8,8,0,0,0-8.88,0C122.44,90.09,96,108,96,136c0,.75,0,1.5.09,2.24A43.83,43.83,0,0,1,84,108C84,76,116.27,50,128,41.66Zm95.62,184.76a8,8,0,0,1-10.05,5.2L128,204.39,42.43,231.62a8,8,0,1,1-4.85-15.25l64-20.37-64-20.38a8,8,0,1,1,4.85-15.24L128,187.6l85.57-27.22a8,8,0,1,1,4.85,15.24l-64,20.38,64,20.37A8,8,0,0,1,223.62,226.42Z" }));
});
A.displayName = "Duotone";
export {
  A as Duotone
};