var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (a, r, e) => r in a ? i(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, V = (a, r) => {
  for (var e in r || (r = {}))
    H.call(r, e) && p(a, e, r[e]);
  if (m)
    for (var e of m(r))
      l.call(r, e) && p(a, e, r[e]);
  return a;
};
var c = (a, r) => {
  var e = {};
  for (var t in a)
    H.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && l.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import R from "../../lib/OptiBase.mjs";
const d = s((t, e) => {
  var o = t, { children: a } = o, r = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(R, V({ ref: e }, r), a, /* @__PURE__ */ f.createElement("path", { d: "M240,192a8,8,0,0,1-8,8H200v32a8,8,0,0,1-16,0V200H64a8,8,0,0,1-8-8V72H24a8,8,0,0,1,0-16H56V24a8,8,0,0,1,16,0V184H232A8,8,0,0,1,240,192ZM96,72h88v88a8,8,0,0,0,16,0V64a8,8,0,0,0-8-8H96a8,8,0,0,0,0,16Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};
