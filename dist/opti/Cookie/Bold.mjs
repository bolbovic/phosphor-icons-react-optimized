var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var A = (a, m, e) => m in a ? f(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, d = (a, m) => {
  for (var e in m || (m = {}))
    p.call(m, e) && A(a, e, m[e]);
  if (o)
    for (var e of o(m))
      Z.call(m, e) && A(a, e, m[e]);
  return a;
};
var l = (a, m) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      m.indexOf(t) < 0 && Z.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((t, e) => {
  var r = t, { children: a } = r, m = l(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, d({ ref: e }, m), a, /* @__PURE__ */ c.createElement("path", { d: "M167.31,160.69a16,16,0,1,1-22.62,0A16,16,0,0,1,167.31,160.69Zm-86.62-8a16,16,0,1,0,22.62,0A16,16,0,0,0,80.69,152.69Zm14.62-33.38a16,16,0,1,0-22.62,0A16,16,0,0,0,95.31,119.31Zm48-6.62a16,16,0,1,0,0,22.62A16,16,0,0,0,143.31,112.69ZM236,128A108,108,0,1,1,128,20a12,12,0,0,1,12,12,36,36,0,0,0,36,36,12,12,0,0,1,12,12,36,36,0,0,0,36,36A12,12,0,0,1,236,128Zm-24.67,10.65A60.17,60.17,0,0,1,165,91a60.17,60.17,0,0,1-47.66-46.32,84,84,0,1,0,94,94Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
