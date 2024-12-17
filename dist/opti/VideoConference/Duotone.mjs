var n = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && p(a, e, t[e]);
  if (o)
    for (var e of o(t))
      A.call(t, e) && p(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var m in a)
    c.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && A.call(a, m) && (e[m] = a[m]);
  return e;
};
import r, { forwardRef as M } from "react";
import i from "../../lib/OptiBase.mjs";
const s = M((m, e) => {
  var Z = m, { children: a } = Z, t = V(Z, ["children"]);
  return /* @__PURE__ */ r.createElement(i, H({ ref: e }, t), a, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M40,48a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H160V48Zm56,96a24,24,0,1,1,24-24A24,24,0,0,1,96,144Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,80H168V56h48ZM40,56H152V200H40ZM216,200H168V136h48v64ZM180,88a12,12,0,1,1,12,12A12,12,0,0,1,180,88Zm24,80a12,12,0,1,1-12-12A12,12,0,0,1,204,168Zm-68.25-2a39.76,39.76,0,0,0-17.19-23.34,32,32,0,1,0-45.12,0A39.84,39.84,0,0,0,56.25,166a8,8,0,0,0,15.5,4c2.64-10.25,13.06-18,24.25-18s21.62,7.73,24.25,18a8,8,0,1,0,15.5-4ZM80,120a16,16,0,1,1,16,16A16,16,0,0,1,80,120Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};
