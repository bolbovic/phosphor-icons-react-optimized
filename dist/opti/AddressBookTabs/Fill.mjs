var H = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import s, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const A = f((m, e) => {
  var l = m, { children: a } = l, t = c(l, ["children"]);
  return /* @__PURE__ */ s.createElement(h, Z({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,48h24V88H184Zm0,56h24v48H184Zm-38,71.75a8,8,0,0,1-9.74-5.76c-2.63-10.26-13.06-18-24.25-18s-21.61,7.74-24.25,18a8,8,0,0,1-15.5-4,39.84,39.84,0,0,1,17.19-23.34,32,32,0,1,1,45.12,0A39.76,39.76,0,0,1,151.75,166,8,8,0,0,1,146,175.75ZM208,208H184V168h24v40Zm-80-88a16,16,0,1,1-16-16A16,16,0,0,1,128,120Z" }));
});
A.displayName = "Fill";
export {
  A as Fill
};
