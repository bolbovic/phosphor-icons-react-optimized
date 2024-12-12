var h = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (a, r, e) => r in a ? h(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, p = (a, r) => {
  for (var e in r || (r = {}))
    o.call(r, e) && m(a, e, r[e]);
  if (H)
    for (var e of H(r))
      c.call(r, e) && m(a, e, r[e]);
  return a;
};
var A = (a, r) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && H)
    for (var t of H(a))
      r.indexOf(t) < 0 && c.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const v = i((t, e) => {
  var l = t, { children: a } = l, r = A(l, ["children"]);
  return /* @__PURE__ */ f.createElement(s, p({ ref: e }, r), a, /* @__PURE__ */ f.createElement("path", { d: "M208,152h16a8,8,0,0,0,0-16H208V120h16a8,8,0,0,0,0-16H207.6a79.76,79.76,0,0,0-21.44-46.85l19.5-19.49a8,8,0,0,0-11.32-11.32l-20.29,20.3a79.74,79.74,0,0,0-92.1,0L61.66,26.34A8,8,0,0,0,50.34,37.66l19.5,19.49A79.76,79.76,0,0,0,48.4,104H32a8,8,0,0,0,0,16H48v16H32a8,8,0,0,0,0,16H48v8c0,2.7.14,5.37.4,8H32a8,8,0,0,0,0,16H51.68a80,80,0,0,0,152.64,0H224a8,8,0,0,0,0-16H207.6c.26-2.63.4-5.3.4-8ZM128,48a64.07,64.07,0,0,1,63.48,56h-127A64.07,64.07,0,0,1,128,48Zm8,175.48V144a8,8,0,0,0-16,0v79.48A64.07,64.07,0,0,1,64,160V120H192v40A64.07,64.07,0,0,1,136,223.48Z" }));
});
v.displayName = "Regular";
export {
  v as Regular
};
