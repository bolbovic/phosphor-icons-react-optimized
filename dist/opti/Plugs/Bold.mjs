var i = Object.defineProperty;
var L = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, e, l) => e in a ? i(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, d = (a, e) => {
  for (var l in e || (e = {}))
    r.call(e, l) && o(a, l, e[l]);
  if (L)
    for (var l of L(e))
      p.call(e, l) && o(a, l, e[l]);
  return a;
};
var c = (a, e) => {
  var l = {};
  for (var t in a)
    r.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && L)
    for (var t of L(a))
      e.indexOf(t) < 0 && p.call(a, t) && (l[t] = a[t]);
  return l;
};
import f, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const n = s((t, l) => {
  var m = t, { children: a } = m, e = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, d({ ref: l }, e), a, /* @__PURE__ */ f.createElement("path", { d: "M137,168l11.52-11.51a12,12,0,0,0-17-17L120,151l-15-15,11.52-11.51a12,12,0,0,0-17-17L88,119,72.49,103.51a12,12,0,0,0-17,17L59,124,38.54,144.49a36,36,0,0,0,0,50.91l2.55,2.54L15.51,223.51a12,12,0,0,0,17,17l25.57-25.58,2.54,2.55a36.06,36.06,0,0,0,50.91,0L132,197l3.51,3.52a12,12,0,0,0,17-17ZM94.54,200.49a12,12,0,0,1-17,0L55.51,178.43a12,12,0,0,1,0-17L76,141l39,39Zm146-185a12,12,0,0,0-17,0L197.94,41.09l-2.54-2.55a36.05,36.05,0,0,0-50.91,0L124,59l-3.51-3.52a12,12,0,0,0-17,17l80,80a12,12,0,0,0,17-17L197,132l20.49-20.49a36,36,0,0,0,0-50.91l-2.55-2.54,25.58-25.57A12,12,0,0,0,240.49,15.51Zm-40,79L180,115,141,76l20.49-20.49a12,12,0,0,1,17,0l22.06,22.06a12,12,0,0,1,0,17Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
