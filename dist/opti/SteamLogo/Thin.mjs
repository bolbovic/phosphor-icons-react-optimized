var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && c(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && c(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const d = s((m, e) => {
  var o = m, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(A, l({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28ZM115.12,182.62l61.21-49.93a32,32,0,1,0-45-45L85.48,143.83,40.68,99a91.6,91.6,0,1,1-2.46,8.86l42.23,42.23a24,24,0,0,0,34.67,32.51Zm8.91-73.4A32,32,0,0,0,154.78,140L124,165.09c0-.36,0-.72,0-1.09a24,24,0,0,0-24-24c-.37,0-.73,0-1.09,0ZM156,132a24,24,0,1,1,24-24A24,24,0,0,1,156,132Zm-56,16a16,16,0,1,1-16,16A16,16,0,0,1,100,148Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
