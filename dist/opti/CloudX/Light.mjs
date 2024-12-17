var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, L = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const n = s((m, e) => {
  var l = m, { children: a } = l, t = c(l, ["children"]);
  return /* @__PURE__ */ f.createElement(d, L({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M160,42A86.11,86.11,0,0,0,82.43,90.88,62,62,0,1,0,72,214h88a86,86,0,0,0,0-172Zm0,160H72a50,50,0,0,1,0-100,50.67,50.67,0,0,1,5.91.35A85.61,85.61,0,0,0,74,128a6,6,0,0,0,12,0,74,74,0,1,1,74,74Zm28.24-85.76L168.48,136l19.76,19.76a6,6,0,1,1-8.48,8.48L160,144.48l-19.76,19.76a6,6,0,0,1-8.48-8.48L151.52,136l-19.76-19.76a6,6,0,0,1,8.48-8.48L160,127.52l19.76-19.76a6,6,0,0,1,8.48,8.48Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
