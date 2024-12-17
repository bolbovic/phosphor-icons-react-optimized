var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var i = (a, m, e) => m in a ? c(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, l = (a, m) => {
  for (var e in m || (m = {}))
    p.call(m, e) && i(a, e, m[e]);
  if (r)
    for (var e of r(m))
      h.call(m, e) && i(a, e, m[e]);
  return a;
};
var n = (a, m) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && h.call(a, t) && (e[t] = a[t]);
  return e;
};
import Z, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const A = f((t, e) => {
  var o = t, { children: a } = o, m = n(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, l({ ref: e }, m), a, /* @__PURE__ */ Z.createElement("path", { d: "M36,64a4,4,0,0,1,4-4H216a4,4,0,0,1,0,8H40A4,4,0,0,1,36,64Zm100,60H40a4,4,0,0,0,0,8h96a4,4,0,0,0,0-8Zm0,64H40a4,4,0,0,0,0,8h96a4,4,0,0,0,0-8Zm108-28a4,4,0,0,1-1.88,3.39l-64,40A4,4,0,0,1,176,204a4.06,4.06,0,0,1-1.94-.5A4,4,0,0,1,172,200V120a4,4,0,0,1,6.12-3.39l64,40A4,4,0,0,1,244,160Zm-11.55,0L180,127.22v65.56Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};
