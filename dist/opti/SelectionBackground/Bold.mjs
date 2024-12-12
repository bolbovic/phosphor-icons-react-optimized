var v = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var h = (a, m, e) => m in a ? v(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, V = (a, m) => {
  for (var e in m || (m = {}))
    Z.call(m, e) && h(a, e, m[e]);
  if (o)
    for (var e of o(m))
      p.call(m, e) && h(a, e, m[e]);
  return a;
};
var d = (a, m) => {
  var e = {};
  for (var t in a)
    Z.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      m.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import l, { forwardRef as H } from "react";
import c from "../../lib/OptiBase.mjs";
const f = H((t, e) => {
  var r = t, { children: a } = r, m = d(r, ["children"]);
  return /* @__PURE__ */ l.createElement(c, V({ ref: e }, m), a, /* @__PURE__ */ l.createElement("path", { d: "M156,80H48a20,20,0,0,0-20,20V208a20,20,0,0,0,20,20H156a20,20,0,0,0,20-20V100A20,20,0,0,0,156,80Zm-4,124H52V104H152ZM132,40a12,12,0,0,1,12-12h16a12,12,0,0,1,0,24H144A12,12,0,0,1,132,40Zm96,8v8a12,12,0,0,1-24,0V52h-4a12,12,0,0,1,0-24h8A20,20,0,0,1,228,48Zm0,48v16a12,12,0,0,1-24,0V96a12,12,0,0,1,24,0Zm0,56v8a20,20,0,0,1-20,20h-8a12,12,0,0,1,0-24h4v-4a12,12,0,0,1,24,0ZM76,56V48A20,20,0,0,1,96,28h8a12,12,0,0,1,0,24h-4v4a12,12,0,0,1-24,0Z" }));
});
f.displayName = "Bold";
export {
  f as Bold
};
