var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && V(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && V(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    l.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const h = i((m, e) => {
  var r = m, { children: a } = r, t = Z(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, d({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M236,48a12,12,0,0,1-12,12H212V72a12,12,0,0,1-24,0V60H176a12,12,0,0,1,0-24h12V24a12,12,0,0,1,24,0V36h12A12,12,0,0,1,236,48Zm-16,64v52a40,40,0,1,1-24-36.65V112a12,12,0,0,1,24,0Zm-24,52a16,16,0,1,0-16,16A16,16,0,0,0,196,164ZM92,113.37V196a40,40,0,1,1-24-36.65V56a12,12,0,0,1,9.09-11.64l56-14a12,12,0,0,1,5.82,23.28L92,65.37V88.63l65.09-16.27a12,12,0,0,1,5.82,23.28ZM68,196a16,16,0,1,0-16,16A16,16,0,0,0,68,196Z" }));
});
h.displayName = "Bold";
export {
  h as Bold
};
