var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    L.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    L.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import n, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((m, e) => {
  var l = m, { children: a } = l, t = c(l, ["children"]);
  return /* @__PURE__ */ n.createElement(h, p({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M235.33,165.78a4,4,0,0,0-6.66,0C228,166.8,212,191,212,208a20,20,0,0,0,40,0C252,191,236,166.8,235.33,165.78ZM232,220a12,12,0,0,1-12-12c0-10.25,7.49-24.64,12-32.37,4.51,7.73,12,22.1,12,32.37A12,12,0,0,1,232,220Zm3.89-87.6a4,4,0,0,0-1.06-3.74L119.34,13.17a4,4,0,0,0-5.65,0L70.25,56.6,42.82,29.17a4,4,0,0,0-5.65,5.66L64.6,62.26,17.86,109a20,20,0,0,0,0,28.29l84.85,84.85a20,20,0,0,0,28.29,0L210.16,143l23.1-7.7A4,4,0,0,0,235.89,132.4Zm-29.15,3.29a4.06,4.06,0,0,0-1.57,1l-79.83,79.82a12,12,0,0,1-17,0L23.51,131.63a12,12,0,0,1,0-17L70.25,67.92l34.2,34.2A24,24,0,0,0,141,133h0a24,24,0,0,0-30.86-36.51l-34.2-34.2,40.61-40.6L224.59,129.74Zm-94.05-31a0,0,0,0,0,0,0,16,16,0,1,1,0,22.64,16,16,0,0,1,0-22.64Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};