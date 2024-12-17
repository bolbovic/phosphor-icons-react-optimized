var n = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      Z.call(t, e) && o(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var H in a)
    V.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && m)
    for (var H of m(a))
      t.indexOf(H) < 0 && Z.call(a, H) && (e[H] = a[H]);
  return e;
};
import p, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((H, e) => {
  var r = H, { children: a } = r, t = i(r, ["children"]);
  return /* @__PURE__ */ p.createElement(f, h({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M188,72a4,4,0,0,1-4,4H160a4,4,0,0,1,0-8h24A4,4,0,0,1,188,72Zm-4,28H160a4,4,0,0,0,0,8h24a4,4,0,0,0,0-8ZM72,76H96a4,4,0,0,0,0-8H72a4,4,0,0,0,0,8Zm24,24H72a4,4,0,0,0,0,8H96a4,4,0,0,0,0-8ZM220,48V224a4,4,0,0,1-8,0V204H132v20a4,4,0,0,1-8,0V204H44v20a4,4,0,0,1-8,0V48A12,12,0,0,1,48,36H208A12,12,0,0,1,220,48ZM124,196V44H48a4,4,0,0,0-4,4V196Zm8,0h80V48a4,4,0,0,0-4-4H132Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
