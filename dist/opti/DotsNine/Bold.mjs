var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var A = (a, m, e) => m in a ? f(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, d = (a, m) => {
  for (var e in m || (m = {}))
    Z.call(m, e) && A(a, e, m[e]);
  if (o)
    for (var e of o(m))
      p.call(m, e) && A(a, e, m[e]);
  return a;
};
var l = (a, m) => {
  var e = {};
  for (var t in a)
    Z.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      m.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((t, e) => {
  var r = t, { children: a } = r, m = l(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, d({ ref: e }, m), a, /* @__PURE__ */ c.createElement("path", { d: "M76,60A16,16,0,1,1,60,44,16,16,0,0,1,76,60Zm52-16a16,16,0,1,0,16,16A16,16,0,0,0,128,44Zm68,32a16,16,0,1,0-16-16A16,16,0,0,0,196,76ZM60,112a16,16,0,1,0,16,16A16,16,0,0,0,60,112Zm68,0a16,16,0,1,0,16,16A16,16,0,0,0,128,112Zm68,0a16,16,0,1,0,16,16A16,16,0,0,0,196,112ZM60,180a16,16,0,1,0,16,16A16,16,0,0,0,60,180Zm68,0a16,16,0,1,0,16,16A16,16,0,0,0,128,180Zm68,0a16,16,0,1,0,16,16A16,16,0,0,0,196,180Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
