var l = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, c, e) => c in a ? l(a, c, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[c] = e, n = (a, c) => {
  for (var e in c || (c = {}))
    i.call(c, e) && o(a, e, c[e]);
  if (m)
    for (var e of m(c))
      p.call(c, e) && o(a, e, c[e]);
  return a;
};
var Z = (a, c) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && c.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      c.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const d = s((t, e) => {
  var r = t, { children: a } = r, c = Z(r, ["children"]);
  return /* @__PURE__ */ f.createElement(A, n({ ref: e }, c), a, /* @__PURE__ */ f.createElement("path", { d: "M176,100a28,28,0,1,0-28-28A28,28,0,0,0,176,100Zm0-48a20,20,0,1,1-20,20A20,20,0,0,1,176,52Zm43.08,135.84a4,4,0,0,1-.53,5.63C203.56,205.9,188.9,212,173.93,212a54.84,54.84,0,0,1-6.12-.34c-15-1.65-28.6-9-41.72-16.14-25.52-13.86-49.62-27-83.54,1.18a4,4,0,0,1-5.1-6.16c17-14.12,33.62-20.07,50.74-18.19,15,1.65,28.6,9,41.72,16.14,25.52,13.86,49.62,26.94,83.54-1.18A4,4,0,0,1,219.08,187.84ZM40,84H64.24a91.4,91.4,0,0,1,48.37,13.73L78.19,132.16c-13.63,1-27,7-40.74,18.38a4,4,0,0,0,5.1,6.16c33.92-28.13,58-15,83.54-1.18,13.12,7.12,26.69,14.49,41.72,16.14a54.84,54.84,0,0,0,6.12.34c15,0,29.63-6.1,44.62-18.53a4,4,0,1,0-5.1-6.16c-8.12,6.73-15.68,11.1-22.83,13.66L135,105.29A99.34,99.34,0,0,0,64.24,76H40a4,4,0,0,0,0,8Zm141.66,79.32c-18.77,3.07-35-5.71-51.75-14.83-12.83-7-26.09-14.15-40.73-16l30.16-30.16a94,94,0,0,1,9.95,8.63Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
