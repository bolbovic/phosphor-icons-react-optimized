var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, m = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && A(a, e, t[e]);
  if (o)
    for (var e of o(t))
      m.call(t, e) && A(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var c in a)
    l.call(a, c) && t.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && o)
    for (var c of o(a))
      t.indexOf(c) < 0 && m.call(a, c) && (e[c] = a[c]);
  return e;
};
import Z, { forwardRef as h } from "react";
import i from "../../lib/OptiBase.mjs";
const s = h((c, e) => {
  var r = c, { children: a } = r, t = d(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(i, p({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M160,208a12,12,0,0,1-12,12H120a12,12,0,0,1-12-12V152a12,12,0,0,1,24,0v44h16A12,12,0,0,1,160,208ZM91,142.22A12,12,0,0,0,74.24,145L64,159.34,53.77,145a12,12,0,1,0-19.53,14l15,21-15,21A12,12,0,1,0,53.77,215L64,200.62,74.24,215A12,12,0,0,0,93.77,201l-15-21,15-21A12,12,0,0,0,91,142.22Zm122.53,32.05c-5.12-3.45-11.32-5.24-16.79-6.82a79.69,79.69,0,0,1-7.92-2.59c2.45-1.18,9.71-1.3,16.07.33A12,12,0,0,0,211,142a69,69,0,0,0-12-1.86c-9.93-.66-18,1.08-24.1,5.17a24.45,24.45,0,0,0-10.69,17.76c-1.1,8.74,2.49,16.27,10.11,21.19,4.78,3.09,10.36,4.7,15.75,6.26,3,.89,7.94,2.3,9.88,3.53a2.48,2.48,0,0,1-.21.71c-1.37,1.55-9.58,1.79-16.39-.06a12,12,0,1,0-6.46,23.11A63.75,63.75,0,0,0,193.1,220c6.46,0,13.73-1.17,19.73-5.15a24.73,24.73,0,0,0,10.95-18C225,187.53,221.33,179.53,213.51,174.27ZM36,108V40A20,20,0,0,1,56,20h96a12,12,0,0,1,8.49,3.51l56,56A12,12,0,0,1,220,88v20a12,12,0,1,1-24,0v-4H148a12,12,0,0,1-12-12V44H60v64a12,12,0,1,1-24,0ZM160,80h23L160,57Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
