var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      A.call(t, e) && i(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && A.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((m, e) => {
  var o = m, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, l({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M212,96A84,84,0,1,0,76,161.9V240a4,4,0,0,0,4,4,4.05,4.05,0,0,0,1.79-.42L128,220.47l46.22,23.11A4,4,0,0,0,180,240V161.9A83.89,83.89,0,0,0,212,96ZM172,233.53l-42.22-21.11a4,4,0,0,0-3.58,0L84,233.53v-66a83.8,83.8,0,0,0,88,0ZM128,172a76,76,0,1,1,76-76A76.08,76.08,0,0,1,128,172Zm0-128a52,52,0,1,0,52,52A52.06,52.06,0,0,0,128,44Zm0,96a44,44,0,1,1,44-44A44.05,44.05,0,0,1,128,140Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
