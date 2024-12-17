var Z = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && p(a, e, t[e]);
  if (o)
    for (var e of o(t))
      H.call(t, e) && p(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var V in a)
    l.call(a, V) && t.indexOf(V) < 0 && (e[V] = a[V]);
  if (a != null && o)
    for (var V of o(a))
      t.indexOf(V) < 0 && H.call(a, V) && (e[V] = a[V]);
  return e;
};
import m, { forwardRef as i } from "react";
import d from "../../lib/OptiBase.mjs";
const f = i((V, e) => {
  var r = V, { children: a } = r, t = n(r, ["children"]);
  return /* @__PURE__ */ m.createElement(d, c({ ref: e }, t), a, /* @__PURE__ */ m.createElement("path", { d: "M56,48V208H200V48Zm72,120-24-40,24-40,24,40Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M200,16a8,8,0,0,0-8,8V40H160V24a8,8,0,0,0-16,0V40H112V24a8,8,0,0,0-16,0V40H64V24a8,8,0,0,0-16,0V232a8,8,0,0,0,16,0V216H96v16a8,8,0,0,0,16,0V216h32v16a8,8,0,0,0,16,0V216h32v16a8,8,0,0,0,16,0V24A8,8,0,0,0,200,16Zm-8,184H64V56H192Zm-70.86-27.88a8,8,0,0,0,13.72,0l24-40a8,8,0,0,0,0-8.24l-24-40a8,8,0,0,0-13.72,0l-24,40a8,8,0,0,0,0,8.24ZM128,103.55,142.67,128,128,152.45,113.33,128Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
