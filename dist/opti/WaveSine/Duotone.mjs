var l = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var p = (e, a, t) => a in e ? l(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, d = (e, a) => {
  for (var t in a || (a = {}))
    n.call(a, t) && p(e, t, a[t]);
  if (c)
    for (var t of c(a))
      i.call(a, t) && p(e, t, a[t]);
  return e;
};
var f = (e, a) => {
  var t = {};
  for (var o in e)
    n.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && c)
    for (var o of c(e))
      a.indexOf(o) < 0 && i.call(e, o) && (t[o] = e[o]);
  return t;
};
import r, { forwardRef as s } from "react";
import C from "../../lib/OptiBase.mjs";
const E = s((o, t) => {
  var m = o, { children: e } = m, a = f(m, ["children"]);
  return /* @__PURE__ */ r.createElement(C, d({ ref: t }, a), e, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M232,128c-52,110.85-78,55.43-104,0ZM24,128H128C102,72.57,76,17.15,24,128Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M239.24,131.4c-22,46.8-41.4,68.6-61.2,68.6-25.1,0-40.73-33.32-57.28-68.6C107.7,103.56,92.9,72,78,72c-16.4,0-36.31,37.21-46.72,59.4a8,8,0,0,1-14.48-6.8C38.71,77.8,58.16,56,78,56c25.1,0,40.73,33.32,57.28,68.6C148.3,152.44,163.1,184,178,184c16.4,0,36.31-37.21,46.72-59.4a8,8,0,0,1,14.48,6.8Z" }));
});
E.displayName = "Duotone";
export {
  E as Duotone
};
