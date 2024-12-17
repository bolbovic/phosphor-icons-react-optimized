var A = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, v = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && i(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    l.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import n, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((m, e) => {
  var o = m, { children: a } = o, t = Z(o, ["children"]);
  return /* @__PURE__ */ n.createElement(f, v({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M210.83,197.17a4,4,0,0,1-5.66,5.66L184,181.66l-21.17,21.17a4,4,0,0,1-5.66-5.66L178.34,176l-21.17-21.17a4,4,0,0,1,5.66-5.66L184,170.34l21.17-21.17a4,4,0,0,1,5.66,5.66L189.66,176ZM160,116a4,4,0,0,0,4-4V72a4,4,0,0,0-8,0v40A4,4,0,0,0,160,116Zm40,0a4,4,0,0,0,4-4V32a4,4,0,0,0-8,0v80A4,4,0,0,0,200,116Zm-80-8a4,4,0,0,0-4,4v88a4,4,0,0,0,8,0V112A4,4,0,0,0,120,108ZM80,148a4,4,0,0,0-4,4v48a4,4,0,0,0,8,0V152A4,4,0,0,0,80,148ZM40,188a4,4,0,0,0-4,4v8a4,4,0,0,0,8,0v-8A4,4,0,0,0,40,188Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
