var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (e, t, a) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, i = (e, t) => {
  for (var a in t || (t = {}))
    l.call(t, a) && p(e, a, t[a]);
  if (r)
    for (var a of r(t))
      n.call(t, a) && p(e, a, t[a]);
  return e;
};
var d = (e, t) => {
  var a = {};
  for (var o in e)
    l.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && n.call(e, o) && (a[o] = e[o]);
  return a;
};
import m, { forwardRef as s } from "react";
import L from "../../lib/OptiBase.mjs";
const Z = s((o, a) => {
  var c = o, { children: e } = c, t = d(c, ["children"]);
  return /* @__PURE__ */ m.createElement(L, i({ ref: a }, t), e, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M226.2,65.8,174,118,146,90l52.2-52.2a19.8,19.8,0,0,1,28,0h0A19.8,19.8,0,0,1,226.2,65.8Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M231.87,32.13a27.84,27.84,0,0,0-39.32,0L18.34,206.4a8,8,0,0,0,3.86,13.45A160.67,160.67,0,0,0,58.4,224c32.95,0,65.92-10.2,96.95-30.23,31.76-20.5,50.19-43.82,51-44.81a8,8,0,0,0-.64-10.59L185.32,118l46.55-46.56A27.85,27.85,0,0,0,231.87,32.13ZM189.1,144.44a220.41,220.41,0,0,1-42.86,36.16c-34.43,22.1-69.94,30.92-105.77,26.3L146,101.33Zm31.46-84.3L174,106.7,157.32,90l46.55-46.56a11.8,11.8,0,0,1,16.69,16.69Z" }));
});
Z.displayName = "Duotone";
export {
  Z as Duotone
};
