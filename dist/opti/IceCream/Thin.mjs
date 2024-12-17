var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((m, e) => {
  var l = m, { children: a } = l, t = n(l, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, h({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M204,100.4V96A76,76,0,0,0,52,96v4.4A20,20,0,0,0,56,140h5.61l56,97.95a12,12,0,0,0,20.84,0l56-97.95H200a20,20,0,0,0,4-39.6ZM131.47,234a4,4,0,0,1-6.94,0L70.82,140H99.39l42.9,75.06Zm5.64-94,24,42.06L146.89,207l-38.28-67Zm28.64,34-19.43-34h38.86ZM200,132H56a12,12,0,0,1,0-24,4,4,0,0,0,4-4V96a68,68,0,0,1,136,0v8a4,4,0,0,0,4,4,12,12,0,0,1,0,24Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
