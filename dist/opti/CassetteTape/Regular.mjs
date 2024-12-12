var A = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && H(a, e, t[e]);
  if (l)
    for (var e of l(t))
      Z.call(t, e) && H(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && Z.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as M } from "react";
import c from "../../lib/OptiBase.mjs";
const d = M((r, e) => {
  var m = r, { children: a } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(c, p({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM80,192l12-16h72l12,16Zm144,0H196l-21.6-28.8A8,8,0,0,0,168,160H88a8,8,0,0,0-6.4,3.2L60,192H32V64H224V192ZM176,80H80a32,32,0,0,0,0,64h96a32,32,0,0,0,0-64ZM148.3,96a31.92,31.92,0,0,0,0,32H107.7a31.92,31.92,0,0,0,0-32ZM64,112a16,16,0,1,1,16,16A16,16,0,0,1,64,112Zm112,16a16,16,0,1,1,16-16A16,16,0,0,1,176,128Z" }));
});
d.displayName = "Regular";
export {
  d as Regular,
  d as default
};
