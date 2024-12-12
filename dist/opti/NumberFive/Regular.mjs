var i = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var o = (e, t, a) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, s = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && o(e, a, t[a]);
  if (l)
    for (var a of l(t))
      f.call(t, a) && o(e, a, t[a]);
  return e;
};
var c = (e, t) => {
  var a = {};
  for (var r in e)
    p.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && l)
    for (var r of l(e))
      t.indexOf(r) < 0 && f.call(e, r) && (a[r] = e[r]);
  return a;
};
import d, { forwardRef as R } from "react";
import n from "../../lib/OptiBase.mjs";
const u = R((r, a) => {
  var m = r, { children: e } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ d.createElement(n, s({ ref: a }, t), e, /* @__PURE__ */ d.createElement("path", { d: "M176,160a56,56,0,0,1-93.33,41.74,8,8,0,1,1,10.66-11.92,40,40,0,1,0,.77-60.3,8,8,0,0,1-13-7.66L96.16,46.43A8,8,0,0,1,104,40h64a8,8,0,0,1,0,16H110.56l-10.32,51.6A56,56,0,0,1,176,160Z" }));
});
u.displayName = "Regular";
export {
  u as Regular,
  u as default
};
