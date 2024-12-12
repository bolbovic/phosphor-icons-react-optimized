var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    d.call(t, e) && p(a, e, t[e]);
  if (o)
    for (var e of o(t))
      l.call(t, e) && p(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    d.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && l.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as s } from "react";
import H from "../../lib/OptiBase.mjs";
const Z = s((m, e) => {
  var r = m, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(H, A({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M224.28,141a100.61,100.61,0,0,0-31.4-49H240a12,12,0,0,0,0-24H161.94a36,36,0,0,0-67.88,0H16a12,12,0,0,0,0,24H63.12a100.61,100.61,0,0,0-31.4,49A36,36,0,1,0,56,143.74,76.66,76.66,0,0,1,97.15,98.53a36,36,0,0,0,61.7,0A76.66,76.66,0,0,1,200,143.74,36,36,0,1,0,224.28,141ZM40,188a12,12,0,1,1,12-12A12,12,0,0,1,40,188Zm88-96a12,12,0,1,1,12-12A12,12,0,0,1,128,92Zm88,96a12,12,0,1,1,12-12A12,12,0,0,1,216,188Z" }));
});
Z.displayName = "Bold";
export {
  Z as Bold
};
