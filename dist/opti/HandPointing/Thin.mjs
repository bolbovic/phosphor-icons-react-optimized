var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      c.call(t, e) && i(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && c.call(a, r) && (e[r] = a[r]);
  return e;
};
import v, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const V = s((r, e) => {
  var o = r, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ v.createElement(A, l({ ref: e }, t), a, /* @__PURE__ */ v.createElement("path", { d: "M196,92a23.88,23.88,0,0,0-16.07,6.19A24,24,0,0,0,140,82.13V44a24,24,0,0,0-48,0v94L80.75,119.94A24,24,0,0,0,39.2,144l4.68,8.25C61.21,182.8,72.66,203,85.66,216.33,99.28,230.3,113.86,236,136,236a84.09,84.09,0,0,0,84-84V116A24,24,0,0,0,196,92Zm16,60a76.09,76.09,0,0,1-76,76c-40,0-51.35-20.08-85.16-79.71L46.15,140v0a16,16,0,0,1,27.71-16,.75.75,0,0,1,.07.12l18.68,30A4,4,0,0,0,100,152V44a16,16,0,0,1,32,0v68a4,4,0,0,0,8,0V100a16,16,0,0,1,32,0v20a4,4,0,0,0,8,0v-4a16,16,0,0,1,32,0Z" }));
});
V.displayName = "Thin";
export {
  V as Thin
};
