var Z = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var r = (a, H, e) => H in a ? Z(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, i = (a, H) => {
  for (var e in H || (H = {}))
    h.call(H, e) && r(a, e, H[e]);
  if (V)
    for (var e of V(H))
      o.call(H, e) && r(a, e, H[e]);
  return a;
};
var p = (a, H) => {
  var e = {};
  for (var t in a)
    h.call(a, t) && H.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && V)
    for (var t of V(a))
      H.indexOf(t) < 0 && o.call(a, t) && (e[t] = a[t]);
  return e;
};
import n, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((t, e) => {
  var m = t, { children: a } = m, H = p(m, ["children"]);
  return /* @__PURE__ */ n.createElement(f, i({ ref: e }, H), a, /* @__PURE__ */ n.createElement("path", { d: "M248,212H236V128a12,12,0,0,0-12-12H164V48a12,12,0,0,0-12-12H56A12,12,0,0,0,44,48V212H32a4,4,0,0,0,0,8H248a4,4,0,0,0,0-8Zm-24-88a4,4,0,0,1,4,4v84H164V124ZM52,48a4,4,0,0,1,4-4h96a4,4,0,0,1,4,4V212H132V160a4,4,0,0,0-4-4H80a4,4,0,0,0-4,4v52H52Zm72,164H84V164h40ZM76,96a4,4,0,0,1,4-4h20V72a4,4,0,0,1,8,0V92h20a4,4,0,0,1,0,8H108v20a4,4,0,0,1-8,0V100H80A4,4,0,0,1,76,96Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
