var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, a, t) => a in e ? f(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, V = (e, a) => {
  for (var t in a || (a = {}))
    i.call(a, t) && o(e, t, a[t]);
  if (m)
    for (var t of m(a))
      p.call(a, t) && o(e, t, a[t]);
  return e;
};
var Z = (e, a) => {
  var t = {};
  for (var H in e)
    i.call(e, H) && a.indexOf(H) < 0 && (t[H] = e[H]);
  if (e != null && m)
    for (var H of m(e))
      a.indexOf(H) < 0 && p.call(e, H) && (t[H] = e[H]);
  return t;
};
import c, { forwardRef as s } from "react";
import v from "../../lib/OptiBase.mjs";
const M = s((H, t) => {
  var r = H, { children: e } = r, a = Z(r, ["children"]);
  return /* @__PURE__ */ c.createElement(v, V({ ref: t }, a), e, /* @__PURE__ */ c.createElement("path", { d: "M224,50H32a6,6,0,0,0-6,6V192a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A6,6,0,0,0,224,50ZM38,110H82v36H38Zm56,0H218v36H94ZM218,62V98H38V62ZM38,192V158H82v36H40A2,2,0,0,1,38,192Zm178,2H94V158H218v34A2,2,0,0,1,216,194Z" }));
});
M.displayName = "Light";
export {
  M as Light
};
