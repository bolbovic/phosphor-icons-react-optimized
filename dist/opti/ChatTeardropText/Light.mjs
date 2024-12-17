var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && h(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && h(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import s, { forwardRef as d } from "react";
import l from "../../lib/OptiBase.mjs";
const n = d((m, e) => {
  var o = m, { children: a } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ s.createElement(l, c({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M170,112a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h68A6,6,0,0,1,170,112Zm-6,26H96a6,6,0,0,0,0,12h68a6,6,0,0,0,0-12Zm66-14a98.11,98.11,0,0,1-98,98H48a14,14,0,0,1-14-14V124a98,98,0,0,1,196,0Zm-12,0a86,86,0,0,0-172,0v84a2,2,0,0,0,2,2h84A86.1,86.1,0,0,0,218,124Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
