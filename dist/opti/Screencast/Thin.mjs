var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      n.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && n.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as s } from "react";
import V from "../../lib/OptiBase.mjs";
const Z = s((m, e) => {
  var o = m, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(V, A({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M228,56V200a12,12,0,0,1-12,12H144a4,4,0,0,1,0-8h72a4,4,0,0,0,4-4V56a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4V96a4,4,0,0,1-8,0V56A12,12,0,0,1,40,44H216A12,12,0,0,1,228,56ZM32,188a4,4,0,0,0,0,8,12,12,0,0,1,12,12,4,4,0,0,0,8,0A20,20,0,0,0,32,188Zm0-32a4,4,0,0,0,0,8,44.05,44.05,0,0,1,44,44,4,4,0,0,0,8,0A52.06,52.06,0,0,0,32,156Zm0-32a4,4,0,0,0,0,8,76.08,76.08,0,0,1,76,76,4,4,0,0,0,8,0A84.09,84.09,0,0,0,32,124Z" }));
});
Z.displayName = "Thin";
export {
  Z as Thin
};
