var c = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var A = (e, r, a) => r in e ? c(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, p = (e, r) => {
  for (var a in r || (r = {}))
    o.call(r, a) && A(e, a, r[a]);
  if (l)
    for (var a of l(r))
      H.call(r, a) && A(e, a, r[a]);
  return e;
};
var Z = (e, r) => {
  var a = {};
  for (var t in e)
    o.call(e, t) && r.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && l)
    for (var t of l(e))
      r.indexOf(t) < 0 && H.call(e, t) && (a[t] = e[t]);
  return a;
};
import M, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((t, a) => {
  var m = t, { children: e } = m, r = Z(m, ["children"]);
  return /* @__PURE__ */ M.createElement(i, p({ ref: a }, r), e, /* @__PURE__ */ M.createElement("path", { d: "M223.88,214l-22-176A16,16,0,0,0,186,24H70A16,16,0,0,0,54.12,38l-22,176A16,16,0,0,0,48,232H88.69a16,16,0,0,0,15.51-12.06l23.8-92,23.79,91.94A16,16,0,0,0,167.31,232H208a16,16,0,0,0,15.88-18ZM192.9,95.2A32.13,32.13,0,0,1,169,72h21ZM186,40l2,16H68l2-16ZM66,72H87A32.13,32.13,0,0,1,63.1,95.2ZM88.69,216H48L61,111.73A48.08,48.08,0,0,0,103.32,72H120V95Zm78.6-.06L136,95V72h16.68A48.08,48.08,0,0,0,195,111.73L208,216Z" }));
});
s.displayName = "Regular";
export {
  s as Regular
};
