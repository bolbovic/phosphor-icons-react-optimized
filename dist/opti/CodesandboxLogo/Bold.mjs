var d = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (l, e, a) => e in l ? d(l, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : l[e] = a, v = (l, e) => {
  for (var a in e || (e = {}))
    Z.call(e, a) && m(l, a, e[a]);
  if (o)
    for (var a of o(e))
      p.call(e, a) && m(l, a, e[a]);
  return l;
};
var L = (l, e) => {
  var a = {};
  for (var t in l)
    Z.call(l, t) && e.indexOf(t) < 0 && (a[t] = l[t]);
  if (l != null && o)
    for (var t of o(l))
      e.indexOf(t) < 0 && p.call(l, t) && (a[t] = l[t]);
  return a;
};
import M, { forwardRef as A } from "react";
import V from "../../lib/OptiBase.mjs";
const c = A((t, a) => {
  var r = t, { children: l } = r, e = L(r, ["children"]);
  return /* @__PURE__ */ M.createElement(V, v({ ref: a }, e), l, /* @__PURE__ */ M.createElement("path", { d: "M225.6,62.65l-88-48.18a19.91,19.91,0,0,0-19.2,0l-88,48.17A20,20,0,0,0,20,80.19v95.62a20,20,0,0,0,10.4,17.55l88,48.17a19.89,19.89,0,0,0,19.2,0l88-48.18A20,20,0,0,0,236,175.81V80.19A20,20,0,0,0,225.6,62.65ZM164,152v47.72l-24,13.14V135.11l72-39.42v22.92l-41.76,22.86A12,12,0,0,0,164,152ZM85.76,141.47,44,118.61V95.69l72,39.42v77.75L92,199.72V152A12,12,0,0,0,85.76,141.47ZM83.14,61.13l39.1,21.4a11.95,11.95,0,0,0,11.52,0l39.1-21.4L199,75.45l-71,38.87L57,75.45ZM128,36.57l19.87,10.88L128,58.33,108.13,47.45ZM44,146l24,13.14v27.47L44,173.44Zm144,40.61V159.11L212,146v27.47Z" }));
});
c.displayName = "Bold";
export {
  c as Bold
};
