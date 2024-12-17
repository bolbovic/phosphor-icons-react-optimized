var f = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var H = (a, m, e) => m in a ? f(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, Z = (a, m) => {
  for (var e in m || (m = {}))
    h.call(m, e) && H(a, e, m[e]);
  if (t)
    for (var e of t(m))
      p.call(m, e) && H(a, e, m[e]);
  return a;
};
var l = (a, m) => {
  var e = {};
  for (var r in a)
    h.call(a, r) && m.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      m.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const A = i((r, e) => {
  var o = r, { children: a } = o, m = l(o, ["children"]);
  return /* @__PURE__ */ c.createElement(s, Z({ ref: e }, m), a, /* @__PURE__ */ c.createElement("path", { d: "M160,80a8,8,0,0,1,8-8h72a8,8,0,0,1,0,16H168A8,8,0,0,1,160,80Zm80,88H168a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm0-64H168a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm0,32H168a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16ZM144,64V192a16,16,0,0,1-16,16H88A80,80,0,0,1,8,127.39C8.33,83.62,44.62,48,88.9,48H128A16,16,0,0,1,144,64Zm-16,0H88.9C53.38,64,24.26,92.49,24,127.51A64,64,0,0,0,88,192h40Z" }));
});
A.displayName = "Regular";
export {
  A as Regular
};
