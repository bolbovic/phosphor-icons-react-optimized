var C = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var c = (e, t, a) => t in e ? C(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, o = (e, t) => {
  for (var a in t || (t = {}))
    A.call(t, a) && c(e, a, t[a]);
  if (m)
    for (var a of m(t))
      l.call(t, a) && c(e, a, t[a]);
  return e;
};
var i = (e, t) => {
  var a = {};
  for (var s in e)
    A.call(e, s) && t.indexOf(s) < 0 && (a[s] = e[s]);
  if (e != null && m)
    for (var s of m(e))
      t.indexOf(s) < 0 && l.call(e, s) && (a[s] = e[s]);
  return a;
};
import p, { forwardRef as f } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = f((s, a) => {
  var r = s, { children: e } = r, t = i(r, ["children"]);
  return /* @__PURE__ */ p.createElement(Z, o({ ref: a }, t), e, /* @__PURE__ */ p.createElement("path", { d: "M217,34.8a15.94,15.94,0,0,0-14.82-1.71C188.15,38.55,159.82,47.71,128,47.71S67.84,38.55,53.79,33.09A16,16,0,0,0,32,48v55.77c0,35.84,9.65,69.65,27.18,95.18,18.16,26.46,42.6,41,68.82,41s50.66-14.57,68.82-41C214.35,173.44,224,139.63,224,103.79V48A16,16,0,0,0,217,34.8ZM66,125.33A8,8,0,0,1,78,114.66c2.68,3,8.85,5.34,14,5.34s11.36-2.35,14-5.34A8,8,0,0,1,118,125.33C112.25,131.71,101.82,136,92,136S71.75,131.71,66,125.33Zm92.62,63.1A8,8,0,0,1,152,192a7.92,7.92,0,0,1-4.42-1.34C141.07,186.34,136,184,128,184s-13.07,2.34-19.57,6.66a8,8,0,0,1-8.86-13.32C108,171.73,116.06,168,128,168s20,3.73,28.43,9.34A8,8,0,0,1,158.66,188.43Zm31.3-63.1c-5.71,6.38-16.14,10.67-26,10.67s-20.25-4.29-26-10.67A8,8,0,0,1,150,114.66c2.68,3,8.85,5.34,14,5.34s11.36-2.35,14-5.34A8,8,0,0,1,190,125.33Z" }));
});
d.displayName = "Fill";
export {
  d as Fill
};
