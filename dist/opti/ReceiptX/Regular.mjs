var s = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, l, e) => l in a ? s(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, c = (a, l) => {
  for (var e in l || (l = {}))
    o.call(l, e) && m(a, e, l[e]);
  if (t)
    for (var e of t(l))
      p.call(l, e) && m(a, e, l[e]);
  return a;
};
var f = (a, l) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && l.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      l.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import i, { forwardRef as R } from "react";
import d from "../../lib/OptiBase.mjs";
const n = R((r, e) => {
  var L = r, { children: a } = L, l = f(L, ["children"]);
  return /* @__PURE__ */ i.createElement(d, c({ ref: e }, l), a, /* @__PURE__ */ i.createElement("path", { d: "M216,40H40A16,16,0,0,0,24,56V208a8,8,0,0,0,11.58,7.15L64,200.94l28.42,14.21a8,8,0,0,0,7.16,0L128,200.94l28.42,14.21a8,8,0,0,0,7.16,0L192,200.94l28.42,14.21A8,8,0,0,0,232,208V56A16,16,0,0,0,216,40Zm0,155.06-20.42-10.22a8,8,0,0,0-7.16,0L160,199.06l-28.42-14.22a8,8,0,0,0-7.16,0L96,199.06,67.58,184.84a8,8,0,0,0-7.16,0L40,195.06V56H216ZM98.34,138.34,116.69,120,98.34,101.66a8,8,0,0,1,11.32-11.32L128,108.69l18.34-18.35a8,8,0,0,1,11.32,11.32L139.31,120l18.35,18.34a8,8,0,0,1-11.32,11.32L128,131.31l-18.34,18.35a8,8,0,0,1-11.32-11.32Z" }));
});
n.displayName = "Regular";
export {
  n as Regular
};
