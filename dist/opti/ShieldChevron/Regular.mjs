var A = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, r, a) => r in e ? A(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, f = (e, r) => {
  for (var a in r || (r = {}))
    c.call(r, a) && o(e, a, r[a]);
  if (l)
    for (var a of l(r))
      p.call(r, a) && o(e, a, r[a]);
  return e;
};
var i = (e, r) => {
  var a = {};
  for (var t in e)
    c.call(e, t) && r.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && l)
    for (var t of l(e))
      r.indexOf(t) < 0 && p.call(e, t) && (a[t] = e[t]);
  return a;
};
import s, { forwardRef as R } from "react";
import d from "../../lib/OptiBase.mjs";
const n = R((t, a) => {
  var m = t, { children: e } = m, r = i(m, ["children"]);
  return /* @__PURE__ */ s.createElement(d, f({ ref: a }, r), e, /* @__PURE__ */ s.createElement("path", { d: "M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.26,47,25.53a8,8,0,0,0,4.2,0c1-.27,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40ZM167.4,201.42A129.3,129.3,0,0,1,128,223.62a128.25,128.25,0,0,1-38.92-21.81,111.82,111.82,0,0,1-24.51-27.64L128,129.77l63.43,44.4A111.56,111.56,0,0,1,167.4,201.42ZM208,112q0,26.31-9.14,47.84l-66.27-46.39a8,8,0,0,0-9.18,0L57.13,159.84C51.06,145.52,48,129.54,48,112l0-56,160,0Z" }));
});
n.displayName = "Regular";
export {
  n as Regular
};
