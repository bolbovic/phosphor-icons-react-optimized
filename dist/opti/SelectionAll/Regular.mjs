var p = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var Z = (a, m, e) => m in a ? p(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, h = (a, m) => {
  for (var e in m || (m = {}))
    V.call(m, e) && Z(a, e, m[e]);
  if (r)
    for (var e of r(m))
      A.call(m, e) && Z(a, e, m[e]);
  return a;
};
var o = (a, m) => {
  var e = {};
  for (var t in a)
    V.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && A.call(a, t) && (e[t] = a[t]);
  return e;
};
import l, { forwardRef as v } from "react";
import f from "../../lib/OptiBase.mjs";
const s = v((t, e) => {
  var H = t, { children: a } = H, m = o(H, ["children"]);
  return /* @__PURE__ */ l.createElement(f, h({ ref: e }, m), a, /* @__PURE__ */ l.createElement("path", { d: "M104,40a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,40Zm40,168H112a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16ZM208,32H184a8,8,0,0,0,0,16h24V72a8,8,0,0,0,16,0V48A16,16,0,0,0,208,32Zm8,72a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V112A8,8,0,0,0,216,104Zm0,72a8,8,0,0,0-8,8v24H184a8,8,0,0,0,0,16h24a16,16,0,0,0,16-16V184A8,8,0,0,0,216,176ZM40,152a8,8,0,0,0,8-8V112a8,8,0,0,0-16,0v32A8,8,0,0,0,40,152Zm32,56H48V184a8,8,0,0,0-16,0v24a16,16,0,0,0,16,16H72a8,8,0,0,0,0-16ZM40,80a8,8,0,0,0,8-8V48H72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,48V72A8,8,0,0,0,40,80ZM176,184H80a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8v96A8,8,0,0,1,176,184Zm-8-96H88v80h80Z" }));
});
s.displayName = "Regular";
export {
  s as Regular,
  s as default
};
