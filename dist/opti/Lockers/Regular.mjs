var c = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? c(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, p = (a, r) => {
  for (var e in r || (r = {}))
    V.call(r, e) && o(a, e, r[e]);
  if (H)
    for (var e of H(r))
      Z.call(r, e) && o(a, e, r[e]);
  return a;
};
var l = (a, r) => {
  var e = {};
  for (var t in a)
    V.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && H)
    for (var t of H(a))
      r.indexOf(t) < 0 && Z.call(a, t) && (e[t] = a[t]);
  return e;
};
import M, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const i = f((t, e) => {
  var m = t, { children: a } = m, r = l(m, ["children"]);
  return /* @__PURE__ */ M.createElement(h, p({ ref: e }, r), a, /* @__PURE__ */ M.createElement("path", { d: "M192,72a8,8,0,0,1-8,8H160a8,8,0,0,1,0-16h24A8,8,0,0,1,192,72Zm-8,24H160a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16ZM72,80H96a8,8,0,0,0,0-16H72a8,8,0,0,0,0,16ZM96,96H72a8,8,0,0,0,0,16H96a8,8,0,0,0,0-16ZM224,48V224a8,8,0,0,1-16,0V208H136v16a8,8,0,0,1-16,0V208H48v16a8,8,0,0,1-16,0V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM120,192V48H48V192Zm16,0h72V48H136Z" }));
});
i.displayName = "Regular";
export {
  i as Regular
};
