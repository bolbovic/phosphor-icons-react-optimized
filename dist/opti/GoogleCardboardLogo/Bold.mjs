var c = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var l = (a, m, e) => m in a ? c(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, Z = (a, m) => {
  for (var e in m || (m = {}))
    A.call(m, e) && l(a, e, m[e]);
  if (o)
    for (var e of o(m))
      p.call(m, e) && l(a, e, m[e]);
  return a;
};
var d = (a, m) => {
  var e = {};
  for (var t in a)
    A.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      m.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import H, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((t, e) => {
  var r = t, { children: a } = r, m = d(r, ["children"]);
  return /* @__PURE__ */ H.createElement(i, Z({ ref: e }, m), a, /* @__PURE__ */ H.createElement("path", { d: "M224,44H32A20,20,0,0,0,12,64V192a20,20,0,0,0,20,20H96a12,12,0,0,0,8.49-3.51L128,185l23.51,23.52A12,12,0,0,0,160,212h64a20,20,0,0,0,20-20V64A20,20,0,0,0,224,44Zm-4,144H165l-22.83-22.83a20,20,0,0,0-28.28,0L91,188H36V68H220ZM82,160a34,34,0,1,0-34-34A34,34,0,0,0,82,160Zm0-44a10,10,0,1,1-10,10A10,10,0,0,1,82,116Zm92,44a34,34,0,1,0-34-34A34,34,0,0,0,174,160Zm0-44a10,10,0,1,1-10,10A10,10,0,0,1,174,116Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
