var A = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && m(a, e, t[e]);
  if (H)
    for (var e of H(t))
      c.call(t, e) && m(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && H)
    for (var r of H(a))
      t.indexOf(r) < 0 && c.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const i = d((r, e) => {
  var l = r, { children: a } = l, t = f(l, ["children"]);
  return /* @__PURE__ */ s.createElement(h, p({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M208,152h16a8,8,0,0,0,0-16H208V120h16a8,8,0,0,0,0-16H207.6a79.76,79.76,0,0,0-21.44-46.85l19.5-19.49a8,8,0,0,0-11.32-11.32l-20.29,20.3a79.74,79.74,0,0,0-92.1,0L61.66,26.34A8,8,0,0,0,50.34,37.66l19.5,19.49A79.76,79.76,0,0,0,48.4,104H32a8,8,0,0,0,0,16H48v16H32a8,8,0,0,0,0,16H48v8c0,2.7.14,5.37.4,8H32a8,8,0,0,0,0,16H51.68a80,80,0,0,0,152.64,0H224a8,8,0,0,0,0-16H207.6c.26-2.63.4-5.3.4-8ZM128,48a64.07,64.07,0,0,1,63.48,56h-127A64.07,64.07,0,0,1,128,48Zm8,175.48V144a8,8,0,0,0-16,0v79.48A64.07,64.07,0,0,1,64,160V120H192v40A64.07,64.07,0,0,1,136,223.48Z" }));
});
i.displayName = "Regular";
export {
  i as Regular,
  i as default
};
