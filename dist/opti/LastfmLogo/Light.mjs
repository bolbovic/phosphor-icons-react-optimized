var c = Object.defineProperty;
var h = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (h)
    for (var e of h(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && h)
    for (var r of h(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import A, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((r, e) => {
  var m = r, { children: a } = m, t = l(m, ["children"]);
  return /* @__PURE__ */ A.createElement(s, H({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M246,160a38,38,0,0,1-38,38H190.57a54.21,54.21,0,0,1-48.94-31.16l-30.14-64.6A42.14,42.14,0,0,0,73.43,78H64a42,42,0,0,0-42,42v24a42,42,0,0,0,42,42h8a34,34,0,0,0,31.17-20.4,6,6,0,0,1,11,4.8A46,46,0,0,1,72,198H64a54.06,54.06,0,0,1-54-54V120A54.06,54.06,0,0,1,64,66h9.43a54.21,54.21,0,0,1,48.94,31.16l30.14,64.6A42.14,42.14,0,0,0,190.57,186H208a26,26,0,0,0,0-52H188a34,34,0,0,1,0-68h20a30,30,0,0,1,30,30,6,6,0,0,1-12,0,18,18,0,0,0-18-18H188a22,22,0,0,0,0,44h20A38,38,0,0,1,246,160Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
