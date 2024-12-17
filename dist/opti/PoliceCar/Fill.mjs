var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var l = (a, H, e) => H in a ? c(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, p = (a, H) => {
  for (var e in H || (H = {}))
    o.call(H, e) && l(a, e, H[e]);
  if (m)
    for (var e of m(H))
      i.call(H, e) && l(a, e, H[e]);
  return a;
};
var A = (a, H) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && H.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      H.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import Z, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((t, e) => {
  var r = t, { children: a } = r, H = A(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(h, p({ ref: e }, H), a, /* @__PURE__ */ Z.createElement("path", { d: "M96,24a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,24Zm152,88a8,8,0,0,1-8,8h-8v80a16,16,0,0,1-16,16H192a16,16,0,0,1-16-16v-8H80v8a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V120H16a8,8,0,0,1,0-16H27.36L54.75,56.06A16,16,0,0,1,68.64,48H187.36a16,16,0,0,1,13.89,8.06L228.64,104H240A8,8,0,0,1,248,112ZM88,144a8,8,0,0,0-8-8H56a8,8,0,0,0,0,16H80A8,8,0,0,0,88,144Zm120,0a8,8,0,0,0-8-8H176a8,8,0,0,0,0,16h24A8,8,0,0,0,208,144Zm2.21-40L187.36,64H68.64L45.79,104Z" }));
});
s.displayName = "Fill";
export {
  s as Fill
};
