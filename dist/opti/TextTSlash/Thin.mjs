var c = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && o(a, e, t[e]);
  if (V)
    for (var e of V(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var r in a)
    h.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && V)
    for (var r of V(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const H = f((r, e) => {
  var m = r, { children: a } = m, t = p(m, ["children"]);
  return /* @__PURE__ */ n.createElement(s, l({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M210.69,219a4,4,0,0,1-5.65-.27l-73-80.34V196h28a4,4,0,0,1,0,8H96a4,4,0,0,1,0-8h28V129.55L60.78,60H60V88a4,4,0,0,1-8,0V56a4,4,0,0,1,2-3.45l-9-9.86A4,4,0,0,1,51,37.31l160,176A4,4,0,0,1,210.69,219ZM105.79,60H124V80.43a4,4,0,0,0,8,0V60h64V88a4,4,0,0,0,8,0V56a4,4,0,0,0-4-4H105.79a4,4,0,0,0,0,8Z" }));
});
H.displayName = "Thin";
export {
  H as Thin
};
