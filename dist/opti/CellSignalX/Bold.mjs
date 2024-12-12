var c = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, v = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (o)
    for (var e of o(t))
      v.call(t, e) && l(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && v.call(a, m) && (e[m] = a[m]);
  return e;
};
import A, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((m, e) => {
  var r = m, { children: a } = r, t = d(r, ["children"]);
  return /* @__PURE__ */ A.createElement(i, Z({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M216.49,191.51a12,12,0,0,1-17,17L184,193l-15.51,15.52a12,12,0,0,1-17-17L167,176l-15.52-15.51a12,12,0,0,1,17-17L184,159l15.51-15.52a12,12,0,0,1,17,17L201,176ZM160,120a12,12,0,0,0,12-12V72a12,12,0,0,0-24,0v36A12,12,0,0,0,160,120Zm40,0a12,12,0,0,0,12-12V32a12,12,0,0,0-24,0v76A12,12,0,0,0,200,120Zm-80-20a12,12,0,0,0-12,12v88a12,12,0,0,0,24,0V112A12,12,0,0,0,120,100ZM80,140a12,12,0,0,0-12,12v48a12,12,0,0,0,24,0V152A12,12,0,0,0,80,140ZM40,180a12,12,0,0,0-12,12v8a12,12,0,0,0,24,0v-8A12,12,0,0,0,40,180Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
