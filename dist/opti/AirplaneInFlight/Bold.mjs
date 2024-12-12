var c = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && l(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && l(a, e, t[e]);
  return a;
};
var L = (a, t) => {
  var e = {};
  for (var m in a)
    H.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import d, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const i = f((m, e) => {
  var r = m, { children: a } = r, t = L(r, ["children"]);
  return /* @__PURE__ */ d.createElement(h, A({ ref: e }, t), a, /* @__PURE__ */ d.createElement("path", { d: "M228,216a12,12,0,0,1-12,12H72a12,12,0,0,1,0-24H216A12,12,0,0,1,228,216Zm24-80v24a12,12,0,0,1-12,12H61.07a43.72,43.72,0,0,1-42.14-31.36L4.86,93.75A20,20,0,0,1,24,68h8a12,12,0,0,1,8.48,3.51L61,92H76.27L69,70.32A20,20,0,0,1,88,44h8a12,12,0,0,1,8.48,3.51L149,92h59A44.05,44.05,0,0,1,252,136Zm-24,0a20,20,0,0,0-20-20H144a12,12,0,0,1-8.48-3.51L94.83,71.79l9.47,28.42A12,12,0,0,1,92.91,116H56a12,12,0,0,1-8.49-3.51L30.4,95.36l11.51,38.39A19.89,19.89,0,0,0,61.07,148H228Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
