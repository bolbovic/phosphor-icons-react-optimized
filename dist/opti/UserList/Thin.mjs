var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && c(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && c(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var m in a)
    h.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import s, { forwardRef as f } from "react";
import d from "../../lib/OptiBase.mjs";
const l = f((m, e) => {
  var o = m, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ s.createElement(d, p({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M156,80a4,4,0,0,1,4-4h88a4,4,0,0,1,0,8H160A4,4,0,0,1,156,80Zm92,44H160a4,4,0,0,0,0,8h88a4,4,0,0,0,0-8Zm0,48H184a4,4,0,0,0,0,8h64a4,4,0,0,0,0-8ZM147.87,191a4,4,0,0,1-2.87,4.87,3.87,3.87,0,0,1-1,.13,4,4,0,0,1-3.87-3c-6.71-26.08-32-45-60.13-45s-53.41,18.92-60.13,45a4,4,0,1,1-7.74-2c5.92-23,24.57-41.14,47.52-48a44,44,0,1,1,40.7,0C123.3,149.86,142,168,147.87,191ZM80,140a36,36,0,1,0-36-36A36,36,0,0,0,80,140Z" }));
});
l.displayName = "Thin";
export {
  l as Thin
};
