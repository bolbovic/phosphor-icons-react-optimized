var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (e, t, a) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, d = (e, t) => {
  for (var a in t || (t = {}))
    m.call(t, a) && c(e, a, t[a]);
  if (r)
    for (var a of r(t))
      p.call(t, a) && c(e, a, t[a]);
  return e;
};
var f = (e, t) => {
  var a = {};
  for (var o in e)
    m.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && p.call(e, o) && (a[o] = e[o]);
  return a;
};
import i, { forwardRef as V } from "react";
import n from "../../lib/OptiBase.mjs";
const A = V((o, a) => {
  var l = o, { children: e } = l, t = f(l, ["children"]);
  return /* @__PURE__ */ i.createElement(n, d({ ref: a }, t), e, /* @__PURE__ */ i.createElement("path", { d: "M240.49,103.52l-80-80A12,12,0,0,0,140,32V68.74c-25.76,3.12-53.66,15.89-76.75,35.47-29.16,24.74-47.32,56.69-51.14,90A16,16,0,0,0,39.67,207h0c10.46-11.14,47-45.74,100.33-50.42V192a12,12,0,0,0,20.48,8.48l80-80A12,12,0,0,0,240.49,103.52ZM164,163V144a12,12,0,0,0-12-12c-49,0-86.57,21.56-109.79,40.11,7.13-18.16,19.63-35.22,36.57-49.59C101.3,103.41,128.67,92,152,92a12,12,0,0,0,12-12V61l51,51Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};
