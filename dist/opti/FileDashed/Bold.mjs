var d = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && H(a, e, t[e]);
  if (o)
    for (var e of o(t))
      Z.call(t, e) && H(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    V.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && Z.call(a, m) && (e[m] = a[m]);
  return e;
};
import p, { forwardRef as A } from "react";
import M from "../../lib/OptiBase.mjs";
const c = A((m, e) => {
  var r = m, { children: a } = r, t = l(r, ["children"]);
  return /* @__PURE__ */ p.createElement(M, h({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M84,224a12,12,0,0,1-12,12H56a20,20,0,0,1-20-20V184a12,12,0,0,1,24,0v28H72A12,12,0,0,1,84,224ZM220,88v48a12,12,0,0,1-24,0V104H148a12,12,0,0,1-12-12V44H120a12,12,0,0,1,0-24h32a12,12,0,0,1,8.49,3.51l56,56A12,12,0,0,1,220,88Zm-60-8h23L160,57ZM80,20H56A20,20,0,0,0,36,40V64a12,12,0,0,0,24,0V44H80a12,12,0,0,0,0-24ZM208,164a12,12,0,0,0-12,12v36h-4a12,12,0,0,0,0,24h8a20,20,0,0,0,20-20V176A12,12,0,0,0,208,164ZM48,156a12,12,0,0,0,12-12V104a12,12,0,0,0-24,0v40A12,12,0,0,0,48,156Zm104,56H112a12,12,0,0,0,0,24h40a12,12,0,0,0,0-24Z" }));
});
c.displayName = "Bold";
export {
  c as Bold
};
