var f = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import A, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const d = h((r, e) => {
  var m = r, { children: a } = m, t = n(m, ["children"]);
  return /* @__PURE__ */ A.createElement(s, c({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M178.56,52.93a281.08,281.08,0,0,0-48.77-32.51,4,4,0,0,0-3.58,0A281.08,281.08,0,0,0,77.44,52.93C45.1,79.88,28,108.61,28,136a52,52,0,0,0,76.46,45.89l-12.29,41A4,4,0,0,0,96,228h64a4,4,0,0,0,3.83-5.15l-12.29-41A52,52,0,0,0,228,136C228,108.61,210.9,79.88,178.56,52.93ZM176,180a44,44,0,0,1-28.92-10.84,4,4,0,0,0-6.46,4.17l14,46.67H101.38l14-46.67a4,4,0,0,0-6.46-4.17A44,44,0,0,1,36,136c0-56.06,79-100.56,92-107.49,13,6.93,92,51.38,92,107.49A44.05,44.05,0,0,1,176,180Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
