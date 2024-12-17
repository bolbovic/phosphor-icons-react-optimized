var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && p(a, e, t[e]);
  if (r)
    for (var e of r(t))
      n.call(t, e) && p(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var o in a)
    c.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && n.call(a, o) && (e[o] = a[o]);
  return e;
};
import l, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const L = f((o, e) => {
  var m = o, { children: a } = m, t = A(m, ["children"]);
  return /* @__PURE__ */ l.createElement(s, i({ ref: e }, t), a, /* @__PURE__ */ l.createElement(
    "path",
    {
      d: "M240,64V184a16,16,0,0,1-16,16H40V64A16,16,0,0,1,56,48H224A16,16,0,0,1,240,64Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ l.createElement("path", { d: "M248,144a8,8,0,0,1-8,8H192a8,8,0,0,1-6.4-12.8l43.17-57.55a16,16,0,1,0-27.86-15,8,8,0,0,1-15.09-5.33,32,32,0,1,1,55.74,29.92L208,136h32A8,8,0,0,1,248,144ZM149.24,74a8,8,0,0,0-11.29.8L92,127.79l-45.95-53A8,8,0,0,0,34,85.24L81.41,140,34,194.76a8,8,0,0,0,12.1,10.48l46-53,45.95,53a8,8,0,1,0,12.1-10.48L102.59,140l47.46-54.76A8,8,0,0,0,149.24,74Z" }));
});
L.displayName = "Duotone";
export {
  L as Duotone
};
