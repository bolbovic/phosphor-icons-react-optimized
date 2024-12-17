var A = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, t, a) => t in e ? A(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, c = (e, t) => {
  for (var a in t || (t = {}))
    i.call(t, a) && o(e, a, t[a]);
  if (m)
    for (var a of m(t))
      p.call(t, a) && o(e, a, t[a]);
  return e;
};
var f = (e, t) => {
  var a = {};
  for (var r in e)
    i.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && m)
    for (var r of m(e))
      t.indexOf(r) < 0 && p.call(e, r) && (a[r] = e[r]);
  return a;
};
import s, { forwardRef as H } from "react";
import d from "../../lib/OptiBase.mjs";
const h = H((r, a) => {
  var l = r, { children: e } = l, t = f(l, ["children"]);
  return /* @__PURE__ */ s.createElement(d, c({ ref: a }, t), e, /* @__PURE__ */ s.createElement("path", { d: "M144,16H112A64.07,64.07,0,0,0,48,80v96a64.07,64.07,0,0,0,64,64h32a64.07,64.07,0,0,0,64-64V80A64.07,64.07,0,0,0,144,16ZM112,32h16v72H64V80A48.05,48.05,0,0,1,112,32Zm32,192H112a48.05,48.05,0,0,1-48-48V120H192v56A48.05,48.05,0,0,1,144,224Z" }));
});
h.displayName = "Fill";
export {
  h as Fill
};
