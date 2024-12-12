var L = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? L(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      Z.call(t, e) && o(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var m in a)
    H.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && Z.call(a, m) && (e[m] = a[m]);
  return e;
};
import p, { forwardRef as n } from "react";
import V from "../../lib/OptiBase.mjs";
const c = n((m, e) => {
  var l = m, { children: a } = l, t = i(l, ["children"]);
  return /* @__PURE__ */ p.createElement(V, h({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M240,196H228V118.08l8.74,12.25A4,4,0,0,0,240,132a4,4,0,0,0,3.25-6.32l-40-56a3.77,3.77,0,0,0-1-1L134.66,22a12,12,0,0,0-13.37,0L53.73,68.71a3.77,3.77,0,0,0-1,1l-40,56a4,4,0,1,0,6.51,4.65L28,118.08V196H16a4,4,0,0,0,0,8H240a4,4,0,0,0,0-8ZM36,106.88l22.85-32,66.93-46.23a4,4,0,0,1,4.38,0l67,46.26,22.85,32V196H188V120a4,4,0,0,0-4-4H72a4,4,0,0,0-4,4v76H36Zm92,48.2L84.48,124h87Zm52-27.31v64.46L134.88,160ZM121.12,160,76,192.23V127.77Zm6.88,4.92L171.52,196h-87ZM108,88a4,4,0,0,1,4-4h32a4,4,0,0,1,0,8H112A4,4,0,0,1,108,88Z" }));
});
c.displayName = "Thin";
export {
  c as Thin
};
