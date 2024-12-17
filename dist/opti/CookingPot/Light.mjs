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
import c, { forwardRef as l } from "react";
import s from "../../lib/OptiBase.mjs";
const H = l((m, e) => {
  var V = m, { children: a } = V, t = Z(V, ["children"]);
  return /* @__PURE__ */ c.createElement(s, L({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M90,48V16a6,6,0,0,1,12,0V48a6,6,0,0,1-12,0Zm38,6a6,6,0,0,0,6-6V16a6,6,0,0,0-12,0V48A6,6,0,0,0,128,54Zm32,0a6,6,0,0,0,6-6V16a6,6,0,0,0-12,0V48A6,6,0,0,0,160,54Zm91.6,46.8L222,123v61a30,30,0,0,1-30,30H64a30,30,0,0,1-30-30V123L4.4,100.8a6,6,0,0,1,7.2-9.6L34,108V80a6,6,0,0,1,6-6H216a6,6,0,0,1,6,6v28l22.4-16.8a6,6,0,0,1,7.2,9.6ZM210,86H46v98a18,18,0,0,0,18,18H192a18,18,0,0,0,18-18Z" }));
});
H.displayName = "Light";
export {
  H as Light
};
