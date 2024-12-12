var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && c(a, e, t[e]);
  if (o)
    for (var e of o(t))
      A.call(t, e) && c(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && A.call(a, m) && (e[m] = a[m]);
  return e;
};
import l, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const M = i((m, e) => {
  var r = m, { children: a } = r, t = d(r, ["children"]);
  return /* @__PURE__ */ l.createElement(s, Z({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M246.36,56.55a12,12,0,0,0-11.63-.6c-41.48,20.29-71.4,10.71-103.07.56C98.48,45.89,60.88,33.85,10.73,58.37A12,12,0,0,0,4,69.16v120.1a12,12,0,0,0,17.27,10.79c41.48-20.29,71.4-10.71,103.07-.56,18.83,6,39.08,12.51,62.24,12.51,17.66,0,37-3.77,58.69-14.37A12,12,0,0,0,252,186.84V66.74A12,12,0,0,0,246.36,56.55ZM228,179.12c-38,16.16-66.41,7.07-96.34-2.51-18.83-6-39.08-12.52-62.24-12.52A124.86,124.86,0,0,0,28,171.24V76.88c38-16.16,66.41-7.08,96.34,2.51C153.6,88.76,186.29,99.23,228,84.76ZM128,96a32,32,0,1,0,32,32A32.06,32.06,0,0,0,128,96Zm0,40a8,8,0,1,1,8-8A8,8,0,0,1,128,136ZM64,100v40a12,12,0,1,1-24,0V100a12,12,0,1,1,24,0Zm128,56V116a12,12,0,1,1,24,0v40a12,12,0,1,1-24,0Z" }));
});
M.displayName = "Bold";
export {
  M as Bold
};
