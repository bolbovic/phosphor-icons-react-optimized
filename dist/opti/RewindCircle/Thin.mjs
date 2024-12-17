var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const M = f((m, e) => {
  var l = m, { children: a } = l, t = Z(l, ["children"]);
  return /* @__PURE__ */ n.createElement(s, A({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220ZM117.79,88.42a4,4,0,0,0-4.19.38l-48,36a4,4,0,0,0,0,6.4l48,36a4,4,0,0,0,2.4.8,4.05,4.05,0,0,0,1.79-.42A4,4,0,0,0,120,164V92A4,4,0,0,0,117.79,88.42ZM112,156,74.67,128,112,100Zm61.79-67.58a4,4,0,0,0-4.19.38l-48,36a4,4,0,0,0,0,6.4l48,36a4,4,0,0,0,2.4.8,4.05,4.05,0,0,0,1.79-.42A4,4,0,0,0,176,164V92A4,4,0,0,0,173.79,88.42ZM168,156l-37.33-28L168,100Z" }));
});
M.displayName = "Thin";
export {
  M as Thin
};
