var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, l, e) => l in a ? i(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, L = (a, l) => {
  for (var e in l || (l = {}))
    p.call(l, e) && m(a, e, l[e]);
  if (o)
    for (var e of o(l))
      d.call(l, e) && m(a, e, l[e]);
  return a;
};
var c = (a, l) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      l.indexOf(t) < 0 && d.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const V = s((t, e) => {
  var r = t, { children: a } = r, l = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(A, L({ ref: e }, l), a, /* @__PURE__ */ f.createElement("path", { d: "M255.8,162.93l0-.31A43.94,43.94,0,0,0,226,125.36l-56.62-20.2-.24-.09a20,20,0,0,1-11.92-10.78L134.06,40l-.06-.16A20.06,20.06,0,0,0,108.89,29.2L33.17,56.73A20.07,20.07,0,0,0,20,75.53V192a20,20,0,0,0,20,20H236a20,20,0,0,0,20-20V167.06C256,165.67,255.93,164.3,255.8,162.93ZM113.53,53.05l6,14L103.9,72.72a12,12,0,1,0,8.2,22.55L129,89.14l4.54,10.63-13.6,5A12,12,0,0,0,124,128a11.79,11.79,0,0,0,4.1-.73l19.57-7.11a43.86,43.86,0,0,0,13.8,7.64L218.09,148l.23.08a19.89,19.89,0,0,1,6.84,3.91H44V78.33ZM44,188V176H232v12Z" }));
});
V.displayName = "Bold";
export {
  V as Bold
};
