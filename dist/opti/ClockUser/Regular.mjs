var d = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, f = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      s.call(t, e) && o(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && s.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as i } from "react";
import R from "../../lib/OptiBase.mjs";
const Z = i((r, e) => {
  var l = r, { children: a } = l, t = A(l, ["children"]);
  return /* @__PURE__ */ c.createElement(R, f({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M136,72v43.05l36.42-18.21a8,8,0,0,1,7.16,14.31l-48,24A8,8,0,0,1,120,128V72a8,8,0,0,1,16,0Zm-8,144a88,88,0,1,1,88-88,8,8,0,0,0,16,0A104,104,0,1,0,128,232a8,8,0,0,0,0-16Zm103.73,5.94a8,8,0,1,1-15.46,4.11C213.44,215.42,203.46,208,192,208s-21.44,7.42-24.27,18.05A8,8,0,0,1,160,232a8.15,8.15,0,0,1-2.06-.27,8,8,0,0,1-5.67-9.79,40,40,0,0,1,17.11-23.32,32,32,0,1,1,45.23,0A40,40,0,0,1,231.73,221.94ZM176,176a16,16,0,1,0,16-16A16,16,0,0,0,176,176Z" }));
});
Z.displayName = "Regular";
export {
  Z as Regular,
  Z as default
};
