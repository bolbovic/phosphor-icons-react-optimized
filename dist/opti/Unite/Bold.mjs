var f = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var r = (a, m, e) => m in a ? f(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, p = (a, m) => {
  for (var e in m || (m = {}))
    A.call(m, e) && r(a, e, m[e]);
  if (t)
    for (var e of t(m))
      Z.call(m, e) && r(a, e, m[e]);
  return a;
};
var d = (a, m) => {
  var e = {};
  for (var l in a)
    A.call(a, l) && m.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && t)
    for (var l of t(a))
      m.indexOf(l) < 0 && Z.call(a, l) && (e[l] = a[l]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const M = i((l, e) => {
  var o = l, { children: a } = o, m = d(o, ["children"]);
  return /* @__PURE__ */ c.createElement(s, p({ ref: e }, m), a, /* @__PURE__ */ c.createElement("path", { d: "M178,78A84,84,0,1,0,78,178,84,84,0,1,0,178,78Zm42,82a60.75,60.75,0,0,1-.38,6.65l-44-44a83.31,83.31,0,0,0,4-19.34A60.09,60.09,0,0,1,220,160Zm-74-30.94L126.94,110a59.57,59.57,0,0,1,28.9-9.81A59.57,59.57,0,0,1,146,129.06ZM110,126.94,129.06,146a59.57,59.57,0,0,1-28.9,9.81A59.57,59.57,0,0,1,110,126.94Zm42.7-50.6a83.31,83.31,0,0,0-19.34,4l-44-44A60.75,60.75,0,0,1,96,36,60.09,60.09,0,0,1,152.67,76.34ZM64.19,45.16l46.73,46.73a85,85,0,0,0-19,19L45.16,64.19A60.45,60.45,0,0,1,64.19,45.16ZM36,96a60.75,60.75,0,0,1,.38-6.65l44,44a83.31,83.31,0,0,0-4,19.34A60.09,60.09,0,0,1,36,96Zm67.33,83.66a83.31,83.31,0,0,0,19.34-4l44,44A60.75,60.75,0,0,1,160,220,60.09,60.09,0,0,1,103.33,179.66Zm88.48,31.18-46.73-46.73a85,85,0,0,0,19-19l46.73,46.73A60.45,60.45,0,0,1,191.81,210.84Z" }));
});
M.displayName = "Bold";
export {
  M as Bold
};
