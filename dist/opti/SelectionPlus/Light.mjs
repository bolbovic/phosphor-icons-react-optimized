var v = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? v(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, o = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && V(a, e, t[e]);
  if (r)
    for (var e of r(t))
      Z.call(t, e) && V(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var m in a)
    h.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && Z.call(a, m) && (e[m] = a[m]);
  return e;
};
import p, { forwardRef as A } from "react";
import M from "../../lib/OptiBase.mjs";
const c = A((m, e) => {
  var H = m, { children: a } = H, t = i(H, ["children"]);
  return /* @__PURE__ */ p.createElement(M, o({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M150,40a6,6,0,0,1-6,6H112a6,6,0,0,1,0-12h32A6,6,0,0,1,150,40Zm-6,170H112a6,6,0,0,0,0,12h32a6,6,0,0,0,0-12ZM210,48V72a6,6,0,0,0,12,0V48a14,14,0,0,0-14-14H184a6,6,0,0,0,0,12h24A2,2,0,0,1,210,48Zm6,58a6,6,0,0,0-6,6v32a6,6,0,0,0,12,0V112A6,6,0,0,0,216,106ZM40,150a6,6,0,0,0,6-6V112a6,6,0,0,0-12,0v32A6,6,0,0,0,40,150Zm32,60H48a2,2,0,0,1-2-2V184a6,6,0,0,0-12,0v24a14,14,0,0,0,14,14H72a6,6,0,0,0,0-12ZM72,34H48A14,14,0,0,0,34,48V72a6,6,0,0,0,12,0V48a2,2,0,0,1,2-2H72a6,6,0,0,0,0-12ZM240,210H222V192a6,6,0,0,0-12,0v18H192a6,6,0,0,0,0,12h18v18a6,6,0,0,0,12,0V222h18a6,6,0,0,0,0-12Z" }));
});
c.displayName = "Light";
export {
  c as Light
};
