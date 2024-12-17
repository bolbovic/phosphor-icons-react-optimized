var h = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      c.call(t, e) && i(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && c.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const n = s((r, e) => {
  var o = r, { children: a } = o, t = A(o, ["children"]);
  return /* @__PURE__ */ f.createElement(d, l({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M52.44,36A6,6,0,0,0,43.56,44l40.18,44.2c-.45.87-.9,1.75-1.32,2.64A62,62,0,1,0,72,214h88a85.23,85.23,0,0,0,32.35-6.3L203.56,220a6,6,0,0,0,8.88-8.08ZM160,202H72a50,50,0,1,1,5.9-99.64A86.25,86.25,0,0,0,74,128a6,6,0,0,0,12,0,73.92,73.92,0,0,1,6.44-30.2l91.22,100.34A73.65,73.65,0,0,1,160,202Zm86-74a85.85,85.85,0,0,1-21.85,57.27,6,6,0,0,1-4.47,2,6,6,0,0,1-4.47-10,74,74,0,0,0-99-108.92,6,6,0,1,1-7.11-9.67A86,86,0,0,1,246,128Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
