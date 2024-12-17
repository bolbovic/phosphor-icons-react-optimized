var L = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? L(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, f = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      c.call(t, e) && i(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && c.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const n = d((r, e) => {
  var o = r, { children: a } = o, t = l(o, ["children"]);
  return /* @__PURE__ */ s.createElement(h, f({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M204.24,139.76a6,6,0,1,1-8.48,8.48L134,86.49V224a6,6,0,0,1-12,0V86.49L60.24,148.24a6,6,0,0,1-8.48-8.48l72-72a6,6,0,0,1,8.48,0ZM216,34H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
