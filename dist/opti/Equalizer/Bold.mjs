var c = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var r = (a, e, m) => e in a ? c(a, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : a[e] = m, p = (a, e) => {
  for (var m in e || (e = {}))
    Z.call(e, m) && r(a, m, e[m]);
  if (t)
    for (var m of t(e))
      h.call(e, m) && r(a, m, e[m]);
  return a;
};
var d = (a, e) => {
  var m = {};
  for (var H in a)
    Z.call(a, H) && e.indexOf(H) < 0 && (m[H] = a[H]);
  if (a != null && t)
    for (var H of t(a))
      e.indexOf(H) < 0 && h.call(a, H) && (m[H] = a[H]);
  return m;
};
import l, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((H, m) => {
  var o = H, { children: a } = o, e = d(o, ["children"]);
  return /* @__PURE__ */ l.createElement(i, p({ ref: m }, e), a, /* @__PURE__ */ l.createElement("path", { d: "M80,108a12,12,0,0,1-12,12H28a12,12,0,0,1,0-24H68A12,12,0,0,1,80,108ZM68,136H28a12,12,0,0,0,0,24H68a12,12,0,0,0,0-24Zm0,40H28a12,12,0,0,0,0,24H68a12,12,0,0,0,0-24Zm80-40H108a12,12,0,0,0,0,24h40a12,12,0,0,0,0-24Zm0,40H108a12,12,0,0,0,0,24h40a12,12,0,0,0,0-24Zm40-96h40a12,12,0,0,0,0-24H188a12,12,0,0,0,0,24Zm40,16H188a12,12,0,0,0,0,24h40a12,12,0,0,0,0-24Zm0,40H188a12,12,0,0,0,0,24h40a12,12,0,0,0,0-24Zm0,40H188a12,12,0,0,0,0,24h40a12,12,0,0,0,0-24Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
