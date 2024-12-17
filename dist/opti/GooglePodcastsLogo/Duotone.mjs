var l = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, v = Object.prototype.propertyIsEnumerable;
var Z = (a, t, e) => t in a ? l(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && Z(a, e, t[e]);
  if (o)
    for (var e of o(t))
      v.call(t, e) && Z(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && v.call(a, m) && (e[m] = a[m]);
  return e;
};
import V, { forwardRef as n } from "react";
import i from "../../lib/OptiBase.mjs";
const M = n((m, e) => {
  var r = m, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ V.createElement(i, A({ ref: e }, t), a, /* @__PURE__ */ V.createElement("path", { d: "M224,144l-96,96L32,144V112l96-96,96,96v32Z", opacity: "0.2" }), /* @__PURE__ */ V.createElement("path", { d: "M136,16V48a8,8,0,0,1-16,0V16a8,8,0,0,1,16,0Zm40,40a8,8,0,0,0-8,8V96a8,8,0,0,0,16,0V64A8,8,0,0,0,176,56ZM128,200a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V208A8,8,0,0,0,128,200Zm0-120a8,8,0,0,0-8,8v80a8,8,0,0,0,16,0V88A8,8,0,0,0,128,80ZM80,56a8,8,0,0,0-8,8v56a8,8,0,0,0,16,0V64A8,8,0,0,0,80,56Zm96,72a8,8,0,0,0-8,8v56a8,8,0,0,0,16,0V136A8,8,0,0,0,176,128ZM32,104a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V112A8,8,0,0,0,32,104Zm48,48a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V160A8,8,0,0,0,80,152Zm144-48a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V112A8,8,0,0,0,224,104Z" }));
});
M.displayName = "Duotone";
export {
  M as Duotone
};
