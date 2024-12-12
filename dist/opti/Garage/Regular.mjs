var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var l = (a, r, e) => r in a ? c(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, V = (a, r) => {
  for (var e in r || (r = {}))
    o.call(r, e) && l(a, e, r[e]);
  if (m)
    for (var e of m(r))
      p.call(r, e) && l(a, e, r[e]);
  return a;
};
var Z = (a, r) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import h, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((t, e) => {
  var H = t, { children: a } = H, r = Z(H, ["children"]);
  return /* @__PURE__ */ h.createElement(i, V({ ref: e }, r), a, /* @__PURE__ */ h.createElement("path", { d: "M240,192h-8V98.67a16,16,0,0,0-7.12-13.31l-88-58.67a16,16,0,0,0-17.75,0l-88,58.67A16,16,0,0,0,24,98.67V192H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM40,98.67,128,40l88,58.66V192H192V136a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8v56H40ZM176,144v16H136V144Zm-56,16H80V144h40ZM80,176h40v16H80Zm56,0h40v16H136Z" }));
});
s.displayName = "Regular";
export {
  s as Regular
};
