var f = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var o = (e, r, a) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, V = (e, r) => {
  for (var a in r || (r = {}))
    p.call(r, a) && o(e, a, r[a]);
  if (c)
    for (var a of c(r))
      s.call(r, a) && o(e, a, r[a]);
  return e;
};
var Z = (e, r) => {
  var a = {};
  for (var t in e)
    p.call(e, t) && r.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && c)
    for (var t of c(e))
      r.indexOf(t) < 0 && s.call(e, t) && (a[t] = e[t]);
  return a;
};
import l, { forwardRef as i } from "react";
import C from "../../lib/OptiBase.mjs";
const R = i((t, a) => {
  var m = t, { children: e } = m, r = Z(m, ["children"]);
  return /* @__PURE__ */ l.createElement(C, V({ ref: a }, r), e, /* @__PURE__ */ l.createElement("path", { d: "M207.58,63.84C186.85,53.48,159.33,48,128,48S69.15,53.48,48.42,63.84,16,88.78,16,104v48c0,15.22,11.82,29.85,32.42,40.16S96.67,208,128,208s58.85-5.48,79.58-15.84S240,167.22,240,152V104C240,88.78,228.18,74.15,207.58,63.84ZM128,64c62.64,0,96,23.23,96,40s-33.36,40-96,40-96-23.23-96-40S65.36,64,128,64Zm-8,95.86v32c-19-.62-35-3.42-48-7.49V153.05A203.43,203.43,0,0,0,120,159.86Zm16,0a203.43,203.43,0,0,0,48-6.81v31.31c-13,4.07-29,6.87-48,7.49ZM32,152V133.53a82.88,82.88,0,0,0,16.42,10.63c2.43,1.21,5,2.35,7.58,3.43V178C40.17,170.16,32,160.29,32,152Zm168,26V147.59c2.61-1.08,5.15-2.22,7.58-3.43A82.88,82.88,0,0,0,224,133.53V152C224,160.29,215.83,170.16,200,178Z" }));
});
R.displayName = "Regular";
export {
  R as Regular
};
