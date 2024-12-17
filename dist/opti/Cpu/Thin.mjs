var n = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var m = (a, H, e) => H in a ? n(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, i = (a, H) => {
  for (var e in H || (H = {}))
    r.call(H, e) && m(a, e, H[e]);
  if (t)
    for (var e of t(H))
      o.call(H, e) && m(a, e, H[e]);
  return a;
};
var p = (a, H) => {
  var e = {};
  for (var V in a)
    r.call(a, V) && H.indexOf(V) < 0 && (e[V] = a[V]);
  if (a != null && t)
    for (var V of t(a))
      H.indexOf(V) < 0 && o.call(a, V) && (e[V] = a[V]);
  return e;
};
import v, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((V, e) => {
  var h = V, { children: a } = h, H = p(h, ["children"]);
  return /* @__PURE__ */ v.createElement(f, i({ ref: e }, H), a, /* @__PURE__ */ v.createElement("path", { d: "M152,100H104a4,4,0,0,0-4,4v48a4,4,0,0,0,4,4h48a4,4,0,0,0,4-4V104A4,4,0,0,0,152,100Zm-4,48H108V108h40Zm84,0H212V108h20a4,4,0,0,0,0-8H212V56a12,12,0,0,0-12-12H156V24a4,4,0,0,0-8,0V44H108V24a4,4,0,0,0-8,0V44H56A12,12,0,0,0,44,56v44H24a4,4,0,0,0,0,8H44v40H24a4,4,0,0,0,0,8H44v44a12,12,0,0,0,12,12h44v20a4,4,0,0,0,8,0V212h40v20a4,4,0,0,0,8,0V212h44a12,12,0,0,0,12-12V156h20a4,4,0,0,0,0-8Zm-28,52a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4H200a4,4,0,0,1,4,4Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
