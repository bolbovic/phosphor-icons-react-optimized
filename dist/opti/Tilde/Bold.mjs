var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (e, t, a) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, l = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && m(e, a, t[a]);
  if (r)
    for (var a of r(t))
      d.call(t, a) && m(e, a, t[a]);
  return e;
};
var f = (e, t) => {
  var a = {};
  for (var o in e)
    p.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && d.call(e, o) && (a[o] = e[o]);
  return a;
};
import i, { forwardRef as n } from "react";
import B from "../../lib/OptiBase.mjs";
const E = n((o, a) => {
  var c = o, { children: e } = c, t = f(c, ["children"]);
  return /* @__PURE__ */ i.createElement(B, l({ ref: a }, t), e, /* @__PURE__ */ i.createElement("path", { d: "M225.35,133.1c-15.22,18.93-30.43,29-46.5,30.65A46.71,46.71,0,0,1,174,164c-20.81,0-38.16-14.13-53.59-26.7-14.24-11.6-27.68-22.54-40.75-21.18-9.26,1-19.46,8.32-30.32,21.82a12,12,0,0,1-18.7-15C45.87,104,61.08,94,77.15,92.25c23-2.42,41.82,12.92,58.43,26.45,14.24,11.6,27.68,22.54,40.75,21.18,9.26-1,19.46-8.32,30.32-21.82a12,12,0,1,1,18.7,15Z" }));
});
E.displayName = "Bold";
export {
  E as Bold
};
