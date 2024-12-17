var d = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && r(a, e, t[e]);
  if (l)
    for (var e of l(t))
      A.call(t, e) && r(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var m in a)
    H.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && l)
    for (var m of l(a))
      t.indexOf(m) < 0 && A.call(a, m) && (e[m] = a[m]);
  return e;
};
import p, { forwardRef as Z } from "react";
import c from "../../lib/OptiBase.mjs";
const f = Z((m, e) => {
  var o = m, { children: a } = o, t = h(o, ["children"]);
  return /* @__PURE__ */ p.createElement(c, V({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M220.49,59.51l-40-40A12,12,0,0,0,172,16H92A20,20,0,0,0,72,36V56H56A20,20,0,0,0,36,76V216a20,20,0,0,0,20,20H164a20,20,0,0,0,20-20V196h20a20,20,0,0,0,20-20V68A12,12,0,0,0,220.49,59.51ZM160,212H60V80h67l33,33Zm40-40H184V108a12,12,0,0,0-3.51-8.49l-40-40A12,12,0,0,0,132,56H96V40h71l33,33Zm-56-28a12,12,0,0,1-12,12H88a12,12,0,0,1,0-24h44A12,12,0,0,1,144,144Zm0,40a12,12,0,0,1-12,12H88a12,12,0,0,1,0-24h44A12,12,0,0,1,144,184Z" }));
});
f.displayName = "Bold";
export {
  f as Bold
};
