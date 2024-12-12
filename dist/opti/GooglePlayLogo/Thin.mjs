var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && i(a, e, t[e]);
  return a;
};
var L = (a, t) => {
  var e = {};
  for (var m in a)
    l.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((m, e) => {
  var o = m, { children: a } = o, t = L(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, n({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M237.89,117.69,70.05,21.62a12,12,0,0,0-12.13,0A11.69,11.69,0,0,0,52,31.87V224.13a11.69,11.69,0,0,0,5.92,10.21,12,12,0,0,0,12.13,0l167.77-96a11.76,11.76,0,0,0,.07-20.66Zm-52.44-20.8L160,122.34,66.4,28.75ZM60,222.33V33.67L154.34,128Zm6.4,4.92L160,133.66l25.45,25.45Zm167.51-95.88L192.65,155l-27-27,27-27L234,124.66a3.77,3.77,0,0,1-.07,6.71Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
