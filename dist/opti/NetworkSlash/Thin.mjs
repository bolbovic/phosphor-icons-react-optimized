var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && V(a, e, t[e]);
  if (r)
    for (var e of r(t))
      o.call(t, e) && V(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var H in a)
    h.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && r)
    for (var H of r(a))
      t.indexOf(H) < 0 && o.call(a, H) && (e[H] = a[H]);
  return e;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const v = f((H, e) => {
  var m = H, { children: a } = m, t = p(m, ["children"]);
  return /* @__PURE__ */ n.createElement(s, i({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M100,54V40a12,12,0,0,1,12-12h32a12,12,0,0,1,12,12V72a12,12,0,0,1-12,12H127.61a4,4,0,0,1,0-8H144a4,4,0,0,0,4-4V40a4,4,0,0,0-4-4H112a4,4,0,0,0-4,4V54a4,4,0,0,1-8,0ZM211,213.31a4,4,0,1,1-5.92,5.38L119,124H68v40H80a12,12,0,0,1,12,12v32a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V176a12,12,0,0,1,12-12H60V124H24a4,4,0,0,1,0-8h87.68L45,42.69A4,4,0,0,1,51,37.31ZM80,172H48a4,4,0,0,0-4,4v32a4,4,0,0,0,4,4H80a4,4,0,0,0,4-4V176A4,4,0,0,0,80,172Zm152-56H164a4,4,0,0,0,0,8h24v26.83a4,4,0,1,0,8,0V124h36a4,4,0,0,0,0-8Z" }));
});
v.displayName = "Thin";
export {
  v as Thin
};
