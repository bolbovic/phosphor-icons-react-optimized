var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && h(a, e, t[e]);
  if (m)
    for (var e of m(t))
      l.call(t, e) && h(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && l.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as H } from "react";
import V from "../../lib/OptiBase.mjs";
const d = H((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(V, p({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M88,102H40a6,6,0,0,1-6-6V48a6,6,0,0,1,12,0V81.52l18-18a93.45,93.45,0,0,1,66-27.53h.52A93.39,93.39,0,0,1,196.19,62.7a6,6,0,0,1-8.38,8.58A82,82,0,0,0,72.53,72L54.48,90H88a6,6,0,0,1,0,12Zm128,52H168a6,6,0,0,0,0,12h33.52l-18.05,18a81.51,81.51,0,0,1-57.53,24h-.46a81.5,81.5,0,0,1-57.29-23.34,6,6,0,0,0-8.38,8.58,93.39,93.39,0,0,0,65.67,26.76H126a93.45,93.45,0,0,0,66-27.53l18-18.05V208a6,6,0,0,0,12,0V160A6,6,0,0,0,216,154Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
