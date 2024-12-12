var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && V(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && V(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as v } from "react";
import A from "../../lib/OptiBase.mjs";
const d = v((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(A, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M188,92a23.9,23.9,0,0,0-16,6.13V60a24,24,0,0,0-40.07-17.8A24,24,0,0,0,84,44V58.13A24,24,0,0,0,44,76v76a84,84,0,0,0,168,0V116A24,24,0,0,0,188,92Zm16,60a76,76,0,0,1-152,0V76a16,16,0,0,1,32,0v44a4,4,0,0,0,8,0V44a16,16,0,0,1,32,0v68a4,4,0,0,0,8,0V60a16,16,0,0,1,32,0v72.18A44.06,44.06,0,0,0,124,176a4,4,0,0,0,8,0,36,36,0,0,1,36-36,4,4,0,0,0,4-4V116a16,16,0,0,1,32,0Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
