var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (e, m, a) => m in e ? s(e, m, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[m] = a, p = (e, m) => {
  for (var a in m || (m = {}))
    Z.call(m, a) && o(e, a, m[a]);
  if (r)
    for (var a of r(m))
      l.call(m, a) && o(e, a, m[a]);
  return e;
};
var v = (e, m) => {
  var a = {};
  for (var t in e)
    Z.call(e, t) && m.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && r)
    for (var t of r(e))
      m.indexOf(t) < 0 && l.call(e, t) && (a[t] = e[t]);
  return a;
};
import f, { forwardRef as V } from "react";
import c from "../../lib/OptiBase.mjs";
const d = V((t, a) => {
  var H = t, { children: e } = H, m = v(H, ["children"]);
  return /* @__PURE__ */ f.createElement(c, p({ ref: a }, m), e, /* @__PURE__ */ f.createElement("path", { d: "M200,40H56A16,16,0,0,0,40,56V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,16v64H56V56Zm-96,80v64H88V136Zm16,0h16v64H120Zm32,0h16v64H152Zm-96,0H72v64H56Zm144,64H184V136h16v64Z" }));
});
d.displayName = "Regular";
export {
  d as Regular,
  d as default
};
