var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (e, c, a) => c in e ? f(e, c, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[c] = a, l = (e, c) => {
  for (var a in c || (c = {}))
    p.call(c, a) && m(e, a, c[a]);
  if (o)
    for (var a of o(c))
      d.call(c, a) && m(e, a, c[a]);
  return e;
};
var s = (e, c) => {
  var a = {};
  for (var t in e)
    p.call(e, t) && c.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && o)
    for (var t of o(e))
      c.indexOf(t) < 0 && d.call(e, t) && (a[t] = e[t]);
  return a;
};
import C, { forwardRef as i } from "react";
import n from "../../lib/OptiBase.mjs";
const B = i((t, a) => {
  var r = t, { children: e } = r, c = s(r, ["children"]);
  return /* @__PURE__ */ C.createElement(n, l({ ref: a }, c), e, /* @__PURE__ */ C.createElement("path", { d: "M214.58,41.42C196.86,23.71,171,16.63,141.81,21.5c-27.74,4.62-55.46,19.62-78.08,42.23S26.12,114.07,21.5,141.81c-4.87,29.21,2.21,55.05,19.92,72.77C55.48,228.64,74.67,236,96.6,236a107.43,107.43,0,0,0,17.59-1.5c27.74-4.62,55.46-19.62,78.08-42.23s37.61-50.34,42.23-78.08C239.37,85,232.29,59.14,214.58,41.42ZM45.17,145.75c3.8-22.84,16.42-45.94,35.53-65S122.91,49,145.75,45.17A82,82,0,0,1,159.27,44a62.77,62.77,0,0,1,18.24,2.57A110.12,110.12,0,0,0,154.62,60.4c-20,15.77-32.88,37.72-38.38,65.25-8.95,44.73-40.3,61.1-62.07,67.09C45.25,180.83,42.06,164.41,45.17,145.75Zm165.66-35.5c-3.8,22.84-16.42,45.94-35.53,65.05S133.09,207,110.25,210.83c-11.65,1.94-22.4,1.41-31.75-1.42a109.42,109.42,0,0,0,22.87-13.81c20-15.77,32.89-37.72,38.39-65.25,9-44.73,40.3-61.1,62.07-67.09C210.75,75.17,213.94,91.59,210.83,110.25Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};