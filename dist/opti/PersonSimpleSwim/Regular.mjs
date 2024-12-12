var Z = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, f = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && l(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && l(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import A, { forwardRef as d } from "react";
import i from "../../lib/OptiBase.mjs";
const R = d((r, e) => {
  var c = r, { children: a } = c, t = s(c, ["children"]);
  return /* @__PURE__ */ A.createElement(i, f({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M176,104a32,32,0,1,0-32-32A32,32,0,0,0,176,104Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,176,56Zm46.16,129.24a8,8,0,0,1-1,11.26c-17.36,14.39-32.86,19.5-47,19.5-18.58,0-34.82-8.82-49.93-17-25.35-13.76-47.24-25.65-79.07.74a8,8,0,1,1-10.22-12.31c40.17-33.29,70.32-16.93,96.93-2.49,25.35,13.77,47.24,25.65,79.07-.74A8,8,0,0,1,222.16,185.24ZM34.89,147.42a8,8,0,1,0,10.22,12.31c31.83-26.38,53.72-14.5,79.07-.74,15.11,8.2,31.35,17,49.93,17,14.14,0,29.64-5.11,47-19.5a8,8,0,1,0-10.22-12.31,75.79,75.79,0,0,1-19.28,12.06l-53.84-53.82A103.34,103.34,0,0,0,64.24,72H40a8,8,0,0,0,0,16H64.24a87.66,87.66,0,0,1,41.88,10.56L76.49,128.17C63.82,129.35,50.07,134.84,34.89,147.42Zm91.57-33.67,46.13,46.12c-14-.43-26.88-7.39-40.77-14.93-10.75-5.84-22.09-12-34.42-15.05l22.26-22.26A87.14,87.14,0,0,1,126.46,113.75Z" }));
});
R.displayName = "Regular";
export {
  R as Regular,
  R as default
};
