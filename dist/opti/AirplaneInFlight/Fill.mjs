var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var o = (e, t, a) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, i = (e, t) => {
  for (var a in t || (t = {}))
    A.call(t, a) && o(e, a, t[a]);
  if (r)
    for (var a of r(t))
      H.call(t, a) && o(e, a, t[a]);
  return e;
};
var p = (e, t) => {
  var a = {};
  for (var l in e)
    A.call(e, l) && t.indexOf(l) < 0 && (a[l] = e[l]);
  if (e != null && r)
    for (var l of r(e))
      t.indexOf(l) < 0 && H.call(e, l) && (a[l] = e[l]);
  return a;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const n = s((l, a) => {
  var m = l, { children: e } = m, t = p(m, ["children"]);
  return /* @__PURE__ */ c.createElement(d, i({ ref: a }, t), e, /* @__PURE__ */ c.createElement("path", { d: "M224,216a8,8,0,0,1-8,8H72a8,8,0,1,1,0-16H216A8,8,0,0,1,224,216ZM208,96H147.32L101.66,50.34A8,8,0,0,0,96,48H88A16,16,0,0,0,72.83,69.06l9,26.94H59.32L37.66,74.34A8,8,0,0,0,32,72H24A16,16,0,0,0,8.69,92.6l14.07,46.89A39.75,39.75,0,0,0,61.07,168H240a8,8,0,0,0,8-8V136A40,40,0,0,0,208,96Z" }));
});
n.displayName = "Fill";
export {
  n as Fill
};
