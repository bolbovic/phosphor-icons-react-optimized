var s = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (e, c, a) => c in e ? s(e, c, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[c] = a, C = (e, c) => {
  for (var a in c || (c = {}))
    p.call(c, a) && o(e, a, c[a]);
  if (t)
    for (var a of t(c))
      l.call(c, a) && o(e, a, c[a]);
  return e;
};
var f = (e, c) => {
  var a = {};
  for (var r in e)
    p.call(e, r) && c.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && t)
    for (var r of t(e))
      c.indexOf(r) < 0 && l.call(e, r) && (a[r] = e[r]);
  return a;
};
import i, { forwardRef as R } from "react";
import d from "../../lib/OptiBase.mjs";
const n = R((r, a) => {
  var m = r, { children: e } = m, c = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(d, C({ ref: a }, c), e, /* @__PURE__ */ i.createElement("path", { d: "M240,149.31c0,16.11-3.17,29.89-9.17,39.84-7.43,12.33-19,18.85-33.39,18.85-27.94,0-47.78-37-68.78-76.22C111.64,100,92.35,64,74,64c-9.38,0-19.94,10-28.25,26.67A138.18,138.18,0,0,0,32,149.31c0,13.2,2.38,24.12,6.88,31.58S49.82,192,58.56,192c15.12,0,30.85-24.54,44.23-48.55a8,8,0,0,1,14,7.8C101.46,178.71,83.07,208,58.56,208c-14.41,0-26-6.52-33.39-18.85-6-10-9.17-23.73-9.17-39.84A154.81,154.81,0,0,1,31.42,83.54C42.82,60.62,57.94,48,74,48c27.94,0,47.77,37,68.78,76.22C159.79,156,179.08,192,197.44,192c8.74,0,15.18-3.63,19.68-11.11S224,162.51,224,149.31a138.18,138.18,0,0,0-13.74-58.64C202,74,191.39,64,182,64c-8.36,0-17.68,7.48-28.51,22.88a8,8,0,1,1-13.08-9.21c9-12.74,23-29.67,41.59-29.67,16.05,0,31.17,12.62,42.57,35.54A154.81,154.81,0,0,1,240,149.31Z" }));
});
n.displayName = "Regular";
export {
  n as Regular
};