var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && c(a, e, t[e]);
  if (r)
    for (var e of r(t))
      V.call(t, e) && c(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && V.call(a, o) && (e[o] = a[o]);
  return e;
};
import A, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const H = i((o, e) => {
  var m = o, { children: a } = m, t = l(m, ["children"]);
  return /* @__PURE__ */ A.createElement(s, d({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M248,160a40,40,0,1,0-52.64,37.94A28,28,0,0,1,168,220H144a28,28,0,0,1-28-28V154.9c31.73-5.78,56-34.09,56-67.73V40a12,12,0,0,0-12-12H136a12,12,0,0,0,0,24h12V87.17c0,24.4-19.47,44.52-43.41,44.83A44,44,0,0,1,60,88V52H72a12,12,0,0,0,0-24H48A12,12,0,0,0,36,40V88a68,68,0,0,0,56,66.93V192a52.06,52.06,0,0,0,52,52h24a52.06,52.06,0,0,0,51.61-45.72A40.08,40.08,0,0,0,248,160Zm-40,16a16,16,0,1,1,16-16A16,16,0,0,1,208,176Z" }));
});
H.displayName = "Bold";
export {
  H as Bold
};
