var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var p = (e, t, a) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, s = (e, t) => {
  for (var a in t || (t = {}))
    n.call(t, a) && p(e, a, t[a]);
  if (o)
    for (var a of o(t))
      i.call(t, a) && p(e, a, t[a]);
  return e;
};
var d = (e, t) => {
  var a = {};
  for (var c in e)
    n.call(e, c) && t.indexOf(c) < 0 && (a[c] = e[c]);
  if (e != null && o)
    for (var c of o(e))
      t.indexOf(c) < 0 && i.call(e, c) && (a[c] = e[c]);
  return a;
};
import r, { forwardRef as l } from "react";
import M from "../../lib/OptiBase.mjs";
const Z = l((c, a) => {
  var m = c, { children: e } = m, t = d(m, ["children"]);
  return /* @__PURE__ */ r.createElement(M, s({ ref: a }, t), e, /* @__PURE__ */ r.createElement("path", { d: "M160,64a32,32,0,1,1-32-32A32,32,0,0,1,160,64Z", opacity: "0.2" }), /* @__PURE__ */ r.createElement("path", { d: "M120,103.2V176a8,8,0,0,0,16,0V103.2a40,40,0,1,0-16,0ZM128,40a24,24,0,1,1-24,24A24,24,0,0,1,128,40ZM240,176c0,31.18-57.71,48-112,48S16,207.18,16,176c0-7.74,3.81-19.13,22-29.41,12.26-6.94,29.12-12.27,48.77-15.42A8,8,0,1,1,89.27,147c-17.54,2.82-33,7.63-43.42,13.55C37.05,165.5,32,171.14,32,176c0,13.36,36.52,32,96,32s96-18.64,96-32c0-4.86-5.05-10.5-13.85-15.49-10.46-5.92-25.88-10.73-43.42-13.55a8,8,0,1,1,2.54-15.79c19.65,3.15,36.51,8.48,48.77,15.42C236.19,156.87,240,168.26,240,176Z" }));
});
Z.displayName = "Duotone";
export {
  Z as Duotone
};
