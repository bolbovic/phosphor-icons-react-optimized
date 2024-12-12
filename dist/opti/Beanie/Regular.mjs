var V = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var v = (a, m, e) => m in a ? V(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, p = (a, m) => {
  for (var e in m || (m = {}))
    H.call(m, e) && v(a, e, m[e]);
  if (t)
    for (var e of t(m))
      Z.call(m, e) && v(a, e, m[e]);
  return a;
};
var l = (a, m) => {
  var e = {};
  for (var r in a)
    H.call(a, r) && m.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      m.indexOf(r) < 0 && Z.call(a, r) && (e[r] = a[r]);
  return e;
};
import A, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((r, e) => {
  var o = r, { children: a } = o, m = l(o, ["children"]);
  return /* @__PURE__ */ A.createElement(f, p({ ref: e }, m), a, /* @__PURE__ */ A.createElement("path", { d: "M224,162.16V144a96.18,96.18,0,0,0-72.34-93,28,28,0,1,0-47.32,0A96.18,96.18,0,0,0,32,144v18.16A16,16,0,0,0,24,176v32a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V176A16,16,0,0,0,224,162.16ZM116,36a12,12,0,1,1,12,12A12,12,0,0,1,116,36Zm12,28a80.09,80.09,0,0,1,80,80v16H48V144A80.09,80.09,0,0,1,128,64Zm-8,112v32H80V176Zm16,0h40v32H136Zm-96,0H64v32H40Zm176,32H192V176h24v32Z" }));
});
i.displayName = "Regular";
export {
  i as Regular
};
