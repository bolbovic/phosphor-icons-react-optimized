var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && p(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && p(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var o in a)
    H.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && d.call(a, o) && (e[o] = a[o]);
  return e;
};
import f, { forwardRef as s } from "react";
import V from "../../lib/OptiBase.mjs";
const Z = s((o, e) => {
  var m = o, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(V, l({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M208,144H140V98.32a44,44,0,1,0-24,0V144H48a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V164A20,20,0,0,0,208,144ZM108,56a20,20,0,1,1,20,20A20,20,0,0,1,108,56Zm96,148H52V168H204ZM172,104h32a12,12,0,0,1,0,24H172a12,12,0,0,1,0-24Z" }));
});
Z.displayName = "Bold";
export {
  Z as Bold
};
