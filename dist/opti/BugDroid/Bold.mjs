var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && l(a, e, t[e]);
  return a;
};
var M = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && d.call(a, o) && (e[o] = a[o]);
  return e;
};
import Z, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((o, e) => {
  var m = o, { children: a } = m, t = M(m, ["children"]);
  return /* @__PURE__ */ Z.createElement(i, A({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M197.35,51.62l11.14-11.13a12,12,0,1,0-17-17L179.34,35.69a91.84,91.84,0,0,0-102.68,0L64.49,23.51a12,12,0,0,0-17,17L58.65,51.62A91.58,91.58,0,0,0,36,112v40a92,92,0,0,0,184,0V112A91.58,91.58,0,0,0,197.35,51.62ZM196,112v4H60v-4a68,68,0,0,1,136,0ZM128,220a68.07,68.07,0,0,1-68-68V140H196v12A68.07,68.07,0,0,1,128,220ZM140,88a16,16,0,1,1,16,16A16,16,0,0,1,140,88ZM84,88a16,16,0,1,1,16,16A16,16,0,0,1,84,88Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
