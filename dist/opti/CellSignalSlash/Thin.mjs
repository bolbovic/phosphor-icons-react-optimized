var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      l.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && l.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const v = f((m, e) => {
  var V = m, { children: a } = V, t = n(V, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M84,152v48a4,4,0,0,1-8,0V152a4,4,0,0,1,8,0ZM40,188a4,4,0,0,0-4,4v8a4,4,0,0,0,8,0v-8A4,4,0,0,0,40,188Zm171,25.31L51,37.31A4,4,0,0,0,45,42.69l71,78.06V200a4,4,0,0,0,8,0V129.55l32,35.2V200a4,4,0,0,0,8,0V173.55l41,45.14a4,4,0,1,0,5.92-5.38Zm-51-93.68a4,4,0,0,0,4-4V72a4,4,0,0,0-8,0v43.63A4,4,0,0,0,160,119.63Zm40,44a4,4,0,0,0,4-4V32a4,4,0,0,0-8,0V159.63A4,4,0,0,0,200,163.63Z" }));
});
v.displayName = "Thin";
export {
  v as Thin
};
