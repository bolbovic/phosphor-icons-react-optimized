var h = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as s } from "react";
import L from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var m = r, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(L, V({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M110,48V208a6,6,0,0,1-12,0V134H38.49l21.75,21.76a6,6,0,1,1-8.48,8.48l-32-32a6,6,0,0,1,0-8.48l32-32a6,6,0,0,1,8.48,8.48L38.49,122H98V48a6,6,0,0,1,12,0Zm126.24,75.76-32-32a6,6,0,0,0-8.48,8.48L217.51,122H158V48a6,6,0,0,0-12,0V208a6,6,0,0,0,12,0V134h59.51l-21.75,21.76a6,6,0,1,0,8.48,8.48l32-32A6,6,0,0,0,236.24,123.76Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
