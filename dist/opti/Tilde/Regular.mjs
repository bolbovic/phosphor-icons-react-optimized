var i = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, f = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && o(a, e, t[e]);
  if (c)
    for (var e of c(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var r in a)
    l.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && c)
    for (var r of c(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import d, { forwardRef as R } from "react";
import n from "../../lib/OptiBase.mjs";
const u = R((r, e) => {
  var m = r, { children: a } = m, t = s(m, ["children"]);
  return /* @__PURE__ */ d.createElement(n, f({ ref: e }, t), a, /* @__PURE__ */ d.createElement("path", { d: "M222.23,130.59c-14.51,18-28.84,27.6-43.8,29.17a43,43,0,0,1-4.5.24c-19.3,0-35.39-13.1-51-25.8-14.91-12.14-29-23.61-43.7-22-10.51,1.1-21.31,8.72-33,23.28a8,8,0,0,1-12.46-10c14.51-18,28.84-27.6,43.8-29.17,21.32-2.25,38.69,11.89,55.48,25.56,14.91,12.14,29,23.62,43.7,22,10.51-1.1,21.31-8.72,33-23.28a8,8,0,1,1,12.46,10Z" }));
});
u.displayName = "Regular";
export {
  u as Regular,
  u as default
};
