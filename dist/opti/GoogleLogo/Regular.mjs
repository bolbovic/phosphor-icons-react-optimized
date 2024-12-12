var R = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var p = (e, r, a) => r in e ? R(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, f = (e, r) => {
  for (var a in r || (r = {}))
    l.call(r, a) && p(e, a, r[a]);
  if (m)
    for (var a of m(r))
      c.call(r, a) && p(e, a, r[a]);
  return e;
};
var i = (e, r) => {
  var a = {};
  for (var t in e)
    l.call(e, t) && r.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && m)
    for (var t of m(e))
      r.indexOf(t) < 0 && c.call(e, t) && (a[t] = e[t]);
  return a;
};
import s, { forwardRef as d } from "react";
import n from "../../lib/OptiBase.mjs";
const g = d((t, a) => {
  var o = t, { children: e } = o, r = i(o, ["children"]);
  return /* @__PURE__ */ s.createElement(n, f({ ref: a }, r), e, /* @__PURE__ */ s.createElement("path", { d: "M224,128a96,96,0,1,1-21.95-61.09,8,8,0,1,1-12.33,10.18A80,80,0,1,0,207.6,136H128a8,8,0,0,1,0-16h88A8,8,0,0,1,224,128Z" }));
});
g.displayName = "Regular";
export {
  g as Regular
};
