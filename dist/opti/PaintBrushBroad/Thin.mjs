var n = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && h(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && h(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import l, { forwardRef as A } from "react";
import V from "../../lib/OptiBase.mjs";
const c = A((r, e) => {
  var o = r, { children: a } = o, t = H(o, ["children"]);
  return /* @__PURE__ */ l.createElement(V, s({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M216,28H72A36,36,0,0,0,36,64v72a20,20,0,0,0,20,20h48a4,4,0,0,1,4,4.52l-7.9,46.81a3.79,3.79,0,0,0-.06.67,28,28,0,0,0,56,0,3.79,3.79,0,0,0-.06-.67L148,160.52a4,4,0,0,1,4-4.52h48a20,20,0,0,0,20-20V32A4,4,0,0,0,216,28ZM72,36H180V80a4,4,0,0,0,8,0V36h24v72H44V64A28,28,0,0,1,72,36ZM200,148H152a12,12,0,0,0-11.88,13.7s0,.06,0,.1L148,208.32a20,20,0,0,1-40,0l7.86-46.52s0-.07,0-.1A12,12,0,0,0,104,148H56a12,12,0,0,1-12-12V116H212v20A12,12,0,0,1,200,148Z" }));
});
c.displayName = "Thin";
export {
  c as Thin
};
