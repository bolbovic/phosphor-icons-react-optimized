var s = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && r(a, e, t[e]);
  if (l)
    for (var e of l(t))
      i.call(t, e) && r(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var c in a)
    o.call(a, c) && t.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && l)
    for (var c of l(a))
      t.indexOf(c) < 0 && i.call(a, c) && (e[c] = a[c]);
  return e;
};
import h, { forwardRef as A } from "react";
import L from "../../lib/OptiBase.mjs";
const Z = A((c, e) => {
  var m = c, { children: a } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ h.createElement(L, p({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M213.59,168.3l-47.24-21.17a14,14,0,0,0-13.28,1.22,4.81,4.81,0,0,0-.56.42l-24.69,21a1.88,1.88,0,0,1-1.68.06c-15.87-7.66-32.31-24-40-39.65a1.89,1.89,0,0,1,0-1.67l21.07-25.06c.15-.18.29-.38.42-.57a14,14,0,0,0,1.12-13.28L87.73,42.49a14,14,0,0,0-14.56-8.38A54.25,54.25,0,0,0,26,88c0,78.3,63.7,142,142,142a54.25,54.25,0,0,0,53.89-47.17A14,14,0,0,0,213.59,168.3ZM168,218C96.32,218,38,159.68,38,88A42.24,42.24,0,0,1,74.67,46h.23a2,2,0,0,1,1.84,1.31l21.1,47.11a2,2,0,0,1,0,1.67L76.73,121.15a4.73,4.73,0,0,0-.43.57,14,14,0,0,0-.91,13.73c8.87,18.16,27.17,36.32,45.53,45.19a14,14,0,0,0,13.77-1c.19-.13.38-.27.56-.42l24.68-21a1.92,1.92,0,0,1,1.6-.1l47.25,21.17a2,2,0,0,1,1.21,2A42.24,42.24,0,0,1,168,218Zm26-114V48a6,6,0,0,1,12,0v56a6,6,0,0,1-12,0Zm-40,0V48a6,6,0,0,1,12,0v56a6,6,0,0,1-12,0Z" }));
});
Z.displayName = "Light";
export {
  Z as Light
};
