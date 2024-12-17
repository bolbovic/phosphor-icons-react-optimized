var H = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var c = (e, t, a) => t in e ? H(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, h = (e, t) => {
  for (var a in t || (t = {}))
    l.call(t, a) && c(e, a, t[a]);
  if (r)
    for (var a of r(t))
      n.call(t, a) && c(e, a, t[a]);
  return e;
};
var i = (e, t) => {
  var a = {};
  for (var o in e)
    l.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && n.call(e, o) && (a[o] = e[o]);
  return a;
};
import m, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const s = d((o, a) => {
  var p = o, { children: e } = p, t = i(p, ["children"]);
  return /* @__PURE__ */ m.createElement(f, h({ ref: a }, t), e, /* @__PURE__ */ m.createElement("path", { d: "M200,48l-72,88L56,48Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M206.19,53.07,144.88,128H176a8,8,0,0,1,0,16H136v16h40a8,8,0,0,1,0,16H136v40a8,8,0,0,1-16,0V176H80a8,8,0,0,1,0-16h40V144H80a8,8,0,0,1,0-16h31.12L49.81,53.07A8,8,0,0,1,62.19,42.93L128,123.37l65.81-80.44a8,8,0,1,1,12.38,10.14Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};
