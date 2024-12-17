var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      c.call(t, e) && m(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && c.call(a, o) && (e[o] = a[o]);
  return e;
};
import l, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((o, e) => {
  var H = o, { children: a } = H, t = i(H, ["children"]);
  return /* @__PURE__ */ l.createElement(h, n({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M224,192H32L96,64h64Z", opacity: "0.2" }), /* @__PURE__ */ l.createElement("path", { d: "M248,128H200.94l-28-56H192a8,8,0,0,0,0-16H64a8,8,0,0,0,0,16H83.06l-28,56H8a8,8,0,0,0,0,16H47.06L24.84,188.42a8,8,0,0,0,3.58,10.73A7.9,7.9,0,0,0,32,200a8,8,0,0,0,7.17-4.42L64.94,144H191.06l25.78,51.58A8,8,0,0,0,224,200a7.9,7.9,0,0,0,3.57-.85,8,8,0,0,0,3.58-10.73L208.94,144H248a8,8,0,0,0,0-16ZM72.94,128l28-56h54.12l28,56Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};
