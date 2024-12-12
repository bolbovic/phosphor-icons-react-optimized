var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (e, t, a) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, n = (e, t) => {
  for (var a in t || (t = {}))
    l.call(t, a) && i(e, a, t[a]);
  if (r)
    for (var a of r(t))
      p.call(t, a) && i(e, a, t[a]);
  return e;
};
var Z = (e, t) => {
  var a = {};
  for (var m in e)
    l.call(e, m) && t.indexOf(m) < 0 && (a[m] = e[m]);
  if (e != null && r)
    for (var m of r(e))
      t.indexOf(m) < 0 && p.call(e, m) && (a[m] = e[m]);
  return a;
};
import c, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const d = h((m, a) => {
  var o = m, { children: e } = o, t = Z(o, ["children"]);
  return /* @__PURE__ */ c.createElement(s, n({ ref: a }, t), e, /* @__PURE__ */ c.createElement("path", { d: "M226.22,92.67l-96-64a4,4,0,0,0-4.44,0l-96,64A4,4,0,0,0,28,96V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V96A4,4,0,0,0,226.22,92.67ZM103.63,152,36,199.76v-96Zm8.19,4h32.36l68,48H43.86Zm40.55-4L220,103.76v96ZM128,36.81,217,96.11,144.17,148H111.83L39.05,96.11Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
