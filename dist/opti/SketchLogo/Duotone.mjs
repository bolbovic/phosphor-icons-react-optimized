var h = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var p = (e, a, t) => a in e ? h(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, n = (e, a) => {
  for (var t in a || (a = {}))
    Z.call(a, t) && p(e, t, a[t]);
  if (o)
    for (var t of o(a))
      c.call(a, t) && p(e, t, a[t]);
  return e;
};
var M = (e, a) => {
  var t = {};
  for (var l in e)
    Z.call(e, l) && a.indexOf(l) < 0 && (t[l] = e[l]);
  if (e != null && o)
    for (var l of o(e))
      a.indexOf(l) < 0 && c.call(e, l) && (t[l] = e[l]);
  return t;
};
import m, { forwardRef as i } from "react";
import L from "../../lib/OptiBase.mjs";
const d = i((l, t) => {
  var r = l, { children: e } = r, a = M(r, ["children"]);
  return /* @__PURE__ */ m.createElement(L, n({ ref: t }, a), e, /* @__PURE__ */ m.createElement("path", { d: "M240,104,128,224,80,104l48-64h56Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M246,98.73l-56-64A8,8,0,0,0,184,32H72a8,8,0,0,0-6,2.73l-56,64a8,8,0,0,0,.17,10.73l112,120a8,8,0,0,0,11.7,0l112-120A8,8,0,0,0,246,98.73ZM222.37,96H180L144,48h36.37ZM74.58,112l30.13,75.33L34.41,112Zm89.6,0L128,202.46,91.82,112ZM96,96l32-42.67L160,96Zm85.42,16h40.17l-70.3,75.33ZM75.63,48H112L76,96H33.63Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};
