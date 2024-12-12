var f = Object.defineProperty;
var s = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && r(a, e, t[e]);
  if (s)
    for (var e of s(t))
      i.call(t, e) && r(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && s)
    for (var m of s(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as C } from "react";
import d from "../../lib/OptiBase.mjs";
const h = C((m, e) => {
  var c = m, { children: a } = c, t = A(c, ["children"]);
  return /* @__PURE__ */ Z.createElement(d, p({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218ZM82,108a10,10,0,1,1,10,10A10,10,0,0,1,82,108Zm72,0a10,10,0,1,1,10,10A10,10,0,0,1,154,108Zm28,60a6,6,0,0,1-6,6c-9,0-13.51-6-16.8-10.4-3-4.06-4.46-5.6-7.2-5.6s-4.15,1.54-7.2,5.6C141.51,168,137,174,128,174s-13.51-6-16.8-10.4c-3-4.06-4.46-5.6-7.2-5.6s-4.15,1.54-7.2,5.6C93.51,168,89,174,80,174a6,6,0,0,1,0-12c2.74,0,4.15-1.54,7.2-5.6C90.49,152,95,146,104,146s13.51,6,16.8,10.4c3,4.06,4.46,5.6,7.2,5.6s4.15-1.54,7.2-5.6C138.49,152,143,146,152,146s13.51,6,16.8,10.4c3,4.06,4.46,5.6,7.2,5.6A6,6,0,0,1,182,168Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
