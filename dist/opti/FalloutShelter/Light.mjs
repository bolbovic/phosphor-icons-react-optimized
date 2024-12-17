var L = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? L(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && i(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var m in a)
    l.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import A, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((m, e) => {
  var o = m, { children: a } = o, t = h(o, ["children"]);
  return /* @__PURE__ */ A.createElement(f, Z({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm69.29-92.83A6,6,0,0,0,192,122H139.21L165,83.33A6,6,0,0,0,160,74H96a6,6,0,0,0-5,9.33L116.79,122H64a6,6,0,0,0-5,9.33l32,48a6,6,0,0,0,10,0l27-40.51,27,40.51a6,6,0,0,0,10,0l32-48A6,6,0,0,0,197.29,125.17ZM148.79,86,128,117.18,107.21,86ZM96,165.18,75.21,134h41.58Zm64,0L139.21,134h41.58Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
