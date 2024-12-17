var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      n.call(t, e) && i(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && n.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((m, e) => {
  var o = m, { children: a } = o, t = Z(o, ["children"]);
  return /* @__PURE__ */ c.createElement(d, A({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28ZM36,128a92.1,92.1,0,0,1,92-92,44,44,0,0,1,0,88,52,52,0,0,0-37.44,88A92.14,92.14,0,0,1,36,128Zm92,92a44,44,0,0,1,0-88,52,52,0,0,0,37.44-88A92,92,0,0,1,128,220Zm8-44a8,8,0,1,1-8-8A8,8,0,0,1,136,176ZM120,80a8,8,0,1,1,8,8A8,8,0,0,1,120,80Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
