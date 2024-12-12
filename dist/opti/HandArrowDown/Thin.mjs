var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && H(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && H(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var l in a)
    o.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && i.call(a, l) && (e[l] = a[l]);
  return e;
};
import c, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const A = h((l, e) => {
  var r = l, { children: a } = r, t = n(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M227.9,144.24a20.45,20.45,0,0,0-17.84-3.53L160.75,152A23.76,23.76,0,0,0,164,140a24,24,0,0,0-24-24H89.94a27.81,27.81,0,0,0-19.8,8.2L46.34,148H16A12,12,0,0,0,4,160v40a12,12,0,0,0,12,12H120a4,4,0,0,0,1-.12l64-16a4.69,4.69,0,0,0,.6-.2l38.82-16.54.22-.1a20.6,20.6,0,0,0,3.29-34.8ZM12,200V160a4,4,0,0,1,4-4H44v48H16A4,4,0,0,1,12,200Zm209.13-28.17L182.72,188.2,119.51,204H52V153.66l23.8-23.8A19.86,19.86,0,0,1,89.94,124H140a16,16,0,0,1,0,32H112a4,4,0,0,0,0,8h32a3.94,3.94,0,0,0,.9-.1l67-15.41.16,0a12.6,12.6,0,0,1,9,23.38Zm-64-97a4,4,0,0,1,5.66-5.66L188,94.34V24a4,4,0,0,1,8,0V94.34l25.17-25.17a4,4,0,1,1,5.66,5.66l-32,32a4,4,0,0,1-5.66,0Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};
