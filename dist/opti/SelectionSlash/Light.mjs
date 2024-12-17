var V = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var Z = (a, t, e) => t in a ? V(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && Z(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && Z(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var m in a)
    h.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import H, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const l = c((m, e) => {
  var o = m, { children: a } = o, t = A(o, ["children"]);
  return /* @__PURE__ */ H.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ H.createElement("path", { d: "M106,40a6,6,0,0,1,6-6h32a6,6,0,0,1,0,12H112A6,6,0,0,1,106,40Zm38,170H112a6,6,0,0,0,0,12h32a6,6,0,0,0,0-12ZM208,34H184a6,6,0,0,0,0,12h24a2,2,0,0,1,2,2V72a6,6,0,0,0,12,0V48A14,14,0,0,0,208,34Zm8,72a6,6,0,0,0-6,6v32a6,6,0,0,0,12,0V112A6,6,0,0,0,216,106ZM40,150a6,6,0,0,0,6-6V112a6,6,0,0,0-12,0v32A6,6,0,0,0,40,150Zm32,60H48a2,2,0,0,1-2-2V184a6,6,0,0,0-12,0v24a14,14,0,0,0,14,14H72a6,6,0,0,0,0-12ZM52.44,36A6,6,0,0,0,43.56,44l160,176a6,6,0,0,0,8.88-8.08Z" }));
});
l.displayName = "Light";
export {
  l as Light
};
