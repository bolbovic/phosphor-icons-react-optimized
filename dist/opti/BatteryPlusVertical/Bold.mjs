var c = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && h(a, e, t[e]);
  if (o)
    for (var e of o(t))
      d.call(t, e) && h(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && d.call(a, m) && (e[m] = a[m]);
  return e;
};
import V, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((m, e) => {
  var r = m, { children: a } = r, t = H(r, ["children"]);
  return /* @__PURE__ */ V.createElement(i, l({ ref: e }, t), a, /* @__PURE__ */ V.createElement("path", { d: "M92,12A12,12,0,0,1,104,0h48a12,12,0,0,1,0,24H104A12,12,0,0,1,92,12ZM204,60V228a28,28,0,0,1-28,28H80a28,28,0,0,1-28-28V60A28,28,0,0,1,80,32h96A28,28,0,0,1,204,60Zm-24,0a4,4,0,0,0-4-4H80a4,4,0,0,0-4,4V228a4,4,0,0,0,4,4h96a4,4,0,0,0,4-4Zm-28,68H140V116a12,12,0,0,0-24,0v12H104a12,12,0,0,0,0,24h12v12a12,12,0,0,0,24,0V152h12a12,12,0,0,0,0-24Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
