var c = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var m = (a, e, l) => e in a ? c(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, d = (a, e) => {
  for (var l in e || (e = {}))
    p.call(e, l) && m(a, l, e[l]);
  if (o)
    for (var l of o(e))
      H.call(e, l) && m(a, l, e[l]);
  return a;
};
var M = (a, e) => {
  var l = {};
  for (var t in a)
    p.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      e.indexOf(t) < 0 && H.call(a, t) && (l[t] = a[t]);
  return l;
};
import Z, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((t, l) => {
  var r = t, { children: a } = r, e = M(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(i, d({ ref: l }, e), a, /* @__PURE__ */ Z.createElement("path", { d: "M238.16,113.89l-96-96a20,20,0,0,0-28.22,0l-96,96.05a20,20,0,0,0,0,28.22l96.05,96a20,20,0,0,0,28.22,0l96-96a20,20,0,0,0,0-28.22ZM128,37.68,174.32,84H160a12,12,0,0,0-8.49,3.51L128,111,104.49,87.51A12,12,0,0,0,96,84H81.68ZM57.68,108H91l20,20L91,148H57.68l-20-20ZM128,218.32,81.68,172H96a12,12,0,0,0,8.49-3.51L128,145l23.51,23.52A12,12,0,0,0,160,172h14.32ZM198.32,148H165l-20-20,20-20h33.35l20,20Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
