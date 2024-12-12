var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, m, e) => m in a ? f(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, n = (a, m) => {
  for (var e in m || (m = {}))
    i.call(m, e) && o(a, e, m[e]);
  if (r)
    for (var e of r(m))
      p.call(m, e) && o(a, e, m[e]);
  return a;
};
var Z = (a, m) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const l = s((t, e) => {
  var h = t, { children: a } = h, m = Z(h, ["children"]);
  return /* @__PURE__ */ c.createElement(d, n({ ref: e }, m), a, /* @__PURE__ */ c.createElement("path", { d: "M88,132a24,24,0,1,0,24,24A24,24,0,0,0,88,132Zm0,40a16,16,0,1,1,16-16A16,16,0,0,1,88,172Zm160-48H219.92A100,100,0,0,0,20,128v24a68.07,68.07,0,0,0,68,68h40a68.07,68.07,0,0,0,68-68V132h52a4,4,0,0,0,0-8Zm-60,28a60.07,60.07,0,0,1-60,60h-8a68.07,68.07,0,0,0,36-60V132h32Zm-36-28a4,4,0,0,0-4,4v24a60,60,0,0,1-120,0V128a92,92,0,0,1,183.91-4Z" }));
});
l.displayName = "Thin";
export {
  l as Thin
};
