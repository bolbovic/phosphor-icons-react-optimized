var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var V = (e, t, a) => t in e ? c(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, A = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && V(e, a, t[a]);
  if (m)
    for (var a of m(t))
      H.call(t, a) && V(e, a, t[a]);
  return e;
};
var Z = (e, t) => {
  var a = {};
  for (var o in e)
    p.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && m)
    for (var o of m(e))
      t.indexOf(o) < 0 && H.call(e, o) && (a[o] = e[o]);
  return a;
};
import r, { forwardRef as l } from "react";
import n from "../../lib/OptiBase.mjs";
const i = l((o, a) => {
  var h = o, { children: e } = h, t = Z(h, ["children"]);
  return /* @__PURE__ */ r.createElement(n, A({ ref: a }, t), e, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M40,96H88V208H32V104A8,8,0,0,1,40,96Zm176,40H168v72h56V144A8,8,0,0,0,216,136Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M112.41,102.53a8,8,0,0,1,5.06-10.12l12-4A8,8,0,0,1,140,96v40a8,8,0,0,1-16,0V107.1l-1.47.49A8,8,0,0,1,112.41,102.53ZM248,208a8,8,0,0,1-8,8H16a8,8,0,0,1,0-16h8V104A16,16,0,0,1,40,88H80V56A16,16,0,0,1,96,40h64a16,16,0,0,1,16,16v72h40a16,16,0,0,1,16,16v56h8A8,8,0,0,1,248,208Zm-72-64v56h40V144ZM96,200h64V56H96Zm-56,0H80V104H40Z" }));
});
i.displayName = "Duotone";
export {
  i as Duotone
};
