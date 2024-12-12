var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, l, e) => l in a ? i(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, d = (a, l) => {
  for (var e in l || (l = {}))
    V.call(l, e) && m(a, e, l[e]);
  if (o)
    for (var e of o(l))
      p.call(l, e) && m(a, e, l[e]);
  return a;
};
var c = (a, l) => {
  var e = {};
  for (var t in a)
    V.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import M from "../../lib/OptiBase.mjs";
const Z = s((t, e) => {
  var r = t, { children: a } = r, l = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(M, d({ ref: e }, l), a, /* @__PURE__ */ f.createElement("path", { d: "M237.5,66.8,131.3,36.46a12.07,12.07,0,0,0-5-.34l-105.13,15A20.1,20.1,0,0,0,4,70.94V185.06a20.1,20.1,0,0,0,17.17,19.8l105.13,15a12.15,12.15,0,0,0,1.7.12,12,12,0,0,0,3.3-.46L237.5,189.2A20.09,20.09,0,0,0,252,170V86A20.08,20.08,0,0,0,237.5,66.8ZM92,116H84V66.41l32-4.57V194.16l-32-4.57V140h8a12,12,0,0,0,0-24ZM28,74.41l32-4.57V116H52a12,12,0,0,0,0,24h8v46.16l-32-4.57ZM228,167l-88,25.14V63.91l88,25.14Z" }));
});
Z.displayName = "Bold";
export {
  Z as Bold
};
