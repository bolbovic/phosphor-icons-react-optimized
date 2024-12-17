var d = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (e, t, a) => t in e ? d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, V = (e, t) => {
  for (var a in t || (t = {}))
    l.call(t, a) && p(e, a, t[a]);
  if (c)
    for (var a of c(t))
      n.call(t, a) && p(e, a, t[a]);
  return e;
};
var i = (e, t) => {
  var a = {};
  for (var o in e)
    l.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && c)
    for (var o of c(e))
      t.indexOf(o) < 0 && n.call(e, o) && (a[o] = e[o]);
  return a;
};
import r, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const h = f((o, a) => {
  var m = o, { children: e } = m, t = i(m, ["children"]);
  return /* @__PURE__ */ r.createElement(s, V({ ref: a }, t), e, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M152,192V144c-61.4,0-104.61,37.19-121.07,54.72a4,4,0,0,1-6.9-3.18C31.51,130.45,99.19,80,152,80V32l80,80Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M237.66,106.35l-80-80A8,8,0,0,0,144,32V72.35c-25.94,2.22-54.59,14.92-78.16,34.91-28.38,24.08-46.05,55.11-49.76,87.37a12,12,0,0,0,20.68,9.58h0c11-11.71,50.14-48.74,107.24-52V192a8,8,0,0,0,13.66,5.65l80-80A8,8,0,0,0,237.66,106.35ZM160,172.69V144a8,8,0,0,0-8-8c-28.08,0-55.43,7.33-81.29,21.8a196.17,196.17,0,0,0-36.57,26.52c5.8-23.84,20.42-46.51,42.05-64.86C99.41,99.77,127.75,88,152,88a8,8,0,0,0,8-8V51.32L220.69,112Z" }));
});
h.displayName = "Duotone";
export {
  h as Duotone
};
