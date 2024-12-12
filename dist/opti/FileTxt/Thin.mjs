var V = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? V(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      h.call(t, e) && o(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    H.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && h.call(a, m) && (e[m] = a[m]);
  return e;
};
import n, { forwardRef as Z } from "react";
import c from "../../lib/OptiBase.mjs";
const f = Z((m, e) => {
  var l = m, { children: a } = l, t = p(l, ["children"]);
  return /* @__PURE__ */ n.createElement(c, i({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M204,112a4,4,0,0,0,8,0V88a4,4,0,0,0-1.17-2.83l-56-56A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40v72a4,4,0,0,0,8,0V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52ZM156,41.65,198.34,84H156Zm-4.75,112.67L132.92,180l18.33,25.67a4,4,0,1,1-6.5,4.65L128,186.88l-16.75,23.44a4,4,0,1,1-6.5-4.65L123.08,180l-18.33-25.68a4,4,0,1,1,6.5-4.65L128,173.12l16.75-23.45a4,4,0,1,1,6.5,4.65ZM88,152a4,4,0,0,1-4,4H68v52a4,4,0,0,1-8,0V156H44a4,4,0,0,1,0-8H84A4,4,0,0,1,88,152Zm128,0a4,4,0,0,1-4,4H196v52a4,4,0,0,1-8,0V156H172a4,4,0,0,1,0-8h40A4,4,0,0,1,216,152Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
