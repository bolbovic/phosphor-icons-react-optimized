var f = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, r, e) => r in a ? f(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, H = (a, r) => {
  for (var e in r || (r = {}))
    o.call(r, e) && c(a, e, r[e]);
  if (l)
    for (var e of l(r))
      p.call(r, e) && c(a, e, r[e]);
  return a;
};
var h = (a, r) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && l)
    for (var t of l(a))
      r.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import A, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const R = i((t, e) => {
  var m = t, { children: a } = m, r = h(m, ["children"]);
  return /* @__PURE__ */ A.createElement(s, H({ ref: e }, r), a, /* @__PURE__ */ A.createElement("path", { d: "M216,120a41,41,0,0,0-6.6.55l-5.82-15.14A55.64,55.64,0,0,1,216,104a8,8,0,0,0,0-16H196.88L183.47,53.13A8,8,0,0,0,176,48H144a8,8,0,0,0,0,16h26.51l9.23,24H152c-18.5,0-33.5,4.31-43.37,12.46a16,16,0,0,1-16.76,2.07C81.29,97.72,31.13,77.33,26.71,75.6L21,73.36A17.74,17.74,0,0,0,16,72a8,8,0,0,0-2.87,15.46h0c.46.18,47.19,18.3,72.13,29.63a32.15,32.15,0,0,0,33.56-4.29c4.86-4,14.57-8.8,33.19-8.8h18.82a71.74,71.74,0,0,0-24.17,36.59A15.86,15.86,0,0,1,131.32,152H79.2a40,40,0,1,0,0,16h52.12a31.91,31.91,0,0,0,30.74-23.1,56,56,0,0,1,26.59-33.72l5.82,15.13A40,40,0,1,0,216,120ZM40,168H62.62a24,24,0,1,1,0-16H40a8,8,0,0,0,0,16Zm176,16a24,24,0,0,1-15.58-42.23l8.11,21.1a8,8,0,1,0,14.94-5.74L215.35,136l.65,0a24,24,0,0,1,0,48Z" }));
});
R.displayName = "Regular";
export {
  R as Regular
};
