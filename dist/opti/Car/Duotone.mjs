var n = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var Z = (a, H, e) => H in a ? n(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, M = (a, H) => {
  for (var e in H || (H = {}))
    h.call(H, e) && Z(a, e, H[e]);
  if (o)
    for (var e of o(H))
      p.call(H, e) && Z(a, e, H[e]);
  return a;
};
var c = (a, H) => {
  var e = {};
  for (var t in a)
    h.call(a, t) && H.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      H.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import m, { forwardRef as V } from "react";
import i from "../../lib/OptiBase.mjs";
const l = V((t, e) => {
  var r = t, { children: a } = r, H = c(r, ["children"]);
  return /* @__PURE__ */ m.createElement(i, M({ ref: e }, H), a, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M184,176h40v24a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8ZM32,200a8,8,0,0,0,8,8H64a8,8,0,0,0,8-8V176H32ZM194.11,44.75A8,8,0,0,0,186.8,40H69.2a8,8,0,0,0-7.31,4.75L32,112H224Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M240,104H229.2L201.42,41.5A16,16,0,0,0,186.8,32H69.2a16,16,0,0,0-14.62,9.5L26.8,104H16a8,8,0,0,0,0,16h8v80a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V184h96v16a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V120h8a8,8,0,0,0,0-16ZM69.2,48H186.8l24.89,56H44.31ZM64,200H40V184H64Zm128,0V184h24v16Zm24-32H40V120H216ZM56,144a8,8,0,0,1,8-8H80a8,8,0,0,1,0,16H64A8,8,0,0,1,56,144Zm112,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H176A8,8,0,0,1,168,144Z" }));
});
l.displayName = "Duotone";
export {
  l as Duotone
};
