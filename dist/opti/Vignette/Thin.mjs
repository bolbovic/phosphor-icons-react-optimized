var H = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
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
import f, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const h = Z((m, e) => {
  var o = m, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ f.createElement(d, s({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M216,44H40A12,12,0,0,0,28,56V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44Zm4,156a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4ZM128,76c-37.5,0-68,23.33-68,52s30.5,52,68,52,68-23.33,68-52S165.5,76,128,76Zm0,96c-33.08,0-60-19.74-60-44s26.92-44,60-44,60,19.74,60,44S161.08,172,128,172Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
