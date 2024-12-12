var H = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var p = (e, t, a) => t in e ? H(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, n = (e, t) => {
  for (var a in t || (t = {}))
    c.call(t, a) && p(e, a, t[a]);
  if (l)
    for (var a of l(t))
      h.call(t, a) && p(e, a, t[a]);
  return e;
};
var i = (e, t) => {
  var a = {};
  for (var o in e)
    c.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && l)
    for (var o of l(e))
      t.indexOf(o) < 0 && h.call(e, o) && (a[o] = e[o]);
  return a;
};
import r, { forwardRef as L } from "react";
import d from "../../lib/OptiBase.mjs";
const f = L((o, a) => {
  var m = o, { children: e } = m, t = i(m, ["children"]);
  return /* @__PURE__ */ r.createElement(d, n({ ref: a }, t), e, /* @__PURE__ */ r.createElement("path", { d: "M141.09,72l-40,88H28l40-44L28,72Z", opacity: "0.2" }), /* @__PURE__ */ r.createElement("path", { d: "M238.73,43.67A8,8,0,0,0,232,40H152a8,8,0,0,0-7.28,4.69L135.94,64H28a8,8,0,0,0-5.92,13.38L57.19,116,22.08,154.62A8,8,0,0,0,28,168h73.09a8,8,0,0,0,7.28-4.69L117.15,144h62.43l-34.86,76.69a8,8,0,1,0,14.56,6.62l80-176A8,8,0,0,0,238.73,43.67ZM95.94,152H46.08l27.84-30.62a8,8,0,0,0,0-10.76L46.08,80h82.59Zm90.91-24H124.42l32.73-72h62.43Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
