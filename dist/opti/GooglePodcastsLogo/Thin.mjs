var n = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var Z = (a, m, e) => m in a ? n(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, v = (a, m) => {
  for (var e in m || (m = {}))
    A.call(m, e) && Z(a, e, m[e]);
  if (V)
    for (var e of V(m))
      o.call(m, e) && Z(a, e, m[e]);
  return a;
};
var i = (a, m) => {
  var e = {};
  for (var t in a)
    A.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && V)
    for (var t of V(a))
      m.indexOf(t) < 0 && o.call(a, t) && (e[t] = a[t]);
  return e;
};
import p, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((t, e) => {
  var r = t, { children: a } = r, m = i(r, ["children"]);
  return /* @__PURE__ */ p.createElement(f, v({ ref: e }, m), a, /* @__PURE__ */ p.createElement("path", { d: "M132,16V48a4,4,0,0,1-8,0V16a4,4,0,0,1,8,0Zm44,44a4,4,0,0,0-4,4V96a4,4,0,0,0,8,0V64A4,4,0,0,0,176,60ZM128,204a4,4,0,0,0-4,4v32a4,4,0,0,0,8,0V208A4,4,0,0,0,128,204Zm0-120a4,4,0,0,0-4,4v80a4,4,0,0,0,8,0V88A4,4,0,0,0,128,84ZM80,60a4,4,0,0,0-4,4v56a4,4,0,0,0,8,0V64A4,4,0,0,0,80,60Zm96,72a4,4,0,0,0-4,4v56a4,4,0,0,0,8,0V136A4,4,0,0,0,176,132ZM32,108a4,4,0,0,0-4,4v32a4,4,0,0,0,8,0V112A4,4,0,0,0,32,108Zm48,48a4,4,0,0,0-4,4v32a4,4,0,0,0,8,0V160A4,4,0,0,0,80,156Zm144-48a4,4,0,0,0-4,4v32a4,4,0,0,0,8,0V112A4,4,0,0,0,224,108Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
