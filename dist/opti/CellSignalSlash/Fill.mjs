var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? d(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, c = (a, l) => {
  for (var e in l || (l = {}))
    i.call(l, e) && o(a, e, l[e]);
  if (r)
    for (var e of r(l))
      p.call(l, e) && o(a, e, l[e]);
  return a;
};
var f = (a, l) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import s, { forwardRef as n } from "react";
import A from "../../lib/OptiBase.mjs";
const E = n((t, e) => {
  var m = t, { children: a } = m, l = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(A, c({ ref: e }, l), a, /* @__PURE__ */ s.createElement("path", { d: "M213.38,221.92a8,8,0,0,1-11.3-.54l-5.51-6.06A16.11,16.11,0,0,1,192,216H32a16,16,0,0,1-15.06-10.59,16.4,16.4,0,0,1,4.07-17l79.13-79.12L42.26,45.62a8.22,8.22,0,0,1,.14-11.38,8,8,0,0,1,11.48.37l160,176A8,8,0,0,1,213.38,221.92ZM201,172.66a4,4,0,0,0,7-2.69V40a16,16,0,0,0-27.32-11.32l-55.21,55.2a4,4,0,0,0-.13,5.52Z" }));
});
E.displayName = "Fill";
export {
  E as Fill
};
