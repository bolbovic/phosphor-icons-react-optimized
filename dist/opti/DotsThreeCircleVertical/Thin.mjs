var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (a, m, e) => m in a ? f(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, A = (a, m) => {
  for (var e in m || (m = {}))
    p.call(m, e) && i(a, e, m[e]);
  if (r)
    for (var e of r(m))
      n.call(m, e) && i(a, e, m[e]);
  return a;
};
var Z = (a, m) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && n.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((t, e) => {
  var o = t, { children: a } = o, m = Z(o, ["children"]);
  return /* @__PURE__ */ c.createElement(d, A({ ref: e }, m), a, /* @__PURE__ */ c.createElement("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm8-136a8,8,0,1,1-8-8A8,8,0,0,1,136,84Zm0,44a8,8,0,1,1-8-8A8,8,0,0,1,136,128Zm0,44a8,8,0,1,1-8-8A8,8,0,0,1,136,172Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
