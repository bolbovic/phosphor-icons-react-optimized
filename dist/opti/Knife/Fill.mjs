var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (e, t, a) => t in e ? d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, p = (e, t) => {
  for (var a in t || (t = {}))
    c.call(t, a) && o(e, a, t[a]);
  if (r)
    for (var a of r(t))
      i.call(t, a) && o(e, a, t[a]);
  return e;
};
var f = (e, t) => {
  var a = {};
  for (var l in e)
    c.call(e, l) && t.indexOf(l) < 0 && (a[l] = e[l]);
  if (e != null && r)
    for (var l of r(e))
      t.indexOf(l) < 0 && i.call(e, l) && (a[l] = e[l]);
  return a;
};
import s, { forwardRef as n } from "react";
import A from "../../lib/OptiBase.mjs";
const L = n((l, a) => {
  var m = l, { children: e } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(A, p({ ref: a }, t), e, /* @__PURE__ */ s.createElement("path", { d: "M236,49a25,25,0,0,0-42.63-17.66L143.16,81.54,18.34,206.4a8,8,0,0,0,3.86,13.45A160.67,160.67,0,0,0,58.4,224c32.95,0,65.91-10.2,96.94-30.23,31.76-20.5,50.19-43.82,51-44.8a8,8,0,0,0-.64-10.59L181.31,114l47.38-47.39A24.84,24.84,0,0,0,236,49ZM146.23,180.6c-34.43,22.1-69.94,30.92-105.76,26.3L146,101.34l43.09,43.1A220.09,220.09,0,0,1,146.23,180.6Z" }));
});
L.displayName = "Fill";
export {
  L as Fill
};
