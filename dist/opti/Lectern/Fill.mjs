var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
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
import f, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const n = s((l, e) => {
  var m = l, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(d, H({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M246.3,120.84l-40-80A15.92,15.92,0,0,0,192,32H64A15.92,15.92,0,0,0,49.7,40.84l-40,80A16,16,0,0,0,24,144h96v64H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V144h96a16,16,0,0,0,14.31-23.16ZM192,120H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Z" }));
});
n.displayName = "Fill";
export {
  n as Fill
};
