var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && c(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && c(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && d.call(a, o) && (e[o] = a[o]);
  return e;
};
import i, { forwardRef as L } from "react";
import Z from "../../lib/OptiBase.mjs";
const h = L((o, e) => {
  var m = o, { children: a } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(Z, l({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M104,20.41a19.83,19.83,0,0,0-22.4,11.81c-.07.15-.13.31-.19.46L21.47,192.49A20,20,0,0,0,40,220h60a20,20,0,0,0,20-20V40A19.83,19.83,0,0,0,104,20.41ZM96,196H45.79L96,62.09Zm138.53-3.51L174.61,32.68c-.06-.15-.12-.31-.19-.46A20,20,0,0,0,136,40V200a20,20,0,0,0,20,20h60a20,20,0,0,0,18.54-27.51ZM160,196V62.09L210.21,196Z" }));
});
h.displayName = "Bold";
export {
  h as Bold
};
