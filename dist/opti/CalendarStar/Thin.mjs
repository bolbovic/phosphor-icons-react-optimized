var h = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var r = (a, l, e) => l in a ? h(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, p = (a, l) => {
  for (var e in l || (l = {}))
    o.call(l, e) && r(a, e, l[e]);
  if (V)
    for (var e of V(l))
      i.call(l, e) && r(a, e, l[e]);
  return a;
};
var H = (a, l) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && V)
    for (var t of V(a))
      l.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import L, { forwardRef as n } from "react";
import c from "../../lib/OptiBase.mjs";
const f = n((t, e) => {
  var m = t, { children: a } = m, l = H(m, ["children"]);
  return /* @__PURE__ */ L.createElement(c, p({ ref: e }, l), a, /* @__PURE__ */ L.createElement("path", { d: "M208,36H180V24a4,4,0,0,0-8,0V36H84V24a4,4,0,0,0-8,0V36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36Zm4,172a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H76V56a4,4,0,0,0,8,0V44h88V56a4,4,0,0,0,8,0V44h28a4,4,0,0,1,4,4Zm-35.69-90.38-32.24-2.49-12.4-28.71a4,4,0,0,0-7.34,0l-12.4,28.71-32.24,2.49a4,4,0,0,0-2.24,7.08l24.46,20.19L94.45,175a4,4,0,0,0,5.91,4.41L128,163.18l27.64,16.27a4,4,0,0,0,2,.55,4.05,4.05,0,0,0,2.39-.79,4,4,0,0,0,1.49-4.17l-7.46-30.15,24.46-20.19a4,4,0,0,0-2.24-7.08Zm-29.26,22.71a4,4,0,0,0-1.33,4l5.78,23.36L130,155.09a4,4,0,0,0-4.06,0L104.5,167.73l5.78-23.36a4,4,0,0,0-1.33-4L90.19,124.84,115,122.92a4,4,0,0,0,3.36-2.4L128,98.1l9.68,22.42a4,4,0,0,0,3.36,2.4l24.77,1.92Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
