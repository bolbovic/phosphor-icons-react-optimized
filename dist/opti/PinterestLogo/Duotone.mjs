var d = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (e, a, t) => a in e ? d(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, i = (e, a) => {
  for (var t in a || (a = {}))
    p.call(a, t) && m(e, t, a[t]);
  if (c)
    for (var t of c(a))
      n.call(a, t) && m(e, t, a[t]);
  return e;
};
var s = (e, a) => {
  var t = {};
  for (var o in e)
    p.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && c)
    for (var o of c(e))
      a.indexOf(o) < 0 && n.call(e, o) && (t[o] = e[o]);
  return t;
};
import r, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const A = f((o, t) => {
  var l = o, { children: e } = l, a = s(l, ["children"]);
  return /* @__PURE__ */ r.createElement(h, i({ ref: t }, a), e, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M216,112c0,44.18-32,72-64,72s-41.63-21.07-41.63-21.07h0L128,88l13.14-55.83h0A80,80,0,0,1,216,112Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M224,112c0,22.57-7.9,43.2-22.23,58.11C188.39,184,170.25,192,152,192c-17.88,0-29.82-5.86-37.43-12l-10.78,45.82A8,8,0,0,1,96,232a8.24,8.24,0,0,1-1.84-.21,8,8,0,0,1-6-9.62l32-136a8,8,0,0,1,15.58,3.66l-16.9,71.8C122,166,131.3,176,152,176c27.53,0,56-23.94,56-64A72,72,0,1,0,73.63,148a8,8,0,0,1-13.85,8A88,88,0,1,1,224,112Z" }));
});
A.displayName = "Duotone";
export {
  A as Duotone
};