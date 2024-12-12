var l = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var A = (a, m, e) => m in a ? l(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, H = (a, m) => {
  for (var e in m || (m = {}))
    Z.call(m, e) && A(a, e, m[e]);
  if (o)
    for (var e of o(m))
      p.call(m, e) && A(a, e, m[e]);
  return a;
};
var V = (a, m) => {
  var e = {};
  for (var t in a)
    Z.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      m.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import d, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((t, e) => {
  var r = t, { children: a } = r, m = V(r, ["children"]);
  return /* @__PURE__ */ d.createElement(f, H({ ref: e }, m), a, /* @__PURE__ */ d.createElement("path", { d: "M228,40V68a12,12,0,0,1-24,0V52H188a12,12,0,0,1,0-24h28A12,12,0,0,1,228,40ZM216,176a12,12,0,0,0-12,12v16H188a12,12,0,0,0,0,24h28a12,12,0,0,0,12-12V188A12,12,0,0,0,216,176ZM68,204H52V188a12,12,0,0,0-24,0v28a12,12,0,0,0,12,12H68a12,12,0,0,0,0-24ZM40,80A12,12,0,0,0,52,68V52H68a12,12,0,0,0,0-24H40A12,12,0,0,0,28,40V68A12,12,0,0,0,40,80Zm88,128a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,208Zm56-80a56,56,0,1,0-56,56A56.06,56.06,0,0,0,184,128Zm-80-24a16,16,0,1,0,16,16A16,16,0,0,0,104,104Zm48,0a16,16,0,1,0,16,16A16,16,0,0,0,152,104Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
