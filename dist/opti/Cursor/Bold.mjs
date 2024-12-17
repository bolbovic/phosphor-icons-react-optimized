var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && m(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && m(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var l in a)
    c.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && o)
    for (var l of o(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import f, { forwardRef as s } from "react";
import n from "../../lib/OptiBase.mjs";
const B = s((l, e) => {
  var r = l, { children: a } = r, t = A(r, ["children"]);
  return /* @__PURE__ */ f.createElement(n, d({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M224.15,179.17l-46.83-46.82,37.93-13.51.76-.3a20,20,0,0,0-1.76-37.27L54.16,29A20,20,0,0,0,29,54.16L81.27,214.24A20,20,0,0,0,118.54,216c.11-.25.21-.5.3-.76l13.51-37.92,46.83,46.82a20,20,0,0,0,28.28,0l16.69-16.68A20,20,0,0,0,224.15,179.17Zm-30.83,25.17-48.48-48.48A20,20,0,0,0,130.7,150a20.66,20.66,0,0,0-3.74.35A20,20,0,0,0,112.35,162c-.11.25-.21.5-.3.76L100.4,195.5,54.29,54.29l141.21,46.1-32.71,11.66c-.26.09-.51.19-.76.3a20,20,0,0,0-6.17,32.48h0l48.49,48.48Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
