var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (e, t, a) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, c = (e, t) => {
  for (var a in t || (t = {}))
    d.call(t, a) && p(e, a, t[a]);
  if (r)
    for (var a of r(t))
      l.call(t, a) && p(e, a, t[a]);
  return e;
};
var f = (e, t) => {
  var a = {};
  for (var o in e)
    d.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && l.call(e, o) && (a[o] = e[o]);
  return a;
};
import i, { forwardRef as n } from "react";
import B from "../../lib/OptiBase.mjs";
const E = n((o, a) => {
  var m = o, { children: e } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(B, c({ ref: a }, t), e, /* @__PURE__ */ i.createElement("path", { d: "M144,204a16,16,0,1,1-16-16A16,16,0,0,1,144,204Zm31.06-48.7a80,80,0,0,0-94.12,0,12,12,0,1,0,14.13,19.4,56,56,0,0,1,65.86,0,12,12,0,1,0,14.13-19.4Z" }));
});
E.displayName = "Bold";
export {
  E as Bold
};
