var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, e, l) => e in a ? i(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, L = (a, e) => {
  for (var l in e || (e = {}))
    p.call(e, l) && m(a, l, e[l]);
  if (o)
    for (var l of o(e))
      d.call(e, l) && m(a, l, e[l]);
  return a;
};
var c = (a, e) => {
  var l = {};
  for (var t in a)
    p.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      e.indexOf(t) < 0 && d.call(a, t) && (l[t] = a[t]);
  return l;
};
import f, { forwardRef as s } from "react";
import n from "../../lib/OptiBase.mjs";
const B = s((t, l) => {
  var r = t, { children: a } = r, e = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(n, L({ ref: l }, e), a, /* @__PURE__ */ f.createElement("path", { d: "M233.47,22.53a36,36,0,0,0-50.91,0l-.39.4L129.61,80.61l-5.8-5.79a28,28,0,0,0-39.6,0L7.52,151.51a12,12,0,0,0,0,17l80,80a12,12,0,0,0,17,0l76.7-76.7a28,28,0,0,0,0-39.6l-5.8-5.8,57.68-52.56.4-.39A36,36,0,0,0,233.47,22.53ZM96,223l-9-9,17.51-17.52a12,12,0,0,0-17-17L70,197,59,186l17.52-17.52a12,12,0,0,0-17-17L42,169l-9-9,39-39,63,63ZM216.66,56.31l-66.73,60.81a12,12,0,0,0-.4,17.36l14.68,14.68a4,4,0,0,1,0,5.66L152,167,89,104l12.2-12.2a4,4,0,0,1,5.66,0l14.68,14.68a12,12,0,0,0,17.36-.4l60.81-66.73a12,12,0,0,1,17,17Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
