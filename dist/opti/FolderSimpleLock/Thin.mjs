var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var v = (a, t) => {
  var e = {};
  for (var m in a)
    H.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import n, { forwardRef as f } from "react";
import l from "../../lib/OptiBase.mjs";
const s = f((m, e) => {
  var h = m, { children: a } = h, t = v(h, ["children"]);
  return /* @__PURE__ */ n.createElement(l, p({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M228,88v16a4,4,0,0,1-8,0V88a4,4,0,0,0-4-4H130.67a12.05,12.05,0,0,1-7.2-2.4L95.73,60.8a4,4,0,0,0-2.4-.8H40a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4h72a4,4,0,0,1,0,8H40a12,12,0,0,1-12-12V64A12,12,0,0,1,40,52H93.33a12.05,12.05,0,0,1,7.2,2.4l27.74,20.8a4,4,0,0,0,2.4.8H216A12,12,0,0,1,228,88Zm0,80v40a4,4,0,0,1-4,4H152a4,4,0,0,1-4-4V168a4,4,0,0,1,4-4h12v-8a24,24,0,0,1,48,0v8h12A4,4,0,0,1,228,168Zm-56-4h32v-8a16,16,0,0,0-32,0Zm48,8H156v32h64Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
