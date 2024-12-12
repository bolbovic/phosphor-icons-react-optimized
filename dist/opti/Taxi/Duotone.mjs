var c = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var h = (a, e, H) => e in a ? c(a, e, { enumerable: !0, configurable: !0, writable: !0, value: H }) : a[e] = H, M = (a, e) => {
  for (var H in e || (e = {}))
    r.call(e, H) && h(a, H, e[H]);
  if (o)
    for (var H of o(e))
      p.call(e, H) && h(a, H, e[H]);
  return a;
};
var l = (a, e) => {
  var H = {};
  for (var t in a)
    r.call(a, t) && e.indexOf(t) < 0 && (H[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      e.indexOf(t) < 0 && p.call(a, t) && (H[t] = a[t]);
  return H;
};
import m, { forwardRef as n } from "react";
import V from "../../lib/OptiBase.mjs";
const i = n((t, H) => {
  var Z = t, { children: a } = Z, e = l(Z, ["children"]);
  return /* @__PURE__ */ m.createElement(V, M({ ref: H }, e), a, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M184,176h40v24a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8ZM32,200a8,8,0,0,0,8,8H64a8,8,0,0,0,8-8V176H32ZM194.3,60a8,8,0,0,0-6.94-4H68.64a8,8,0,0,0-6.94,4L32,112H224Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M240,104H228.64L201.25,56.06A16,16,0,0,0,187.36,48H165.42l-12-29.94A15.93,15.93,0,0,0,138.58,8H117.42a15.93,15.93,0,0,0-14.86,10.06L90.58,48H68.64a16,16,0,0,0-13.89,8.06L27.36,104H16a8,8,0,0,0,0,16h8v80a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V184h96v16a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V120h8a8,8,0,0,0,0-16ZM117.42,24h21.16l9.6,24H107.82ZM68.64,64H187.36l22.85,40H45.79ZM64,200H40V184H64Zm128,0V184h24v16Zm24-32H40V120H216ZM56,144a8,8,0,0,1,8-8H80a8,8,0,0,1,0,16H64A8,8,0,0,1,56,144Zm112,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H176A8,8,0,0,1,168,144Z" }));
});
i.displayName = "Duotone";
export {
  i as Duotone
};
