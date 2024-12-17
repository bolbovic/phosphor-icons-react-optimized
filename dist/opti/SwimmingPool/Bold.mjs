var Z = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var o = (c, s, a) => s in c ? Z(c, s, { enumerable: !0, configurable: !0, writable: !0, value: a }) : c[s] = a, p = (c, s) => {
  for (var a in s || (s = {}))
    r.call(s, a) && o(c, a, s[a]);
  if (t)
    for (var a of t(s))
      V.call(s, a) && o(c, a, s[a]);
  return c;
};
var d = (c, s) => {
  var a = {};
  for (var e in c)
    r.call(c, e) && s.indexOf(e) < 0 && (a[e] = c[e]);
  if (c != null && t)
    for (var e of t(c))
      s.indexOf(e) < 0 && V.call(c, e) && (a[e] = c[e]);
  return a;
};
import l, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const h = f((e, a) => {
  var m = e, { children: c } = m, s = d(m, ["children"]);
  return /* @__PURE__ */ l.createElement(i, p({ ref: a }, s), c, /* @__PURE__ */ l.createElement("path", { d: "M88,149.39a12,12,0,0,0,12-12V136h56v3.29a12,12,0,0,0,24,0V32a12,12,0,0,0-24,0v8H100V32a12,12,0,0,0-24,0V137.39A12,12,0,0,0,88,149.39ZM100,112V100h56v12Zm56-48V76H100V64ZM20,164a12,12,0,0,1,12-12c15.63,0,24,5.55,30.66,10,5.4,3.6,9,6,17.34,6s11.93-2.38,17.34-6c6.69-4.47,15-10,30.65-10s24,5.55,30.66,10c5.41,3.6,9,6,17.35,6s11.94-2.38,17.34-6c6.7-4.47,15-10,30.66-10a12,12,0,0,1,0,24c-8.37,0-11.94,2.38-17.35,6-6.69,4.47-15,10-30.65,10s-24-5.55-30.66-10c-5.41-3.6-9-6-17.35-6s-11.93,2.38-17.34,6c-6.69,4.47-15,10-30.65,10s-24-5.55-30.66-10c-5.4-3.6-9-6-17.34-6A12,12,0,0,1,20,164Zm216,44a12,12,0,0,1-12,12c-8.37,0-11.94,2.38-17.35,6-6.69,4.47-15,10-30.65,10s-24-5.55-30.66-10c-5.41-3.6-9-6-17.35-6s-11.93,2.38-17.34,6c-6.69,4.47-15,10-30.65,10s-24-5.55-30.66-10c-5.4-3.6-9-6-17.34-6a12,12,0,0,1,0-24c15.63,0,24,5.55,30.66,10,5.4,3.6,9,6,17.34,6s11.93-2.38,17.34-6c6.69-4.47,15-10,30.65-10s24,5.55,30.66,10c5.41,3.6,9,6,17.35,6s11.94-2.38,17.34-6c6.7-4.47,15-10,30.66-10A12,12,0,0,1,236,208Z" }));
});
h.displayName = "Bold";
export {
  h as Bold
};
