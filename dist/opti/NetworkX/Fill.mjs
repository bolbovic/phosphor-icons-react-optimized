var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var m = (a, l, e) => l in a ? f(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, p = (a, l) => {
  for (var e in l || (l = {}))
    o.call(l, e) && m(a, e, l[e]);
  if (r)
    for (var e of r(l))
      i.call(l, e) && m(a, e, l[e]);
  return a;
};
var V = (a, l) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      l.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as s } from "react";
import v from "../../lib/OptiBase.mjs";
const H = s((t, e) => {
  var h = t, { children: a } = h, l = V(h, ["children"]);
  return /* @__PURE__ */ c.createElement(v, p({ ref: e }, l), a, /* @__PURE__ */ c.createElement("path", { d: "M240,120a8,8,0,0,1-8,8H200v16a8,8,0,0,1-16,0V128H72v32h8a16,16,0,0,1,16,16v32a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V176a16,16,0,0,1,16-16h8V128H24a8,8,0,0,1,0-16h96V88h-8A16,16,0,0,1,96,72V40a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V72a16,16,0,0,1-16,16h-8v24h96A8,8,0,0,1,240,120Zm-18.34,42.34a8,8,0,0,0-11.32,0L192,180.69l-18.34-18.35a8,8,0,0,0-11.32,11.32L180.69,192l-18.35,18.34a8,8,0,0,0,11.32,11.32L192,203.31l18.34,18.35a8,8,0,0,0,11.32-11.32L203.31,192l18.35-18.34A8,8,0,0,0,221.66,162.34Z" }));
});
H.displayName = "Fill";
export {
  H as Fill
};
