var V = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? V(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && h(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && h(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var H in a)
    o.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && m)
    for (var H of m(a))
      t.indexOf(H) < 0 && i.call(a, H) && (e[H] = a[H]);
  return e;
};
import v, { forwardRef as Z } from "react";
import c from "../../lib/OptiBase.mjs";
const f = Z((H, e) => {
  var r = H, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ v.createElement(c, l({ ref: e }, t), a, /* @__PURE__ */ v.createElement("path", { d: "M216,138H198V118h18a6,6,0,0,0,0-12H198V46a6,6,0,0,0-12,0v60H118.44L68.73,42.31A6,6,0,0,0,58,46v60H40a6,6,0,0,0,0,12H58v20H40a6,6,0,0,0,0,12H58v60a6,6,0,0,0,12,0V150h67.56l49.71,63.69A6,6,0,0,0,198,210V150h18a6,6,0,0,0,0-12Zm-30-20v20H143.42l-15.61-20ZM70,63.44,103.22,106H70ZM70,138V118h42.58l15.61,20Zm116,54.56L152.78,150H186Z" }));
});
f.displayName = "Light";
export {
  f as Light
};
