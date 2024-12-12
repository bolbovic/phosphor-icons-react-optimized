var d = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, t, a) => t in e ? d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, f = (e, t) => {
  for (var a in t || (t = {}))
    l.call(t, a) && o(e, a, t[a]);
  if (m)
    for (var a of m(t))
      p.call(t, a) && o(e, a, t[a]);
  return e;
};
var s = (e, t) => {
  var a = {};
  for (var r in e)
    l.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && m)
    for (var r of m(e))
      t.indexOf(r) < 0 && p.call(e, r) && (a[r] = e[r]);
  return a;
};
import Z, { forwardRef as i } from "react";
import v from "../../lib/OptiBase.mjs";
const H = i((r, a) => {
  var c = r, { children: e } = c, t = s(c, ["children"]);
  return /* @__PURE__ */ Z.createElement(v, f({ ref: a }, t), e, /* @__PURE__ */ Z.createElement("path", { d: "M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.27,47,25.53a8,8,0,0,0,4.2,0c1-.26,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm0,16v56c0,2.71-.08,5.37-.23,8H136V56ZM48,56h72v64H48.23c-.15-2.63-.23-5.29-.23-8Zm2.06,80H120v84.55a130.85,130.85,0,0,1-30.93-18.74C67.92,184.51,54.87,162.44,50.08,136ZM167.4,201.42A131.31,131.31,0,0,1,136,220.53V136h69.91C201.16,162.24,188.27,184.18,167.4,201.42Z" }));
});
H.displayName = "Regular";
export {
  H as Regular,
  H as default
};
