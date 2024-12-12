var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && c(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && c(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as H } from "react";
import d from "../../lib/OptiBase.mjs";
const l = H((m, e) => {
  var o = m, { children: a } = o, t = Z(o, ["children"]);
  return /* @__PURE__ */ f.createElement(d, h({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M34,64a6,6,0,0,1,6-6H216a6,6,0,0,1,0,12H40A6,6,0,0,1,34,64Zm6,70h64a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12Zm80,52H40a6,6,0,0,0,0,12h80a6,6,0,0,0,0-12Zm126-42c0,35.3-49.22,60.32-51.32,61.37a6,6,0,0,1-5.36,0C187.22,204.32,138,179.3,138,144a30,30,0,0,1,54-18,30,30,0,0,1,54,18Zm-12,0a18,18,0,0,0-36,0,6,6,0,0,1-12,0,18,18,0,0,0-36,0c0,14.15,11.78,27,21.67,35.25A138.82,138.82,0,0,0,192,193.19a138,138,0,0,0,20.33-13.94C222.22,171,234,158.15,234,144Z" }));
});
l.displayName = "Light";
export {
  l as Light
};
