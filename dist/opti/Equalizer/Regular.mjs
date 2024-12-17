var f = Object.defineProperty;
var Z = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var t = (a, H, m) => H in a ? f(a, H, { enumerable: !0, configurable: !0, writable: !0, value: m }) : a[H] = m, p = (a, H) => {
  for (var m in H || (H = {}))
    h.call(H, m) && t(a, m, H[m]);
  if (Z)
    for (var m of Z(H))
      o.call(H, m) && t(a, m, H[m]);
  return a;
};
var l = (a, H) => {
  var m = {};
  for (var e in a)
    h.call(a, e) && H.indexOf(e) < 0 && (m[e] = a[e]);
  if (a != null && Z)
    for (var e of Z(a))
      H.indexOf(e) < 0 && o.call(a, e) && (m[e] = a[e]);
  return m;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const R = i((e, m) => {
  var r = e, { children: a } = r, H = l(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, p({ ref: m }, H), a, /* @__PURE__ */ c.createElement("path", { d: "M80,96a8,8,0,0,1-8,8H24a8,8,0,0,1,0-16H72A8,8,0,0,1,80,96Zm-8,24H24a8,8,0,0,0,0,16H72a8,8,0,0,0,0-16Zm0,32H24a8,8,0,0,0,0,16H72a8,8,0,0,0,0-16Zm0,32H24a8,8,0,0,0,0,16H72a8,8,0,0,0,0-16Zm80-64H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Zm0,32H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Zm0,32H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Zm80-96H184a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16ZM184,72h48a8,8,0,0,0,0-16H184a8,8,0,0,0,0,16Zm48,48H184a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Zm0,32H184a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Zm0,32H184a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Z" }));
});
R.displayName = "Regular";
export {
  R as Regular
};
