var i = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    s.call(t, e) && p(a, e, t[e]);
  if (c)
    for (var e of c(t))
      H.call(t, e) && p(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var o in a)
    s.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && c)
    for (var o of c(a))
      t.indexOf(o) < 0 && H.call(a, o) && (e[o] = a[o]);
  return e;
};
import m, { forwardRef as C } from "react";
import d from "../../lib/OptiBase.mjs";
const f = C((o, e) => {
  var r = o, { children: a } = r, t = Z(r, ["children"]);
  return /* @__PURE__ */ m.createElement(d, n({ ref: e }, t), a, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M104,120c0,44.18-17.91,80-40,80s-40-35.82-40-80S41.91,40,64,40,104,75.82,104,120Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M76,120a12,12,0,1,1-12-12A12,12,0,0,1,76,120Zm164,0v88a16,16,0,0,1-16,16H112a16,16,0,0,1-16-16V186.35C87.37,200.37,76.18,208,64,208c-13.87,0-26.46-9.89-35.44-27.85C20.46,164,16,142.59,16,120s4.46-43.95,12.56-60.15C37.54,41.89,50.13,32,64,32H192c13.87,0,26.46,9.89,35.44,27.85C235.54,76.05,240,97.41,240,120ZM96,120c0-42.43-16.86-72-32-72S32,77.57,32,120s16.86,72,32,72S96,162.43,96,120Zm128,88V128H208a8,8,0,0,1,0-16h15.79C221.84,73.9,206.16,48,192,48H92.12a73.6,73.6,0,0,1,7.32,11.85c7.14,14.28,11.44,32.56,12.37,52.15H128a8,8,0,0,1,0,16H112v80Zm-48-96H160a8,8,0,0,0,0,16h16a8,8,0,0,0,0-16Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
