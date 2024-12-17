var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (e, t, a) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, H = (e, t) => {
  for (var a in t || (t = {}))
    d.call(t, a) && p(e, a, t[a]);
  if (r)
    for (var a of r(t))
      l.call(t, a) && p(e, a, t[a]);
  return e;
};
var c = (e, t) => {
  var a = {};
  for (var o in e)
    d.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && l.call(e, o) && (a[o] = e[o]);
  return a;
};
import f, { forwardRef as s } from "react";
import L from "../../lib/OptiBase.mjs";
const n = s((o, a) => {
  var m = o, { children: e } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(L, H({ ref: a }, t), e, /* @__PURE__ */ f.createElement("path", { d: "M243.09,35.41A12,12,0,0,0,232,28H24a12,12,0,0,0-8.48,20.49L116,149v55H88a12,12,0,0,0,0,24h80a12,12,0,0,0,0-24H140V149L240.48,48.49A12,12,0,0,0,243.09,35.41ZM203,52,191,64H65L53,52Zm-75,75L89,88H167Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
