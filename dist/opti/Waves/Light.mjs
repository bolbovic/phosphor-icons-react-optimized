var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var c in a)
    i.call(a, c) && t.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && r)
    for (var c of r(a))
      t.indexOf(c) < 0 && p.call(a, c) && (e[c] = a[c]);
  return e;
};
import d, { forwardRef as l } from "react";
import n from "../../lib/OptiBase.mjs";
const Z = l((c, e) => {
  var m = c, { children: a } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ d.createElement(n, s({ ref: e }, t), a, /* @__PURE__ */ d.createElement("path", { d: "M220.62,178.58a6,6,0,0,1-.79,8.45c-16.87,14-32,19-45.75,19-18.19,0-34.13-8.66-48.94-16.7-26-14.12-48.44-26.31-81.31,1A6,6,0,0,1,36.17,181c39.13-32.45,68.65-16.41,94.69-2.26s48.44,26.31,81.31-1A6,6,0,0,1,220.62,178.58Zm-8.45-56.81c-32.87,27.27-55.32,15.07-81.31,1S75.3,92.54,36.17,125a6,6,0,0,0,7.66,9.25c32.87-27.27,55.32-15.08,81.31-1,14.81,8,30.75,16.71,48.94,16.71,13.79,0,28.88-5,45.75-19a6,6,0,0,0-7.66-9.24ZM43.83,78.21c32.87-27.27,55.32-15.07,81.31-1C140,85.3,155.89,94,174.08,94c13.79,0,28.88-5,45.75-19a6,6,0,1,0-7.66-9.24c-32.87,27.27-55.32,15.07-81.31,1S75.3,36.52,36.17,69a6,6,0,1,0,7.66,9.24Z" }));
});
Z.displayName = "Light";
export {
  Z as Light
};
