var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && V(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && V(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((m, e) => {
  var H = m, { children: a } = H, t = h(H, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M208,34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34Zm-30,76V210H134V110ZM122,210H78V110h44Zm88-2a2,2,0,0,1-2,2H190V104a6,6,0,0,0-6-6H72a6,6,0,0,0-6,6V210H48a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2ZM150,72a6,6,0,0,1-6,6H112a6,6,0,0,1,0-12h32A6,6,0,0,1,150,72Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
