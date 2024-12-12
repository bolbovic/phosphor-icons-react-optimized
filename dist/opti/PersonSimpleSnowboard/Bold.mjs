var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && r(a, e, t[e]);
  if (m)
    for (var e of m(t))
      d.call(t, e) && r(a, e, t[e]);
  return a;
};
var L = (a, t) => {
  var e = {};
  for (var l in a)
    p.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && d.call(a, l) && (e[l] = a[l]);
  return e;
};
import Z, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((l, e) => {
  var o = l, { children: a } = o, t = L(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(i, A({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M168,80a32,32,0,1,0-32-32A32,32,0,0,0,168,80Zm0-40a8,8,0,1,1-8,8A8,8,0,0,1,168,40Zm51.38,68.48-136-40a12,12,0,0,0-6.77,23L112.25,102l-28.64,43L44,133.27a30.79,30.79,0,0,0-27.38,4.94A31.18,31.18,0,0,0,4,163.39,31.53,31.53,0,0,0,26.43,193.5h0L180,238.71a31.23,31.23,0,0,0,40-30.11,31.52,31.52,0,0,0-22.44-30.11l-39.74-11.7L170,148.68a12,12,0,0,0-6.62-18.21l-34.56-10,7.58-11.38,76.25,22.43a12,12,0,1,0,6.77-23ZM196,208.6a7.36,7.36,0,0,1-3,6,6.92,6.92,0,0,1-6.23,1.13L33.21,170.48A7.46,7.46,0,0,1,31,157.42a7,7,0,0,1,6.23-1.13l153.59,45.22A7.39,7.39,0,0,1,196,208.6ZM140.88,149l-7.2,10.73-26-7.64,7.1-10.64Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
