var Z = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && c(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && c(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const M = f((r, e) => {
  var o = r, { children: a } = o, t = l(o, ["children"]);
  return /* @__PURE__ */ n.createElement(s, A({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M226.49,211.12a4,4,0,0,1-5.61-.62C219.54,208.82,188,168.48,188,88A60,60,0,0,0,68,88c0,80.48-31.53,120.82-32.88,122.5a4,4,0,0,1-6.25-5C29.18,205.11,60,165.45,60,88a68,68,0,0,1,136,0c0,40.48,8.47,70.27,15.57,88.14,7.69,19.35,15.48,29.27,15.56,29.36A4,4,0,0,1,226.49,211.12ZM100,92a8,8,0,1,0,8,8A8,8,0,0,0,100,92Zm64,8a8,8,0,1,0-8,8A8,8,0,0,0,164,100ZM97.79,132.42a4,4,0,1,0-3.58,7.16l32,16a4,4,0,0,0,3.58,0l32-16a4,4,0,0,0-3.58-7.16L128,147.53ZM128,180a50.05,50.05,0,0,0-43.49,26.05,4,4,0,1,0,7,3.89,41.34,41.34,0,0,1,73,0A4,4,0,0,0,168,212a3.94,3.94,0,0,0,1.94-.51,4,4,0,0,0,1.55-5.44A50.07,50.07,0,0,0,128,180Z" }));
});
M.displayName = "Thin";
export {
  M as Thin
};
