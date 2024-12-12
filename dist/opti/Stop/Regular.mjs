var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var l = (e, t, a) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, s = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && l(e, a, t[a]);
  if (m)
    for (var a of m(t))
      f.call(t, a) && l(e, a, t[a]);
  return e;
};
var c = (e, t) => {
  var a = {};
  for (var r in e)
    p.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && m)
    for (var r of m(e))
      t.indexOf(r) < 0 && f.call(e, r) && (a[r] = e[r]);
  return a;
};
import d, { forwardRef as H } from "react";
import R from "../../lib/OptiBase.mjs";
const V = H((r, a) => {
  var o = r, { children: e } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ d.createElement(R, s({ ref: a }, t), e, /* @__PURE__ */ d.createElement("path", { d: "M200,40H56A16,16,0,0,0,40,56V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,160H56V56H200V200Z" }));
});
V.displayName = "Regular";
export {
  V as Regular,
  V as default
};
