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
  return /* @__PURE__ */ d.createElement(n, s({ ref: e }, l), a, /* @__PURE__ */ d.createElement("path", { d: "M225.56,87.56,137.64,19.25l-.18-.14a15.93,15.93,0,0,0-18.92,0l-.18.14L30.44,87.56a16,16,0,0,0-5.7,17.63l32,107.54.06.17A15.94,15.94,0,0,0,72,224H184a15.94,15.94,0,0,0,15.23-11.1l.06-.17,32-107.54A16,16,0,0,0,225.56,87.56Zm-9.62,13L184,208H72l-32-107.44-.06-.17h0l.18-.14L128,32l87.82,68.23.18.14Z" }));
});
u.displayName = "Regular";
export {
  u as Regular,
  u as default
};
