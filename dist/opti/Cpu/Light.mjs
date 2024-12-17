var c = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var h = (a, e, H) => e in a ? c(a, e, { enumerable: !0, configurable: !0, writable: !0, value: H }) : a[e] = H, i = (a, e) => {
  for (var H in e || (e = {}))
    r.call(e, H) && h(a, H, e[H]);
  if (V)
    for (var H of V(e))
      o.call(e, H) && h(a, H, e[H]);
  return a;
};
var p = (a, e) => {
  var H = {};
  for (var t in a)
    r.call(a, t) && e.indexOf(t) < 0 && (H[t] = a[t]);
  if (a != null && V)
    for (var t of V(a))
      e.indexOf(t) < 0 && o.call(a, t) && (H[t] = a[t]);
  return H;
};
import v, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = f((t, H) => {
  var m = t, { children: a } = m, e = p(m, ["children"]);
  return /* @__PURE__ */ v.createElement(s, i({ ref: H }, e), a, /* @__PURE__ */ v.createElement("path", { d: "M152,98H104a6,6,0,0,0-6,6v48a6,6,0,0,0,6,6h48a6,6,0,0,0,6-6V104A6,6,0,0,0,152,98Zm-6,48H110V110h36Zm86,0H214V110h18a6,6,0,0,0,0-12H214V56a14,14,0,0,0-14-14H158V24a6,6,0,0,0-12,0V42H110V24a6,6,0,0,0-12,0V42H56A14,14,0,0,0,42,56V98H24a6,6,0,0,0,0,12H42v36H24a6,6,0,0,0,0,12H42v42a14,14,0,0,0,14,14H98v18a6,6,0,0,0,12,0V214h36v18a6,6,0,0,0,12,0V214h42a14,14,0,0,0,14-14V158h18a6,6,0,0,0,0-12Zm-30,54a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2H200a2,2,0,0,1,2,2Z" }));
});
Z.displayName = "Light";
export {
  Z as Light
};
