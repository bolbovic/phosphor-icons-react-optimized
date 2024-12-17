var h = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, f = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && c(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && c(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import d, { forwardRef as l } from "react";
import n from "../../lib/OptiBase.mjs";
const C = l((r, e) => {
  var o = r, { children: a } = o, t = s(o, ["children"]);
  return /* @__PURE__ */ d.createElement(n, f({ ref: e }, t), a, /* @__PURE__ */ d.createElement("path", { d: "M172.53,49.06a252.86,252.86,0,0,0-41.09-38,6,6,0,0,0-6.88,0,252.86,252.86,0,0,0-41.09,38C56.34,80.26,42,113.09,42,144a86,86,0,0,0,172,0C214,113.09,199.66,80.26,172.53,49.06ZM128,218a74.09,74.09,0,0,1-74-74c0-59.62,59-108.93,74-120.51C143,35.07,202,84.38,202,144A74.09,74.09,0,0,1,128,218Zm53.92-65A55.58,55.58,0,0,1,137,197.92a7,7,0,0,1-1,.08,6,6,0,0,1-1-11.92c17.38-2.92,32.13-17.68,35.08-35.08a6,6,0,1,1,11.84,2Z" }));
});
C.displayName = "Light";
export {
  C as Light
};
