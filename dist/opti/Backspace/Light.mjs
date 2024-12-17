var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && l(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && l(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as s } from "react";
import H from "../../lib/OptiBase.mjs";
const d = s((m, e) => {
  var L = m, { children: a } = L, t = c(L, ["children"]);
  return /* @__PURE__ */ f.createElement(H, p({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M216,42H68.53a14,14,0,0,0-12,6.8L10.86,124.91a6,6,0,0,0,0,6.18L56.53,207.2a14,14,0,0,0,12,6.8H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42Zm2,158a2,2,0,0,1-2,2H68.53a2,2,0,0,1-1.71-1h0L23,128,66.82,55a2,2,0,0,1,1.71-1H216a2,2,0,0,1,2,2Zm-53.76-91.76L144.48,128l19.76,19.76a6,6,0,1,1-8.48,8.48L136,136.48l-19.76,19.76a6,6,0,0,1-8.48-8.48L127.52,128l-19.76-19.76a6,6,0,0,1,8.48-8.48L136,119.52l19.76-19.76a6,6,0,0,1,8.48,8.48Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
