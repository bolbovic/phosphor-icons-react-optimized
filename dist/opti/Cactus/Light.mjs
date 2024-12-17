var f = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && m(a, e, t[e]);
  if (H)
    for (var e of H(t))
      i.call(t, e) && m(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && H)
    for (var r of H(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const l = s((r, e) => {
  var h = r, { children: a } = h, t = V(h, ["children"]);
  return /* @__PURE__ */ c.createElement(d, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M216,210H166V182h6a66.08,66.08,0,0,0,66-66,26,26,0,0,0-52,0,14,14,0,0,1-14,14h-6V56a38,38,0,0,0-76,0V90H84A14,14,0,0,1,70,76a26,26,0,0,0-52,0,66.08,66.08,0,0,0,66,66h6v68H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12ZM96,130H84A54.06,54.06,0,0,1,30,76a14,14,0,0,1,28,0,26,26,0,0,0,26,26H96a6,6,0,0,0,6-6V56a26,26,0,0,1,52,0v80a6,6,0,0,0,6,6h12a26,26,0,0,0,26-26,14,14,0,0,1,28,0,54.06,54.06,0,0,1-54,54H160a6,6,0,0,0-6,6v34H102V136A6,6,0,0,0,96,130Z" }));
});
l.displayName = "Light";
export {
  l as Light
};
