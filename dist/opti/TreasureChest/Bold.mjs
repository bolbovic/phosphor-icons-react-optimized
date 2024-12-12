var h = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var v = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var V = (a, m, e) => m in a ? h(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, Z = (a, m) => {
  for (var e in m || (m = {}))
    v.call(m, e) && V(a, e, m[e]);
  if (o)
    for (var e of o(m))
      H.call(m, e) && V(a, e, m[e]);
  return a;
};
var p = (a, m) => {
  var e = {};
  for (var t in a)
    v.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      m.indexOf(t) < 0 && H.call(a, t) && (e[t] = a[t]);
  return e;
};
import d, { forwardRef as l } from "react";
import A from "../../lib/OptiBase.mjs";
const c = l((t, e) => {
  var r = t, { children: a } = r, m = p(r, ["children"]);
  return /* @__PURE__ */ d.createElement(A, Z({ ref: e }, m), a, /* @__PURE__ */ d.createElement("path", { d: "M184,36H72A60.07,60.07,0,0,0,12,96v96a20,20,0,0,0,20,20H224a20,20,0,0,0,20-20V96A60.07,60.07,0,0,0,184,36Zm36,60v4H192V60.91A36.05,36.05,0,0,1,220,96Zm-92,60a12,12,0,0,0,12-12V124h28v64H88V124h28v20A12,12,0,0,0,128,156Zm12-56V96a12,12,0,0,0-24,0v4H88V60h80v40ZM64,60.91V100H36V96A36.05,36.05,0,0,1,64,60.91ZM36,124H64v64H36Zm156,64V124h28v64Z" }));
});
c.displayName = "Bold";
export {
  c as Bold
};
