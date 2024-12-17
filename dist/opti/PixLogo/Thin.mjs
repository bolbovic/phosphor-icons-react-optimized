var Z = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var h = (a, l, e) => l in a ? Z(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, p = (a, l) => {
  for (var e in l || (l = {}))
    o.call(l, e) && h(a, e, l[e]);
  if (m)
    for (var e of m(l))
      i.call(l, e) && h(a, e, l[e]);
  return a;
};
var L = (a, l) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      l.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import n, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((t, e) => {
  var r = t, { children: a } = r, l = L(r, ["children"]);
  return /* @__PURE__ */ n.createElement(f, p({ ref: e }, l), a, /* @__PURE__ */ n.createElement("path", { d: "M232.5,119.55l-96.05-96a12,12,0,0,0-16.9,0l-96,96.05a12,12,0,0,0,0,16.9l96.05,96.05a12,12,0,0,0,16.9,0l96.05-96.05a12,12,0,0,0,0-16.9ZM125.21,29.16a3.94,3.94,0,0,1,5.58,0L193.64,92H160a4,4,0,0,0-2.83,1.17L128,122.34,98.83,93.17A4,4,0,0,0,96,92H62.36ZM28,128a3.9,3.9,0,0,1,1.16-2.79L54.36,100h40l28,28-28,28h-40l-25.2-25.21A3.9,3.9,0,0,1,28,128Zm102.79,98.84a4,4,0,0,1-5.58,0L62.36,164H96a4,4,0,0,0,2.83-1.17L128,133.66l29.17,29.17A4,4,0,0,0,160,164h33.64Zm96.05-96.05L201.64,156h-40l-28-28,28-28h40l25.2,25.21a3.94,3.94,0,0,1,0,5.58Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
