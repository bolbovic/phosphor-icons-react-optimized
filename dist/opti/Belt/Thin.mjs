var c = Object.defineProperty;
var h = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, v = Object.prototype.propertyIsEnumerable;
var m = (a, H, e) => H in a ? c(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, i = (a, H) => {
  for (var e in H || (H = {}))
    o.call(H, e) && m(a, e, H[e]);
  if (h)
    for (var e of h(H))
      v.call(H, e) && m(a, e, H[e]);
  return a;
};
var p = (a, H) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && H.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && h)
    for (var t of h(a))
      H.indexOf(t) < 0 && v.call(a, t) && (e[t] = a[t]);
  return e;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((t, e) => {
  var r = t, { children: a } = r, H = p(r, ["children"]);
  return /* @__PURE__ */ n.createElement(s, i({ ref: e }, H), a, /* @__PURE__ */ n.createElement("path", { d: "M248,164H188V92h60a4,4,0,0,0,0-8H187.3A12,12,0,0,0,176,76H112a12,12,0,0,0-11.3,8H60V80a4,4,0,0,0-8,0v4H8a4,4,0,0,0,0,8H52v72H8a4,4,0,0,0,0,8H52v4a4,4,0,0,0,8,0v-4h40.7a12,12,0,0,0,11.3,8h64a12,12,0,0,0,11.3-8H248a4,4,0,0,0,0-8ZM60,92h40v72H60Zm116,80H112a4,4,0,0,1-4-4V88a4,4,0,0,1,4-4h64a4,4,0,0,1,4,4v36H144a4,4,0,0,0,0,8h36v36A4,4,0,0,1,176,172Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
