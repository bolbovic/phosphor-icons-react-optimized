var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var o = (e, t, a) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, l = (e, t) => {
  for (var a in t || (t = {}))
    H.call(t, a) && o(e, a, t[a]);
  if (r)
    for (var a of r(t))
      Z.call(t, a) && o(e, a, t[a]);
  return e;
};
var p = (e, t) => {
  var a = {};
  for (var m in e)
    H.call(e, m) && t.indexOf(m) < 0 && (a[m] = e[m]);
  if (e != null && r)
    for (var m of r(e))
      t.indexOf(m) < 0 && Z.call(e, m) && (a[m] = e[m]);
  return a;
};
import V, { forwardRef as s } from "react";
import c from "../../lib/OptiBase.mjs";
const d = s((m, a) => {
  var h = m, { children: e } = h, t = p(h, ["children"]);
  return /* @__PURE__ */ V.createElement(c, l({ ref: a }, t), e, /* @__PURE__ */ V.createElement("path", { d: "M200,40H56A16,16,0,0,0,40,56V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm-64,80h64v16H136Zm0-16V88h64v16Zm0,48h64v16H136Zm64-80H136V56h64ZM56,56h64V200H56ZM200,200H136V184h64v16Z" }));
});
d.displayName = "Regular";
export {
  d as Regular,
  d as default
};
