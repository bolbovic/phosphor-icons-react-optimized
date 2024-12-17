var f = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    L.call(t, e) && r(a, e, t[e]);
  if (l)
    for (var e of l(t))
      c.call(t, e) && r(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var m in a)
    L.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && l)
    for (var m of l(a))
      t.indexOf(m) < 0 && c.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((m, e) => {
  var o = m, { children: a } = o, t = d(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M80,144a40,40,0,1,0,40,40A40,40,0,0,0,80,144Zm0,56a16,16,0,1,1,16-16A16,16,0,0,1,80,200ZM48,128a12,12,0,0,1-8.49-20.49L51,96,39.51,84.49a12,12,0,0,1,17-17L68,79,79.51,67.51a12,12,0,0,1,17,17L85,96l11.52,11.51a12,12,0,0,1-17,17L68,113,56.49,124.49A12,12,0,0,1,48,128Zm184.49,75.51a12,12,0,0,1-17,17L204,209l-11.51,11.52a12,12,0,0,1-17-17L187,192l-11.52-11.51a12,12,0,0,1,17-17L204,175l11.51-11.52a12,12,0,0,1,17,17L221,192Zm-43.4-92.62c-5.21,23-23.33,43.53-45.09,51.22a12,12,0,1,1-8-22.63c14.07-5,26.27-18.91,29.67-33.9,2.37-10.46.4-20.84-5.68-30.54v9a12,12,0,0,1-24,0V44a12,12,0,0,1,12-12h40a12,12,0,0,1,0,24H176C188.77,72.61,193.42,91.76,189.09,110.89Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
