var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var p = (a, m, e) => m in a ? f(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, d = (a, m) => {
  for (var e in m || (m = {}))
    A.call(m, e) && p(a, e, m[e]);
  if (o)
    for (var e of o(m))
      Z.call(m, e) && p(a, e, m[e]);
  return a;
};
var l = (a, m) => {
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
  var r = t, { children: a } = r, m = l(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, d({ ref: e }, m), a, /* @__PURE__ */ c.createElement("path", { d: "M232,212H195.8A107.94,107.94,0,1,0,128,236H232a12,12,0,0,0,0-24ZM44,128a84,84,0,1,1,84,84A84.09,84.09,0,0,1,44,128Zm64-44a20,20,0,1,1,20,20A20,20,0,0,1,108,84Zm20,108a20,20,0,1,1,20-20A20,20,0,0,1,128,192Zm24-64a20,20,0,1,1,20,20A20,20,0,0,1,152,128Zm-48,0a20,20,0,1,1-20-20A20,20,0,0,1,104,128Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
