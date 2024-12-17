var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (e, t, a) => t in e ? d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, n = (e, t) => {
  for (var a in t || (t = {}))
    h.call(t, a) && p(e, a, t[a]);
  if (r)
    for (var a of r(t))
      l.call(t, a) && p(e, a, t[a]);
  return e;
};
var i = (e, t) => {
  var a = {};
  for (var o in e)
    h.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && l.call(e, o) && (a[o] = e[o]);
  return a;
};
import c, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const M = f((o, a) => {
  var m = o, { children: e } = m, t = i(m, ["children"]);
  return /* @__PURE__ */ c.createElement(s, n({ ref: a }, t), e, /* @__PURE__ */ c.createElement(
    "path",
    {
      d: "M208,216H48a8,8,0,0,1-6.86-12.12l30.48-50.8h0c13.23-2.48,32-1.41,56.37,10.92,32.25,16.33,54.75,12.91,67.5,7.65h0l19.34,32.23A8,8,0,0,1,208,216Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ c.createElement("path", { d: "M221.69,199.77,160,96.92V40h8a8,8,0,0,0,0-16H88a8,8,0,0,0,0,16h8V96.92L34.31,199.77A16,16,0,0,0,48,224H208a16,16,0,0,0,13.72-24.23ZM110.86,103.25A7.93,7.93,0,0,0,112,99.14V40h32V99.14a7.93,7.93,0,0,0,1.14,4.11L183.36,167c-12,2.37-29.07,1.37-51.75-10.11-15.91-8.05-31.05-12.32-45.22-12.81ZM48,208l28.54-47.58c14.25-1.73,30.31,1.85,47.82,10.72,19,9.61,35,12.88,48,12.88a69.89,69.89,0,0,0,19.55-2.7L208,208Z" }));
});
M.displayName = "Duotone";
export {
  M as Duotone
};
