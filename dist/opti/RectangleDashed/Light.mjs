var A = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var V = (a, m, e) => m in a ? A(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, o = (a, m) => {
  for (var e in m || (m = {}))
    Z.call(m, e) && V(a, e, m[e]);
  if (r)
    for (var e of r(m))
      h.call(m, e) && V(a, e, m[e]);
  return a;
};
var i = (a, m) => {
  var e = {};
  for (var t in a)
    Z.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && h.call(a, t) && (e[t] = a[t]);
  return e;
};
import p, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((t, e) => {
  var H = t, { children: a } = H, m = i(H, ["children"]);
  return /* @__PURE__ */ p.createElement(f, o({ ref: e }, m), a, /* @__PURE__ */ p.createElement("path", { d: "M78,48a6,6,0,0,1-6,6H40a2,2,0,0,0-2,2V72a6,6,0,0,1-12,0V56A14,14,0,0,1,40,42H72A6,6,0,0,1,78,48ZM32,150a6,6,0,0,0,6-6V112a6,6,0,0,0-12,0v32A6,6,0,0,0,32,150Zm40,52H40a2,2,0,0,1-2-2V184a6,6,0,0,0-12,0v16a14,14,0,0,0,14,14H72a6,6,0,0,0,0-12Zm72,0H112a6,6,0,0,0,0,12h32a6,6,0,0,0,0-12Zm80-24a6,6,0,0,0-6,6v16a2,2,0,0,1-2,2H184a6,6,0,0,0,0,12h32a14,14,0,0,0,14-14V184A6,6,0,0,0,224,178Zm0-72a6,6,0,0,0-6,6v32a6,6,0,0,0,12,0V112A6,6,0,0,0,224,106Zm-8-64H184a6,6,0,0,0,0,12h32a2,2,0,0,1,2,2V72a6,6,0,0,0,12,0V56A14,14,0,0,0,216,42Zm-72,0H112a6,6,0,0,0,0,12h32a6,6,0,0,0,0-12Z" }));
});
s.displayName = "Light";
export {
  s as Light
};