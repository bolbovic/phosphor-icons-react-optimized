var Z = Object.defineProperty;
var s = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && r(a, e, t[e]);
  if (s)
    for (var e of s(t))
      i.call(t, e) && r(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && s)
    for (var m of s(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import A, { forwardRef as f } from "react";
import C from "../../lib/OptiBase.mjs";
const d = f((m, e) => {
  var c = m, { children: a } = c, t = n(c, ["children"]);
  return /* @__PURE__ */ A.createElement(C, p({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220ZM84,108a8,8,0,1,1,8,8A8,8,0,0,1,84,108Zm72,0a8,8,0,1,1,8,8A8,8,0,0,1,156,108Zm24,60a4,4,0,0,1-4,4c-8,0-12-5.32-15.2-9.6-3.07-4.09-5-6.4-8.8-6.4s-5.73,2.31-8.8,6.4C140,166.68,136,172,128,172s-12-5.32-15.2-9.6c-3.07-4.09-5-6.4-8.8-6.4s-5.73,2.31-8.8,6.4C92,166.68,88,172,80,172a4,4,0,0,1,0-8c3.81,0,5.73-2.31,8.8-6.4C92,153.32,96,148,104,148s12,5.32,15.2,9.6c3.07,4.09,5,6.4,8.8,6.4s5.73-2.31,8.8-6.4C140,153.32,144,148,152,148s12,5.32,15.2,9.6c3.07,4.09,5,6.4,8.8,6.4A4,4,0,0,1,180,168Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
