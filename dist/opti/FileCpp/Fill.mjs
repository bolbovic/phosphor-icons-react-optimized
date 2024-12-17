var h = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      H.call(t, e) && o(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var l in a)
    A.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && H.call(a, l) && (e[l] = a[l]);
  return e;
};
import p, { forwardRef as s } from "react";
import v from "../../lib/OptiBase.mjs";
const V = s((l, e) => {
  var r = l, { children: a } = r, t = i(r, ["children"]);
  return /* @__PURE__ */ p.createElement(v, c({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M44,120H212a4,4,0,0,0,4-4V88a8,8,0,0,0-2.34-5.66l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v76A4,4,0,0,0,44,120ZM152,44l44,44H152ZM48,180c0,11,7.18,20,16,20a14.07,14.07,0,0,0,10.07-4.51,8.19,8.19,0,0,1,10.88-.9,8,8,0,0,1,.83,11.81A30.06,30.06,0,0,1,64,216c-17.65,0-32-16.15-32-36s14.35-36,32-36a30,30,0,0,1,21.39,9.2,8.24,8.24,0,0,1,.73,11.08,8,8,0,0,1-11.9.38A14.18,14.18,0,0,0,64,160C55.18,160,48,169,48,180Zm108,.53a8.18,8.18,0,0,1-8.25,7.47H136v11.73a8.17,8.17,0,0,1-7.47,8.25,8,8,0,0,1-8.53-8V188H108.27a8.18,8.18,0,0,1-8.25-7.47,8,8,0,0,1,8-8.53h12V160.27a8.17,8.17,0,0,1,7.47-8.25,8,8,0,0,1,8.53,8v12h12A8,8,0,0,1,156,180.53Zm68,0a8.18,8.18,0,0,1-8.25,7.47H204v11.73a8.17,8.17,0,0,1-7.47,8.25,8,8,0,0,1-8.53-8V188H176.27a8.18,8.18,0,0,1-8.25-7.47,8,8,0,0,1,8-8.53h12V160.27a8.17,8.17,0,0,1,7.47-8.25,8,8,0,0,1,8.53,8v12h12A8,8,0,0,1,224,180.53Z" }));
});
V.displayName = "Fill";
export {
  V as Fill
};
