var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? s(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, H = (a, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && o(a, e, r[e]);
  if (m)
    for (var e of m(r))
      A.call(r, e) && o(a, e, r[e]);
  return a;
};
var c = (a, r) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && A.call(a, t) && (e[t] = a[t]);
  return e;
};
import l, { forwardRef as M } from "react";
import V from "../../lib/OptiBase.mjs";
const f = M((t, e) => {
  var Z = t, { children: a } = Z, r = c(Z, ["children"]);
  return /* @__PURE__ */ l.createElement(V, H({ ref: e }, r), a, /* @__PURE__ */ l.createElement("path", { d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,80H168V56h48ZM40,56H152V200H40ZM216,200H168V136h48v64ZM180,88a12,12,0,1,1,12,12A12,12,0,0,1,180,88Zm24,80a12,12,0,1,1-12-12A12,12,0,0,1,204,168Zm-68.25-2a39.76,39.76,0,0,0-17.19-23.34,32,32,0,1,0-45.12,0A39.84,39.84,0,0,0,56.25,166a8,8,0,0,0,15.5,4c2.64-10.25,13.06-18,24.25-18s21.62,7.73,24.25,18a8,8,0,1,0,15.5-4ZM80,120a16,16,0,1,1,16,16A16,16,0,0,1,80,120Z" }));
});
f.displayName = "Regular";
export {
  f as Regular
};
