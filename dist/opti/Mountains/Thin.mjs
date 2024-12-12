var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const A = f((m, e) => {
  var l = m, { children: a } = l, t = h(l, ["children"]);
  return /* @__PURE__ */ n.createElement(s, Z({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M164,76a24,24,0,1,0-24-24A24,24,0,0,0,164,76Zm0-40a16,16,0,1,1-16,16A16,16,0,0,1,164,36Zm87.44,162-54.56-92.08A11.91,11.91,0,0,0,186.55,100h0a11.89,11.89,0,0,0-10.32,5.88l-29.61,50L98.34,73.91a12,12,0,0,0-20.68,0L4.55,198A4,4,0,0,0,8,204H248a4,4,0,0,0,3.44-6ZM84.55,78a4,4,0,0,1,6.9,0l27.12,46H57.43ZM15,196l37.71-64h70.58L161,196Zm155.29,0-19-32.29L183.11,110a4,4,0,0,1,6.88,0l51,86Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};
