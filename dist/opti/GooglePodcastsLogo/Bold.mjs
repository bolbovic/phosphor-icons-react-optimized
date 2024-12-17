var l = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var r = (a, m, e) => m in a ? l(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, v = (a, m) => {
  for (var e in m || (m = {}))
    A.call(m, e) && r(a, e, m[e]);
  if (V)
    for (var e of V(m))
      Z.call(m, e) && r(a, e, m[e]);
  return a;
};
var p = (a, m) => {
  var e = {};
  for (var t in a)
    A.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && V)
    for (var t of V(a))
      m.indexOf(t) < 0 && Z.call(a, t) && (e[t] = a[t]);
  return e;
};
import d, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((t, e) => {
  var o = t, { children: a } = o, m = p(o, ["children"]);
  return /* @__PURE__ */ d.createElement(f, v({ ref: e }, m), a, /* @__PURE__ */ d.createElement("path", { d: "M140,16V48a12,12,0,0,1-24,0V16a12,12,0,0,1,24,0Zm36,36a12,12,0,0,0-12,12V96a12,12,0,0,0,24,0V64A12,12,0,0,0,176,52ZM128,196a12,12,0,0,0-12,12v32a12,12,0,0,0,24,0V208A12,12,0,0,0,128,196Zm0-120a12,12,0,0,0-12,12v80a12,12,0,0,0,24,0V88A12,12,0,0,0,128,76ZM80,52A12,12,0,0,0,68,64v56a12,12,0,0,0,24,0V64A12,12,0,0,0,80,52Zm96,72a12,12,0,0,0-12,12v56a12,12,0,0,0,24,0V136A12,12,0,0,0,176,124ZM32,100a12,12,0,0,0-12,12v32a12,12,0,0,0,24,0V112A12,12,0,0,0,32,100Zm48,48a12,12,0,0,0-12,12v32a12,12,0,0,0,24,0V160A12,12,0,0,0,80,148Zm144-48a12,12,0,0,0-12,12v32a12,12,0,0,0,24,0V112A12,12,0,0,0,224,100Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
