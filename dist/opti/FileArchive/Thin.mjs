var c = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var V = (a, h, e) => h in a ? c(a, h, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[h] = e, i = (a, h) => {
  for (var e in h || (h = {}))
    m.call(h, e) && V(a, e, h[e]);
  if (H)
    for (var e of H(h))
      o.call(h, e) && V(a, e, h[e]);
  return a;
};
var p = (a, h) => {
  var e = {};
  for (var t in a)
    m.call(a, t) && h.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && H)
    for (var t of H(a))
      h.indexOf(t) < 0 && o.call(a, t) && (e[t] = a[t]);
  return e;
};
import n, { forwardRef as f } from "react";
import l from "../../lib/OptiBase.mjs";
const s = f((t, e) => {
  var r = t, { children: a } = r, h = p(r, ["children"]);
  return /* @__PURE__ */ n.createElement(l, i({ ref: e }, h), a, /* @__PURE__ */ n.createElement("path", { d: "M210.83,85.17l-56-56A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40V216a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V88A4,4,0,0,0,210.83,85.17ZM156,41.65,198.34,84H156ZM200,220H108V196h12a4,4,0,0,0,0-8H108V164h12a4,4,0,0,0,0-8H108V132h12a4,4,0,0,0,0-8H108V112a4,4,0,0,0-8,0v12H88a4,4,0,0,0,0,8h12v24H88a4,4,0,0,0,0,8h12v24H88a4,4,0,0,0,0,8h12v24H56a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52V216A4,4,0,0,1,200,220Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
