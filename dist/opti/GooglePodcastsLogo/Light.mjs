var c = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var Z = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, v = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && Z(a, e, t[e]);
  if (V)
    for (var e of V(t))
      o.call(t, e) && Z(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var m in a)
    A.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && V)
    for (var m of V(a))
      t.indexOf(m) < 0 && o.call(a, m) && (e[m] = a[m]);
  return e;
};
import p, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const M = f((m, e) => {
  var r = m, { children: a } = r, t = i(r, ["children"]);
  return /* @__PURE__ */ p.createElement(s, v({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M134,16V48a6,6,0,0,1-12,0V16a6,6,0,0,1,12,0Zm42,42a6,6,0,0,0-6,6V96a6,6,0,0,0,12,0V64A6,6,0,0,0,176,58ZM128,202a6,6,0,0,0-6,6v32a6,6,0,0,0,12,0V208A6,6,0,0,0,128,202Zm0-120a6,6,0,0,0-6,6v80a6,6,0,0,0,12,0V88A6,6,0,0,0,128,82ZM80,58a6,6,0,0,0-6,6v56a6,6,0,0,0,12,0V64A6,6,0,0,0,80,58Zm96,72a6,6,0,0,0-6,6v56a6,6,0,0,0,12,0V136A6,6,0,0,0,176,130ZM32,106a6,6,0,0,0-6,6v32a6,6,0,0,0,12,0V112A6,6,0,0,0,32,106Zm48,48a6,6,0,0,0-6,6v32a6,6,0,0,0,12,0V160A6,6,0,0,0,80,154Zm144-48a6,6,0,0,0-6,6v32a6,6,0,0,0,12,0V112A6,6,0,0,0,224,106Z" }));
});
M.displayName = "Light";
export {
  M as Light
};
