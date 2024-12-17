var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var c = (e, t, a) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, i = (e, t) => {
  for (var a in t || (t = {}))
    l.call(t, a) && c(e, a, t[a]);
  if (r)
    for (var a of r(t))
      n.call(t, a) && c(e, a, t[a]);
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
import E from "../../lib/OptiBase.mjs";
const H = s((o, a) => {
  var p = o, { children: e } = p, t = d(p, ["children"]);
  return /* @__PURE__ */ m.createElement(E, i({ ref: a }, t), e, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M240,80V192a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V80Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M248,80v24a8,8,0,0,1-16,0V88H133.55L87.49,210.81a8,8,0,0,1-15,0l-48-128a8,8,0,1,1,15-5.62L80,185.22l40.51-108A8,8,0,0,1,128,72H240A8,8,0,0,1,248,80Z" }));
});
H.displayName = "Duotone";
export {
  H as Duotone
};
