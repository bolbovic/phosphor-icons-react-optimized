var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var l = (e, t, a) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, c = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && l(e, a, t[a]);
  if (r)
    for (var a of r(t))
      d.call(t, a) && l(e, a, t[a]);
  return e;
};
var f = (e, t) => {
  var a = {};
  for (var o in e)
    p.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && d.call(e, o) && (a[o] = e[o]);
  return a;
};
import i, { forwardRef as n } from "react";
import A from "../../lib/OptiBase.mjs";
const B = n((o, a) => {
  var m = o, { children: e } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(A, c({ ref: a }, t), e, /* @__PURE__ */ i.createElement("path", { d: "M225.7,54.46a20,20,0,0,0-20.33.66L132,101.85v-30a19.91,19.91,0,0,0-30.63-16.72L13.19,111.29a19.79,19.79,0,0,0,0,33.42l88.18,56.17A19.91,19.91,0,0,0,132,184.16v-30l73.37,46.73A19.91,19.91,0,0,0,236,184.16V71.84A19.84,19.84,0,0,0,225.7,54.46ZM108,176.64,31.63,128,108,79.36Zm104,0L135.63,128,212,79.36Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
