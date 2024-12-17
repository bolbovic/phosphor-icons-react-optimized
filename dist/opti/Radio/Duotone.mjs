var V = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var Z = (a, t, e) => t in a ? V(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && Z(a, e, t[e]);
  if (o)
    for (var e of o(t))
      c.call(t, e) && Z(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && c.call(a, m) && (e[m] = a[m]);
  return e;
};
import H, { forwardRef as i } from "react";
import l from "../../lib/OptiBase.mjs";
const d = i((m, e) => {
  var r = m, { children: a } = r, t = A(r, ["children"]);
  return /* @__PURE__ */ H.createElement(l, n({ ref: e }, t), a, /* @__PURE__ */ H.createElement(
    "path",
    {
      d: "M216,72H32V192a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V80A8,8,0,0,0,216,72Zm-56,96a32,32,0,1,1,32-32A32,32,0,0,1,160,168Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ H.createElement("path", { d: "M104,168a8,8,0,0,1-8,8H64a8,8,0,0,1,0-16H96A8,8,0,0,1,104,168Zm-8-40H64a8,8,0,0,0,0,16H96a8,8,0,0,0,0-16Zm0-32H64a8,8,0,0,0,0,16H96a8,8,0,0,0,0-16ZM232,80V192a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V72a8,8,0,0,1,5.7-7.66l160-48a8,8,0,0,1,4.6,15.33L86.51,64H216A16,16,0,0,1,232,80ZM216,192V80H40V192H216Zm-16-56a40,40,0,1,1-40-40A40,40,0,0,1,200,136Zm-16,0a24,24,0,1,0-24,24A24,24,0,0,0,184,136Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};
