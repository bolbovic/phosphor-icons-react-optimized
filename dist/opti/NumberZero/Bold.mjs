var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var C = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (e, a, t) => a in e ? f(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, c = (e, a) => {
  for (var t in a || (a = {}))
    C.call(a, t) && m(e, t, a[t]);
  if (r)
    for (var t of r(a))
      p.call(a, t) && m(e, t, a[t]);
  return e;
};
var d = (e, a) => {
  var t = {};
  for (var o in e)
    C.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      a.indexOf(o) < 0 && p.call(e, o) && (t[o] = e[o]);
  return t;
};
import l, { forwardRef as i } from "react";
import n from "../../lib/OptiBase.mjs";
const B = i((o, t) => {
  var s = o, { children: e } = s, a = d(s, ["children"]);
  return /* @__PURE__ */ l.createElement(n, c({ ref: t }, a), e, /* @__PURE__ */ l.createElement("path", { d: "M186.62,61.05c-13.76-21.62-34-33-58.62-33S83.14,39.43,69.38,61.05C58.17,78.66,52,102.44,52,128s6.17,49.33,17.38,66.94C83.14,216.57,103.41,228,128,228s44.86-11.43,58.62-33.06C197.83,177.33,204,153.56,204,128S197.83,78.66,186.62,61.05Zm-20.25,121C157.11,196.62,144.2,204,128,204s-29.11-7.38-38.37-21.94C80.84,168.25,76,149.05,76,128s4.84-40.25,13.63-54.06C98.89,59.38,111.8,52,128,52s29.11,7.38,38.37,21.94C175.16,87.75,180,107,180,128S175.16,168.25,166.37,182.06Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
