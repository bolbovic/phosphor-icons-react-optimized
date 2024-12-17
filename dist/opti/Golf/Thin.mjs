var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      n.call(t, e) && i(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && n.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as f } from "react";
import d from "../../lib/OptiBase.mjs";
const h = f((m, e) => {
  var o = m, { children: a } = o, t = A(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(d, s({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M172,100a8,8,0,1,1-8-8A8,8,0,0,1,172,100Zm-40,24a8,8,0,1,0,8,8A8,8,0,0,0,132,124Zm80-28a84,84,0,1,1-84-84A84.09,84.09,0,0,1,212,96Zm-8,0a76,76,0,1,0-76,76A76.08,76.08,0,0,0,204,96ZM166.57,196.26C153,201.47,140.34,204,128,204s-25-2.53-38.57-7.74a4,4,0,1,0-2.86,7.48A119.31,119.31,0,0,0,124,211.91V248a4,4,0,0,0,8,0V211.91a119.31,119.31,0,0,0,37.43-8.17,4,4,0,0,0-2.86-7.48Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
