var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? i(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, s = (a, l) => {
  for (var e in l || (l = {}))
    p.call(l, e) && o(a, e, l[e]);
  if (r)
    for (var e of r(l))
      f.call(l, e) && o(a, e, l[e]);
  return a;
};
var c = (a, l) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      l.indexOf(t) < 0 && f.call(a, t) && (e[t] = a[t]);
  return e;
};
import d, { forwardRef as R } from "react";
import n from "../../lib/OptiBase.mjs";
const u = R((t, e) => {
  var m = t, { children: a } = m, l = c(m, ["children"]);
  return /* @__PURE__ */ d.createElement(n, s({ ref: e }, l), a, /* @__PURE__ */ d.createElement("path", { d: "M221.92,210.62l-160-176A8,8,0,0,0,50.08,45.38l70.84,77.93L59.2,169.6a8,8,0,1,0,9.6,12.8L120,144v80a8,8,0,0,0,12.8,6.4l50.83-38.12,26.45,29.1a8,8,0,1,0,11.84-10.76ZM136,208V144l11.73,8.8,25.08,27.59ZM120,71.63V32a8,8,0,0,1,12.8-6.4l64,48a8,8,0,0,1,0,12.8l-33.53,25.15a8,8,0,0,1-9.6-12.8l25-18.75L136,48V71.63a8,8,0,0,1-16,0Z" }));
});
u.displayName = "Regular";
export {
  u as Regular,
  u as default
};
