var A = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, e, l) => e in a ? A(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, c = (a, e) => {
  for (var l in e || (e = {}))
    i.call(e, l) && o(a, l, e[l]);
  if (m)
    for (var l of m(e))
      p.call(e, l) && o(a, l, e[l]);
  return a;
};
var s = (a, e) => {
  var l = {};
  for (var t in a)
    i.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      e.indexOf(t) < 0 && p.call(a, t) && (l[t] = a[t]);
  return l;
};
import f, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const n = Z((t, l) => {
  var r = t, { children: a } = r, e = s(r, ["children"]);
  return /* @__PURE__ */ f.createElement(d, c({ ref: l }, e), a, /* @__PURE__ */ f.createElement("path", { d: "M241.75,51.32a15.87,15.87,0,0,0-13.86-2.77l-3.48.94C205.61,54.56,170.61,64,128,64S50.39,54.56,31.59,49.49l-3.48-.94A16,16,0,0,0,8,64V192a16,16,0,0,0,16,16,16.22,16.22,0,0,0,4.18-.55l3.18-.86C50.13,201.49,85.17,192,128,192s77.87,9.49,96.69,14.59l3.18.86A16,16,0,0,0,248,192V64A15.9,15.9,0,0,0,241.75,51.32ZM204,96a12,12,0,1,1-12,12A12,12,0,0,1,204,96Zm-76,80c-45,0-82.72,10.23-100.87,15.14L24,192v-39.3l46.34-46.35a8,8,0,0,1,11.32,0L152.28,177C144.49,176.35,136.37,176,128,176Zm100.87,15.14a448.7,448.7,0,0,0-51-11.2l-35.26-35.26L157,130.34a8,8,0,0,1,11.31,0l60.89,60.88Z" }));
});
n.displayName = "Fill";
export {
  n as Fill
};
