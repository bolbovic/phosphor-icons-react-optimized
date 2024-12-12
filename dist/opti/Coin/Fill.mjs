var Z = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var l = (e, t, a) => t in e ? Z(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, p = (e, t) => {
  for (var a in t || (t = {}))
    o.call(t, a) && l(e, a, t[a]);
  if (c)
    for (var a of c(t))
      i.call(t, a) && l(e, a, t[a]);
  return e;
};
var V = (e, t) => {
  var a = {};
  for (var m in e)
    o.call(e, m) && t.indexOf(m) < 0 && (a[m] = e[m]);
  if (e != null && c)
    for (var m of c(e))
      t.indexOf(m) < 0 && i.call(e, m) && (a[m] = e[m]);
  return a;
};
import s, { forwardRef as f } from "react";
import C from "../../lib/OptiBase.mjs";
const d = f((m, a) => {
  var r = m, { children: e } = r, t = V(r, ["children"]);
  return /* @__PURE__ */ s.createElement(C, p({ ref: a }, t), e, /* @__PURE__ */ s.createElement("path", { d: "M207.58,63.84C186.85,53.48,159.33,48,128,48S69.15,53.48,48.42,63.84,16,88.78,16,104v48c0,15.22,11.82,29.85,32.42,40.16S96.67,208,128,208s58.85-5.48,79.58-15.84S240,167.22,240,152V104C240,88.78,228.18,74.15,207.58,63.84Zm-87.58,96v32c-19-.62-35-3.42-48-7.49V153.05A203.43,203.43,0,0,0,120,159.86Zm16,0a203.43,203.43,0,0,0,48-6.81v31.31c-13,4.07-29,6.87-48,7.49ZM32,152V133.53a82.88,82.88,0,0,0,16.42,10.63c2.43,1.21,5,2.35,7.58,3.43V178C40.17,170.16,32,160.29,32,152Zm168,26V147.59c2.61-1.08,5.15-2.22,7.58-3.43A82.88,82.88,0,0,0,224,133.53V152C224,160.29,215.83,170.16,200,178Z" }));
});
d.displayName = "Fill";
export {
  d as Fill
};
