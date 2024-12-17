var R = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (e, l, a) => l in e ? R(e, l, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[l] = a, f = (e, l) => {
  for (var a in l || (l = {}))
    p.call(l, a) && o(e, a, l[a]);
  if (t)
    for (var a of t(l))
      c.call(l, a) && o(e, a, l[a]);
  return e;
};
var i = (e, l) => {
  var a = {};
  for (var r in e)
    p.call(e, r) && l.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && t)
    for (var r of t(e))
      l.indexOf(r) < 0 && c.call(e, r) && (a[r] = e[r]);
  return a;
};
import s, { forwardRef as d } from "react";
import n from "../../lib/OptiBase.mjs";
const L = d((r, a) => {
  var m = r, { children: e } = m, l = i(m, ["children"]);
  return /* @__PURE__ */ s.createElement(n, f({ ref: a }, l), e, /* @__PURE__ */ s.createElement("path", { d: "M225.56,87.56,137.64,19.25l-.18-.14a15.93,15.93,0,0,0-18.92,0l-.18.14L30.44,87.56a16,16,0,0,0-5.7,17.63l32,107.54.06.17A15.94,15.94,0,0,0,72,224H184a15.94,15.94,0,0,0,15.23-11.1l.06-.17,32-107.54A16,16,0,0,0,225.56,87.56Zm-9.62,13L184,208H72l-32-107.44-.06-.17h0l.18-.14L128,32l87.82,68.23.18.14Z" }));
});
L.displayName = "Regular";
export {
  L as Regular
};
