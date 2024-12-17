var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && p(a, e, t[e]);
  if (m)
    for (var e of m(t))
      Z.call(t, e) && p(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var o in a)
    c.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && m)
    for (var o of m(a))
      t.indexOf(o) < 0 && Z.call(a, o) && (e[o] = a[o]);
  return e;
};
import r, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const s = d((o, e) => {
  var A = o, { children: a } = A, t = n(A, ["children"]);
  return /* @__PURE__ */ r.createElement(f, l({ ref: e }, t), a, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M128,32a72,72,0,1,0,72,72A72,72,0,0,0,128,32Zm0,104a32,32,0,1,1,32-32A32,32,0,0,1,128,136Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M213.92,210.62l-160-176A8,8,0,1,0,42.08,45.38L58.82,63.8A80,80,0,0,0,120,183.6V200H32a8,8,0,0,0,0,16H197.19l4.89,5.38a8,8,0,1,0,11.84-10.76ZM64,104a63.65,63.65,0,0,1,6.26-27.62L88.68,96.64A40,40,0,0,0,128,144c1.2,0,2.39-.06,3.58-.17L150,164.11A64,64,0,0,1,64,104Zm72,96V183.59a79.91,79.91,0,0,0,25.44-6.91L182.64,200ZM85.52,45.31a8,8,0,0,1,3-10.91,80,80,0,0,1,105,115.5,8,8,0,1,1-13.1-9.19,64,64,0,0,0-84-92.4A8,8,0,0,1,85.52,45.31Zm65.31,66.12A24,24,0,0,0,128,80a24.17,24.17,0,0,0-5.24.57A8,8,0,1,1,119.3,65,40,40,0,0,1,166,116.38a8,8,0,0,1-15.21-4.95Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};
