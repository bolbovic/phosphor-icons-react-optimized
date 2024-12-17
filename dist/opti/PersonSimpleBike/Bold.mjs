var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var l = (a, m, e) => m in a ? f(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, p = (a, m) => {
  for (var e in m || (m = {}))
    A.call(m, e) && l(a, e, m[e]);
  if (o)
    for (var e of o(m))
      Z.call(m, e) && l(a, e, m[e]);
  return a;
};
var d = (a, m) => {
  var e = {};
  for (var t in a)
    A.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      m.indexOf(t) < 0 && Z.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((t, e) => {
  var r = t, { children: a } = r, m = d(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, p({ ref: e }, m), a, /* @__PURE__ */ c.createElement("path", { d: "M168,84a32,32,0,1,0-32-32A32,32,0,0,0,168,84Zm0-40a8,8,0,1,1-8,8A8,8,0,0,1,168,44Zm36,96a40,40,0,1,0,40,40A40,40,0,0,0,204,140Zm0,56a16,16,0,1,1,16-16A16,16,0,0,1,204,196ZM54,136a42,42,0,1,0,42,42A42,42,0,0,0,54,136Zm0,60a18,18,0,1,1,18-18A18,18,0,0,1,54,196Zm134-68H152a12,12,0,0,1-8.49-3.51L120,101l-15,15,31.52,31.51A12,12,0,0,1,140,156v48a12,12,0,0,1-24,0V161L79.51,124.49a12,12,0,0,1,0-17l32-32a12,12,0,0,1,17,0L157,104h31a12,12,0,0,1,0,24Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
