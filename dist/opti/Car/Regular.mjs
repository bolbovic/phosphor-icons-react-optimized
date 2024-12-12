var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var h = (a, H, e) => H in a ? s(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, Z = (a, H) => {
  for (var e in H || (H = {}))
    l.call(H, e) && h(a, e, H[e]);
  if (r)
    for (var e of r(H))
      o.call(H, e) && h(a, e, H[e]);
  return a;
};
var p = (a, H) => {
  var e = {};
  for (var t in a)
    l.call(a, t) && H.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      H.indexOf(t) < 0 && o.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as V } from "react";
import c from "../../lib/OptiBase.mjs";
const d = V((t, e) => {
  var m = t, { children: a } = m, H = p(m, ["children"]);
  return /* @__PURE__ */ f.createElement(c, Z({ ref: e }, H), a, /* @__PURE__ */ f.createElement("path", { d: "M240,104H229.2L201.42,41.5A16,16,0,0,0,186.8,32H69.2a16,16,0,0,0-14.62,9.5L26.8,104H16a8,8,0,0,0,0,16h8v80a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V184h96v16a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V120h8a8,8,0,0,0,0-16ZM69.2,48H186.8l24.89,56H44.31ZM64,200H40V184H64Zm128,0V184h24v16Zm24-32H40V120H216ZM56,144a8,8,0,0,1,8-8H80a8,8,0,0,1,0,16H64A8,8,0,0,1,56,144Zm112,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H176A8,8,0,0,1,168,144Z" }));
});
d.displayName = "Regular";
export {
  d as Regular,
  d as default
};
