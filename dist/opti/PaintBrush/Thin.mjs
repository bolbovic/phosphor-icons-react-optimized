var A = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var c in a)
    i.call(a, c) && t.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && m)
    for (var c of m(a))
      t.indexOf(c) < 0 && p.call(a, c) && (e[c] = a[c]);
  return e;
};
import s, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const h = Z((c, e) => {
  var r = c, { children: a } = r, t = f(r, ["children"]);
  return /* @__PURE__ */ s.createElement(d, n({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M224,28c-20.29,0-43.16,11.24-68,33.4-18.47,16.49-34.39,35.83-45,49.93A56,56,0,0,0,36,164c0,33.22-21.26,48-22.22,48.68A4,4,0,0,0,16,220H92a56,56,0,0,0,52.67-75c14.11-10.63,33.44-26.55,49.93-45C216.76,75.16,228,52.29,228,32A4,4,0,0,0,224,28ZM92,212H26.35C33.91,203.69,44,188.08,44,164a48,48,0,1,1,48,48Zm26.52-97.31c4.13-5.44,9.32-12,15.29-18.9a80.08,80.08,0,0,1,26.4,26.4c-6.94,6-13.46,11.16-18.9,15.29A56.32,56.32,0,0,0,118.52,114.69Zm47.77,2.14a88.17,88.17,0,0,0-27.12-27.12C161,65.43,191.26,38.63,219.82,36.18,217.37,64.74,190.57,95,166.29,116.83Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
