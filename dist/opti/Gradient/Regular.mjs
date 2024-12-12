var s = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var Z = (a, H, e) => H in a ? s(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, l = (a, H) => {
  for (var e in H || (H = {}))
    h.call(H, e) && Z(a, e, H[e]);
  if (t)
    for (var e of t(H))
      o.call(H, e) && Z(a, e, H[e]);
  return a;
};
var p = (a, H) => {
  var e = {};
  for (var m in a)
    h.call(a, m) && H.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && t)
    for (var m of t(a))
      H.indexOf(m) < 0 && o.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as M } from "react";
import c from "../../lib/OptiBase.mjs";
const d = M((m, e) => {
  var r = m, { children: a } = r, H = p(r, ["children"]);
  return /* @__PURE__ */ f.createElement(c, l({ ref: e }, H), a, /* @__PURE__ */ f.createElement("path", { d: "M24,104a8,8,0,0,1,8-8h80a8,8,0,0,1,0,16H32A8,8,0,0,1,24,104Zm200-8H144a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16ZM72,136H32a8,8,0,0,0,0,16H72a8,8,0,0,0,0-16Zm152,0H184a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16ZM96,144a8,8,0,0,0,8,8h48a8,8,0,0,0,0-16H104A8,8,0,0,0,96,144ZM56,176H32a8,8,0,0,0,0,16H56a8,8,0,0,0,0-16Zm56,0H88a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Zm56,0H144a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Zm56,0H200a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16ZM32,72H224a8,8,0,0,0,0-16H32a8,8,0,0,0,0,16Z" }));
});
d.displayName = "Regular";
export {
  d as Regular,
  d as default
};
