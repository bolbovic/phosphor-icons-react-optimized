var v = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? v(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && l(a, e, t[e]);
  if (r)
    for (var e of r(t))
      h.call(t, e) && l(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && h.call(a, m) && (e[m] = a[m]);
  return e;
};
import n, { forwardRef as H } from "react";
import Z from "../../lib/OptiBase.mjs";
const c = H((m, e) => {
  var V = m, { children: a } = V, t = p(V, ["children"]);
  return /* @__PURE__ */ n.createElement(Z, i({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M83.77,153.35l-20,56a4,4,0,0,1-7.54,0l-20-56a4,4,0,0,1,7.54-2.7L60,196.11l16.23-45.46a4,4,0,0,1,7.54,2.7ZM208,156a4,4,0,0,0,0-8H176a4,4,0,0,0-4,4v56a4,4,0,0,0,4,4h32a4,4,0,0,0,0-8H180V184h20a4,4,0,0,0,0-8H180V156Zm-64-8a4,4,0,0,0-4,4v38a14,14,0,0,1-28,0V152a4,4,0,0,0-8,0v38a22,22,0,0,0,44,0V152A4,4,0,0,0,144,148Zm68-60v24a4,4,0,0,1-8,0V92H152a4,4,0,0,1-4-4V36H56a4,4,0,0,0-4,4v72a4,4,0,0,1-8,0V40A12,12,0,0,1,56,28h96a4,4,0,0,1,2.83,1.17l56,56A4,4,0,0,1,212,88Zm-13.66-4L156,41.65V84Z" }));
});
c.displayName = "Thin";
export {
  c as Thin
};
