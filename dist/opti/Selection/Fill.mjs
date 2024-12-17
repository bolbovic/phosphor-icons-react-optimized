var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import h, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((m, e) => {
  var l = m, { children: a } = l, t = V(l, ["children"]);
  return /* @__PURE__ */ h.createElement(f, H({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM104,200H72a16,16,0,0,1-16-16V152a8,8,0,0,1,16,0v32h32a8,8,0,0,1,0,16Zm0-128H72v32a8,8,0,0,1-16,0V72A16,16,0,0,1,72,56h32a8,8,0,0,1,0,16Zm96,112a16,16,0,0,1-16,16H152a8,8,0,0,1,0-16h32V152a8,8,0,0,1,16,0Zm0-80a8,8,0,0,1-16,0V72H152a8,8,0,0,1,0-16h32a16,16,0,0,1,16,16Z" }));
});
s.displayName = "Fill";
export {
  s as Fill
};
