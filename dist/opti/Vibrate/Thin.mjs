var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && V(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && V(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const v = f((m, e) => {
  var o = m, { children: a } = o, t = h(o, ["children"]);
  return /* @__PURE__ */ n.createElement(s, Z({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M160,36H96A20,20,0,0,0,76,56V200a20,20,0,0,0,20,20h64a20,20,0,0,0,20-20V56A20,20,0,0,0,160,36Zm12,164a12,12,0,0,1-12,12H96a12,12,0,0,1-12-12V56A12,12,0,0,1,96,44h64a12,12,0,0,1,12,12ZM212,88v80a4,4,0,0,1-8,0V88a4,4,0,0,1,8,0Zm32,16v48a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0ZM52,88v80a4,4,0,0,1-8,0V88a4,4,0,0,1,8,0ZM20,104v48a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Z" }));
});
v.displayName = "Thin";
export {
  v as Thin
};
