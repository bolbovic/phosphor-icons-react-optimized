var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import f, { forwardRef as V } from "react";
import d from "../../lib/OptiBase.mjs";
const n = V((l, e) => {
  var m = l, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(d, h({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M158.66,219.56A8,8,0,0,1,152,232H24a8,8,0,0,1-6.73-12.33l36-56a8,8,0,0,1,13.46,0l9.76,15.18,20.85-31.29a8,8,0,0,1,13.32,0ZM216,88V216a16,16,0,0,1-16,16h-8a8,8,0,0,1,0-16h8V96H152a8,8,0,0,1-8-8V40H56v88a8,8,0,0,1-16,0V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-56-8h28.69L160,51.31Z" }));
});
n.displayName = "Fill";
export {
  n as Fill
};
