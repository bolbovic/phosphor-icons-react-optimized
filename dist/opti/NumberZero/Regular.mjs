var i = Object.defineProperty;
var s = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (e, t, a) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, p = (e, t) => {
  for (var a in t || (t = {}))
    o.call(t, a) && m(e, a, t[a]);
  if (s)
    for (var a of s(t))
      l.call(t, a) && m(e, a, t[a]);
  return e;
};
var f = (e, t) => {
  var a = {};
  for (var r in e)
    o.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && s)
    for (var r of s(e))
      t.indexOf(r) < 0 && l.call(e, r) && (a[r] = e[r]);
  return a;
};
import d, { forwardRef as R } from "react";
import n from "../../lib/OptiBase.mjs";
const u = R((r, a) => {
  var c = r, { children: e } = c, t = f(c, ["children"]);
  return /* @__PURE__ */ d.createElement(n, p({ ref: a }, t), e, /* @__PURE__ */ d.createElement("path", { d: "M183.25,63.2C170.25,42.79,151.15,32,128,32S85.75,42.79,72.75,63.2C62,80.18,56,103.19,56,128s6,47.82,16.75,64.8c13,20.41,32.1,31.2,55.25,31.2s42.25-10.79,55.25-31.2c10.8-17,16.75-40,16.75-64.8S194.05,80.18,183.25,63.2ZM128,208c-38.68,0-56-40.18-56-80s17.32-80,56-80,56,40.18,56,80S166.68,208,128,208Z" }));
});
u.displayName = "Regular";
export {
  u as Regular,
  u as default
};
