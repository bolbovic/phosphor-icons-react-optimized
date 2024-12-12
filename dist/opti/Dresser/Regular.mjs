var s = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    Z.call(t, e) && o(a, e, t[e]);
  if (H)
    for (var e of H(t))
      l.call(t, e) && o(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var r in a)
    Z.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && H)
    for (var r of H(a))
      t.indexOf(r) < 0 && l.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as M } from "react";
import c from "../../lib/OptiBase.mjs";
const d = M((r, e) => {
  var m = r, { children: a } = m, t = V(m, ["children"]);
  return /* @__PURE__ */ f.createElement(c, p({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M144,192a8,8,0,0,1-8,8H120a8,8,0,0,1,0-16h16A8,8,0,0,1,144,192ZM120,72h16a8,8,0,0,0,0-16H120a8,8,0,0,0,0,16Zm16,48H120a8,8,0,0,0,0,16h16a8,8,0,0,0,0-16Zm80-80V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40ZM56,152H200V104H56ZM56,40V88H200V40ZM200,216V168H56v48H200Z" }));
});
d.displayName = "Regular";
export {
  d as Regular,
  d as default
};
