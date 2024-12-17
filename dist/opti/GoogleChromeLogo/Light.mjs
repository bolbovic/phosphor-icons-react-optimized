var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && A(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && A(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const d = h((m, e) => {
  var o = m, { children: a } = o, t = l(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, c({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,12a90,90,0,0,1,77.33,44H128a46.07,46.07,0,0,0-44.93,36.17L56.91,72.87A89.91,89.91,0,0,1,128,38Zm34,90a34,34,0,1,1-34-34A34,34,0,0,1,162,128ZM38,128A89.4,89.4,0,0,1,49.5,84l38.66,67c.06.1.13.18.19.27A45.94,45.94,0,0,0,142,171.83l-26.17,45.34A90.13,90.13,0,0,1,38,128Zm91.16,90,38.68-67,.21-.41A45.9,45.9,0,0,0,159,94h52.37a90,90,0,0,1-82.16,124Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
