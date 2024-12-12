var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, L = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = h((m, e) => {
  var l = m, { children: a } = l, t = H(l, ["children"]);
  return /* @__PURE__ */ c.createElement(s, L({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M192,142H64a6,6,0,0,1,0-12H192a6,6,0,0,1,0,12Zm40-60H24a6,6,0,0,0,0,12H232a6,6,0,0,0,0-12ZM128,178H104a6,6,0,0,0,0,12h24a6,6,0,0,0,0-12Zm92.24-6.24a6,6,0,0,0-8.48,0L192,191.51l-19.76-19.75a6,6,0,0,0-8.48,8.48L183.51,200l-19.75,19.76a6,6,0,1,0,8.48,8.48L192,208.49l19.76,19.75a6,6,0,0,0,8.48-8.48L200.49,200l19.75-19.76A6,6,0,0,0,220.24,171.76Z" }));
});
Z.displayName = "Light";
export {
  Z as Light
};
