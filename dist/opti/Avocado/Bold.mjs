var s = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (o)
    for (var e of o(t))
      c.call(t, e) && l(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && c.call(a, m) && (e[m] = a[m]);
  return e;
};
import i, { forwardRef as A } from "react";
import Z from "../../lib/OptiBase.mjs";
const h = A((m, e) => {
  var r = m, { children: a } = r, t = f(r, ["children"]);
  return /* @__PURE__ */ i.createElement(Z, d({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M128,108a52,52,0,1,0,52,52A52.06,52.06,0,0,0,128,108Zm0,80a28,28,0,1,1,28-28A28,28,0,0,1,128,188Zm86.76-58.68L185,45.17A60,60,0,0,0,71.42,44h0l-29.5,83.46a92,92,0,1,0,172.84,1.86ZM128,228a68.05,68.05,0,0,1-63.59-92.15c0-.09.07-.18.1-.26L94.05,52h0a36,36,0,0,1,68.17.78l.09.27,29.82,84.28A68,68,0,0,1,128,228Z" }));
});
h.displayName = "Bold";
export {
  h as Bold
};
