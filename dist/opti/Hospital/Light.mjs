var c = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && r(a, e, t[e]);
  if (V)
    for (var e of V(t))
      h.call(t, e) && r(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var H in a)
    o.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && V)
    for (var H of V(a))
      t.indexOf(H) < 0 && h.call(a, H) && (e[H] = a[H]);
  return e;
};
import Z, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((H, e) => {
  var m = H, { children: a } = m, t = p(m, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, i({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M248,210H238V128a14,14,0,0,0-14-14H166V48a14,14,0,0,0-14-14H56A14,14,0,0,0,42,48V210H32a6,6,0,0,0,0,12H248a6,6,0,0,0,0-12Zm-24-84a2,2,0,0,1,2,2v82H166V126ZM54,48a2,2,0,0,1,2-2h96a2,2,0,0,1,2,2V210H134V160a6,6,0,0,0-6-6H80a6,6,0,0,0-6,6v50H54Zm68,162H86V166h36ZM74,96a6,6,0,0,1,6-6H98V72a6,6,0,0,1,12,0V90h18a6,6,0,0,1,0,12H110v18a6,6,0,0,1-12,0V102H80A6,6,0,0,1,74,96Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
