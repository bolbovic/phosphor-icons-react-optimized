var d = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var C = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (e, a, t) => a in e ? d(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, p = (e, a) => {
  for (var t in a || (a = {}))
    C.call(a, t) && o(e, t, a[t]);
  if (c)
    for (var t of c(a))
      i.call(a, t) && o(e, t, a[t]);
  return e;
};
var s = (e, a) => {
  var t = {};
  for (var r in e)
    C.call(e, r) && a.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && c)
    for (var r of c(e))
      a.indexOf(r) < 0 && i.call(e, r) && (t[r] = e[r]);
  return t;
};
import f, { forwardRef as h } from "react";
import l from "../../lib/OptiBase.mjs";
const n = h((r, t) => {
  var m = r, { children: e } = m, a = s(m, ["children"]);
  return /* @__PURE__ */ f.createElement(l, p({ ref: t }, a), e, /* @__PURE__ */ f.createElement("path", { d: "M210.34,45.66C194,29.35,170,22.87,142.79,27.42,116.28,31.83,89.71,46.24,68,68s-36.14,48.3-40.56,74.81C22.87,170,29.35,194,45.66,210.34,58.57,223.25,76.29,230,96.64,230a101.59,101.59,0,0,0,16.57-1.41c26.51-4.42,53.08-18.83,74.82-40.56s36.14-48.31,40.56-74.82C233.13,86,226.65,62,210.34,45.66ZM76.46,76.46C101.52,51.4,132.46,38,159.18,38c12.58,0,24.22,3,33.87,9.12a108,108,0,0,0-34.71,18c-18.82,14.86-31,35.62-36.22,61.71C112,177.35,75.18,194,52,199.5,26.3,170.42,36.83,116.09,76.46,76.46ZM179.54,179.54C142.68,216.4,93.1,228.1,63,208.91a108,108,0,0,0,34.71-18c18.82-14.86,31-35.62,36.22-61.71C144,78.65,180.82,62,204.05,56.5,229.7,85.59,219.17,139.91,179.54,179.54Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
