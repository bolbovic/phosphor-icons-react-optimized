var V = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var H = (a, m, e) => m in a ? V(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, v = (a, m) => {
  for (var e in m || (m = {}))
    Z.call(m, e) && H(a, e, m[e]);
  if (o)
    for (var e of o(m))
      p.call(m, e) && H(a, e, m[e]);
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
import l, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((t, e) => {
  var r = t, { children: a } = r, m = d(r, ["children"]);
  return /* @__PURE__ */ l.createElement(f, v({ ref: e }, m), a, /* @__PURE__ */ l.createElement("path", { d: "M228,160V144a100.17,100.17,0,0,0-70.52-95.56,32,32,0,1,0-59,0A100.17,100.17,0,0,0,28,144v16a20,20,0,0,0-8,16v32a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V176A20,20,0,0,0,228,160ZM120,36a8,8,0,1,1,8,8A8,8,0,0,1,120,36Zm8,32a76.08,76.08,0,0,1,76,76v12H52V144A76.08,76.08,0,0,1,128,68ZM116,180v24H84V180Zm24,0h32v24H140Zm-96,0H60v24H44Zm168,24H196V180h16Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
