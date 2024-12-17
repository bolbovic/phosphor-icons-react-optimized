var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      H.call(t, e) && m(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && H.call(a, o) && (e[o] = a[o]);
  return e;
};
import f, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const Z = s((o, e) => {
  var l = o, { children: a } = l, t = c(l, ["children"]);
  return /* @__PURE__ */ f.createElement(A, d({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M250.82,170.8A12,12,0,0,0,240,164H148V148h68a12,12,0,0,0,8.88-20.07L148,43.36V12a12,12,0,0,0-21.19-7.71l-104,124A12,12,0,0,0,32,148h92v16H16a12,12,0,0,0-9.37,19.5l29.6,37A19.9,19.9,0,0,0,51.84,228H204.16a19.9,19.9,0,0,0,15.61-7.51l29.6-37A12,12,0,0,0,250.82,170.8ZM188.87,124H148V79ZM57.73,124,124,45v79Zm144.5,80H53.77L41,188H215Z" }));
});
Z.displayName = "Bold";
export {
  Z as Bold
};
