var h = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var Z = (a, e, H) => e in a ? h(a, e, { enumerable: !0, configurable: !0, writable: !0, value: H }) : a[e] = H, i = (a, e) => {
  for (var H in e || (e = {}))
    l.call(e, H) && Z(a, H, e[H]);
  if (t)
    for (var H of t(e))
      o.call(e, H) && Z(a, H, e[H]);
  return a;
};
var p = (a, e) => {
  var H = {};
  for (var m in a)
    l.call(a, m) && e.indexOf(m) < 0 && (H[m] = a[m]);
  if (a != null && t)
    for (var m of t(a))
      e.indexOf(m) < 0 && o.call(a, m) && (H[m] = a[m]);
  return H;
};
import A, { forwardRef as M } from "react";
import V from "../../lib/OptiBase.mjs";
const c = M((m, H) => {
  var r = m, { children: a } = r, e = p(r, ["children"]);
  return /* @__PURE__ */ A.createElement(V, i({ ref: H }, e), a, /* @__PURE__ */ A.createElement("path", { d: "M239.76,158.06,217.28,68.12A16,16,0,0,0,201.75,56H136V40a16,16,0,0,0-16-16H80A16,16,0,0,0,64,40V56H54.25A16,16,0,0,0,38.72,68.12L16.24,158.06A7.93,7.93,0,0,0,16,160v32a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V160A7.93,7.93,0,0,0,239.76,158.06ZM168,88h16a8,8,0,0,1,0,16H168a8,8,0,0,1,0-16Zm0,32h16a8,8,0,0,1,0,16H168a8,8,0,0,1,0-16ZM136,88a8,8,0,0,1,0,16H120a8,8,0,0,1,0-16Zm8,40a8,8,0,0,1-8,8H120a8,8,0,0,1,0-16h16A8,8,0,0,1,144,128ZM80,40h40V56H80ZM72,88H88a8,8,0,0,1,0,16H72a8,8,0,0,1,0-16Zm0,32H88a8,8,0,0,1,0,16H72a8,8,0,0,1,0-16Zm152,72H32V168H224Z" }));
});
c.displayName = "Fill";
export {
  c as Fill
};
