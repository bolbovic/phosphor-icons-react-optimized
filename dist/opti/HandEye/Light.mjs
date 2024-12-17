var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && c(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && c(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import v, { forwardRef as f } from "react";
import A from "../../lib/OptiBase.mjs";
const d = f((m, e) => {
  var o = m, { children: a } = o, t = V(o, ["children"]);
  return /* @__PURE__ */ v.createElement(A, s({ ref: e }, t), a, /* @__PURE__ */ v.createElement("path", { d: "M138,168a10,10,0,1,1-10-10A10,10,0,0,1,138,168Zm76-52v36a86,86,0,0,1-172,0V76A26,26,0,0,1,82,54.11V44a26,26,0,0,1,51.41-5.51A26,26,0,0,1,174,60V94.11A26,26,0,0,1,214,116Zm-12,0a14,14,0,0,0-28,0v4a6,6,0,0,1-12,0V60a14,14,0,0,0-28,0v44a6,6,0,0,1-12,0V44a14,14,0,0,0-28,0v68a6,6,0,0,1-12,0V76a14,14,0,0,0-28,0v76a74,74,0,0,0,148,0Zm-20.63,49.32a6,6,0,0,1,0,5.36C180.65,172.12,163.3,206,128,206s-52.65-33.88-53.37-35.32a6,6,0,0,1,0-5.36C75.35,163.88,92.7,130,128,130S180.65,163.88,181.37,165.32ZM169.08,168c-4.46-7.12-18.41-26-41.08-26s-36.65,18.85-41.08,26c4.46,7.13,18.41,26,41.08,26S164.65,175.15,169.08,168Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
