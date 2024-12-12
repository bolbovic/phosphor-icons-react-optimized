var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var m = (a, H, e) => H in a ? s(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, p = (a, H) => {
  for (var e in H || (H = {}))
    h.call(H, e) && m(a, e, H[e]);
  if (r)
    for (var e of r(H))
      o.call(H, e) && m(a, e, H[e]);
  return a;
};
var v = (a, H) => {
  var e = {};
  for (var V in a)
    h.call(a, V) && H.indexOf(V) < 0 && (e[V] = a[V]);
  if (a != null && r)
    for (var V of r(a))
      H.indexOf(V) < 0 && o.call(a, V) && (e[V] = a[V]);
  return e;
};
import l, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((V, e) => {
  var t = V, { children: a } = t, H = v(t, ["children"]);
  return /* @__PURE__ */ l.createElement(f, p({ ref: e }, H), a, /* @__PURE__ */ l.createElement("path", { d: "M152,96H104a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V104A8,8,0,0,0,152,96Zm-8,48H112V112h32Zm88,0H216V112h16a8,8,0,0,0,0-16H216V56a16,16,0,0,0-16-16H160V24a8,8,0,0,0-16,0V40H112V24a8,8,0,0,0-16,0V40H56A16,16,0,0,0,40,56V96H24a8,8,0,0,0,0,16H40v32H24a8,8,0,0,0,0,16H40v40a16,16,0,0,0,16,16H96v16a8,8,0,0,0,16,0V216h32v16a8,8,0,0,0,16,0V216h40a16,16,0,0,0,16-16V160h16a8,8,0,0,0,0-16Zm-32,56H56V56H200v95.87s0,.09,0,.13,0,.09,0,.13V200Z" }));
});
i.displayName = "Regular";
export {
  i as Regular
};
