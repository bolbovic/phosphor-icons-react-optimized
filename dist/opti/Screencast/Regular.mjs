var d = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (m)
    for (var e of m(t))
      f.call(t, e) && l(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && f.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as i } from "react";
import R from "../../lib/OptiBase.mjs";
const V = i((r, e) => {
  var o = r, { children: a } = o, t = A(o, ["children"]);
  return /* @__PURE__ */ c.createElement(R, s({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M232,56V200a16,16,0,0,1-16,16H144a8,8,0,0,1,0-16h72V56H40V96a8,8,0,0,1-16,0V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM32,184a8,8,0,0,0,0,16,8,8,0,0,1,8,8,8,8,0,0,0,16,0A24,24,0,0,0,32,184Zm0-32a8,8,0,0,0,0,16,40,40,0,0,1,40,40,8,8,0,0,0,16,0A56.06,56.06,0,0,0,32,152Zm0-32a8,8,0,0,0,0,16,72.08,72.08,0,0,1,72,72,8,8,0,0,0,16,0A88.1,88.1,0,0,0,32,120Z" }));
});
V.displayName = "Regular";
export {
  V as Regular,
  V as default
};
