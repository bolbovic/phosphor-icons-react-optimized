var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? f(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, p = (a, l) => {
  for (var e in l || (l = {}))
    Z.call(l, e) && o(a, e, l[e]);
  if (m)
    for (var e of m(l))
      i.call(l, e) && o(a, e, l[e]);
  return a;
};
var H = (a, l) => {
  var e = {};
  for (var t in a)
    Z.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      l.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as s } from "react";
import M from "../../lib/OptiBase.mjs";
const V = s((t, e) => {
  var r = t, { children: a } = r, l = H(r, ["children"]);
  return /* @__PURE__ */ c.createElement(M, p({ ref: e }, l), a, /* @__PURE__ */ c.createElement("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM96,64a8,8,0,0,1,16,0V80a8,8,0,0,1-16,0ZM64,96H80a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16Zm64.08,85.66-7.21,7.21a38,38,0,1,1-53.74-53.74l7.21-7.21a8,8,0,1,1,11.32,11.31l-7.22,7.21a22,22,0,0,0,31.12,31.12l7.21-7.22a8,8,0,1,1,11.31,11.32ZM160,192a8,8,0,0,1-16,0V176a8,8,0,0,1,16,0Zm32-32H176a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm-3.13-39.13-7.21,7.21a8,8,0,1,1-11.32-11.31l7.22-7.21a22,22,0,0,0-31.12-31.12l-7.21,7.22a8,8,0,1,1-11.31-11.32l7.21-7.21a38,38,0,1,1,53.74,53.74Z" }));
});
V.displayName = "Fill";
export {
  V as Fill
};
