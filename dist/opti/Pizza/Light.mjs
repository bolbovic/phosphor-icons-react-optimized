var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    L.call(t, e) && A(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && A(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    L.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((m, e) => {
  var o = m, { children: a } = o, t = l(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(h, p({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M237.6,63.47a13.91,13.91,0,0,0-6.35-8.67,199.48,199.48,0,0,0-206.5,0A14,14,0,0,0,20.05,74l96,157.27a14,14,0,0,0,24,0L236,74A13.81,13.81,0,0,0,237.6,63.47ZM61.07,118.2A26,26,0,1,1,87.17,161Zm91,70.32a26,26,0,0,1,26.91-44.1Zm33.2-54.4A37.65,37.65,0,0,0,168,130a38,38,0,0,0-22.25,68.8l-16,26.24a2,2,0,0,1-3.46,0L93.59,171.49A38,38,0,1,0,54.66,107.7L46.05,93.59a154.14,154.14,0,0,1,163.9,0Zm40.49-66.35L216.2,83.35a166.11,166.11,0,0,0-176.4,0L30.29,67.77h0a1.88,1.88,0,0,1-.23-1.47A2,2,0,0,1,31,65.06a187.46,187.46,0,0,1,194,0,2,2,0,0,1,.92,1.24A1.88,1.88,0,0,1,225.71,67.77Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
