var l = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var V = (a, m, e) => m in a ? l(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, p = (a, m) => {
  for (var e in m || (m = {}))
    Z.call(m, e) && V(a, e, m[e]);
  if (t)
    for (var e of t(m))
      o.call(m, e) && V(a, e, m[e]);
  return a;
};
var A = (a, m) => {
  var e = {};
  for (var r in a)
    Z.call(a, r) && m.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      m.indexOf(r) < 0 && o.call(a, r) && (e[r] = a[r]);
  return e;
};
import h, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((r, e) => {
  var H = r, { children: a } = H, m = A(H, ["children"]);
  return /* @__PURE__ */ h.createElement(f, p({ ref: e }, m), a, /* @__PURE__ */ h.createElement("path", { d: "M80,48a8,8,0,0,1-8,8H40V72a8,8,0,0,1-16,0V56A16,16,0,0,1,40,40H72A8,8,0,0,1,80,48ZM32,152a8,8,0,0,0,8-8V112a8,8,0,0,0-16,0v32A8,8,0,0,0,32,152Zm40,48H40V184a8,8,0,0,0-16,0v16a16,16,0,0,0,16,16H72a8,8,0,0,0,0-16Zm72,0H112a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm80-24a8,8,0,0,0-8,8v16H184a8,8,0,0,0,0,16h32a16,16,0,0,0,16-16V184A8,8,0,0,0,224,176Zm0-72a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V112A8,8,0,0,0,224,104Zm-8-64H184a8,8,0,0,0,0,16h32V72a8,8,0,0,0,16,0V56A16,16,0,0,0,216,40Zm-72,0H112a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Z" }));
});
i.displayName = "Regular";
export {
  i as Regular
};
