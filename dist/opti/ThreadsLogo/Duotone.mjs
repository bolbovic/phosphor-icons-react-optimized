var d = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var C = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var p = (e, t, a) => t in e ? d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, n = (e, t) => {
  for (var a in t || (t = {}))
    C.call(t, a) && p(e, a, t[a]);
  if (o)
    for (var a of o(t))
      s.call(t, a) && p(e, a, t[a]);
  return e;
};
var i = (e, t) => {
  var a = {};
  for (var c in e)
    C.call(e, c) && t.indexOf(c) < 0 && (a[c] = e[c]);
  if (e != null && o)
    for (var c of o(e))
      t.indexOf(c) < 0 && s.call(e, c) && (a[c] = e[c]);
  return a;
};
import r, { forwardRef as f } from "react";
import l from "../../lib/OptiBase.mjs";
const E = f((c, a) => {
  var m = c, { children: e } = m, t = i(m, ["children"]);
  return /* @__PURE__ */ r.createElement(l, n({ ref: a }, t), e, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M208,128c0,48-16,96-80,96s-80-48-80-96,16-96,80-96S208,80,208,128Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M186.42,123.65a63.81,63.81,0,0,0-11.13-6.72c-4-29.89-24-39.31-33.1-42.07-19.78-6-42.51,1.19-52.85,16.7a8,8,0,0,0,13.32,8.88c6.37-9.56,22-14.16,34.89-10.27,9.95,3,16.82,10.3,20.15,21a81.05,81.05,0,0,0-15.29-1.43c-13.92,0-26.95,3.59-36.67,10.1C94.3,127.57,88,139,88,152c0,20.58,15.86,35.52,37.71,35.52a48,48,0,0,0,34.35-14.81c6.44-6.7,14-18.36,15.61-37.1.38.26.74.53,1.1.8C186.88,144.05,192,154.68,192,168c0,19.36-20.34,48-64,48-26.73,0-45.48-8.65-57.34-26.44C60.93,175,56,154.26,56,128s4.93-47,14.66-61.56C82.52,48.65,101.27,40,128,40c32.93,0,54,13.25,64.53,40.52a8,8,0,1,0,14.93-5.75C194.68,41.56,167.2,24,128,24,96,24,72.19,35.29,57.34,57.56,45.83,74.83,40,98.52,40,128s5.83,53.17,17.34,70.44C72.19,220.71,96,232,128,232c30.07,0,48.9-11.48,59.4-21.1C200.3,199.08,208,183,208,168,208,149.66,200.54,134.32,186.42,123.65Zm-37.89,38a31.94,31.94,0,0,1-22.82,9.9c-10.81,0-21.71-6-21.71-19.52,0-12.63,12-26.21,38.41-26.21A63.88,63.88,0,0,1,160,128.24C160,142.32,156,153.86,148.53,161.62Z" }));
});
E.displayName = "Duotone";
export {
  E as Duotone
};