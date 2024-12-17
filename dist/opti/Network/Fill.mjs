var H = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      V.call(t, e) && m(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var h in a)
    o.call(a, h) && t.indexOf(h) < 0 && (e[h] = a[h]);
  if (a != null && r)
    for (var h of r(a))
      t.indexOf(h) < 0 && V.call(a, h) && (e[h] = a[h]);
  return e;
};
import v, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((h, e) => {
  var l = h, { children: a } = l, t = p(l, ["children"]);
  return /* @__PURE__ */ v.createElement(f, i({ ref: e }, t), a, /* @__PURE__ */ v.createElement("path", { d: "M240,120a8,8,0,0,1-8,8H200v32h8a16,16,0,0,1,16,16v32a16,16,0,0,1-16,16H176a16,16,0,0,1-16-16V176a16,16,0,0,1,16-16h8V128H72v32h8a16,16,0,0,1,16,16v32a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V176a16,16,0,0,1,16-16h8V128H24a8,8,0,0,1,0-16h96V88h-8A16,16,0,0,1,96,72V40a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V72a16,16,0,0,1-16,16h-8v24h96A8,8,0,0,1,240,120Z" }));
});
s.displayName = "Fill";
export {
  s as Fill
};
