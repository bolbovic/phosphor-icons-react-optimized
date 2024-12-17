var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
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
import f, { forwardRef as s } from "react";
import V from "../../lib/OptiBase.mjs";
const Z = s((m, e) => {
  var l = m, { children: a } = l, t = c(l, ["children"]);
  return /* @__PURE__ */ f.createElement(V, H({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M248,64H8A8,8,0,0,0,8,80h8V192a8,8,0,0,0,16,0V144H224v48a8,8,0,0,0,16,0V80h8a8,8,0,0,0,0-16ZM80,112H56a8,8,0,0,1,0-16H80a8,8,0,0,1,0,16Zm56,8a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Zm64-8H176a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16Z" }));
});
Z.displayName = "Fill";
export {
  Z as Fill
};
