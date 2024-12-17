var i = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (l)
    for (var e of l(t))
      h.call(t, e) && m(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && l)
    for (var o of l(a))
      t.indexOf(o) < 0 && h.call(a, o) && (e[o] = a[o]);
  return e;
};
import r, { forwardRef as A } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = A((o, e) => {
  var H = o, { children: a } = H, t = n(H, ["children"]);
  return /* @__PURE__ */ r.createElement(Z, c({ ref: e }, t), a, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M223.51,82.73l-26.18,72a8,8,0,0,1-7.52,5.27H66.19a8,8,0,0,1-7.52-5.27l-26.18-72A8,8,0,0,1,40,72H216A8,8,0,0,1,223.51,82.73Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M229.11,70.82A16,16,0,0,0,216,64H136V32h16a8,8,0,0,0,0-16H104a8,8,0,0,0,0,16h16V64H40A16,16,0,0,0,25,85.47l26.19,72a16,16,0,0,0,15,10.53H96v64a8,8,0,0,0,16,0V168h32v64a8,8,0,0,0,16,0V168h29.82a16,16,0,0,0,15-10.53l26.19-72A16,16,0,0,0,229.11,70.82ZM110.68,152,97.58,80h60.84l-13.1,72ZM40,80H81.32l13.09,72H66.18Zm149.82,72H161.59l13.09-72H216Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};
