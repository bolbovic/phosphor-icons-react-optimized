var s = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var r = (a, e, m) => e in a ? s(a, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : a[e] = m, l = (a, e) => {
  for (var m in e || (e = {}))
    h.call(e, m) && r(a, m, e[m]);
  if (t)
    for (var m of t(e))
      o.call(e, m) && r(a, m, e[m]);
  return a;
};
var p = (a, e) => {
  var m = {};
  for (var H in a)
    h.call(a, H) && e.indexOf(H) < 0 && (m[H] = a[H]);
  if (a != null && t)
    for (var H of t(a))
      e.indexOf(H) < 0 && o.call(a, H) && (m[H] = a[H]);
  return m;
};
import f, { forwardRef as c } from "react";
import d from "../../lib/OptiBase.mjs";
const i = c((H, m) => {
  var Z = H, { children: a } = Z, e = p(Z, ["children"]);
  return /* @__PURE__ */ f.createElement(d, l({ ref: m }, e), a, /* @__PURE__ */ f.createElement("path", { d: "M80,96a8,8,0,0,1-8,8H24a8,8,0,0,1,0-16H72A8,8,0,0,1,80,96Zm-8,24H24a8,8,0,0,0,0,16H72a8,8,0,0,0,0-16Zm0,32H24a8,8,0,0,0,0,16H72a8,8,0,0,0,0-16Zm0,32H24a8,8,0,0,0,0,16H72a8,8,0,0,0,0-16Zm80-64H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Zm0,32H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Zm0,32H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Zm80-96H184a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16ZM184,72h48a8,8,0,0,0,0-16H184a8,8,0,0,0,0,16Zm48,48H184a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Zm0,32H184a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Zm0,32H184a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Z" }));
});
i.displayName = "Regular";
export {
  i as Regular,
  i as default
};
