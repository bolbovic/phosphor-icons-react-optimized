var f = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && m(a, e, t[e]);
  if (c)
    for (var e of c(t))
      i.call(t, e) && m(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && c)
    for (var r of c(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import n, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const A = s((r, e) => {
  var l = r, { children: a } = l, t = h(l, ["children"]);
  return /* @__PURE__ */ n.createElement(d, p({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M232,68H193.66l33.17-33.17a4,4,0,1,0-5.66-5.66L188,62.34V24a4,4,0,0,0-8,0V64a60,60,0,0,0-78.39,5.54l0,0h0c-17.12,16.79-34.51,45.72-51.7,86-11.93,28-19.61,52-20.59,55.09A12.05,12.05,0,0,0,40,228a12,12,0,0,0,5.36-1.28c3.12-1,27.13-8.65,55.09-20.59,40.29-17.2,69.24-34.61,86-51.71A60,60,0,0,0,192,76h40a4,4,0,0,0,0-8Zm-51.26,80.79c-9.76,10-23.42,19.39-38.37,27.91l-27.54-27.53a4,4,0,0,0-5.65,5.65l25.9,25.91C92.61,203.55,43.34,219,42.64,219.18a4.45,4.45,0,0,0-.71.3,4,4,0,0,1-5.41-5.41,4.45,4.45,0,0,0,.3-.71c.29-1,29.72-95,67.62-135.27l36.74,36.73a4,4,0,0,0,5.65,0,4,4,0,0,0,0-5.65L110.18,72.52a52,52,0,0,1,70.56,76.27Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};
