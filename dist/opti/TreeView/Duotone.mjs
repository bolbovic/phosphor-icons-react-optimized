var Z = Object.defineProperty;
var h = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, v = (a, t) => {
  for (var e in t || (t = {}))
    r.call(t, e) && m(a, e, t[e]);
  if (h)
    for (var e of h(t))
      p.call(t, e) && m(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var H in a)
    r.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && h)
    for (var H of h(a))
      t.indexOf(H) < 0 && p.call(a, H) && (e[H] = a[H]);
  return e;
};
import o, { forwardRef as c } from "react";
import n from "../../lib/OptiBase.mjs";
const i = c((H, e) => {
  var V = H, { children: a } = V, t = A(V, ["children"]);
  return /* @__PURE__ */ o.createElement(n, v({ ref: e }, t), a, /* @__PURE__ */ o.createElement(
    "path",
    {
      d: "M104,32V64a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V32a8,8,0,0,1,8-8H96A8,8,0,0,1,104,32ZM208,96H176a8,8,0,0,0-8,8v32a8,8,0,0,0,8,8h32a8,8,0,0,0,8-8V104A8,8,0,0,0,208,96Zm0,88H176a8,8,0,0,0-8,8v32a8,8,0,0,0,8,8h32a8,8,0,0,0,8-8V192A8,8,0,0,0,208,184Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ o.createElement("path", { d: "M176,152h32a16,16,0,0,0,16-16V104a16,16,0,0,0-16-16H176a16,16,0,0,0-16,16v8H88V80h8a16,16,0,0,0,16-16V32A16,16,0,0,0,96,16H64A16,16,0,0,0,48,32V64A16,16,0,0,0,64,80h8V192a24,24,0,0,0,24,24h64v8a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V192a16,16,0,0,0-16-16H176a16,16,0,0,0-16,16v8H96a8,8,0,0,1-8-8V128h72v8A16,16,0,0,0,176,152ZM64,32H96V64H64ZM176,192h32v32H176Zm0-88h32v32H176Z" }));
});
i.displayName = "Duotone";
export {
  i as Duotone
};
