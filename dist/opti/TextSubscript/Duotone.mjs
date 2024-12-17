var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && p(a, e, t[e]);
  if (r)
    for (var e of r(t))
      n.call(t, e) && p(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var o in a)
    c.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && n.call(a, o) && (e[o] = a[o]);
  return e;
};
import l, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const L = s((o, e) => {
  var m = o, { children: a } = m, t = d(m, ["children"]);
  return /* @__PURE__ */ l.createElement(A, i({ ref: e }, t), a, /* @__PURE__ */ l.createElement(
    "path",
    {
      d: "M240,72V208H56a16,16,0,0,1-16-16V56H224A16,16,0,0,1,240,72Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ l.createElement("path", { d: "M248,208a8,8,0,0,1-8,8H192a8,8,0,0,1-6.4-12.8l43.17-57.56a16,16,0,1,0-27.86-15,8,8,0,0,1-15.09-5.34,32.18,32.18,0,0,1,4.63-8.59,32,32,0,0,1,51.11,38.52L208,200h32A8,8,0,0,1,248,208ZM149.24,50a8,8,0,0,0-11.29.81L92,103.78l-45.95-53A8,8,0,0,0,34,61.24L81.41,116,34,170.76a8,8,0,0,0,12.1,10.48l46-53,45.95,53a8,8,0,1,0,12.1-10.48L102.59,116l47.46-54.76A8,8,0,0,0,149.24,50Z" }));
});
L.displayName = "Duotone";
export {
  L as Duotone
};
