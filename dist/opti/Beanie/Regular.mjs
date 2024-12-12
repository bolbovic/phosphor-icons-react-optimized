var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var v = (a, m, e) => m in a ? s(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, l = (a, m) => {
  for (var e in m || (m = {}))
    H.call(m, e) && v(a, e, m[e]);
  if (r)
    for (var e of r(m))
      Z.call(m, e) && v(a, e, m[e]);
  return a;
};
var p = (a, m) => {
  var e = {};
  for (var t in a)
    H.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && Z.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as A } from "react";
import V from "../../lib/OptiBase.mjs";
const c = A((t, e) => {
  var o = t, { children: a } = o, m = p(o, ["children"]);
  return /* @__PURE__ */ f.createElement(V, l({ ref: e }, m), a, /* @__PURE__ */ f.createElement("path", { d: "M224,162.16V144a96.18,96.18,0,0,0-72.34-93,28,28,0,1,0-47.32,0A96.18,96.18,0,0,0,32,144v18.16A16,16,0,0,0,24,176v32a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V176A16,16,0,0,0,224,162.16ZM116,36a12,12,0,1,1,12,12A12,12,0,0,1,116,36Zm12,28a80.09,80.09,0,0,1,80,80v16H48V144A80.09,80.09,0,0,1,128,64Zm-8,112v32H80V176Zm16,0h40v32H136Zm-96,0H64v32H40Zm176,32H192V176h24v32Z" }));
});
c.displayName = "Regular";
export {
  c as Regular,
  c as default
};
