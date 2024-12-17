var v = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var o = (a, e, H) => e in a ? v(a, e, { enumerable: !0, configurable: !0, writable: !0, value: H }) : a[e] = H, p = (a, e) => {
  for (var H in e || (e = {}))
    r.call(e, H) && o(a, H, e[H]);
  if (t)
    for (var H of t(e))
      h.call(e, H) && o(a, H, e[H]);
  return a;
};
var d = (a, e) => {
  var H = {};
  for (var V in a)
    r.call(a, V) && e.indexOf(V) < 0 && (H[V] = a[V]);
  if (a != null && t)
    for (var V of t(a))
      e.indexOf(V) < 0 && h.call(a, V) && (H[V] = a[V]);
  return H;
};
import l, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((V, H) => {
  var m = V, { children: a } = m, e = d(m, ["children"]);
  return /* @__PURE__ */ l.createElement(f, p({ ref: H }, e), a, /* @__PURE__ */ l.createElement("path", { d: "M156,88H100a12,12,0,0,0-12,12v56a12,12,0,0,0,12,12h56a12,12,0,0,0,12-12V100A12,12,0,0,0,156,88Zm-12,56H112V112h32Zm88-4H220V116h12a12,12,0,0,0,0-24H220V56a20,20,0,0,0-20-20H164V24a12,12,0,0,0-24,0V36H116V24a12,12,0,0,0-24,0V36H56A20,20,0,0,0,36,56V92H24a12,12,0,0,0,0,24H36v24H24a12,12,0,0,0,0,24H36v36a20,20,0,0,0,20,20H92v12a12,12,0,0,0,24,0V220h24v12a12,12,0,0,0,24,0V220h36a20,20,0,0,0,20-20V164h12a12,12,0,0,0,0-24Zm-36,56H60V60H196Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
