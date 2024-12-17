var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      l.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && l.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as L } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = L((m, e) => {
  var o = m, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, A({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M102,109.5v-72a6,6,0,0,0-8-5.66A102,102,0,0,0,27.7,146.59a6,6,0,0,0,8.9,4.11l62.4-36A6,6,0,0,0,102,109.5ZM90,106l-51.66,29.8Q38,131.91,38,128A90.1,90.1,0,0,1,90,46.42Zm38-80a6,6,0,0,0-6,6v93L42.2,171.46a6,6,0,0,0-2.15,8.22A102,102,0,1,0,128,26Zm0,192a90.48,90.48,0,0,1-74.38-39.31L131,133.61a6,6,0,0,0,3-5.19V38.2A90,90,0,0,1,128,218Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
