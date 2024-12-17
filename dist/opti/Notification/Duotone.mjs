var l = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? l(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    n.call(t, e) && c(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && c(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var o in a)
    n.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && m)
    for (var o of m(a))
      t.indexOf(o) < 0 && i.call(a, o) && (e[o] = a[o]);
  return e;
};
import r, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const Z = s((o, e) => {
  var p = o, { children: a } = p, t = f(p, ["children"]);
  return /* @__PURE__ */ r.createElement(A, d({ ref: e }, t), a, /* @__PURE__ */ r.createElement("path", { d: "M224,60a28,28,0,1,1-28-28A28,28,0,0,1,224,60Z", opacity: "0.2" }), /* @__PURE__ */ r.createElement("path", { d: "M216,128v80a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V56A16,16,0,0,1,48,40h80a8,8,0,0,1,0,16H48V208H200V128a8,8,0,0,1,16,0Zm16-68a36,36,0,1,1-36-36A36,36,0,0,1,232,60Zm-16,0a20,20,0,1,0-20,20A20,20,0,0,0,216,60Z" }));
});
Z.displayName = "Duotone";
export {
  Z as Duotone
};
