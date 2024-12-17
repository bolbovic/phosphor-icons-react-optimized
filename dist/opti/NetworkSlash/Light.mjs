var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
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
import c, { forwardRef as l } from "react";
import s from "../../lib/OptiBase.mjs";
const v = l((H, e) => {
  var m = H, { children: a } = m, t = p(m, ["children"]);
  return /* @__PURE__ */ c.createElement(s, i({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M98,54V40a14,14,0,0,1,14-14h32a14,14,0,0,1,14,14V72a14,14,0,0,1-14,14H127.61a6,6,0,0,1,0-12H144a2,2,0,0,0,2-2V40a2,2,0,0,0-2-2H112a2,2,0,0,0-2,2V54a6,6,0,0,1-12,0ZM212.44,212a6,6,0,0,1-8.88,8.08l-85.49-94H70v36H80a14,14,0,0,1,14,14v32a14,14,0,0,1-14,14H48a14,14,0,0,1-14-14V176a14,14,0,0,1,14-14H58V126H24a6,6,0,0,1,0-12h83.16L43.56,44A6,6,0,0,1,52.44,36ZM80,174H48a2,2,0,0,0-2,2v32a2,2,0,0,0,2,2H80a2,2,0,0,0,2-2V176A2,2,0,0,0,80,174Zm152-60H164a6,6,0,0,0,0,12h22v24.83a6,6,0,1,0,12,0V126h34a6,6,0,0,0,0-12Z" }));
});
v.displayName = "Light";
export {
  v as Light
};
