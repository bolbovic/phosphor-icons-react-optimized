var s = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    n.call(t, e) && c(a, e, t[e]);
  if (o)
    for (var e of o(t))
      A.call(t, e) && c(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var m in a)
    n.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && A.call(a, m) && (e[m] = a[m]);
  return e;
};
import r, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const l = d((m, e) => {
  var p = m, { children: a } = p, t = i(p, ["children"]);
  return /* @__PURE__ */ r.createElement(f, Z({ ref: e }, t), a, /* @__PURE__ */ r.createElement("path", { d: "M208,96a80,80,0,1,1-80-80A80,80,0,0,1,208,96Z", opacity: "0.2" }), /* @__PURE__ */ r.createElement("path", { d: "M176,100a12,12,0,1,1-12-12A12,12,0,0,1,176,100Zm-44,20a12,12,0,1,0,12,12A12,12,0,0,0,132,120Zm84-24A88,88,0,1,1,128,8,88.1,88.1,0,0,1,216,96Zm-16,0a72,72,0,1,0-72,72A72.08,72.08,0,0,0,200,96Zm-34.86,96.53C152,197.56,139.85,200,128,200s-24-2.44-37.14-7.47a8,8,0,1,0-5.72,14.94A125.91,125.91,0,0,0,120,215.68V248a8,8,0,0,0,16,0V215.68a125.91,125.91,0,0,0,34.86-8.21,8,8,0,1,0-5.72-14.94Z" }));
});
l.displayName = "Duotone";
export {
  l as Duotone
};
