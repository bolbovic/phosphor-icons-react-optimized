var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && H(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && H(a, e, t[e]);
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
import Z, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((m, e) => {
  var o = m, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, h({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M100,148a24,24,0,0,0-24-24,4,4,0,0,1-3.28-6.29L96.32,84H56a4,4,0,0,1,0-8h48a4,4,0,0,1,3.28,6.29L83.12,116.8a32,32,0,1,1-30,53.6,4,4,0,1,1,5.72-5.6A24,24,0,0,0,100,148Zm60-72a52,52,0,0,1,0,104H136a4,4,0,0,1-4-4V80a4,4,0,0,1,4-4Zm0,8H140v88h20a44,44,0,0,0,0-88ZM32,52H224a4,4,0,0,0,0-8H32a4,4,0,0,0,0,8ZM224,204H32a4,4,0,0,0,0,8H224a4,4,0,0,0,0-8Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
