var Z = Object.defineProperty;
var a = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var c = (e, m, t) => m in e ? Z(e, m, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[m] = t, p = (e, m) => {
  for (var t in m || (m = {}))
    o.call(m, t) && c(e, t, m[t]);
  if (a)
    for (var t of a(m))
      i.call(m, t) && c(e, t, m[t]);
  return e;
};
var f = (e, m) => {
  var t = {};
  for (var s in e)
    o.call(e, s) && m.indexOf(s) < 0 && (t[s] = e[s]);
  if (e != null && a)
    for (var s of a(e))
      m.indexOf(s) < 0 && i.call(e, s) && (t[s] = e[s]);
  return t;
};
import C, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const l = d((s, t) => {
  var r = s, { children: e } = r, m = f(r, ["children"]);
  return /* @__PURE__ */ C.createElement(h, p({ ref: t }, m), e, /* @__PURE__ */ C.createElement("path", { d: "M128,26C75.29,26,34,49.72,34,80v96c0,30.28,41.29,54,94,54s94-23.72,94-54V80C222,49.72,180.71,26,128,26Zm0,12c44.45,0,82,19.23,82,42s-37.55,42-82,42S46,102.77,46,80,83.55,38,128,38Zm82,138c0,22.77-37.55,42-82,42s-82-19.23-82-42V154.79C62,171.16,92.37,182,128,182s66-10.84,82-27.21Zm0-48c0,22.77-37.55,42-82,42s-82-19.23-82-42V106.79C62,123.16,92.37,134,128,134s66-10.84,82-27.21Z" }));
});
l.displayName = "Light";
export {
  l as Light
};
