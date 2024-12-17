var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var r = (a, e, l) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, d = (a, e) => {
  for (var l in e || (e = {}))
    p.call(e, l) && r(a, l, e[l]);
  if (m)
    for (var l of m(e))
      H.call(e, l) && r(a, l, e[l]);
  return a;
};
var V = (a, e) => {
  var l = {};
  for (var t in a)
    p.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      e.indexOf(t) < 0 && H.call(a, t) && (l[t] = a[t]);
  return l;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = i((t, l) => {
  var o = t, { children: a } = o, e = V(o, ["children"]);
  return /* @__PURE__ */ c.createElement(s, d({ ref: l }, e), a, /* @__PURE__ */ c.createElement("path", { d: "M208,28H188V24a12,12,0,0,0-24,0v4H92V24a12,12,0,0,0-24,0v4H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,176H52V52H68a12,12,0,0,0,24,0h72a12,12,0,0,0,24,0h16Zm-27.08-94.35-27.42-2.12L139,83.25a12,12,0,0,0-22,0L106.5,107.53l-27.42,2.12a12,12,0,0,0-6.72,21.22l20.58,17-6.25,25.26a12,12,0,0,0,17.73,13.22L128,172.46l23.58,13.88a12,12,0,0,0,17.73-13.22l-6.25-25.26,20.58-17a12,12,0,0,0-6.72-21.22Zm-35,24.51a12,12,0,0,0-4,12.13l1.21,4.89-5.07-3a12.06,12.06,0,0,0-12.18,0l-5.07,3,1.21-4.89a12,12,0,0,0-4-12.13l-3.47-2.87,5-.39a12,12,0,0,0,10.09-7.21l2.33-5.4,2.33,5.4a12,12,0,0,0,10.09,7.21l5,.39Z" }));
});
Z.displayName = "Bold";
export {
  Z as Bold
};
