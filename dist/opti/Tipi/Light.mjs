var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var i = (e, a, t) => a in e ? s(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, l = (e, a) => {
  for (var t in a || (a = {}))
    p.call(a, t) && i(e, t, a[t]);
  if (m)
    for (var t of m(a))
      L.call(a, t) && i(e, t, a[t]);
  return e;
};
var c = (e, a) => {
  var t = {};
  for (var r in e)
    p.call(e, r) && a.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && m)
    for (var r of m(e))
      a.indexOf(r) < 0 && L.call(e, r) && (t[r] = e[r]);
  return t;
};
import f, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const n = d((r, t) => {
  var o = r, { children: e } = o, a = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(h, l({ ref: t }, a), e, /* @__PURE__ */ f.createElement("path", { d: "M237.05,212.77,135.12,53.5l21.93-34.26A6,6,0,1,0,147,12.77L128,42.37l-19-29.6A6,6,0,1,0,99,19.24L120.88,53.5,19,212.77A6,6,0,0,0,24,222H232a6,6,0,0,0,5.05-9.23ZM82.64,210,128,139.13,173.36,210Zm105,0-54.55-85.23a6,6,0,0,0-10.1,0L68.4,210H35L128,64.63,221,210Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
