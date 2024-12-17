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
import V, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const v = f((m, e) => {
  var o = m, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ V.createElement(s, h({ ref: e }, t), a, /* @__PURE__ */ V.createElement("path", { d: "M216,44H40A12,12,0,0,0,28,56V192a12,12,0,0,0,12,12H60v20a4,4,0,0,0,8,0V204H188v20a4,4,0,0,0,8,0V204h20a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44Zm0,152H40a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4v68H195.81a44,44,0,1,0,0,8H220v60A4,4,0,0,1,216,196Zm-52.7-72a12,12,0,1,0,0,8h24.47a36,36,0,1,1,0-8Z" }));
});
v.displayName = "Thin";
export {
  v as Thin
};
