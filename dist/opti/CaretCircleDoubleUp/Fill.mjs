var d = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? d(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, c = (a, l) => {
  for (var e in l || (l = {}))
    i.call(l, e) && o(a, e, l[e]);
  if (m)
    for (var e of m(l))
      p.call(l, e) && o(a, e, l[e]);
  return a;
};
var f = (a, l) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import s, { forwardRef as n } from "react";
import A from "../../lib/OptiBase.mjs";
const Z = n((t, e) => {
  var r = t, { children: a } = r, l = f(r, ["children"]);
  return /* @__PURE__ */ s.createElement(A, c({ ref: e }, l), a, /* @__PURE__ */ s.createElement("path", { d: "M201.58,54.43a104,104,0,1,0,0,147.14A104.17,104.17,0,0,0,201.58,54.43Zm-35.9,119.25a8,8,0,0,1-11.32,0L128,147.32l-26.35,26.36a8,8,0,1,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0l32,32A8,8,0,0,1,165.68,173.68Zm0-56a8,8,0,0,1-11.32,0L128,91.29l-26.35,26.36a8,8,0,1,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0l32,32A8,8,0,0,1,165.68,117.65Z" }));
});
Z.displayName = "Fill";
export {
  Z as Fill
};