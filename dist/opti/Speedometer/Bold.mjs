var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (o)
    for (var e of o(t))
      d.call(t, e) && l(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && d.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as s } from "react";
import n from "../../lib/OptiBase.mjs";
const B = s((m, e) => {
  var r = m, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(n, A({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M119.51,143.51l88-88a12,12,0,1,1,17,17l-88,88a12,12,0,1,1-17-17Zm14.23-43.2a12,12,0,1,0,2.62-23.85A75.15,75.15,0,0,0,128,76a76.08,76.08,0,0,0-76,76,12,12,0,0,0,24,0,52.06,52.06,0,0,1,52-52A54.75,54.75,0,0,1,133.74,100.31Zm101.54,7.5A12,12,0,0,0,213.09,117a92.47,92.47,0,0,1,2.58,63H40.34A92.23,92.23,0,0,1,128,60h.84a91.43,91.43,0,0,1,34.2,6.91,12,12,0,0,0,9.14-22.19A116.07,116.07,0,0,0,18.57,190.58,20.09,20.09,0,0,0,37.46,204H218.53a20.06,20.06,0,0,0,18.88-13.38,116.39,116.39,0,0,0-2.13-82.81Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
