var R = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? R(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, f = (a, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && o(a, e, r[e]);
  if (l)
    for (var e of l(r))
      c.call(r, e) && o(a, e, r[e]);
  return a;
};
var i = (a, r) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && l)
    for (var t of l(a))
      r.indexOf(t) < 0 && c.call(a, t) && (e[t] = a[t]);
  return e;
};
import s, { forwardRef as V } from "react";
import d from "../../lib/OptiBase.mjs";
const h = V((t, e) => {
  var m = t, { children: a } = m, r = i(m, ["children"]);
  return /* @__PURE__ */ s.createElement(d, f({ ref: e }, r), a, /* @__PURE__ */ s.createElement("path", { d: "M237.66,122.34l-96-96A8,8,0,0,0,128,32V72H48A16,16,0,0,0,32,88v80a16,16,0,0,0,16,16h80v40a8,8,0,0,0,13.66,5.66l96-96A8,8,0,0,0,237.66,122.34ZM144,204.69V176a8,8,0,0,0-8-8H48V88h88a8,8,0,0,0,8-8V51.31L220.69,128Z" }));
});
h.displayName = "Regular";
export {
  h as Regular
};
