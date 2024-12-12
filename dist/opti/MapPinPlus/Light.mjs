var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && c(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && c(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import s, { forwardRef as l } from "react";
import n from "../../lib/OptiBase.mjs";
const V = l((m, e) => {
  var o = m, { children: a } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ s.createElement(n, h({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M166,104a6,6,0,0,1-6,6H134v26a6,6,0,0,1-12,0V110H96a6,6,0,0,1,0-12h26V72a6,6,0,0,1,12,0V98h26A6,6,0,0,1,166,104Zm48,0c0,30.91-14.34,63.74-41.47,94.94a252.32,252.32,0,0,1-41.09,38,6,6,0,0,1-6.88,0,252.32,252.32,0,0,1-41.09-38C56.34,167.74,42,134.91,42,104a86,86,0,0,1,172,0Zm-12,0a74,74,0,0,0-148,0c0,59.62,59,108.93,74,120.51C143,212.93,202,163.62,202,104Z" }));
});
V.displayName = "Light";
export {
  V as Light
};
