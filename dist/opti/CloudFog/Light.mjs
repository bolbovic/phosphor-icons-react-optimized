var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as A } from "react";
import H from "../../lib/OptiBase.mjs";
const d = A((m, e) => {
  var h = m, { children: a } = h, t = c(h, ["children"]);
  return /* @__PURE__ */ f.createElement(H, Z({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M120,206H72a6,6,0,0,1,0-12h48a6,6,0,0,1,0,12Zm64-12H160a6,6,0,0,0,0,12h24a6,6,0,0,0,0-12Zm-24,32H104a6,6,0,0,0,0,12h56a6,6,0,0,0,0-12Zm70-126a74.09,74.09,0,0,1-74,74H76A50,50,0,1,1,86.2,75,74.08,74.08,0,0,1,230,100Zm-12,0A62.06,62.06,0,0,0,94,96.35a6,6,0,0,1-12-.7,75.84,75.84,0,0,1,1.07-9A38,38,0,1,0,76,162h80A62.07,62.07,0,0,0,218,100Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
