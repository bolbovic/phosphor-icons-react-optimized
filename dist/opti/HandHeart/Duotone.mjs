var C = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? C(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    m.call(t, e) && r(a, e, t[e]);
  if (H)
    for (var e of H(t))
      p.call(t, e) && r(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var o in a)
    m.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && H)
    for (var o of H(a))
      t.indexOf(o) < 0 && p.call(a, o) && (e[o] = a[o]);
  return e;
};
import c, { forwardRef as Z } from "react";
import i from "../../lib/OptiBase.mjs";
const M = Z((o, e) => {
  var l = o, { children: a } = l, t = n(l, ["children"]);
  return /* @__PURE__ */ c.createElement(i, A({ ref: e }, t), a, /* @__PURE__ */ c.createElement(
    "path",
    {
      d: "M16,152H48v56H16a8,8,0,0,1-8-8V160A8,8,0,0,1,16,152ZM192.54,40A39.12,39.12,0,0,0,156,64a39.12,39.12,0,0,0-36.54-24C97.67,40,80,58.31,80,80c0,14.56,7,27.71,16.73,40H140a20,20,0,0,1,0,40h4l37.78-8.68C203.82,135.07,232,109.23,232,80,232,58.31,214.33,40,192.54,40Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ c.createElement("path", { d: "M230.33,141.06a24.34,24.34,0,0,0-18.61-4.77C230.5,117.33,240,98.48,240,80c0-26.47-21.29-48-47.46-48A47.58,47.58,0,0,0,156,48.75,47.58,47.58,0,0,0,119.46,32C93.29,32,72,53.53,72,80c0,11,3.24,21.69,10.06,33a31.87,31.87,0,0,0-14.75,8.4L44.69,144H16A16,16,0,0,0,0,160v40a16,16,0,0,0,16,16H120a7.93,7.93,0,0,0,1.94-.24l64-16a6.94,6.94,0,0,0,1.19-.4L226,182.82l.44-.2a24.6,24.6,0,0,0,3.93-41.56ZM119.46,48A31.15,31.15,0,0,1,148.6,67a8,8,0,0,0,14.8,0,31.15,31.15,0,0,1,29.14-19C209.59,48,224,62.65,224,80c0,19.51-15.79,41.58-45.66,63.9l-11.09,2.55A28,28,0,0,0,140,112H100.68C92.05,100.36,88,90.12,88,80,88,62.65,102.41,48,119.46,48ZM16,160H40v40H16Zm203.43,8.21-38,16.18L119,200H56V155.31l22.63-22.62A15.86,15.86,0,0,1,89.94,128H140a12,12,0,0,1,0,24H112a8,8,0,0,0,0,16h32a8.32,8.32,0,0,0,1.79-.2l67-15.41.31-.08a8.6,8.6,0,0,1,6.3,15.9Z" }));
});
M.displayName = "Duotone";
export {
  M as Duotone
};