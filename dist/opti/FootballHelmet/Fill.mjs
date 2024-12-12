var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? f(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, A = (a, l) => {
  for (var e in l || (l = {}))
    i.call(l, e) && o(a, e, l[e]);
  if (r)
    for (var e of r(l))
      p.call(l, e) && o(a, e, l[e]);
  return a;
};
var H = (a, l) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = h((t, e) => {
  var m = t, { children: a } = m, l = H(m, ["children"]);
  return /* @__PURE__ */ c.createElement(s, A({ ref: e }, l), a, /* @__PURE__ */ c.createElement("path", { d: "M216,160H165.8l-7.09-24H216a8,8,0,0,0,8-8v-4A100,100,0,0,0,122.58,24C68.24,24.77,24,69.61,24,124A100,100,0,0,0,67.62,206.6a8,8,0,0,0,4.52,1.4H120a16,16,0,0,0,15.62-19.47,5.44,5.44,0,0,0-.15-.54l-3.56-12h21.93l10.79,36.53A16.1,16.1,0,0,0,180,224h36a16,16,0,0,0,16-16V176A16,16,0,0,0,216,160ZM84,176a12,12,0,1,1,12-12A12,12,0,0,1,84,176Zm43.16-16L120,136h22l7.09,24ZM216,208H180l-9.46-32H216Z" }));
});
Z.displayName = "Fill";
export {
  Z as Fill
};
