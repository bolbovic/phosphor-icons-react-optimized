var i = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, r, a) => r in e ? i(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, l = (e, r) => {
  for (var a in r || (r = {}))
    Z.call(r, a) && o(e, a, r[a]);
  if (c)
    for (var a of c(r))
      p.call(r, a) && o(e, a, r[a]);
  return e;
};
var A = (e, r) => {
  var a = {};
  for (var t in e)
    Z.call(e, t) && r.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && c)
    for (var t of c(e))
      r.indexOf(t) < 0 && p.call(e, t) && (a[t] = e[t]);
  return a;
};
import f, { forwardRef as s } from "react";
import M from "../../lib/OptiBase.mjs";
const R = s((t, a) => {
  var m = t, { children: e } = m, r = A(m, ["children"]);
  return /* @__PURE__ */ f.createElement(M, l({ ref: a }, r), e, /* @__PURE__ */ f.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm87.82,98.46c-28.34,20-49.57,14.68-71.87,4.39,20.06-14.19,38.86-32.21,39.53-67.11A87.92,87.92,0,0,1,215.82,122.46ZM167.11,49.19C170.24,83.71,155,99.44,135,113.61c-2.25-24.48-8.44-49.8-38.37-67.82a87.89,87.89,0,0,1,70.5,3.4ZM79.32,54.73c31.45,14.55,37.47,35.58,39.71,60-22.33-10.29-47.35-17.59-77.93-.68A88.18,88.18,0,0,1,79.32,54.73ZM40.18,133.54c28.34-20,49.57-14.68,71.87-4.39C92,143.34,73.19,161.36,72.52,196.26A87.92,87.92,0,0,1,40.18,133.54Zm48.71,73.27C85.76,172.29,101,156.56,121,142.39c2.25,24.48,8.44,49.8,38.37,67.82a87.89,87.89,0,0,1-70.5-3.4Zm87.79-5.54c-31.45-14.55-37.47-35.58-39.71-60,12.72,5.86,26.31,10.75,41.3,10.75,11.33,0,23.46-2.8,36.63-10.08A88.2,88.2,0,0,1,176.68,201.27Z" }));
});
R.displayName = "Regular";
export {
  R as Regular
};
