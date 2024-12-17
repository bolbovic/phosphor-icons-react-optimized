var c = Object.defineProperty;
var h = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && o(a, e, t[e]);
  if (h)
    for (var e of h(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var r in a)
    H.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && h)
    for (var r of h(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const V = f((r, e) => {
  var m = r, { children: a } = m, t = l(m, ["children"]);
  return /* @__PURE__ */ n.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M216,44H168a4,4,0,0,0,0,8h20V192.43L107.5,46.07A4,4,0,0,0,104,44H40a4,4,0,0,0,0,8H60V204H40a4,4,0,0,0,0,8H88a4,4,0,0,0,0-8H68V63.57l80.5,146.36A4,4,0,0,0,152,212h40a4,4,0,0,0,4-4V52h20a4,4,0,0,0,0-8ZM70.77,52h30.86l83.6,152H154.37Z" }));
});
V.displayName = "Thin";
export {
  V as Thin
};
