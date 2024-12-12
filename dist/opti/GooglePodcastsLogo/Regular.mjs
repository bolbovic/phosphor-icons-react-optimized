var c = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var Z = (a, m, e) => m in a ? c(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, v = (a, m) => {
  for (var e in m || (m = {}))
    A.call(m, e) && Z(a, e, m[e]);
  if (t)
    for (var e of t(m))
      o.call(m, e) && Z(a, e, m[e]);
  return a;
};
var p = (a, m) => {
  var e = {};
  for (var r in a)
    A.call(a, r) && m.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      m.indexOf(r) < 0 && o.call(a, r) && (e[r] = a[r]);
  return e;
};
import l, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((r, e) => {
  var V = r, { children: a } = V, m = p(V, ["children"]);
  return /* @__PURE__ */ l.createElement(i, v({ ref: e }, m), a, /* @__PURE__ */ l.createElement("path", { d: "M136,16V48a8,8,0,0,1-16,0V16a8,8,0,0,1,16,0Zm40,40a8,8,0,0,0-8,8V96a8,8,0,0,0,16,0V64A8,8,0,0,0,176,56ZM128,200a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V208A8,8,0,0,0,128,200Zm0-120a8,8,0,0,0-8,8v80a8,8,0,0,0,16,0V88A8,8,0,0,0,128,80ZM80,56a8,8,0,0,0-8,8v56a8,8,0,0,0,16,0V64A8,8,0,0,0,80,56Zm96,72a8,8,0,0,0-8,8v56a8,8,0,0,0,16,0V136A8,8,0,0,0,176,128ZM32,104a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V112A8,8,0,0,0,32,104Zm48,48a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V160A8,8,0,0,0,80,152Zm144-48a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V112A8,8,0,0,0,224,104Z" }));
});
s.displayName = "Regular";
export {
  s as Regular
};
