var A = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      l.call(t, e) && o(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var c in a)
    i.call(a, c) && t.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && r)
    for (var c of r(a))
      t.indexOf(c) < 0 && l.call(a, c) && (e[c] = a[c]);
  return e;
};
import s, { forwardRef as L } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = L((c, e) => {
  var m = c, { children: a } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(Z, p({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M221.72,225.82a6,6,0,0,1-7.54,3.9L128,202.3,41.82,229.72a6,6,0,1,1-3.64-11.44l70-22.28-70-22.28a6,6,0,1,1,3.64-11.44L128,189.7l86.18-27.42a6,6,0,1,1,3.64,11.44l-70,22.28,70,22.28A6,6,0,0,1,221.72,225.82ZM70,108c0-46.81,52.62-79.73,54.86-81.11a6,6,0,0,1,6.28,0C133.38,28.27,186,61.19,186,108a58,58,0,0,1-116,0Zm58,46a18,18,0,0,0,18-18c0-15.48-12-27.43-18-32.44-6,5-18,17-18,32.44A18,18,0,0,0,128,154ZM82,108a45.93,45.93,0,0,0,17,35.67A29.87,29.87,0,0,1,98,136c0-26.9,25.58-44.27,26.67-45a6,6,0,0,1,6.66,0c1.09.72,26.67,18.09,26.67,45a29.87,29.87,0,0,1-1,7.67A45.93,45.93,0,0,0,174,108c0-34.06-35.15-61.22-46-68.78C117.15,46.78,82,73.93,82,108Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
