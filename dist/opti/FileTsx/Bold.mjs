var Z = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    m.call(t, e) && l(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && l(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var c in a)
    m.call(a, c) && t.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && o)
    for (var c of o(a))
      t.indexOf(c) < 0 && p.call(a, c) && (e[c] = a[c]);
  return e;
};
import h, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((c, e) => {
  var r = c, { children: a } = r, t = d(r, ["children"]);
  return /* @__PURE__ */ h.createElement(i, A({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M221.76,201A12,12,0,1,1,202.23,215L192,200.62,181.76,215A12,12,0,1,1,162.23,201l15-21-15-21a12,12,0,0,1,19.53-14L192,159.34,202.23,145a12,12,0,0,1,19.53,14l-15,21Zm-80.25-26.73c-5.12-3.45-11.33-5.24-16.8-6.82a79.5,79.5,0,0,1-7.91-2.59c2.45-1.18,9.71-1.3,16.07.33A12,12,0,0,0,139,142a69,69,0,0,0-12-1.86c-9.93-.66-18,1.08-24.1,5.17a24.45,24.45,0,0,0-10.69,17.76c-1.1,8.74,2.48,16.27,10.11,21.19,4.78,3.09,10.36,4.7,15.75,6.26,3,.89,7.94,2.3,9.88,3.53a2.48,2.48,0,0,1-.21.71c-1.37,1.55-9.58,1.79-16.39-.06a12,12,0,1,0-6.46,23.11A63.75,63.75,0,0,0,121.1,220c6.46,0,13.73-1.17,19.73-5.15a24.73,24.73,0,0,0,10.95-18C153,187.53,149.33,179.53,141.51,174.27ZM76,140H36a12,12,0,0,0,0,24h8v44a12,12,0,0,0,24,0V164h8a12,12,0,0,0,0-24ZM36,108V40A20,20,0,0,1,56,20h96a12,12,0,0,1,8.49,3.51l56,56A12,12,0,0,1,220,88v20a12,12,0,1,1-24,0v-4H148a12,12,0,0,1-12-12V44H60v64a12,12,0,1,1-24,0ZM160,80h23L160,57Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
