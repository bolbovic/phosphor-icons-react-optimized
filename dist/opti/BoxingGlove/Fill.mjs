var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? s(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, L = (a, l) => {
  for (var e in l || (l = {}))
    i.call(l, e) && o(a, e, l[e]);
  if (r)
    for (var e of r(l))
      p.call(l, e) && o(a, e, l[e]);
  return a;
};
var c = (a, l) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as A } from "react";
import V from "../../lib/OptiBase.mjs";
const d = A((t, e) => {
  var m = t, { children: a } = m, l = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(V, L({ ref: e }, l), a, /* @__PURE__ */ f.createElement("path", { d: "M168,16H120A56,56,0,0,0,64,72v31.73A8.17,8.17,0,0,1,56.53,112,8,8,0,0,1,48,104V78.7a4,4,0,0,0-5.63-3.65A32,32,0,0,0,24,104v29.19a16.14,16.14,0,0,0,3.5,10q.3.36.63.69L64,179.34V216a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V177.12l15.38-53.84a16,16,0,0,0,.62-4.4V72A56,56,0,0,0,168,16Zm3.58,168.84a8,8,0,0,1-7.16,14.32L136,184.94l-28.42,14.22a8,8,0,1,1-7.16-14.32L118.11,176l-17.69-8.84a8,8,0,1,1,7.16-14.32L136,167.06l28.42-14.22a8,8,0,1,1,7.16,14.32L153.89,176Z" }));
});
d.displayName = "Fill";
export {
  d as Fill
};
