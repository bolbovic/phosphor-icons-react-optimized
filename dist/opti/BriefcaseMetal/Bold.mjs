var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && m(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var o in a)
    V.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && p.call(a, o) && (e[o] = a[o]);
  return e;
};
import Z, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((o, e) => {
  var H = o, { children: a } = H, t = l(H, ["children"]);
  return /* @__PURE__ */ Z.createElement(i, d({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M216,52H180V40a28,28,0,0,0-28-28H104A28,28,0,0,0,76,40V52H40A20,20,0,0,0,20,72V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V72A20,20,0,0,0,216,52ZM44,120H212v32H44Zm56-80a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4V52H100ZM212,76V96H44V76ZM44,196V176H212v20Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
