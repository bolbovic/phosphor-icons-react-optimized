var h = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var l = (a, m, e) => m in a ? h(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, i = (a, m) => {
  for (var e in m || (m = {}))
    o.call(m, e) && l(a, e, m[e]);
  if (H)
    for (var e of H(m))
      Z.call(m, e) && l(a, e, m[e]);
  return a;
};
var p = (a, m) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && H)
    for (var t of H(a))
      m.indexOf(t) < 0 && Z.call(a, t) && (e[t] = a[t]);
  return e;
};
import V, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((t, e) => {
  var r = t, { children: a } = r, m = p(r, ["children"]);
  return /* @__PURE__ */ V.createElement(f, i({ ref: e }, m), a, /* @__PURE__ */ V.createElement("path", { d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM80,192H64a16,16,0,0,1-16-16V144a8,8,0,0,1,16,0v32H80a8,8,0,0,1,0,16ZM80,80H64v32a8,8,0,0,1-16,0V80A16,16,0,0,1,64,64H80a8,8,0,0,1,0,16Zm64,112H112a8,8,0,0,1,0-16h32a8,8,0,0,1,0,16Zm0-112H112a8,8,0,0,1,0-16h32a8,8,0,0,1,0,16Zm64,96a16,16,0,0,1-16,16H176a8,8,0,0,1,0-16h16V144a8,8,0,0,1,16,0Zm0-64a8,8,0,0,1-16,0V80H176a8,8,0,0,1,0-16h16a16,16,0,0,1,16,16Z" }));
});
s.displayName = "Fill";
export {
  s as Fill
};
