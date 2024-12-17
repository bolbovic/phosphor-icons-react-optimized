var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && c(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && c(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const l = d((m, e) => {
  var o = m, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(h, s({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M72,68a60,60,0,1,0,60,60A60.07,60.07,0,0,0,72,68Zm0,112a52,52,0,1,1,52-52A52.06,52.06,0,0,1,72,180ZM184,68c-16,0-28,25.79-28,60s12,60,28,60,28-25.79,28-60S200,68,184,68Zm0,112c-9.46,0-20-21.36-20-52s10.54-52,20-52,20,21.36,20,52S193.46,180,184,180ZM244,72V184a4,4,0,0,1-8,0V72a4,4,0,0,1,8,0Z" }));
});
l.displayName = "Thin";
export {
  l as Thin
};
