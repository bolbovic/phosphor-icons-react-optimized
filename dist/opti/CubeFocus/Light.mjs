var H = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    Z.call(t, e) && l(a, e, t[e]);
  if (r)
    for (var e of r(t))
      o.call(t, e) && l(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    Z.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && o.call(a, m) && (e[m] = a[m]);
  return e;
};
import A, { forwardRef as h } from "react";
import M from "../../lib/OptiBase.mjs";
const c = h((m, e) => {
  var V = m, { children: a } = V, t = p(V, ["children"]);
  return /* @__PURE__ */ A.createElement(M, i({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M230,48V88a6,6,0,0,1-12,0V54H184a6,6,0,0,1,0-12h40A6,6,0,0,1,230,48ZM72,202H38V168a6,6,0,0,0-12,0v40a6,6,0,0,0,6,6H72a6,6,0,0,0,0-12Zm152-40a6,6,0,0,0-6,6v34H184a6,6,0,0,0,0,12h40a6,6,0,0,0,6-6V168A6,6,0,0,0,224,162ZM32,94a6,6,0,0,0,6-6V54H72a6,6,0,0,0,0-12H32a6,6,0,0,0-6,6V88A6,6,0,0,0,32,94Zm155,71.21-56,32a6,6,0,0,1-6,0l-56-32A6,6,0,0,1,66,160V96a6,6,0,0,1,3-5.21l56-32a6,6,0,0,1,6,0l56,32A6,6,0,0,1,190,96v64A6,6,0,0,1,187,165.21ZM84.09,96,128,121.09,171.91,96,128,70.91ZM78,156.52l44,25.14V131.48L78,106.34Zm100,0V106.34l-44,25.14v50.18Z" }));
});
c.displayName = "Light";
export {
  c as Light
};
