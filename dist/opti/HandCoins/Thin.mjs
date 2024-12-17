var n = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && l(a, e, t[e]);
  if (r)
    for (var e of r(t))
      A.call(t, e) && l(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && A.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const h = c((m, e) => {
  var H = m, { children: a } = H, t = p(H, ["children"]);
  return /* @__PURE__ */ Z.createElement(f, i({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M227.9,144.24a20.45,20.45,0,0,0-17.84-3.53L160.75,152A23.76,23.76,0,0,0,164,140a24,24,0,0,0-24-24H89.94a27.81,27.81,0,0,0-19.8,8.2L46.34,148H16A12,12,0,0,0,4,160v40a12,12,0,0,0,12,12H120a4,4,0,0,0,1-.12l64-16a4.69,4.69,0,0,0,.6-.2l38.82-16.54.22-.1a20.6,20.6,0,0,0,3.29-34.8ZM12,200V160a4,4,0,0,1,4-4H44v48H16A4,4,0,0,1,12,200Zm209.13-28.17L182.72,188.2,119.51,204H52V153.66l23.8-23.8A19.86,19.86,0,0,1,89.94,124H140a16,16,0,0,1,0,32H112a4,4,0,0,0,0,8h32a3.94,3.94,0,0,0,.9-.1l67-15.41.16,0a12.6,12.6,0,0,1,9,23.38ZM164,92a31.88,31.88,0,0,0,8.73-1.2,32,32,0,1,0,22.55-37.58A32,32,0,1,0,164,92Zm64-8a24,24,0,1,1-24-24A24,24,0,0,1,228,84ZM164,36a24,24,0,0,1,23.74,20.46A32,32,0,0,0,172,82.62,24,24,0,1,1,164,36Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
