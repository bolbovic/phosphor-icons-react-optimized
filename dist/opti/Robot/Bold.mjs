var d = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var Z = (a, m, e) => m in a ? d(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, V = (a, m) => {
  for (var e in m || (m = {}))
    A.call(m, e) && Z(a, e, m[e]);
  if (o)
    for (var e of o(m))
      H.call(m, e) && Z(a, e, m[e]);
  return a;
};
var h = (a, m) => {
  var e = {};
  for (var t in a)
    A.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      m.indexOf(t) < 0 && H.call(a, t) && (e[t] = a[t]);
  return e;
};
import p, { forwardRef as l } from "react";
import c from "../../lib/OptiBase.mjs";
const f = l((t, e) => {
  var r = t, { children: a } = r, m = h(r, ["children"]);
  return /* @__PURE__ */ p.createElement(c, V({ ref: e }, m), a, /* @__PURE__ */ p.createElement("path", { d: "M72,104a16,16,0,1,1,16,16A16,16,0,0,1,72,104Zm96,16a16,16,0,1,0-16-16A16,16,0,0,0,168,120Zm68-40V192a36,36,0,0,1-36,36H56a36,36,0,0,1-36-36V80A36,36,0,0,1,56,44h60V16a12,12,0,0,1,24,0V44h60A36,36,0,0,1,236,80Zm-24,0a12,12,0,0,0-12-12H56A12,12,0,0,0,44,80V192a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12Zm-12,82a30,30,0,0,1-30,30H86a30,30,0,0,1,0-60h84A30,30,0,0,1,200,162Zm-80-6v12h16V156ZM86,168H96V156H86a6,6,0,0,0,0,12Zm90-6a6,6,0,0,0-6-6H160v12h10A6,6,0,0,0,176,162Z" }));
});
f.displayName = "Bold";
export {
  f as Bold
};
