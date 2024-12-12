var d = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, a, t) => a in e ? d(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, f = (e, a) => {
  for (var t in a || (a = {}))
    i.call(a, t) && o(e, t, a[t]);
  if (c)
    for (var t of c(a))
      p.call(a, t) && o(e, t, a[t]);
  return e;
};
var s = (e, a) => {
  var t = {};
  for (var r in e)
    i.call(e, r) && a.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && c)
    for (var r of c(e))
      a.indexOf(r) < 0 && p.call(e, r) && (t[r] = e[r]);
  return t;
};
import C, { forwardRef as h } from "react";
import l from "../../lib/OptiBase.mjs";
const n = h((r, t) => {
  var m = r, { children: e } = m, a = s(m, ["children"]);
  return /* @__PURE__ */ C.createElement(l, f({ ref: t }, a), e, /* @__PURE__ */ C.createElement("path", { d: "M237.43,130.55C215.84,176.57,197,198,178,198c-23.83,0-39.2-32.76-55.47-67.45C109.26,102.17,94.17,70,78,70c-9.18,0-25,10.5-48.53,60.55a6,6,0,0,1-10.86-5.1C40.16,79.43,59,58,78,58c23.83,0,39.2,32.76,55.47,67.45C146.74,153.83,161.83,186,178,186c9.18,0,25.05-10.5,48.53-60.55a6,6,0,0,1,10.86,5.1Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
