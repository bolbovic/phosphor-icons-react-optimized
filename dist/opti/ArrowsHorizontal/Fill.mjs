var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, l, a) => l in e ? d(e, l, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[l] = a, c = (e, l) => {
  for (var a in l || (l = {}))
    i.call(l, a) && o(e, a, l[a]);
  if (r)
    for (var a of r(l))
      p.call(l, a) && o(e, a, l[a]);
  return e;
};
var f = (e, l) => {
  var a = {};
  for (var t in e)
    i.call(e, t) && l.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && r)
    for (var t of r(e))
      l.indexOf(t) < 0 && p.call(e, t) && (a[t] = e[t]);
  return a;
};
import s, { forwardRef as n } from "react";
import A from "../../lib/OptiBase.mjs";
const v = n((t, a) => {
  var m = t, { children: e } = m, l = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(A, c({ ref: a }, l), e, /* @__PURE__ */ s.createElement("path", { d: "M237.66,133.66l-32,32A8,8,0,0,1,192,160V136H64v24a8,8,0,0,1-13.66,5.66l-32-32a8,8,0,0,1,0-11.32l32-32A8,8,0,0,1,64,96v24H192V96a8,8,0,0,1,13.66-5.66l32,32A8,8,0,0,1,237.66,133.66Z" }));
});
v.displayName = "Fill";
export {
  v as Fill
};
