var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
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
const d = h((m, e) => {
  var l = m, { children: a } = l, t = Z(l, ["children"]);
  return /* @__PURE__ */ c.createElement(s, A({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M62,236a10,10,0,1,1-10-10A10,10,0,0,1,62,236Zm22-42a10,10,0,1,0,10,10A10,10,0,0,0,84,194Zm-64,0a10,10,0,1,0,10,10A10,10,0,0,0,20,194Zm32-32a10,10,0,1,0,10,10A10,10,0,0,0,52,162ZM254,40a6,6,0,0,1-6,6H218.49l-28.9,28.89L167.83,202.32a14,14,0,0,1-23.71,7.57l-98-98a14,14,0,0,1,7.6-23.71l127.4-21.76,30.65-30.65A6,6,0,0,1,216,34h32A6,6,0,0,1,254,40ZM176.66,79.34,55.7,100a2,2,0,0,0-1.11,3.39l98,98a2,2,0,0,0,3.39-1.09Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
