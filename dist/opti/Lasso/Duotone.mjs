var d = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var C = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (e, a, t) => a in e ? d(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, S = (e, a) => {
  for (var t in a || (a = {}))
    C.call(a, t) && p(e, t, a[t]);
  if (o)
    for (var t of o(a))
      n.call(a, t) && p(e, t, a[t]);
  return e;
};
var i = (e, a) => {
  var t = {};
  for (var c in e)
    C.call(e, c) && a.indexOf(c) < 0 && (t[c] = e[c]);
  if (e != null && o)
    for (var c of o(e))
      a.indexOf(c) < 0 && n.call(e, c) && (t[c] = e[c]);
  return t;
};
import r, { forwardRef as f } from "react";
import l from "../../lib/OptiBase.mjs";
const s = f((c, t) => {
  var m = c, { children: e } = m, a = i(m, ["children"]);
  return /* @__PURE__ */ r.createElement(l, S({ ref: t }, a), e, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M232,112c0,35.35-46.56,64-104,64S24,147.35,24,112,70.56,48,128,48,232,76.65,232,112Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M205.73,59.93C184.85,47.08,157.24,40,128,40S71.15,47.08,50.27,59.93C28.17,73.52,16,92,16,112S28.17,150.44,50.27,164c19,11.67,43.49,18.56,69.73,19.73v0a37.35,37.35,0,0,1-18.58,33c-14.64,8.86-34.62,9.52-49.72,1.64a8,8,0,1,0-7.4,14.18A66.4,66.4,0,0,0,75,240a67.31,67.31,0,0,0,34.74-9.5c17-10.27,26.29-26.86,26.29-46.7v0c26.24-1.17,50.76-8.06,69.73-19.73C227.83,150.44,240,132,240,112S227.83,73.52,205.73,59.93ZM67.41,155.18c5.24-9.55,15.45-12,23.53-11,10.9,1.42,21.86,9.13,26.61,23.42C99.11,166.45,81.85,162.16,67.41,155.18Zm129.94-4.77c-16.95,10.43-39.17,16.53-63.13,17.43a54.37,54.37,0,0,0-11.39-23.07A47.17,47.17,0,0,0,93,128.35c-17-2.2-31.72,5.11-39.38,18.7C39.64,137,32,124.73,32,112c0-14.21,9.47-27.86,26.65-38.43C77.05,62.23,101.68,56,128,56S179,62.23,197.35,73.55C214.53,84.12,224,97.77,224,112S214.53,139.84,197.35,150.41Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};