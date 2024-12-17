var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && A(a, e, t[e]);
  if (m)
    for (var e of m(t))
      Z.call(t, e) && A(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var o in a)
    H.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && m)
    for (var o of m(a))
      t.indexOf(o) < 0 && Z.call(a, o) && (e[o] = a[o]);
  return e;
};
import r, { forwardRef as M } from "react";
import V from "../../lib/OptiBase.mjs";
const d = M((o, e) => {
  var p = o, { children: a } = p, t = n(p, ["children"]);
  return /* @__PURE__ */ r.createElement(V, c({ ref: e }, t), a, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M200,32H56a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V40A8,8,0,0,0,200,32ZM128,168a32,32,0,1,1,32-32A32,32,0,0,1,128,168Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M75.19,198.4a8,8,0,0,0,11.21-1.6,52,52,0,0,1,83.2,0,8,8,0,1,0,12.8-9.6A67.88,67.88,0,0,0,155,165.51a40,40,0,1,0-53.94,0A67.88,67.88,0,0,0,73.6,187.2,8,8,0,0,0,75.19,198.4ZM128,112a24,24,0,1,1-24,24A24,24,0,0,1,128,112Zm72-88H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24Zm0,192H56V40H200ZM88,64a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,64Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};
