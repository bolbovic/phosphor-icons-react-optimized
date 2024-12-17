var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, a, t) => a in e ? h(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, f = (e, a) => {
  for (var t in a || (a = {}))
    i.call(a, t) && o(e, t, a[t]);
  if (r)
    for (var t of r(a))
      p.call(a, t) && o(e, t, a[t]);
  return e;
};
var s = (e, a) => {
  var t = {};
  for (var c in e)
    i.call(e, c) && a.indexOf(c) < 0 && (t[c] = e[c]);
  if (e != null && r)
    for (var c of r(e))
      a.indexOf(c) < 0 && p.call(e, c) && (t[c] = e[c]);
  return t;
};
import d, { forwardRef as l } from "react";
import n from "../../lib/OptiBase.mjs";
const g = l((c, t) => {
  var m = c, { children: e } = m, a = s(m, ["children"]);
  return /* @__PURE__ */ d.createElement(n, f({ ref: t }, a), e, /* @__PURE__ */ d.createElement("path", { d: "M220.68,129.34c-14.17,17.62-28.06,26.92-42.46,28.44A40.75,40.75,0,0,1,174,158c-18.64,0-34.44-12.87-49.76-25.35S94.57,108.51,79,110.16c-11.06,1.16-22.3,9-34.36,24a6,6,0,1,1-9.36-7.52c14.17-17.61,28.06-26.92,42.46-28.43,20.52-2.18,37.54,11.7,54,25.12C147,135.76,161.42,147.48,177,145.84c11.06-1.16,22.3-9,34.36-24a6,6,0,0,1,9.36,7.52Z" }));
});
g.displayName = "Light";
export {
  g as Light
};
