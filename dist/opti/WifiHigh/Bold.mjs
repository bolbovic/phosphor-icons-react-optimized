var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    d.call(t, e) && p(a, e, t[e]);
  if (r)
    for (var e of r(t))
      l.call(t, e) && p(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var o in a)
    d.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && l.call(a, o) && (e[o] = a[o]);
  return e;
};
import i, { forwardRef as Z } from "react";
import n from "../../lib/OptiBase.mjs";
const B = Z((o, e) => {
  var m = o, { children: a } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(n, c({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M144,204a16,16,0,1,1-16-16A16,16,0,0,1,144,204ZM239.61,83.91a176,176,0,0,0-223.22,0,12,12,0,1,0,15.23,18.55,152,152,0,0,1,192.76,0,12,12,0,1,0,15.23-18.55Zm-32.16,35.73a128,128,0,0,0-158.9,0,12,12,0,0,0,14.9,18.81,104,104,0,0,1,129.1,0,12,12,0,0,0,14.9-18.81ZM175.07,155.3a80.05,80.05,0,0,0-94.14,0,12,12,0,0,0,14.14,19.4,56,56,0,0,1,65.86,0,12,12,0,1,0,14.14-19.4Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
