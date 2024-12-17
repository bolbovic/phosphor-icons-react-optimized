var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? s(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, V = (a, l) => {
  for (var e in l || (l = {}))
    i.call(l, e) && o(a, e, l[e]);
  if (r)
    for (var e of r(l))
      p.call(l, e) && o(a, e, l[e]);
  return a;
};
var c = (a, l) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as H } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = H((t, e) => {
  var m = t, { children: a } = m, l = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, V({ ref: e }, l), a, /* @__PURE__ */ f.createElement("path", { d: "M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,64V56a8,8,0,0,1,16,0v8a8,8,0,0,1-16,0Zm106.55,60.7-24.46,20.19L161.55,175a4,4,0,0,1-1.49,4.17,4.05,4.05,0,0,1-2.39.79,4,4,0,0,1-2-.55L128,163.18l-27.64,16.27A4,4,0,0,1,94.45,175l7.46-30.15L77.45,124.7a4,4,0,0,1,2.24-7.08l32.24-2.49,12.4-28.71a4,4,0,0,1,7.34,0l12.4,28.71,32.24,2.49a4,4,0,0,1,2.24,7.08ZM184,64a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0Z" }));
});
d.displayName = "Fill";
export {
  d as Fill
};
