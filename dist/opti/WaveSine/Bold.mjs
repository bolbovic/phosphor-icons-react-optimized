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
  return /* @__PURE__ */ i.createElement(B, l({ ref: a }, t), e, /* @__PURE__ */ i.createElement("path", { d: "M242.86,133.1c-23,49-43,70.9-64.82,70.9-27.64,0-43.8-34.44-60.9-70.9C110,117.78,102.53,102,94.92,90.73,88.39,81.09,82.53,76,78,76c-3.82,0-18.24,4.12-43.09,57.1a12,12,0,0,1-21.73-10.2c23-49,43-70.9,64.82-70.9,27.64,0,43.8,34.44,60.9,70.9,7.19,15.32,14.61,31.15,22.22,42.37,6.53,9.64,12.39,14.73,17,14.73,3.82,0,18.24-4.12,43.09-57.1a12,12,0,0,1,21.73,10.2Z" }));
});
E.displayName = "Bold";
export {
  E as Bold
};
