var n = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var m = (a, c, e) => c in a ? n(a, c, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[c] = e, p = (a, c) => {
  for (var e in c || (c = {}))
    o.call(c, e) && m(a, e, c[e]);
  if (l)
    for (var e of l(c))
      i.call(c, e) && m(a, e, c[e]);
  return a;
};
var s = (a, c) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && c.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && l)
    for (var t of l(a))
      c.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import Z, { forwardRef as A } from "react";
import M from "../../lib/OptiBase.mjs";
const f = A((t, e) => {
  var r = t, { children: a } = r, c = s(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(M, p({ ref: e }, c), a, /* @__PURE__ */ Z.createElement("path", { d: "M241.79,76.42,194.37,52.71C189.84,42.92,176.36,36,160,36c-20.19,0-36,10.54-36,24a17.55,17.55,0,0,0,2.2,8.43L101.65,80.7A49.17,49.17,0,0,0,80,76c-20.19,0-36,10.54-36,24a17.55,17.55,0,0,0,2.2,8.43l-32,16A4,4,0,0,0,12,128v64a4,4,0,0,0,2.21,3.58l64,32a4,4,0,0,0,3.58,0l160-80A4,4,0,0,0,244,144V80A4,4,0,0,0,241.79,76.42ZM160,44c15.18,0,28,7.33,28,16s-12.82,16-28,16-28-7.33-28-16S144.82,44,160,44ZM131.43,74.76C138,80.41,148.23,84,160,84c19,0,34.09-9.32,35.83-21.61L231.06,80,80,155.53,24.94,128l26.49-13.24C58,120.41,68.23,124,80,124c20.19,0,36-10.54,36-24,0-5.34-2.49-10.21-6.75-14.15ZM80,84c15.18,0,28,7.33,28,16s-12.82,16-28,16c-10.49,0-19.85-3.5-24.63-8.52-.09-.12-.19-.21-.28-.31A10.7,10.7,0,0,1,52,100C52,91.33,64.82,84,80,84ZM20,134.47l56,28v55.06l-56-28Zm64,83.06V162.47l152-76v55.06Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
