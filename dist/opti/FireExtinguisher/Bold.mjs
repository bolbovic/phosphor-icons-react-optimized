var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && V(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && V(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    l.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as s } from "react";
import v from "../../lib/OptiBase.mjs";
const A = s((m, e) => {
  var r = m, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(v, d({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M219.45,44.51,170.07,29.7,185,22.93A12,12,0,1,0,175,1.08l-41.78,19A84.09,84.09,0,0,0,52,104V208a12,12,0,0,0,24,0V180H92v52a20,20,0,0,0,20,20h48a20,20,0,0,0,20-20V104a44.08,44.08,0,0,0-32-42.32V48.13L212.55,67.5A11.81,11.81,0,0,0,216,68a12,12,0,0,0,3.45-23.49ZM76,156V104a60.1,60.1,0,0,1,48-58.79V61.68A44.06,44.06,0,0,0,92,104v52Zm40,72V180h40v48Zm40-124v52H116V104a20,20,0,0,1,40,0Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};
