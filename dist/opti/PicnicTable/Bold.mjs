var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    m.call(t, e) && H(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && H(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var l in a)
    m.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && o)
    for (var l of o(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import f, { forwardRef as s } from "react";
import n from "../../lib/OptiBase.mjs";
const B = s((l, e) => {
  var r = l, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(n, d({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M244,124H203.42l-24-48H192a12,12,0,0,0,0-24H64a12,12,0,0,0,0,24H76.58l-24,48H12a12,12,0,0,0,0,24H40.58L21.27,186.63a12,12,0,1,0,21.46,10.73L67.42,148H188.58l24.69,49.36a12,12,0,1,0,21.46-10.73L215.42,148H244a12,12,0,0,0,0-24ZM79.42,124l24-48h49.16l24,48Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
