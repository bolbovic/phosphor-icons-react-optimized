var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var Z = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && Z(a, e, t[e]);
  if (o)
    for (var e of o(t))
      c.call(t, e) && Z(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && c.call(a, m) && (e[m] = a[m]);
  return e;
};
import r, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const s = d((m, e) => {
  var A = m, { children: a } = A, t = n(A, ["children"]);
  return /* @__PURE__ */ r.createElement(f, l({ ref: e }, t), a, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M232,176a32,32,0,1,1-32-32A32,32,0,0,1,232,176ZM56,144a32,32,0,1,0,32,32A32,32,0,0,0,56,144Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M164,80a28,28,0,1,0-28-28A28,28,0,0,0,164,80Zm0-40a12,12,0,1,1-12,12A12,12,0,0,1,164,40Zm36,96a40,40,0,1,0,40,40A40,40,0,0,0,200,136Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,200,200ZM56,136a40,40,0,1,0,40,40A40,40,0,0,0,56,136Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,56,200Zm136-80H152a8,8,0,0,1-5.66-2.34L120,91.31,99.31,112l34.35,34.34A8,8,0,0,1,136,152v48a8,8,0,0,1-16,0V155.31L82.34,117.66a8,8,0,0,1,0-11.32l32-32a8,8,0,0,1,11.32,0L155.31,104H192a8,8,0,0,1,0,16Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};
