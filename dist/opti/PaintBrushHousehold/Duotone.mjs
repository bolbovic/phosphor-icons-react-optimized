var d = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (o)
    for (var e of o(t))
      c.call(t, e) && m(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var l in a)
    p.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && o)
    for (var l of o(a))
      t.indexOf(l) < 0 && c.call(a, l) && (e[l] = a[l]);
  return e;
};
import r, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const M = f((l, e) => {
  var L = l, { children: a } = L, t = i(L, ["children"]);
  return /* @__PURE__ */ r.createElement(s, n({ ref: e }, t), a, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M225,65l-69,59,16.69,16.69a16,16,0,0,1,0,22.62L152,184,72,104,92.69,83.31a16,16,0,0,1,22.62,0L132,100l59-69A24,24,0,0,1,225,65Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M230.64,25.36a32,32,0,0,0-45.26,0q-.21.21-.42.45L131.55,88.22,121,77.64a24,24,0,0,0-33.95,0l-76.69,76.7a8,8,0,0,0,0,11.31l80,80a8,8,0,0,0,11.31,0L178.36,169a24,24,0,0,0,0-33.95l-10.58-10.57L230.19,71c.15-.14.31-.28.45-.43A32,32,0,0,0,230.64,25.36ZM96,228.69,79.32,212l22.34-22.35a8,8,0,0,0-11.31-11.31L68,200.68,55.32,188l22.34-22.35a8,8,0,0,0-11.31-11.31L44,176.68,27.31,160,72,115.31,140.69,184ZM219.52,59.1l-68.71,58.81a8,8,0,0,0-.46,11.74L167,146.34a8,8,0,0,1,0,11.31l-15,15L83.32,104l15-15a8,8,0,0,1,11.31,0l16.69,16.69a8,8,0,0,0,11.74-.46L196.9,36.48A16,16,0,0,1,219.52,59.1Z" }));
});
M.displayName = "Duotone";
export {
  M as Duotone
};
