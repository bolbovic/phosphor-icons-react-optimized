var s = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? s(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, c = (a, l) => {
  for (var e in l || (l = {}))
    L.call(l, e) && o(a, e, l[e]);
  if (t)
    for (var e of t(l))
      p.call(l, e) && o(a, e, l[e]);
  return a;
};
var f = (a, l) => {
  var e = {};
  for (var r in a)
    L.call(a, r) && l.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      l.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import i, { forwardRef as R } from "react";
import d from "../../lib/OptiBase.mjs";
const n = R((r, e) => {
  var m = r, { children: a } = m, l = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(d, c({ ref: e }, l), a, /* @__PURE__ */ i.createElement("path", { d: "M237.66,66.34l-48-48a8,8,0,0,0-11.32,11.32L196.69,48,168,76.69,133.66,42.34a8,8,0,0,0-11.32,11.32L128.69,60l-84,84A15.86,15.86,0,0,0,40,155.31v49.38L18.34,226.34a8,8,0,0,0,11.32,11.32L51.31,216h49.38A15.86,15.86,0,0,0,112,211.31l84-84,6.34,6.35a8,8,0,0,0,11.32-11.32L179.31,88,208,59.31l18.34,18.35a8,8,0,0,0,11.32-11.32ZM100.69,200H56V155.31l18-18,20.34,20.35a8,8,0,0,0,11.32-11.32L85.31,126,98,113.31l20.34,20.35a8,8,0,0,0,11.32-11.32L109.31,102,140,71.31,184.69,116Z" }));
});
n.displayName = "Regular";
export {
  n as Regular
};
