var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && V(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && V(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && d.call(a, o) && (e[o] = a[o]);
  return e;
};
import f, { forwardRef as s } from "react";
import H from "../../lib/OptiBase.mjs";
const Z = s((o, e) => {
  var m = o, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(H, l({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M184,44H72A20,20,0,0,0,52,64V192a20,20,0,0,0,20,20H184a20,20,0,0,0,20-20V64A20,20,0,0,0,184,44Zm-4,144H76V68H180ZM244,56V200a12,12,0,0,1-24,0V56a12,12,0,0,1,24,0ZM36,56V200a12,12,0,0,1-24,0V56a12,12,0,0,1,24,0Z" }));
});
Z.displayName = "Bold";
export {
  Z as Bold
};
