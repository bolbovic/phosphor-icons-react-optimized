var n = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var v = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    v.call(t, e) && V(a, e, t[e]);
  if (m)
    for (var e of m(t))
      h.call(t, e) && V(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var o in a)
    v.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && m)
    for (var o of m(a))
      t.indexOf(o) < 0 && h.call(a, o) && (e[o] = a[o]);
  return e;
};
import r, { forwardRef as A } from "react";
import i from "../../lib/OptiBase.mjs";
const Z = A((o, e) => {
  var H = o, { children: a } = H, t = c(H, ["children"]);
  return /* @__PURE__ */ r.createElement(i, p({ ref: e }, t), a, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M168,48v64H144a32,32,0,0,0-32,32v24H48V144a96,96,0,0,1,96-96Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M232,104H208V56h24a8,8,0,0,0,0-16H205.83A16,16,0,0,0,192,32H176a16,16,0,0,0-13.83,8H144A104.11,104.11,0,0,0,40,144v18.16A16,16,0,0,0,32,176v16a16,16,0,0,0,8,13.84V232a8,8,0,0,0,16,0V208h48v24a8,8,0,0,0,16,0V205.84A16,16,0,0,0,128,192V176a16,16,0,0,0-8-13.84V144a24,24,0,0,1,24-24h18.17A16,16,0,0,0,176,128h16a16,16,0,0,0,13.83-8H232a8,8,0,0,0,0-16ZM112,176v16H48V176Zm-8-32v16H56V144a88.1,88.1,0,0,1,88-88h16v48H144A40,40,0,0,0,104,144Zm72-32V48h16v63.8c0,.07,0,.13,0,.2Z" }));
});
Z.displayName = "Duotone";
export {
  Z as Duotone
};
