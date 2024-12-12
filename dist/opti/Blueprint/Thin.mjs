var n = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var r = (a, H, e) => H in a ? n(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, i = (a, H) => {
  for (var e in H || (H = {}))
    m.call(H, e) && r(a, e, H[e]);
  if (V)
    for (var e of V(H))
      o.call(H, e) && r(a, e, H[e]);
  return a;
};
var p = (a, H) => {
  var e = {};
  for (var t in a)
    m.call(a, t) && H.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && V)
    for (var t of V(a))
      H.indexOf(t) < 0 && o.call(a, t) && (e[t] = a[t]);
  return e;
};
import v, { forwardRef as Z } from "react";
import c from "../../lib/OptiBase.mjs";
const f = Z((t, e) => {
  var h = t, { children: a } = h, H = p(h, ["children"]);
  return /* @__PURE__ */ v.createElement(c, i({ ref: e }, H), a, /* @__PURE__ */ v.createElement("path", { d: "M232,60H68V40a4,4,0,0,0-4-4H48A28,28,0,0,0,20,64V176a28,28,0,0,0,28,28H232a4,4,0,0,0,4-4V64A4,4,0,0,0,232,60ZM28,64A20,20,0,0,1,48,44H60V148H48a27.94,27.94,0,0,0-20,8.42ZM228,196H48a20,20,0,0,1,0-40H64a4,4,0,0,0,4-4V68H228ZM104,140a4,4,0,0,0,0,8h20v12a4,4,0,0,0,8,0V148h32v12a4,4,0,0,0,8,0V148h20a4,4,0,0,0,0-8H172V116h20a4,4,0,0,0,0-8H172V96a4,4,0,0,0-8,0v12H132V96a4,4,0,0,0-8,0v12H104a4,4,0,0,0,0,8h20v24Zm28-24h32v24H132Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
