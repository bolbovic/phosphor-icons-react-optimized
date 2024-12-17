var h = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var L = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && L(a, e, t[e]);
  if (m)
    for (var e of m(t))
      l.call(t, e) && L(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && l.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(A, p({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M246,208a6,6,0,0,1-6,6H192a6,6,0,0,1-4.8-9.6l43.17-57.56A18,18,0,1,0,199,130a6,6,0,1,1-11.31-4A30,30,0,1,1,240,154.06L204,202h36A6,6,0,0,1,246,208ZM147.93,51.47a6,6,0,0,0-8.46.6L92,106.84,44.53,52.07a6,6,0,1,0-9.06,7.86L84.06,116,35.47,172.07a6,6,0,1,0,9.06,7.86L92,125.16l47.47,54.77a6,6,0,0,0,9.06-7.86L99.94,116l48.59-56.07A6,6,0,0,0,147.93,51.47Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
