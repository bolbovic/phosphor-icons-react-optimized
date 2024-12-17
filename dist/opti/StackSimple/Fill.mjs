var n = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var p = (e, l, a) => l in e ? n(e, l, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[l] = a, d = (e, l) => {
  for (var a in l || (l = {}))
    i.call(l, a) && p(e, a, l[a]);
  if (r)
    for (var a of r(l))
      c.call(l, a) && p(e, a, l[a]);
  return e;
};
var f = (e, l) => {
  var a = {};
  for (var t in e)
    i.call(e, t) && l.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && r)
    for (var t of r(e))
      l.indexOf(t) < 0 && c.call(e, t) && (a[t] = e[t]);
  return a;
};
import m, { forwardRef as s } from "react";
import E from "../../lib/OptiBase.mjs";
const h = s((t, a) => {
  var o = t, { children: e } = o, l = f(o, ["children"]);
  return /* @__PURE__ */ m.createElement(E, d({ ref: a }, l), e, /* @__PURE__ */ m.createElement("path", { d: "M12,111l112,64a8,8,0,0,0,7.94,0l112-64a8,8,0,0,0,0-13.9l-112-64a8,8,0,0,0-7.94,0l-112,64A8,8,0,0,0,12,111Z" }), /* @__PURE__ */ m.createElement("path", { d: "M236,137.05,128,198.79,20,137.05A8,8,0,1,0,12,151l112,64a8,8,0,0,0,7.94,0l112-64a8,8,0,1,0-7.94-13.9Z" }));
});
h.displayName = "Fill";
export {
  h as Fill
};
