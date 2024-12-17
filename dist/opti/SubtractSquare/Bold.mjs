var c = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var l = (a, m, e) => m in a ? c(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, V = (a, m) => {
  for (var e in m || (m = {}))
    H.call(m, e) && l(a, e, m[e]);
  if (o)
    for (var e of o(m))
      p.call(m, e) && l(a, e, m[e]);
  return a;
};
var Z = (a, m) => {
  var e = {};
  for (var t in a)
    H.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      m.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import d, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const i = f((t, e) => {
  var r = t, { children: a } = r, m = Z(r, ["children"]);
  return /* @__PURE__ */ d.createElement(h, V({ ref: e }, m), a, /* @__PURE__ */ d.createElement("path", { d: "M228,160V96a12,12,0,0,0-12-12H172V40a12,12,0,0,0-12-12H40A12,12,0,0,0,28,40V160a12,12,0,0,0,12,12H84v44a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V160Zm-63,44-32-32H155l32,32Zm7-49V133l32,32V187Zm32-24-23-23h23ZM52,52h96v52h0v44H52Zm56,129,23,23H108Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
