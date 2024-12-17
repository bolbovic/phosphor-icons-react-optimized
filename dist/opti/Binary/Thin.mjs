var Z = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var r = (a, s, e) => s in a ? Z(a, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[s] = e, i = (a, s) => {
  for (var e in s || (s = {}))
    l.call(s, e) && r(a, e, s[e]);
  if (c)
    for (var e of c(s))
      o.call(s, e) && r(a, e, s[e]);
  return a;
};
var p = (a, s) => {
  var e = {};
  for (var t in a)
    l.call(a, t) && s.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && c)
    for (var t of c(a))
      s.indexOf(t) < 0 && o.call(a, t) && (e[t] = a[t]);
  return e;
};
import C, { forwardRef as n } from "react";
import f from "../../lib/OptiBase.mjs";
const M = n((t, e) => {
  var m = t, { children: a } = m, s = p(m, ["children"]);
  return /* @__PURE__ */ C.createElement(f, i({ ref: e }, s), a, /* @__PURE__ */ C.createElement("path", { d: "M94,28c-10.92,0-19.93,5-26.08,14.31C62.81,50.09,60,60.64,60,72s2.81,21.91,7.92,29.7C74.07,111.05,83.08,116,94,116s19.93-5,26.08-14.3C125.19,93.91,128,83.37,128,72s-2.81-21.91-7.92-29.69C113.93,33,104.92,28,94,28Zm0,80c-18,0-26-18.08-26-36s8-36,26-36,26,18.08,26,36S112,108,94,108Zm98.08,46.31C185.93,145,176.92,140,166,140s-19.93,4.95-26.08,14.31C134.81,162.09,132,172.64,132,184s2.81,21.91,7.92,29.7c6.15,9.35,15.16,14.3,26.08,14.3s19.93-4.95,26.08-14.3c5.11-7.79,7.92-18.33,7.92-29.7S197.19,162.09,192.08,154.31ZM166,220c-18,0-26-18.08-26-36s8-36,26-36,26,18.08,26,36S184,220,166,220ZM148.5,47.28a4,4,0,0,1,1.56-5.44l24-13.34A4,4,0,0,1,180,32v80a4,4,0,0,1-8,0V38.8l-18.06,10A4,4,0,0,1,148.5,47.28ZM100,144v80a4,4,0,0,1-8,0V150.8l-18.06,10a4,4,0,1,1-3.88-7l24-13.34A4,4,0,0,1,100,144Z" }));
});
M.displayName = "Thin";
export {
  M as Thin
};
