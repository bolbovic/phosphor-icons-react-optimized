var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && r(a, e, t[e]);
  if (m)
    for (var e of m(t))
      Z.call(t, e) && r(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var l in a)
    o.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && Z.call(a, l) && (e[l] = a[l]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((l, e) => {
  var L = l, { children: a } = L, t = p(L, ["children"]);
  return /* @__PURE__ */ c.createElement(d, i({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M235.42,151.07,190.54,120l44.88-31.07a6,6,0,0,0,0-9.86l-52-36a6,6,0,0,0-6.84,0L128,76.7,79.42,43.07a6,6,0,0,0-6.84,0l-52,36a6,6,0,0,0,0,9.86L65.46,120,20.58,151.07a6,6,0,0,0,0,9.86l52,36a6,6,0,0,0,6.84,0L128,163.3l48.58,33.63a6,6,0,0,0,6.84,0l52-36a6,6,0,0,0,0-9.86ZM128,148.7,86.54,120,128,91.3,169.46,120Zm52-93.4L221.46,84,180,112.7,138.54,84Zm-104,0L117.46,84,76,112.7,34.54,84Zm0,129.4L34.54,156,76,127.3,117.46,156Zm104,0L138.54,156,180,127.3,221.46,156ZM156.82,208a6,6,0,0,1-1.51,8.35l-23.89,16.54a6,6,0,0,1-6.84,0l-23.89-16.54a6,6,0,0,1,6.83-9.86L128,220.7l20.48-14.17A6,6,0,0,1,156.82,208Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
