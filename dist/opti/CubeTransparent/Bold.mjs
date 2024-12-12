var d = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var r = (e, m, a) => m in e ? d(e, m, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[m] = a, V = (e, m) => {
  for (var a in m || (m = {}))
    Z.call(m, a) && r(e, a, m[a]);
  if (l)
    for (var a of l(m))
      H.call(m, a) && r(e, a, m[a]);
  return e;
};
var p = (e, m) => {
  var a = {};
  for (var t in e)
    Z.call(e, t) && m.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && l)
    for (var t of l(e))
      m.indexOf(t) < 0 && H.call(e, t) && (a[t] = e[t]);
  return a;
};
import c, { forwardRef as h } from "react";
import f from "../../lib/OptiBase.mjs";
const i = h((t, a) => {
  var o = t, { children: e } = o, m = p(o, ["children"]);
  return /* @__PURE__ */ c.createElement(f, V({ ref: a }, m), e, /* @__PURE__ */ c.createElement("path", { d: "M224.5,95.53v0l-64-64A12,12,0,0,0,152,28H40A12,12,0,0,0,28,40V152a11.94,11.94,0,0,0,3,7.93c.15.18.31.36.5.56l64,64h0A12,12,0,0,0,104,228H216a12,12,0,0,0,12-12V104A12,12,0,0,0,224.5,95.53ZM164,69l23,23H164ZM92,187,69,164H92Zm0-47H52V69l40,40ZM69,52h71V92H109Zm71,64v24H116V116Zm-24,88V164h31l40,40Zm88-17-40-40V116h40Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
