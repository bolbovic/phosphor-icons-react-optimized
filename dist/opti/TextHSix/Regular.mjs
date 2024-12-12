var R = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? R(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, f = (a, r) => {
  for (var e in r || (r = {}))
    c.call(r, e) && o(a, e, r[e]);
  if (m)
    for (var e of m(r))
      p.call(r, e) && o(a, e, r[e]);
  return a;
};
var i = (a, r) => {
  var e = {};
  for (var t in a)
    c.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import s, { forwardRef as V } from "react";
import d from "../../lib/OptiBase.mjs";
const n = V((t, e) => {
  var l = t, { children: a } = l, r = i(l, ["children"]);
  return /* @__PURE__ */ s.createElement(d, f({ ref: e }, r), a, /* @__PURE__ */ s.createElement("path", { d: "M152,56V176a8,8,0,0,1-16,0V124H48v52a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v52h88V56a8,8,0,0,1,16,0Zm96,124a36,36,0,1,1-67.34-17.68c.07-.14.14-.28.22-.42l32.25-54a8,8,0,0,1,13.74,8.2l-16.69,28c.6,0,1.21-.05,1.82-.05A36,36,0,0,1,248,180Zm-16,0a20,20,0,1,0-20,20A20,20,0,0,0,232,180Z" }));
});
n.displayName = "Regular";
export {
  n as Regular
};
