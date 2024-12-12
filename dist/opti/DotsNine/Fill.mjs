var f = Object.defineProperty;
var A = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var r = (a, e, m) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : a[e] = m, i = (a, e) => {
  for (var m in e || (e = {}))
    l.call(e, m) && r(a, m, e[m]);
  if (A)
    for (var m of A(e))
      o.call(e, m) && r(a, m, e[m]);
  return a;
};
var p = (a, e) => {
  var m = {};
  for (var t in a)
    l.call(a, t) && e.indexOf(t) < 0 && (m[t] = a[t]);
  if (a != null && A)
    for (var t of A(a))
      e.indexOf(t) < 0 && o.call(a, t) && (m[t] = a[t]);
  return m;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const n = s((t, m) => {
  var Z = t, { children: a } = Z, e = p(Z, ["children"]);
  return /* @__PURE__ */ c.createElement(d, i({ ref: m }, e), a, /* @__PURE__ */ c.createElement("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM76,192a12,12,0,1,1,12-12A12,12,0,0,1,76,192Zm0-52a12,12,0,1,1,12-12A12,12,0,0,1,76,140Zm0-52A12,12,0,1,1,88,76,12,12,0,0,1,76,88Zm52,104a12,12,0,1,1,12-12A12,12,0,0,1,128,192Zm0-52a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm0-52a12,12,0,1,1,12-12A12,12,0,0,1,128,88Zm52,104a12,12,0,1,1,12-12A12,12,0,0,1,180,192Zm0-52a12,12,0,1,1,12-12A12,12,0,0,1,180,140Zm0-52a12,12,0,1,1,12-12A12,12,0,0,1,180,88Z" }));
});
n.displayName = "Fill";
export {
  n as Fill
};
