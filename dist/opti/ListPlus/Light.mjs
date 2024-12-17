var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const l = Z((m, e) => {
  var H = m, { children: a } = H, t = c(H, ["children"]);
  return /* @__PURE__ */ f.createElement(d, h({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M34,64a6,6,0,0,1,6-6H216a6,6,0,0,1,0,12H40A6,6,0,0,1,34,64Zm6,70H216a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12Zm104,52H40a6,6,0,0,0,0,12H144a6,6,0,0,0,0-12Zm88,0H214V168a6,6,0,0,0-12,0v18H184a6,6,0,0,0,0,12h18v18a6,6,0,0,0,12,0V198h18a6,6,0,0,0,0-12Z" }));
});
l.displayName = "Light";
export {
  l as Light
};
