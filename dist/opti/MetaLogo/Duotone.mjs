var d = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var C = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (e, t, c) => t in e ? d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: c }) : e[t] = c, i = (e, t) => {
  for (var c in t || (t = {}))
    C.call(t, c) && p(e, c, t[c]);
  if (o)
    for (var c of o(t))
      n.call(t, c) && p(e, c, t[c]);
  return e;
};
var l = (e, t) => {
  var c = {};
  for (var a in e)
    C.call(e, a) && t.indexOf(a) < 0 && (c[a] = e[a]);
  if (e != null && o)
    for (var a of o(e))
      t.indexOf(a) < 0 && n.call(e, a) && (c[a] = e[a]);
  return c;
};
import r, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const A = f((a, c) => {
  var m = a, { children: e } = m, t = l(m, ["children"]);
  return /* @__PURE__ */ r.createElement(s, i({ ref: c }, t), e, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M128.49,114.6l-18.71,32.75C93.88,175.86,77.52,200,58.56,200-3.16,200,27.7,56,74,56,94.25,56,111.56,83.58,128.49,114.6ZM182,56c-12.62,0-24.1,10.7-35,26.27L128.49,114.6c21.76,39.86,42.91,85.4,68.95,85.4C259.16,200,228.3,56,182,56Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M240,149.31c0,16.11-3.17,29.89-9.17,39.84-7.43,12.33-19,18.85-33.39,18.85-27.94,0-47.78-37-68.78-76.22C111.64,100,92.35,64,74,64c-9.38,0-19.94,10-28.25,26.67A138.18,138.18,0,0,0,32,149.31c0,13.2,2.38,24.12,6.88,31.58S49.82,192,58.56,192c15.12,0,30.85-24.54,44.23-48.55a8,8,0,0,1,14,7.8C101.46,178.71,83.07,208,58.56,208c-14.41,0-26-6.52-33.39-18.85-6-10-9.17-23.73-9.17-39.84A154.81,154.81,0,0,1,31.42,83.54C42.82,60.62,57.94,48,74,48c27.94,0,47.77,37,68.78,76.22C159.79,156,179.08,192,197.44,192c8.74,0,15.18-3.63,19.68-11.11S224,162.51,224,149.31a138.18,138.18,0,0,0-13.74-58.64C202,74,191.39,64,182,64c-8.36,0-17.68,7.48-28.51,22.88a8,8,0,1,1-13.08-9.21c9-12.74,23-29.67,41.59-29.67,16.05,0,31.17,12.62,42.57,35.54A154.81,154.81,0,0,1,240,149.31Z" }));
});
A.displayName = "Duotone";
export {
  A as Duotone
};
