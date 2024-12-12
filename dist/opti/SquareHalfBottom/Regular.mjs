var c = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, m, a) => m in e ? c(e, m, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[m] = a, v = (e, m) => {
  for (var a in m || (m = {}))
    Z.call(m, a) && o(e, a, m[a]);
  if (t)
    for (var a of t(m))
      p.call(m, a) && o(e, a, m[a]);
  return e;
};
var l = (e, m) => {
  var a = {};
  for (var r in e)
    Z.call(e, r) && m.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && t)
    for (var r of t(e))
      m.indexOf(r) < 0 && p.call(e, r) && (a[r] = e[r]);
  return a;
};
import V, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const i = f((r, a) => {
  var H = r, { children: e } = H, m = l(H, ["children"]);
  return /* @__PURE__ */ V.createElement(h, v({ ref: a }, m), e, /* @__PURE__ */ V.createElement("path", { d: "M200,40H56A16,16,0,0,0,40,56V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,16v64H56V56Zm-96,80v64H88V136Zm16,0h16v64H120Zm32,0h16v64H152Zm-96,0H72v64H56Zm144,64H184V136h16v64Z" }));
});
i.displayName = "Regular";
export {
  i as Regular
};
