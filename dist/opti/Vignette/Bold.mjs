var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var s = (e, t, a) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, d = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && s(e, a, t[a]);
  if (r)
    for (var a of r(t))
      c.call(t, a) && s(e, a, t[a]);
  return e;
};
var l = (e, t) => {
  var a = {};
  for (var o in e)
    p.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && c.call(e, o) && (a[o] = e[o]);
  return a;
};
import f, { forwardRef as C } from "react";
import H from "../../lib/OptiBase.mjs";
const Z = C((o, a) => {
  var m = o, { children: e } = m, t = l(m, ["children"]);
  return /* @__PURE__ */ f.createElement(H, d({ ref: a }, t), e, /* @__PURE__ */ f.createElement("path", { d: "M216,36H40A20,20,0,0,0,20,56V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A20,20,0,0,0,216,36Zm-4,160H44V60H212ZM81.43,166.05C94,175.05,110.56,180,128,180s34-4.95,46.57-13.95C188.19,156.32,196,142.45,196,128s-7.81-28.32-21.43-38C162,81,145.44,76,128,76S94,81,81.43,90C67.81,99.68,60,113.55,60,128S67.81,156.32,81.43,166.05ZM128,100c23.85,0,44,12.82,44,28s-20.15,28-44,28-44-12.82-44-28S104.15,100,128,100Z" }));
});
Z.displayName = "Bold";
export {
  Z as Bold
};
