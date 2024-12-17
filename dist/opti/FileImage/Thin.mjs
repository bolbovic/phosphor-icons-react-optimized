var f = Object.defineProperty;
var h = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (h)
    for (var e of h(t))
      l.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && h)
    for (var r of h(a))
      t.indexOf(r) < 0 && l.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const M = s((r, e) => {
  var m = r, { children: a } = m, t = n(m, ["children"]);
  return /* @__PURE__ */ c.createElement(A, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M107.33,149.78a4,4,0,0,0-6.66,0L76.42,186.15,63.36,165.84a4,4,0,0,0-6.72,0l-36,56A4,4,0,0,0,24,228H152a4,4,0,0,0,3.33-6.22ZM31.33,220,60,175.4l13,20.22a4,4,0,0,0,3.33,1.83,3.93,3.93,0,0,0,3.36-1.78L104,159.21,144.53,220ZM210.83,85.17l-56-56A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40v88a4,4,0,0,0,8,0V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52V216a4,4,0,0,1-4,4h-8a4,4,0,0,0,0,8h8a12,12,0,0,0,12-12V88A4,4,0,0,0,210.83,85.17ZM156,41.65,198.34,84H156Z" }));
});
M.displayName = "Thin";
export {
  M as Thin
};
