var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var i = (a, m, e) => m in a ? s(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, n = (a, m) => {
  for (var e in m || (m = {}))
    p.call(m, e) && i(a, e, m[e]);
  if (r)
    for (var e of r(m))
      Z.call(m, e) && i(a, e, m[e]);
  return a;
};
var c = (a, m) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && Z.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as A } from "react";
import d from "../../lib/OptiBase.mjs";
const h = A((t, e) => {
  var o = t, { children: a } = o, m = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(d, n({ ref: e }, m), a, /* @__PURE__ */ f.createElement("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm0-152a60.07,60.07,0,0,0-60,60,4,4,0,0,1-8,0,68.07,68.07,0,0,1,68-68,4,4,0,0,1,0,8Zm68,60a68.07,68.07,0,0,1-68,68,4,4,0,0,1,0-8,60.07,60.07,0,0,0,60-60,4,4,0,0,1,8,0Zm-40,0a28,28,0,1,0-28,28A28,28,0,0,0,156,128Zm-48,0a20,20,0,1,1,20,20A20,20,0,0,1,108,128Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
