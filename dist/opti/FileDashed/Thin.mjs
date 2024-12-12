var n = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      V.call(t, e) && o(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var m in a)
    H.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && V.call(a, m) && (e[m] = a[m]);
  return e;
};
import p, { forwardRef as A } from "react";
import M from "../../lib/OptiBase.mjs";
const c = A((m, e) => {
  var h = m, { children: a } = h, t = i(h, ["children"]);
  return /* @__PURE__ */ p.createElement(M, Z({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M76,224a4,4,0,0,1-4,4H56a12,12,0,0,1-12-12V184a4,4,0,0,1,8,0v32a4,4,0,0,0,4,4H72A4,4,0,0,1,76,224ZM212,88v48a4,4,0,0,1-8,0V92H152a4,4,0,0,1-4-4V36H120a4,4,0,0,1,0-8h32a4,4,0,0,1,2.83,1.17l56,56A4,4,0,0,1,212,88Zm-56-4h42.34L156,41.66ZM80,28H56A12,12,0,0,0,44,40V64a4,4,0,0,0,8,0V40a4,4,0,0,1,4-4H80a4,4,0,0,0,0-8ZM208,172a4,4,0,0,0-4,4v40a4,4,0,0,1-4,4h-8a4,4,0,0,0,0,8h8a12,12,0,0,0,12-12V176A4,4,0,0,0,208,172ZM48,148a4,4,0,0,0,4-4V104a4,4,0,0,0-8,0v40A4,4,0,0,0,48,148Zm104,72H112a4,4,0,0,0,0,8h40a4,4,0,0,0,0-8Z" }));
});
c.displayName = "Thin";
export {
  c as Thin
};
