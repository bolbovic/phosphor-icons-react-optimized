var l = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var V = (a, m, e) => m in a ? l(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, p = (a, m) => {
  for (var e in m || (m = {}))
    Z.call(m, e) && V(a, e, m[e]);
  if (t)
    for (var e of t(m))
      o.call(m, e) && V(a, e, m[e]);
  return a;
};
var A = (a, m) => {
  var e = {};
  for (var r in a)
    Z.call(a, r) && m.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      m.indexOf(r) < 0 && o.call(a, r) && (e[r] = a[r]);
  return e;
};
import h, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((r, e) => {
  var H = r, { children: a } = H, m = A(H, ["children"]);
  return /* @__PURE__ */ h.createElement(f, p({ ref: e }, m), a, /* @__PURE__ */ h.createElement("path", { d: "M152,40a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,40Zm-8,168H112a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16ZM208,32H184a8,8,0,0,0,0,16h24V72a8,8,0,0,0,16,0V48A16,16,0,0,0,208,32Zm8,72a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V112A8,8,0,0,0,216,104Zm0,72a8,8,0,0,0-8,8v24H184a8,8,0,0,0,0,16h24a16,16,0,0,0,16-16V184A8,8,0,0,0,216,176ZM40,152a8,8,0,0,0,8-8V112a8,8,0,0,0-16,0v32A8,8,0,0,0,40,152Zm32,56H48V184a8,8,0,0,0-16,0v24a16,16,0,0,0,16,16H72a8,8,0,0,0,0-16ZM72,32H48A16,16,0,0,0,32,48V72a8,8,0,0,0,16,0V48H72a8,8,0,0,0,0-16Z" }));
});
i.displayName = "Regular";
export {
  i as Regular
};
