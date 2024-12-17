var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && h(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && h(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import A, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const l = s((r, e) => {
  var o = r, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ A.createElement(d, c({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M168,36H88A52.06,52.06,0,0,0,36,88v80a52.06,52.06,0,0,0,52,52h48a3.83,3.83,0,0,0,1.26-.21c25.46-8.48,74.05-57.07,82.53-82.53A3.83,3.83,0,0,0,220,136V88A52.06,52.06,0,0,0,168,36ZM44,168V88A44.05,44.05,0,0,1,88,44h80a44.05,44.05,0,0,1,44,44v44H184a52.06,52.06,0,0,0-52,52v28H88A44.05,44.05,0,0,1,44,168Zm96,42V184a44.05,44.05,0,0,1,44-44h26C198.9,162.23,162.23,198.9,140,210Z" }));
});
l.displayName = "Thin";
export {
  l as Thin
};
