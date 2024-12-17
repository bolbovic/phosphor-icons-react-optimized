var A = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      n.call(t, e) && i(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && n.call(a, m) && (e[m] = a[m]);
  return e;
};
import s, { forwardRef as H } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = H((m, e) => {
  var o = m, { children: a } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ s.createElement(Z, c({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M216,44H40A12,12,0,0,0,28,56V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44Zm4,156a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4ZM76,84a8,8,0,1,1-8-8A8,8,0,0,1,76,84Zm40,0a8,8,0,1,1-8-8A8,8,0,0,1,116,84Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
