var v = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? v(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, f = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && l(a, e, t[e]);
  if (H)
    for (var e of H(t))
      p.call(t, e) && l(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && H)
    for (var r of H(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as V } from "react";
import Z from "../../lib/OptiBase.mjs";
const c = V((r, e) => {
  var m = r, { children: a } = m, t = h(m, ["children"]);
  return /* @__PURE__ */ s.createElement(Z, f({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M216,136H200V120h16a8,8,0,0,0,0-16H200V46a8,8,0,0,0-16,0v58H119.42L70.31,41.08A8,8,0,0,0,56,46v58H40a8,8,0,0,0,0,16H56v16H40a8,8,0,0,0,0,16H56v58a8,8,0,0,0,16,0V152h64.58l49.11,62.92A8,8,0,0,0,192,218a7.8,7.8,0,0,0,2.6-.44A8,8,0,0,0,200,210V152h16a8,8,0,0,0,0-16Zm-32-16v16H144.39L131.9,120ZM72,69.25,99.12,104H72ZM72,136V120h39.61l12.49,16Zm112,50.75L156.88,152H184Z" }));
});
c.displayName = "Regular";
export {
  c as Regular,
  c as default
};
