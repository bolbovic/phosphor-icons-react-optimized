var s = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && c(a, e, t[e]);
  if (o)
    for (var e of o(t))
      d.call(t, e) && c(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && d.call(a, m) && (e[m] = a[m]);
  return e;
};
import i, { forwardRef as H } from "react";
import n from "../../lib/OptiBase.mjs";
const B = H((m, e) => {
  var r = m, { children: a } = r, t = f(r, ["children"]);
  return /* @__PURE__ */ i.createElement(n, l({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,176H52V52H204Zm-56-52c0-6.37-6.29-9.32-24-14.42-16.14-4.65-38.23-11-38.23-33.58,0-20.52,18.15-36,42.22-36,17.24,0,32.06,8.14,38.69,21.24a12,12,0,1,1-21.41,10.84C142.8,95.17,136,92,128,92c-10.22,0-18.22,5.27-18.22,12,0,1.09,0,2.21,3.28,4.17,4.18,2.48,11,4.45,17.6,6.35,8.75,2.52,17.8,5.13,25.38,9.86,13.19,8.23,16,19.56,16,27.62,0,20.19-19.33,36-44,36-21.26,0-39.46-12.35-43.27-29.38a12,12,0,0,1,23.42-5.24C109.3,158.49,117.21,164,128,164,137.44,164,148,158.87,148,152Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
