var p = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? p(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, o = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && V(a, e, t[e]);
  if (r)
    for (var e of r(t))
      l.call(t, e) && V(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var m in a)
    h.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && l.call(a, m) && (e[m] = a[m]);
  return e;
};
import i, { forwardRef as Z } from "react";
import n from "../../lib/OptiBase.mjs";
const A = Z((m, e) => {
  var v = m, { children: a } = v, t = H(v, ["children"]);
  return /* @__PURE__ */ i.createElement(n, o({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M212,88a4,4,0,0,0-1.17-2.83l-2-2h0l-54-54A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40v80a4,4,0,0,0,8,0V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52v28a4,4,0,0,0,8,0ZM156,41.65,198.34,84H156ZM64,160v48a4,4,0,0,1-8,0V188H28v20a4,4,0,0,1-8,0V160a4,4,0,0,1,8,0v20H56V160a4,4,0,0,1,8,0Zm56,0a4,4,0,0,1-4,4H104v44a4,4,0,0,1-8,0V164H84a4,4,0,0,1,0-8h32A4,4,0,0,1,120,160Zm72,0v48a4,4,0,0,1-8,0V172l-16.8,22.4a4,4,0,0,1-6.4,0L144,172v36a4,4,0,0,1-8,0V160a4,4,0,0,1,7.2-2.4L164,185.33l20.8-27.73A4,4,0,0,1,192,160Zm56,48a4,4,0,0,1-4,4H216a4,4,0,0,1-4-4V160a4,4,0,0,1,8,0v44h24A4,4,0,0,1,248,208Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};
