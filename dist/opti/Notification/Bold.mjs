var s = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    d.call(t, e) && p(a, e, t[e]);
  if (o)
    for (var e of o(t))
      l.call(t, e) && p(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var m in a)
    d.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && l.call(a, m) && (e[m] = a[m]);
  return e;
};
import i, { forwardRef as n } from "react";
import A from "../../lib/OptiBase.mjs";
const B = n((m, e) => {
  var r = m, { children: a } = r, t = f(r, ["children"]);
  return /* @__PURE__ */ i.createElement(A, c({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M220,132v76a20,20,0,0,1-20,20H48a20,20,0,0,1-20-20V56A20,20,0,0,1,48,36h76a12,12,0,0,1,0,24H52V204H196V132a12,12,0,0,1,24,0Zm16-72a40,40,0,1,1-40-40A40,40,0,0,1,236,60Zm-24,0a16,16,0,1,0-16,16A16,16,0,0,0,212,60Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
