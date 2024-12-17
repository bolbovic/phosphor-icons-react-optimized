var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      h.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && h.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as V } from "react";
import d from "../../lib/OptiBase.mjs";
const l = V((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(d, H({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M46,46V210H80a6,6,0,0,1,0,12H40a6,6,0,0,1-6-6V40a6,6,0,0,1,6-6H80a6,6,0,0,1,0,12ZM216,34H176a6,6,0,0,0,0,12h34V210H176a6,6,0,0,0,0,12h40a6,6,0,0,0,6-6V40A6,6,0,0,0,216,34Z" }));
});
l.displayName = "Light";
export {
  l as Light
};
