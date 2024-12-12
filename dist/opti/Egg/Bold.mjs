var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var p = (e, t, a) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, l = (e, t) => {
  for (var a in t || (t = {}))
    c.call(t, a) && p(e, a, t[a]);
  if (r)
    for (var a of r(t))
      d.call(t, a) && p(e, a, t[a]);
  return e;
};
var s = (e, t) => {
  var a = {};
  for (var o in e)
    c.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && d.call(e, o) && (a[o] = e[o]);
  return a;
};
import f, { forwardRef as n } from "react";
import B from "../../lib/OptiBase.mjs";
const C = n((o, a) => {
  var m = o, { children: e } = m, t = s(m, ["children"]);
  return /* @__PURE__ */ f.createElement(B, l({ ref: a }, t), e, /* @__PURE__ */ f.createElement("path", { d: "M190,57.34C171.06,29,147.88,12,128,12S84.94,29,66,57.34C46.94,86,36,120.46,36,152a92,92,0,0,0,184,0C220,120.46,209.06,86,190,57.34ZM128,220a68.07,68.07,0,0,1-68-68c0-61.12,46.19-116,68-116s68,54.88,68,116A68.07,68.07,0,0,1,128,220Z" }));
});
C.displayName = "Bold";
export {
  C as Bold
};
