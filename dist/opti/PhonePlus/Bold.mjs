var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    m.call(t, e) && c(a, e, t[e]);
  if (o)
    for (var e of o(t))
      A.call(t, e) && c(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var l in a)
    m.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && o)
    for (var l of o(a))
      t.indexOf(l) < 0 && A.call(a, l) && (e[l] = a[l]);
  return e;
};
import f, { forwardRef as s } from "react";
import h from "../../lib/OptiBase.mjs";
const n = s((l, e) => {
  var r = l, { children: a } = r, t = d(r, ["children"]);
  return /* @__PURE__ */ f.createElement(h, p({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M216,162.8l-47.09-21.1-.18-.08a19.89,19.89,0,0,0-19,1.74,13.08,13.08,0,0,0-1.12.84l-22.31,19c-13-7.05-26.43-20.37-33.49-33.21l19.06-22.66a10.67,10.67,0,0,0,.85-1.15,20,20,0,0,0,1.66-18.83,1.42,1.42,0,0,1-.08-.18L93.2,40A20.05,20.05,0,0,0,72.42,28.15,60.27,60.27,0,0,0,20,88c0,81.61,66.39,148,148,148a60.27,60.27,0,0,0,59.85-52.42A20.06,20.06,0,0,0,216,162.8ZM168,212A124.15,124.15,0,0,1,44,88,36.27,36.27,0,0,1,72.48,52.47l18.82,42-19.16,22.8a10.75,10.75,0,0,0-.86,1.15A20,20,0,0,0,70,138.08c9.42,19.28,28.83,38.56,48.31,48A20,20,0,0,0,138,184.63a11.63,11.63,0,0,0,1.11-.85l22.43-19.07,42,18.81A36.29,36.29,0,0,1,168,212ZM132,80a12,12,0,0,1,12-12h20V48a12,12,0,0,1,24,0V68h20a12,12,0,0,1,0,24H188v20a12,12,0,0,1-24,0V92H144A12,12,0,0,1,132,80Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
