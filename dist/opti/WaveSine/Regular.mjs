var R = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (e, r, a) => r in e ? R(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, f = (e, r) => {
  for (var a in r || (r = {}))
    p.call(r, a) && o(e, a, r[a]);
  if (c)
    for (var a of c(r))
      l.call(r, a) && o(e, a, r[a]);
  return e;
};
var i = (e, r) => {
  var a = {};
  for (var t in e)
    p.call(e, t) && r.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && c)
    for (var t of c(e))
      r.indexOf(t) < 0 && l.call(e, t) && (a[t] = e[t]);
  return a;
};
import s, { forwardRef as d } from "react";
import n from "../../lib/OptiBase.mjs";
const C = d((t, a) => {
  var m = t, { children: e } = m, r = i(m, ["children"]);
  return /* @__PURE__ */ s.createElement(n, f({ ref: a }, r), e, /* @__PURE__ */ s.createElement("path", { d: "M239.24,131.4c-22,46.8-41.4,68.6-61.2,68.6-25.1,0-40.73-33.32-57.28-68.6C107.7,103.56,92.9,72,78,72c-16.4,0-36.31,37.21-46.72,59.4a8,8,0,0,1-14.48-6.8C38.71,77.8,58.16,56,78,56c25.1,0,40.73,33.32,57.28,68.6C148.3,152.44,163.1,184,178,184c16.4,0,36.31-37.21,46.72-59.4a8,8,0,0,1,14.48,6.8Z" }));
});
C.displayName = "Regular";
export {
  C as Regular
};
