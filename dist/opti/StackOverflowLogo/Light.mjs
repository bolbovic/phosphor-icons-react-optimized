var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      L.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && L.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as s } from "react";
import V from "../../lib/OptiBase.mjs";
const d = s((m, e) => {
  var o = m, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(V, Z({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M214,152.09V216a6,6,0,0,1-6,6H48a6,6,0,0,1-6-6V152.09a6,6,0,0,1,12,0V210H202V152.09a6,6,0,0,1,12,0Zm-126,30h80a6,6,0,1,0,0-12H88a6,6,0,1,0,0,12Zm5.4-52.93,77.27,20.67a6,6,0,1,0,3.11-11.57L96.5,117.54a6,6,0,1,0-3.1,11.58Zm18.93-49.74,69.28,40a6.05,6.05,0,0,0,3,.8,6,6,0,0,0,3-11.18L118.33,69a6,6,0,1,0-6,10.38Zm87.75,13.35a6,6,0,0,0,8.48-8.48L152,27.76a6,6,0,1,0-8.48,8.47Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
