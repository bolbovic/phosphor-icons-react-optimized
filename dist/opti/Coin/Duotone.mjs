var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (e, a, t) => a in e ? i(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, s = (e, a) => {
  for (var t in a || (a = {}))
    Z.call(a, t) && p(e, t, a[t]);
  if (o)
    for (var t of o(a))
      n.call(a, t) && p(e, t, a[t]);
  return e;
};
var V = (e, a) => {
  var t = {};
  for (var c in e)
    Z.call(e, c) && a.indexOf(c) < 0 && (t[c] = e[c]);
  if (e != null && o)
    for (var c of o(e))
      a.indexOf(c) < 0 && n.call(e, c) && (t[c] = e[c]);
  return t;
};
import m, { forwardRef as S } from "react";
import d from "../../lib/OptiBase.mjs";
const f = S((c, t) => {
  var r = c, { children: e } = r, a = V(r, ["children"]);
  return /* @__PURE__ */ m.createElement(d, s({ ref: t }, a), e, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M232,104c0,24-40,48-104,48S24,128,24,104,64,56,128,56,232,80,232,104Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M207.58,63.84C186.85,53.48,159.33,48,128,48S69.15,53.48,48.42,63.84,16,88.78,16,104v48c0,15.22,11.82,29.85,32.42,40.16S96.67,208,128,208s58.85-5.48,79.58-15.84S240,167.22,240,152V104C240,88.78,228.18,74.15,207.58,63.84ZM128,64c62.64,0,96,23.23,96,40s-33.36,40-96,40-96-23.23-96-40S65.36,64,128,64Zm-8,95.86v32c-19-.62-35-3.42-48-7.49V153.05A203.43,203.43,0,0,0,120,159.86Zm16,0a203.43,203.43,0,0,0,48-6.81v31.31c-13,4.07-29,6.87-48,7.49ZM32,152V133.53a82.88,82.88,0,0,0,16.42,10.63c2.43,1.21,5,2.35,7.58,3.43V178C40.17,170.16,32,160.29,32,152Zm168,26V147.59c2.61-1.08,5.15-2.22,7.58-3.43A82.88,82.88,0,0,0,224,133.53V152C224,160.29,215.83,170.16,200,178Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
