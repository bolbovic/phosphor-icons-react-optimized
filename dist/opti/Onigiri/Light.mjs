var h = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as s } from "react";
import L from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var l = r, { children: a } = l, t = c(l, ["children"]);
  return /* @__PURE__ */ f.createElement(L, H({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M229.82,147.6,174,51.67l-.09-.15a54,54,0,0,0-91.74,0l-.09.15L26.18,147.6A54,54,0,0,0,72.09,230H183.91a54,54,0,0,0,45.91-82.4ZM162,218H94V168a2,2,0,0,1,2-2h64a2,2,0,0,1,2,2Zm58.61-21.58A41.47,41.47,0,0,1,183.91,218H174V168a14,14,0,0,0-14-14H96a14,14,0,0,0-14,14v50H72.09a42,42,0,0,1-35.67-64.15l.08-.14L92.37,57.78a42,42,0,0,1,71.26,0l55.87,95.93.08.14A41.48,41.48,0,0,1,220.6,196.42Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
