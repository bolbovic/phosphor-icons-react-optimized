var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import f, { forwardRef as s } from "react";
import L from "../../lib/OptiBase.mjs";
const Z = s((l, e) => {
  var m = l, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(L, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M171.92,112.34a4,4,0,0,0-2.28-2.85l-53-23.78,14.43-60.79a4,4,0,0,0-6.83-3.64L29.06,124.14a4,4,0,0,0,1.3,6.37l53,23.78L68.91,215.07a4,4,0,0,0,2,4.46,3.94,3.94,0,0,0,1.88.47,4,4,0,0,0,2.94-1.28l95.2-102.86A4,4,0,0,0,171.92,112.34ZM80.21,202.1l11.68-49.18a4,4,0,0,0-2.25-4.57L38.72,125.49,119.79,37.9,108.11,87.08a4,4,0,0,0,2.25,4.57l50.92,22.86Zm155.37,12.11-36-72a4,4,0,0,0-7.16,0l-36,72a4,4,0,1,0,7.16,3.58L174.47,196h43.06l10.89,21.79A4,4,0,0,0,232,220a4.12,4.12,0,0,0,1.79-.42A4,4,0,0,0,235.58,214.21ZM178.47,188,196,152.94,213.53,188Z" }));
});
Z.displayName = "Thin";
export {
  Z as Thin
};
