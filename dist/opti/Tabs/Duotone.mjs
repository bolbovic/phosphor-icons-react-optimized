var A = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var p = (e, t, a) => t in e ? A(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, c = (e, t) => {
  for (var a in t || (t = {}))
    H.call(t, a) && p(e, a, t[a]);
  if (r)
    for (var a of r(t))
      h.call(t, a) && p(e, a, t[a]);
  return e;
};
var n = (e, t) => {
  var a = {};
  for (var o in e)
    H.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && h.call(e, o) && (a[o] = e[o]);
  return a;
};
import l, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const L = i((o, a) => {
  var m = o, { children: e } = m, t = n(m, ["children"]);
  return /* @__PURE__ */ l.createElement(s, c({ ref: a }, t), e, /* @__PURE__ */ l.createElement(
    "path",
    {
      d: "M152,168H8L30.29,93.7A8,8,0,0,1,38,88h84.1a8,8,0,0,1,7.66,5.7Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ l.createElement("path", { d: "M255.66,165.7h0v0a.24.24,0,0,0,0-.08L233.37,91.4A15.89,15.89,0,0,0,218.05,80H208a8,8,0,0,0,0,16h10.05l19.2,64H206L185.37,91.4A15.89,15.89,0,0,0,170.05,80H160a8,8,0,0,0,0,16h10.05l19.2,64H158L137.37,91.4A15.89,15.89,0,0,0,122.05,80H38A15.89,15.89,0,0,0,22.63,91.4L.37,165.6l0,.05v0s0,.05,0,.08A8.1,8.1,0,0,0,0,168a8,8,0,0,0,8,8H248a8,8,0,0,0,7.66-10.3ZM38,96h84.1l19.2,64H18.75Z" }));
});
L.displayName = "Duotone";
export {
  L as Duotone
};
