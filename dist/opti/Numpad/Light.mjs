var s = Object.defineProperty;
var A = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var r = (a, e, m) => e in a ? s(a, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : a[e] = m, p = (a, e) => {
  for (var m in e || (e = {}))
    o.call(e, m) && r(a, m, e[m]);
  if (A)
    for (var m of A(e))
      i.call(e, m) && r(a, m, e[m]);
  return a;
};
var c = (a, e) => {
  var m = {};
  for (var t in a)
    o.call(a, t) && e.indexOf(t) < 0 && (m[t] = a[t]);
  if (a != null && A)
    for (var t of A(a))
      e.indexOf(t) < 0 && i.call(a, t) && (m[t] = a[t]);
  return m;
};
import f, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const l = d((t, m) => {
  var Z = t, { children: a } = Z, e = c(Z, ["children"]);
  return /* @__PURE__ */ f.createElement(h, p({ ref: m }, e), a, /* @__PURE__ */ f.createElement("path", { d: "M78,48A14,14,0,1,1,64,34,14,14,0,0,1,78,48Zm50-14a14,14,0,1,0,14,14A14,14,0,0,0,128,34Zm64,28a14,14,0,1,0-14-14A14,14,0,0,0,192,62ZM64,90a14,14,0,1,0,14,14A14,14,0,0,0,64,90Zm64,0a14,14,0,1,0,14,14A14,14,0,0,0,128,90Zm64,0a14,14,0,1,0,14,14A14,14,0,0,0,192,90ZM64,146a14,14,0,1,0,14,14A14,14,0,0,0,64,146Zm64,0a14,14,0,1,0,14,14A14,14,0,0,0,128,146Zm0,56a14,14,0,1,0,14,14A14,14,0,0,0,128,202Zm64-56a14,14,0,1,0,14,14A14,14,0,0,0,192,146Z" }));
});
l.displayName = "Light";
export {
  l as Light
};
