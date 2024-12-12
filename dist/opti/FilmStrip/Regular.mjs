var l = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var V = (e, a, m) => a in e ? l(e, a, { enumerable: !0, configurable: !0, writable: !0, value: m }) : e[a] = m, o = (e, a) => {
  for (var m in a || (a = {}))
    Z.call(a, m) && V(e, m, a[m]);
  if (t)
    for (var m of t(a))
      h.call(a, m) && V(e, m, a[m]);
  return e;
};
var p = (e, a) => {
  var m = {};
  for (var r in e)
    Z.call(e, r) && a.indexOf(r) < 0 && (m[r] = e[r]);
  if (e != null && t)
    for (var r of t(e))
      a.indexOf(r) < 0 && h.call(e, r) && (m[r] = e[r]);
  return m;
};
import v, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((r, m) => {
  var H = r, { children: e } = H, a = p(H, ["children"]);
  return /* @__PURE__ */ v.createElement(f, o({ ref: m }, a), e, /* @__PURE__ */ v.createElement("path", { d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM40,88h80v80H40Zm96-16V56h32V72Zm-16,0H88V56h32Zm0,112v16H88V184Zm16,0h32v16H136Zm0-16V88h80v80Zm80-96H184V56h32ZM72,56V72H40V56ZM40,184H72v16H40Zm176,16H184V184h32v16Z" }));
});
i.displayName = "Regular";
export {
  i as Regular
};
