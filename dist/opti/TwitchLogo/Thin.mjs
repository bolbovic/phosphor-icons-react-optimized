var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      H.call(t, e) && i(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && H.call(a, m) && (e[m] = a[m]);
  return e;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = f((m, e) => {
  var o = m, { children: a } = o, t = l(o, ["children"]);
  return /* @__PURE__ */ n.createElement(s, V({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M208,36H48A12,12,0,0,0,36,48V192a12,12,0,0,0,12,12H68v36a4,4,0,0,0,2.3,3.62A3.9,3.9,0,0,0,72,244a4,4,0,0,0,2.56-.93L121.45,204H165.1a12.06,12.06,0,0,0,7.69-2.78l42.89-35.75a11.93,11.93,0,0,0,4.32-9.22V48A12,12,0,0,0,208,36Zm4,120.25a4,4,0,0,1-1.44,3.08l-42.9,35.74a4,4,0,0,1-2.56.93H120a4,4,0,0,0-2.56.93L76,231.46V200a4,4,0,0,0-4-4H48a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4ZM172,88v48a4,4,0,0,1-8,0V88a4,4,0,0,1,8,0Zm-48,0v48a4,4,0,0,1-8,0V88a4,4,0,0,1,8,0Z" }));
});
Z.displayName = "Thin";
export {
  Z as Thin
};
