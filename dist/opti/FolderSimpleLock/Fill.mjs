var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import v, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const V = f((m, e) => {
  var l = m, { children: a } = l, t = h(l, ["children"]);
  return /* @__PURE__ */ v.createElement(s, H({ ref: e }, t), a, /* @__PURE__ */ v.createElement("path", { d: "M224,160h-8v-4a28,28,0,0,0-56,0v4h-8a8,8,0,0,0-8,8v40a8,8,0,0,0,8,8h72a8,8,0,0,0,8-8V168A8,8,0,0,0,224,160Zm-24,0H176v-4a12,12,0,0,1,24,0Zm32-72v16a8,8,0,0,1-16,0V88H130.67a16.12,16.12,0,0,1-9.6-3.2L93.33,64H40V200h72a8,8,0,0,1,0,16H40a16,16,0,0,1-16-16V64A16,16,0,0,1,40,48H93.33a16.12,16.12,0,0,1,9.6,3.2L130.67,72H216A16,16,0,0,1,232,88Z" }));
});
V.displayName = "Fill";
export {
  V as Fill
};
