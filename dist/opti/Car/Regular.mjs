var c = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var h = (a, H, e) => H in a ? c(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, l = (a, H) => {
  for (var e in H || (H = {}))
    o.call(H, e) && h(a, e, H[e]);
  if (t)
    for (var e of t(H))
      Z.call(H, e) && h(a, e, H[e]);
  return a;
};
var p = (a, H) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && H.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      H.indexOf(r) < 0 && Z.call(a, r) && (e[r] = a[r]);
  return e;
};
import V, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((r, e) => {
  var m = r, { children: a } = m, H = p(m, ["children"]);
  return /* @__PURE__ */ V.createElement(i, l({ ref: e }, H), a, /* @__PURE__ */ V.createElement("path", { d: "M240,104H229.2L201.42,41.5A16,16,0,0,0,186.8,32H69.2a16,16,0,0,0-14.62,9.5L26.8,104H16a8,8,0,0,0,0,16h8v80a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V184h96v16a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V120h8a8,8,0,0,0,0-16ZM69.2,48H186.8l24.89,56H44.31ZM64,200H40V184H64Zm128,0V184h24v16Zm24-32H40V120H216ZM56,144a8,8,0,0,1,8-8H80a8,8,0,0,1,0,16H64A8,8,0,0,1,56,144Zm112,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H176A8,8,0,0,1,168,144Z" }));
});
s.displayName = "Regular";
export {
  s as Regular
};
