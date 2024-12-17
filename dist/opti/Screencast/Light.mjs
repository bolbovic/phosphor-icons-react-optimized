var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      A.call(t, e) && i(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && A.call(a, m) && (e[m] = a[m]);
  return e;
};
import h, { forwardRef as V } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = V((m, e) => {
  var o = m, { children: a } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ h.createElement(Z, c({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M230,56V200a14,14,0,0,1-14,14H144a6,6,0,0,1,0-12h72a2,2,0,0,0,2-2V56a2,2,0,0,0-2-2H40a2,2,0,0,0-2,2V96a6,6,0,0,1-12,0V56A14,14,0,0,1,40,42H216A14,14,0,0,1,230,56ZM32,186a6,6,0,0,0,0,12,10,10,0,0,1,10,10,6,6,0,0,0,12,0A22,22,0,0,0,32,186Zm0-32a6,6,0,0,0,0,12,42,42,0,0,1,42,42,6,6,0,0,0,12,0A54.06,54.06,0,0,0,32,154Zm0-32a6,6,0,0,0,0,12,74.09,74.09,0,0,1,74,74,6,6,0,0,0,12,0A86.1,86.1,0,0,0,32,122Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
