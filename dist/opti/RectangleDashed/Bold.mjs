var h = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var H = (a, m, e) => m in a ? h(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, A = (a, m) => {
  for (var e in m || (m = {}))
    V.call(m, e) && H(a, e, m[e]);
  if (o)
    for (var e of o(m))
      Z.call(m, e) && H(a, e, m[e]);
  return a;
};
var p = (a, m) => {
  var e = {};
  for (var t in a)
    V.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      m.indexOf(t) < 0 && Z.call(a, t) && (e[t] = a[t]);
  return e;
};
import d, { forwardRef as l } from "react";
import c from "../../lib/OptiBase.mjs";
const f = l((t, e) => {
  var r = t, { children: a } = r, m = p(r, ["children"]);
  return /* @__PURE__ */ d.createElement(c, A({ ref: e }, m), a, /* @__PURE__ */ d.createElement("path", { d: "M84,48A12,12,0,0,1,72,60H44V72a12,12,0,0,1-24,0V56A20,20,0,0,1,40,36H72A12,12,0,0,1,84,48ZM32,156a12,12,0,0,0,12-12V112a12,12,0,0,0-24,0v32A12,12,0,0,0,32,156Zm40,40H44V184a12,12,0,0,0-24,0v16a20,20,0,0,0,20,20H72a12,12,0,0,0,0-24Zm72,0H112a12,12,0,0,0,0,24h32a12,12,0,0,0,0-24Zm80-24a12,12,0,0,0-12,12v12H184a12,12,0,0,0,0,24h32a20,20,0,0,0,20-20V184A12,12,0,0,0,224,172Zm0-72a12,12,0,0,0-12,12v32a12,12,0,0,0,24,0V112A12,12,0,0,0,224,100Zm-8-64H184a12,12,0,0,0,0,24h28V72a12,12,0,0,0,24,0V56A20,20,0,0,0,216,36Zm-72,0H112a12,12,0,0,0,0,24h32a12,12,0,0,0,0-24Z" }));
});
f.displayName = "Bold";
export {
  f as Bold
};
