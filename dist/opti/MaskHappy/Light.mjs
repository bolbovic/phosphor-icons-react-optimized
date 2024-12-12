var f = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var s = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && s(a, e, t[e]);
  if (c)
    for (var e of c(t))
      i.call(t, e) && s(a, e, t[e]);
  return a;
};
var C = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && c)
    for (var m of c(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as A } from "react";
import S from "../../lib/OptiBase.mjs";
const d = A((m, e) => {
  var r = m, { children: a } = r, t = C(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(S, p({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M188.47,124a6,6,0,1,1-8.94,8c-3.06-3.42-9.74-6-15.53-6s-12.47,2.58-15.53,6a6,6,0,0,1-8.94-8c5.35-6,15.19-10,24.47-10S183.12,118,188.47,124Zm-80.94,8a6,6,0,1,0,8.94-8c-5.35-6-15.19-10-24.47-10s-19.12,4-24.47,10a6,6,0,1,0,8.94,8c3.06-3.42,9.74-6,15.53-6S104.47,128.58,107.53,132Zm58.73,31.43a6,6,0,0,0-8.46.67,38.89,38.89,0,0,1-59.6,0,6,6,0,1,0-9.13,7.79,50.9,50.9,0,0,0,77.86,0A6,6,0,0,0,166.26,163.43ZM222,48v55.77c0,35.45-9.53,68.86-26.83,94.06C177.4,223.74,153.54,238,128,238s-49.4-14.26-67.17-40.16C43.53,172.64,34,139.23,34,103.78V48A14,14,0,0,1,53.06,35C67.25,40.46,95.86,49.7,128,49.7S188.75,40.46,202.94,35A14,14,0,0,1,222,48Zm-12,0a2,2,0,0,0-.87-1.66,1.93,1.93,0,0,0-1.85-.21C192.31,52,162.1,61.7,128,61.7S63.69,52,48.72,46.14a2,2,0,0,0-1.85.21A2,2,0,0,0,46,48v55.76C46,171.17,82.79,226,128,226s82-54.83,82-122.22Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
