var A = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var H = (a, r, e) => r in a ? A(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, h = (a, r) => {
  for (var e in r || (r = {}))
    V.call(r, e) && H(a, e, r[e]);
  if (m)
    for (var e of m(r))
      Z.call(r, e) && H(a, e, r[e]);
  return a;
};
var l = (a, r) => {
  var e = {};
  for (var t in a)
    V.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && Z.call(a, t) && (e[t] = a[t]);
  return e;
};
import p, { forwardRef as M } from "react";
import c from "../../lib/OptiBase.mjs";
const f = M((t, e) => {
  var o = t, { children: a } = o, r = l(o, ["children"]);
  return /* @__PURE__ */ p.createElement(c, h({ ref: e }, r), a, /* @__PURE__ */ p.createElement("path", { d: "M80,224a8,8,0,0,1-8,8H56a16,16,0,0,1-16-16V184a8,8,0,0,1,16,0v32H72A8,8,0,0,1,80,224ZM216,88v48a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H120a8,8,0,0,1,0-16h32a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-56-8h28.69L160,51.31ZM80,24H56A16,16,0,0,0,40,40V64a8,8,0,0,0,16,0V40H80a8,8,0,0,0,0-16ZM208,168a8,8,0,0,0-8,8v40h-8a8,8,0,0,0,0,16h8a16,16,0,0,0,16-16V176A8,8,0,0,0,208,168ZM48,152a8,8,0,0,0,8-8V104a8,8,0,0,0-16,0v40A8,8,0,0,0,48,152Zm104,64H112a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Z" }));
});
f.displayName = "Regular";
export {
  f as Regular
};
