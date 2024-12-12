var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var l = (e, a, t) => a in e ? i(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, h = (e, a) => {
  for (var t in a || (a = {}))
    H.call(a, t) && l(e, t, a[t]);
  if (r)
    for (var t of r(a))
      c.call(a, t) && l(e, t, a[t]);
  return e;
};
var n = (e, a) => {
  var t = {};
  for (var o in e)
    H.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      a.indexOf(o) < 0 && c.call(e, o) && (t[o] = e[o]);
  return t;
};
import m, { forwardRef as M } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = M((o, t) => {
  var p = o, { children: e } = p, a = n(p, ["children"]);
  return /* @__PURE__ */ m.createElement(Z, h({ ref: t }, a), e, /* @__PURE__ */ m.createElement("path", { d: "M188.52,160h-121L89.74,96h76.52Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M232,208H213.69L153.42,34.75A16,16,0,0,0,138.31,24H117.69a16,16,0,0,0-15.11,10.74L42.31,208H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM117.69,40h20.62L155,88H101ZM95.43,104h65.14l16.7,48H78.73ZM59.25,208l13.92-40H182.83l13.92,40Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};
