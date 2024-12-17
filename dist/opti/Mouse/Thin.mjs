var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var h = (e, t, a) => t in e ? c(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, n = (e, t) => {
  for (var a in t || (t = {}))
    i.call(t, a) && h(e, a, t[a]);
  if (r)
    for (var a of r(t))
      p.call(t, a) && h(e, a, t[a]);
  return e;
};
var A = (e, t) => {
  var a = {};
  for (var m in e)
    i.call(e, m) && t.indexOf(m) < 0 && (a[m] = e[m]);
  if (e != null && r)
    for (var m of r(e))
      t.indexOf(m) < 0 && p.call(e, m) && (a[m] = e[m]);
  return a;
};
import H, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const v = f((m, a) => {
  var o = m, { children: e } = o, t = A(o, ["children"]);
  return /* @__PURE__ */ H.createElement(s, n({ ref: a }, t), e, /* @__PURE__ */ H.createElement("path", { d: "M144,20H112A60.07,60.07,0,0,0,52,80v96a60.07,60.07,0,0,0,60,60h32a60.07,60.07,0,0,0,60-60V80A60.07,60.07,0,0,0,144,20Zm52,60v28H132V28h12A52.06,52.06,0,0,1,196,80ZM112,28h12v80H60V80A52.06,52.06,0,0,1,112,28Zm32,200H112a52.06,52.06,0,0,1-52-52V116H196v60A52.06,52.06,0,0,1,144,228Z" }));
});
v.displayName = "Thin";
export {
  v as Thin
};
