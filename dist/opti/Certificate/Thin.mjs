var n = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && V(a, e, t[e]);
  if (r)
    for (var e of r(t))
      l.call(t, e) && V(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && l.call(a, m) && (e[m] = a[m]);
  return e;
};
import h, { forwardRef as H } from "react";
import c from "../../lib/OptiBase.mjs";
const f = H((m, e) => {
  var o = m, { children: a } = o, t = Z(o, ["children"]);
  return /* @__PURE__ */ h.createElement(c, p({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M124,136a4,4,0,0,1-4,4H72a4,4,0,0,1,0-8h48A4,4,0,0,1,124,136Zm-4-36H72a4,4,0,0,0,0,8h48a4,4,0,0,0,0-8Zm108,59.74V224a4,4,0,0,1-6,3.47l-26-14.86-26,14.86a4,4,0,0,1-6-3.47V196H40a12,12,0,0,1-12-12V56A12,12,0,0,1,40,44H216a12,12,0,0,1,12,12V88.26a47.92,47.92,0,0,1,0,71.48ZM196,84a40,40,0,1,0,40,40A40,40,0,0,0,196,84ZM164,188V159.74a48,48,0,0,1,56-77.28V56a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4V184a4,4,0,0,0,4,4Zm56-22.46a47.81,47.81,0,0,1-48,0v51.57l22-12.58a4,4,0,0,1,4,0l22,12.58Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
