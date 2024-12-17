var n = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var h = (a, m, e) => m in a ? n(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, i = (a, m) => {
  for (var e in m || (m = {}))
    V.call(m, e) && h(a, e, m[e]);
  if (r)
    for (var e of r(m))
      o.call(m, e) && h(a, e, m[e]);
  return a;
};
var p = (a, m) => {
  var e = {};
  for (var t in a)
    V.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && o.call(a, t) && (e[t] = a[t]);
  return e;
};
import Z, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((t, e) => {
  var H = t, { children: a } = H, m = p(H, ["children"]);
  return /* @__PURE__ */ Z.createElement(f, i({ ref: e }, m), a, /* @__PURE__ */ Z.createElement("path", { d: "M216,52H40a4,4,0,0,0-4,4V208a12,12,0,0,0,12,12H88a12,12,0,0,0,12-12V156h56v20a12,12,0,0,0,12,12h40a12,12,0,0,0,12-12V56A4,4,0,0,0,216,52ZM92,208a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V124H92Zm0-92H44V60H92Zm64,32H100V60h56Zm56,28a4,4,0,0,1-4,4H168a4,4,0,0,1-4-4V124h48Zm0-60H164V60h48Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
