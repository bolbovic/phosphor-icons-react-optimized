var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, L = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const A = h((m, e) => {
  var l = m, { children: a } = l, t = Z(l, ["children"]);
  return /* @__PURE__ */ c.createElement(s, L({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M200,56a34,34,0,0,0-48-.05L140.34,68.14a6,6,0,1,1-8.68-8.28l11.71-12.28.1-.11a46,46,0,0,1,65.06,65.06l-.11.1-12.28,11.71a6,6,0,1,1-8.28-8.68L200.09,104A34,34,0,0,0,200,56Zm-84.38,131.9L104,200.09A34,34,0,0,1,55.91,152l12.23-11.67a6,6,0,0,0-8.28-8.68L47.58,143.37l-.11.1a46,46,0,0,0,65.06,65.06l.1-.11,11.71-12.28a6,6,0,1,0-8.68-8.28ZM216,154H192a6,6,0,0,0,0,12h24a6,6,0,0,0,0-12ZM40,102H64a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12Zm120,84a6,6,0,0,0-6,6v24a6,6,0,0,0,12,0V192A6,6,0,0,0,160,186ZM96,70a6,6,0,0,0,6-6V40a6,6,0,0,0-12,0V64A6,6,0,0,0,96,70Z" }));
});
A.displayName = "Light";
export {
  A as Light
};
