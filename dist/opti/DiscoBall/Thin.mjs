var p = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var r = (a, h, e) => h in a ? p(a, h, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[h] = e, o = (a, h) => {
  for (var e in h || (h = {}))
    V.call(h, e) && r(a, e, h[e]);
  if (c)
    for (var e of c(h))
      Z.call(h, e) && r(a, e, h[e]);
  return a;
};
var M = (a, h) => {
  var e = {};
  for (var t in a)
    V.call(a, t) && h.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && c)
    for (var t of c(a))
      h.indexOf(t) < 0 && Z.call(a, t) && (e[t] = a[t]);
  return e;
};
import i, { forwardRef as A } from "react";
import n from "../../lib/OptiBase.mjs";
const f = A((t, e) => {
  var m = t, { children: a } = m, h = M(m, ["children"]);
  return /* @__PURE__ */ i.createElement(n, o({ ref: e }, h), a, /* @__PURE__ */ i.createElement("path", { d: "M116,68.1V16a4,4,0,0,0-8,0V68.1a84,84,0,1,0,8,0ZM187.89,148h-40c-1-37.34-15.73-60.22-25.35-71.25A76.12,76.12,0,0,1,187.89,148ZM112,226.68C105,220,85.26,197.61,84.06,156h55.88C138.74,197.61,119,220,112,226.68ZM84.06,148c1.2-41.61,21-64,27.94-70.68,7,6.64,26.74,29.07,27.94,70.68Zm17.36-71.25c-9.62,11-24.35,33.91-25.35,71.25h-40A76.12,76.12,0,0,1,101.42,76.75ZM36.11,156h40c1,37.34,15.73,60.22,25.35,71.25A76.12,76.12,0,0,1,36.11,156Zm86.47,71.25c9.62-11,24.35-33.91,25.35-71.25h40A76.12,76.12,0,0,1,122.58,227.25ZM252,88a4,4,0,0,1-4,4H236v12a4,4,0,0,1-8,0V92H216a4,4,0,0,1,0-8h12V72a4,4,0,0,1,8,0V84h12A4,4,0,0,1,252,88ZM212,40a4,4,0,0,1-4,4H188V64a4,4,0,0,1-8,0V44H160a4,4,0,0,1,0-8h20V16a4,4,0,0,1,8,0V36h20A4,4,0,0,1,212,40Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
