var n = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var m = (a, H, e) => H in a ? n(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, p = (a, H) => {
  for (var e in H || (H = {}))
    o.call(H, e) && m(a, e, H[e]);
  if (V)
    for (var e of V(H))
      i.call(H, e) && m(a, e, H[e]);
  return a;
};
var v = (a, H) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && H.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && V)
    for (var t of V(a))
      H.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import h, { forwardRef as A } from "react";
import c from "../../lib/OptiBase.mjs";
const f = A((t, e) => {
  var r = t, { children: a } = r, H = v(r, ["children"]);
  return /* @__PURE__ */ h.createElement(c, p({ ref: e }, H), a, /* @__PURE__ */ h.createElement("path", { d: "M224,68H172V56a20,20,0,0,0-20-20H104A20,20,0,0,0,84,56V68H32A12,12,0,0,0,20,80V192a12,12,0,0,0,12,12H224a12,12,0,0,0,12-12V80A12,12,0,0,0,224,68ZM92,56a12,12,0,0,1,12-12h48a12,12,0,0,1,12,12V68H92ZM32,76H224a4,4,0,0,1,4,4v36H188V104a4,4,0,0,0-8,0v12H76V104a4,4,0,0,0-8,0v12H28V80A4,4,0,0,1,32,76ZM224,196H32a4,4,0,0,1-4-4V124H68v12a4,4,0,0,0,8,0V124H180v12a4,4,0,0,0,8,0V124h40v68A4,4,0,0,1,224,196Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
