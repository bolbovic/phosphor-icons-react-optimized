var f = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var m = (a, e, l) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, p = (a, e) => {
  for (var l in e || (e = {}))
    o.call(e, l) && m(a, l, e[l]);
  if (H)
    for (var l of H(e))
      i.call(e, l) && m(a, l, e[l]);
  return a;
};
var h = (a, e) => {
  var l = {};
  for (var t in a)
    o.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && H)
    for (var t of H(a))
      e.indexOf(t) < 0 && i.call(a, t) && (l[t] = a[t]);
  return l;
};
import c, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const L = s((t, l) => {
  var r = t, { children: a } = r, e = h(r, ["children"]);
  return /* @__PURE__ */ c.createElement(A, p({ ref: l }, e), a, /* @__PURE__ */ c.createElement("path", { d: "M116.25,112h31.5l-8,32h-31.5ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48Zm-16,56a8,8,0,0,0-8-8H168.25l7.51-30.06a8,8,0,0,0-15.52-3.88L151.75,96h-31.5l7.51-30.06a8,8,0,0,0-15.52-3.88L103.75,96H64a8,8,0,0,0,0,16H99.75l-8,32H56a8,8,0,0,0,0,16H87.75l-7.51,30.06a8,8,0,0,0,5.82,9.7,8.13,8.13,0,0,0,2,.24,8,8,0,0,0,7.75-6.06L104.25,160h31.5l-7.51,30.06a8,8,0,0,0,5.82,9.7A8.13,8.13,0,0,0,136,200a8,8,0,0,0,7.75-6.06L152.25,160H192a8,8,0,0,0,0-16H156.25l8-32H200A8,8,0,0,0,208,104Z" }));
});
L.displayName = "Fill";
export {
  L as Fill
};
