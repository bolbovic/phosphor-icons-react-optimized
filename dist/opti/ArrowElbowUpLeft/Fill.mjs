var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, t, a) => t in e ? d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, c = (e, t) => {
  for (var a in t || (t = {}))
    i.call(t, a) && o(e, a, t[a]);
  if (r)
    for (var a of r(t))
      p.call(t, a) && o(e, a, t[a]);
  return e;
};
var f = (e, t) => {
  var a = {};
  for (var l in e)
    i.call(e, l) && t.indexOf(l) < 0 && (a[l] = e[l]);
  if (e != null && r)
    for (var l of r(e))
      t.indexOf(l) < 0 && p.call(e, l) && (a[l] = e[l]);
  return a;
};
import s, { forwardRef as n } from "react";
import V from "../../lib/OptiBase.mjs";
const h = n((l, a) => {
  var m = l, { children: e } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(V, c({ ref: a }, t), e, /* @__PURE__ */ s.createElement("path", { d: "M200,80V224a8,8,0,0,1-16,0V88H104v40a8,8,0,0,1-13.66,5.66l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,104,32V72h88A8,8,0,0,1,200,80Z" }));
});
h.displayName = "Fill";
export {
  h as Fill
};
