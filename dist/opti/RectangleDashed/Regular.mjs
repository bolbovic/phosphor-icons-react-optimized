var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var V = (a, m, e) => m in a ? f(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, l = (a, m) => {
  for (var e in m || (m = {}))
    Z.call(m, e) && V(a, e, m[e]);
  if (r)
    for (var e of r(m))
      o.call(m, e) && V(a, e, m[e]);
  return a;
};
var p = (a, m) => {
  var e = {};
  for (var t in a)
    Z.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && o.call(a, t) && (e[t] = a[t]);
  return e;
};
import A, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const c = h((t, e) => {
  var H = t, { children: a } = H, m = p(H, ["children"]);
  return /* @__PURE__ */ A.createElement(s, l({ ref: e }, m), a, /* @__PURE__ */ A.createElement("path", { d: "M80,48a8,8,0,0,1-8,8H40V72a8,8,0,0,1-16,0V56A16,16,0,0,1,40,40H72A8,8,0,0,1,80,48ZM32,152a8,8,0,0,0,8-8V112a8,8,0,0,0-16,0v32A8,8,0,0,0,32,152Zm40,48H40V184a8,8,0,0,0-16,0v16a16,16,0,0,0,16,16H72a8,8,0,0,0,0-16Zm72,0H112a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm80-24a8,8,0,0,0-8,8v16H184a8,8,0,0,0,0,16h32a16,16,0,0,0,16-16V184A8,8,0,0,0,224,176Zm0-72a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V112A8,8,0,0,0,224,104Zm-8-64H184a8,8,0,0,0,0,16h32V72a8,8,0,0,0,16,0V56A16,16,0,0,0,216,40Zm-72,0H112a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Z" }));
});
c.displayName = "Regular";
export {
  c as Regular,
  c as default
};
