var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (e, t, a) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, p = (e, t) => {
  for (var a in t || (t = {}))
    s.call(t, a) && o(e, a, t[a]);
  if (m)
    for (var a of m(t))
      i.call(t, a) && o(e, a, t[a]);
  return e;
};
var n = (e, t) => {
  var a = {};
  for (var c in e)
    s.call(e, c) && t.indexOf(c) < 0 && (a[c] = e[c]);
  if (e != null && m)
    for (var c of m(e))
      t.indexOf(c) < 0 && i.call(e, c) && (a[c] = e[c]);
  return a;
};
import A, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const h = Z((c, a) => {
  var r = c, { children: e } = r, t = n(r, ["children"]);
  return /* @__PURE__ */ A.createElement(d, p({ ref: a }, t), e, /* @__PURE__ */ A.createElement("path", { d: "M243.66,126.38c-.34-.76-8.52-18.89-26.83-37.2C199.87,72.22,170.7,52,128,52S56.13,72.22,39.17,89.18c-18.31,18.31-26.49,36.44-26.83,37.2a4.08,4.08,0,0,0,0,3.25c.34.77,8.52,18.89,26.83,37.2,17,17,46.14,37.17,88.83,37.17s71.87-20.21,88.83-37.17c18.31-18.31,26.49-36.43,26.83-37.2A4.08,4.08,0,0,0,243.66,126.38Zm-32.7,35c-23.07,23-51,34.62-83,34.62s-59.89-11.65-83-34.62A135.71,135.71,0,0,1,20.44,128,135.69,135.69,0,0,1,45,94.62C68.11,71.65,96,60,128,60s59.89,11.65,83,34.62A135.79,135.79,0,0,1,235.56,128,135.71,135.71,0,0,1,211,161.38ZM128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
