var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, e, l) => e in a ? i(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, L = (a, e) => {
  for (var l in e || (e = {}))
    p.call(e, l) && m(a, l, e[l]);
  if (o)
    for (var l of o(e))
      d.call(e, l) && m(a, l, e[l]);
  return a;
};
var c = (a, e) => {
  var l = {};
  for (var t in a)
    p.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      e.indexOf(t) < 0 && d.call(a, t) && (l[t] = a[t]);
  return l;
};
import f, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const n = s((t, l) => {
  var r = t, { children: a } = r, e = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, L({ ref: l }, e), a, /* @__PURE__ */ f.createElement("path", { d: "M179.76,110.75a12,12,0,0,0-6.85-8.56L126,81.12l12.9-54.35a12,12,0,0,0-20.48-10.92L23.19,118.7a12,12,0,0,0,3.89,19.1l47,21.08L61.12,213.22a12,12,0,0,0,20.49,10.93L176.8,121.29A12,12,0,0,0,179.76,110.75ZM95,174.31l4.64-19.54a12,12,0,0,0-6.76-13.72l-40.76-18.3L105,65.69l-4.64,19.54A12,12,0,0,0,107.08,99l40.77,18.3Zm147.7,36.32-36-72a12,12,0,0,0-21.47,0l-36,72a12,12,0,1,0,21.46,10.73l4.68-9.36h41.17l4.68,9.36a12,12,0,1,0,21.47-10.73ZM187.41,188,196,170.83,204.58,188Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
