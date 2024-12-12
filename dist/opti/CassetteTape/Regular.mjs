var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var H = (a, r, e) => r in a ? c(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, p = (a, r) => {
  for (var e in r || (r = {}))
    o.call(r, e) && H(a, e, r[e]);
  if (m)
    for (var e of m(r))
      Z.call(r, e) && H(a, e, r[e]);
  return a;
};
var A = (a, r) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && Z.call(a, t) && (e[t] = a[t]);
  return e;
};
import M, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((t, e) => {
  var l = t, { children: a } = l, r = A(l, ["children"]);
  return /* @__PURE__ */ M.createElement(i, p({ ref: e }, r), a, /* @__PURE__ */ M.createElement("path", { d: "M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM80,192l12-16h72l12,16Zm144,0H196l-21.6-28.8A8,8,0,0,0,168,160H88a8,8,0,0,0-6.4,3.2L60,192H32V64H224V192ZM176,80H80a32,32,0,0,0,0,64h96a32,32,0,0,0,0-64ZM148.3,96a31.92,31.92,0,0,0,0,32H107.7a31.92,31.92,0,0,0,0-32ZM64,112a16,16,0,1,1,16,16A16,16,0,0,1,64,112Zm112,16a16,16,0,1,1,16-16A16,16,0,0,1,176,128Z" }));
});
s.displayName = "Regular";
export {
  s as Regular
};
