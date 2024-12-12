var L = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? L(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, f = (a, l) => {
  for (var e in l || (l = {}))
    p.call(l, e) && o(a, e, l[e]);
  if (t)
    for (var e of t(l))
      c.call(l, e) && o(a, e, l[e]);
  return a;
};
var i = (a, l) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && l.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      l.indexOf(r) < 0 && c.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as R } from "react";
import d from "../../lib/OptiBase.mjs";
const n = R((r, e) => {
  var m = r, { children: a } = m, l = i(m, ["children"]);
  return /* @__PURE__ */ s.createElement(d, f({ ref: e }, l), a, /* @__PURE__ */ s.createElement("path", { d: "M245.66,58.34l-48-48a8,8,0,0,0-11.32,11.32L204.69,40l-71,71L99.31,76.68a16,16,0,0,0-22.62,0l-56,56A15.89,15.89,0,0,0,16,144v80a16,16,0,0,0,16,16h80a15.86,15.86,0,0,0,11.31-4.69l56-56a16,16,0,0,0,0-22.62L145,122.34l71-71,18.34,18.35a8,8,0,0,0,11.32-11.32ZM168,168l-56,56H32V144L88,88l34.34,34.34-40,40a8,8,0,0,0,11.32,11.32l40-40Z" }));
});
n.displayName = "Regular";
export {
  n as Regular
};
