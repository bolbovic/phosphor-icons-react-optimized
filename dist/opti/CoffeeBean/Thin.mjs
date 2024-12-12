var d = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, a, t) => a in e ? d(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, n = (e, a) => {
  for (var t in a || (a = {}))
    i.call(a, t) && o(e, t, a[t]);
  if (c)
    for (var t of c(a))
      p.call(a, t) && o(e, t, a[t]);
  return e;
};
var f = (e, a) => {
  var t = {};
  for (var r in e)
    i.call(e, r) && a.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && c)
    for (var r of c(e))
      a.indexOf(r) < 0 && p.call(e, r) && (t[r] = e[r]);
  return t;
};
import s, { forwardRef as h } from "react";
import l from "../../lib/OptiBase.mjs";
const C = h((r, t) => {
  var m = r, { children: e } = m, a = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(l, n({ ref: t }, a), e, /* @__PURE__ */ s.createElement("path", { d: "M209,47c-32.36-32.35-95-22.33-139.7,22.34S14.63,176.66,47,209c12.82,12.81,30.38,19,49.71,19,29.46,0,63-14.34,90-41.32C231.35,142,241.37,79.34,209,47ZM75,75c25.47-25.46,57-39.09,84.26-39.09,14.51,0,27.83,3.87,38.43,11.84-25.76,7.05-63,26.4-73.6,79.49-10.5,52.52-49.25,69.26-72.91,74.58C23.77,172.12,34.16,115.81,75,75ZM181,181c-39,39-92.17,50.23-122.71,27.25,25.75-7,63-26.39,73.62-79.48,10.5-52.53,49.25-69.26,72.91-74.59C232.23,83.88,221.84,140.19,181,181Z" }));
});
C.displayName = "Thin";
export {
  C as Thin
};
