var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var m = (e, t, a) => t in e ? d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, p = (e, t) => {
  for (var a in t || (t = {}))
    o.call(t, a) && m(e, a, t[a]);
  if (r)
    for (var a of r(t))
      i.call(t, a) && m(e, a, t[a]);
  return e;
};
var f = (e, t) => {
  var a = {};
  for (var l in e)
    o.call(e, l) && t.indexOf(l) < 0 && (a[l] = e[l]);
  if (e != null && r)
    for (var l of r(e))
      t.indexOf(l) < 0 && i.call(e, l) && (a[l] = e[l]);
  return a;
};
import s, { forwardRef as n } from "react";
import A from "../../lib/OptiBase.mjs";
const L = n((l, a) => {
  var c = l, { children: e } = c, t = f(c, ["children"]);
  return /* @__PURE__ */ s.createElement(A, p({ ref: a }, t), e, /* @__PURE__ */ s.createElement("path", { d: "M235.33,104l-53.47,53.65c4.56,12.67,6.45,33.89-13.19,60A15.93,15.93,0,0,1,157,224c-.38,0-.75,0-1.13,0a16,16,0,0,1-11.32-4.69L96.29,171,53.66,213.66a8,8,0,0,1-11.32-11.32L85,159.71l-48.3-48.3A16,16,0,0,1,38,87.63c25.42-20.51,49.75-16.48,60.4-13.14L152,20.7a16,16,0,0,1,22.63,0l60.69,60.68A16,16,0,0,1,235.33,104Z" }));
});
L.displayName = "Fill";
export {
  L as Fill
};
