var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && c(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && c(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && d.call(a, o) && (e[o] = a[o]);
  return e;
};
import h, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const Z = s((o, e) => {
  var m = o, { children: a } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ h.createElement(A, l({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M180,136a16,16,0,1,1-16-16A16,16,0,0,1,180,136ZM136,92a16,16,0,1,0-16,16A16,16,0,0,0,136,92Zm67.83-40.9A108,108,0,0,0,47.5,200a12,12,0,0,0,17.89-16,84,84,0,1,1,125.22,0,12,12,0,0,0,17.89,16,108,108,0,0,0-4.67-148.9ZM140,164h-4c-19.81,0-44-16.61-44-36a36.47,36.47,0,0,1,.5-6,12,12,0,0,0-23.67-4A60.67,60.67,0,0,0,68,128c0,16.1,8,31.46,22.49,43.25C103.58,181.9,120.17,188,136,188h4a8,8,0,0,1,0,16H100a32,32,0,0,0-32,32,12,12,0,0,0,24,0,8,8,0,0,1,8-8h40a32,32,0,0,0,0-64Z" }));
});
Z.displayName = "Bold";
export {
  Z as Bold
};
