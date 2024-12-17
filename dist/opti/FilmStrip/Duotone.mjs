var c = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var o = (e, t, a) => t in e ? c(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, p = (e, t) => {
  for (var a in t || (t = {}))
    r.call(t, a) && o(e, a, t[a]);
  if (H)
    for (var a of H(t))
      h.call(t, a) && o(e, a, t[a]);
  return e;
};
var v = (e, t) => {
  var a = {};
  for (var m in e)
    r.call(e, m) && t.indexOf(m) < 0 && (a[m] = e[m]);
  if (e != null && H)
    for (var m of H(e))
      t.indexOf(m) < 0 && h.call(e, m) && (a[m] = e[m]);
  return a;
};
import V, { forwardRef as n } from "react";
import M from "../../lib/OptiBase.mjs";
const i = n((m, a) => {
  var Z = m, { children: e } = Z, t = v(Z, ["children"]);
  return /* @__PURE__ */ V.createElement(M, p({ ref: a }, t), e, /* @__PURE__ */ V.createElement(
    "path",
    {
      d: "M32,176H224v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8ZM216,48H40a8,8,0,0,0-8,8V80H224V56A8,8,0,0,0,216,48Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ V.createElement("path", { d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM40,88h80v80H40Zm96-16V56h32V72Zm-16,0H88V56h32Zm0,112v16H88V184Zm16,0h32v16H136Zm0-16V88h80v80Zm80-96H184V56h32ZM72,56V72H40V56ZM40,184H72v16H40Zm176,16H184V184h32v16Z" }));
});
i.displayName = "Duotone";
export {
  i as Duotone
};
