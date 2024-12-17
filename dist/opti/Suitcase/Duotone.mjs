var h = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && r(a, e, t[e]);
  if (H)
    for (var e of H(t))
      Z.call(t, e) && r(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && H)
    for (var o of H(a))
      t.indexOf(o) < 0 && Z.call(a, o) && (e[o] = a[o]);
  return e;
};
import V, { forwardRef as i } from "react";
import A from "../../lib/OptiBase.mjs";
const M = i((o, e) => {
  var m = o, { children: a } = m, t = n(m, ["children"]);
  return /* @__PURE__ */ V.createElement(A, c({ ref: e }, t), a, /* @__PURE__ */ V.createElement(
    "path",
    {
      d: "M40,64H88V208H40a8,8,0,0,1-8-8V72A8,8,0,0,1,40,64Zm176,0H168V208h48a8,8,0,0,0,8-8V72A8,8,0,0,0,216,64Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ V.createElement("path", { d: "M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm64,24V200H96V72ZM40,72H80V200H40ZM216,200H176V72h40V200Z" }));
});
M.displayName = "Duotone";
export {
  M as Duotone
};
