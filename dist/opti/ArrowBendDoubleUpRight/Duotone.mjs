var d = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (e, a, t) => a in e ? d(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, i = (e, a) => {
  for (var t in a || (a = {}))
    c.call(a, t) && p(e, t, a[t]);
  if (m)
    for (var t of m(a))
      n.call(a, t) && p(e, t, a[t]);
  return e;
};
var A = (e, a) => {
  var t = {};
  for (var o in e)
    c.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && m)
    for (var o of m(e))
      a.indexOf(o) < 0 && n.call(e, o) && (t[o] = e[o]);
  return t;
};
import r, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = f((o, t) => {
  var l = o, { children: e } = l, a = A(l, ["children"]);
  return /* @__PURE__ */ r.createElement(s, i({ ref: t }, a), e, /* @__PURE__ */ r.createElement("path", { d: "M176,104l-48,48V56Z", opacity: "0.2" }), /* @__PURE__ */ r.createElement("path", { d: "M229.66,109.66l-48,48a8,8,0,0,1-11.32-11.32L212.69,104,170.34,61.66a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,229.66,109.66Zm-48,0-48,48A8,8,0,0,1,120,152V112.37A88.11,88.11,0,0,0,40,200a8,8,0,0,1-16,0A104.15,104.15,0,0,1,120,96.3V56a8,8,0,0,1,13.66-5.66l48,48A8,8,0,0,1,181.66,109.66Zm-17-5.66L136,75.31v57.38Z" }));
});
Z.displayName = "Duotone";
export {
  Z as Duotone
};
