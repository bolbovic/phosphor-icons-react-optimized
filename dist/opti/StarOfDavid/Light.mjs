var H = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    Z.call(t, e) && l(a, e, t[e]);
  if (r)
    for (var e of r(t))
      o.call(t, e) && l(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    Z.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && o.call(a, m) && (e[m] = a[m]);
  return e;
};
import h, { forwardRef as M } from "react";
import c from "../../lib/OptiBase.mjs";
const f = M((m, e) => {
  var L = m, { children: a } = L, t = p(L, ["children"]);
  return /* @__PURE__ */ h.createElement(c, i({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M198.91,128l30.3-53A6,6,0,0,0,224,66H163.49L133.21,13a6,6,0,0,0-10.42,0L92.5,66H32a6,6,0,0,0-5.21,9l30.28,53L26.79,181A6,6,0,0,0,32,190H92.5l30.29,53a6,6,0,0,0,10.42,0l30.28-53H224a6,6,0,0,0,5.21-9Zm14.75-50L192,115.91,170.34,78Zm-28.57,50-28.56,50-57.07,0L70.9,128,99.46,78l57.07,0ZM128,28.09,149.67,66H106.32ZM42.34,78h43.3L64,115.91Zm0,99.92L64,140.09,85.64,178ZM128,227.91,106.32,190h43.35ZM170.34,178,192,140.09,213.66,178Z" }));
});
f.displayName = "Light";
export {
  f as Light
};
