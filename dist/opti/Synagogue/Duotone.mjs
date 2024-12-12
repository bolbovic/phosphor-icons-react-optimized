var H = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var h = (a, V, e) => V in a ? H(a, V, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[V] = e, Z = (a, V) => {
  for (var e in V || (V = {}))
    r.call(V, e) && h(a, e, V[e]);
  if (m)
    for (var e of m(V))
      A.call(V, e) && h(a, e, V[e]);
  return a;
};
var p = (a, V) => {
  var e = {};
  for (var t in a)
    r.call(a, t) && V.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      V.indexOf(t) < 0 && A.call(a, t) && (e[t] = a[t]);
  return e;
};
import o, { forwardRef as c } from "react";
import l from "../../lib/OptiBase.mjs";
const n = c((t, e) => {
  var v = t, { children: a } = v, V = p(v, ["children"]);
  return /* @__PURE__ */ o.createElement(l, Z({ ref: e }, V), a, /* @__PURE__ */ o.createElement(
    "path",
    {
      d: "M216,80v32H184V80a16,16,0,0,1,16-16h0A16,16,0,0,1,216,80ZM72,80A16,16,0,0,0,56,64h0A16,16,0,0,0,40,80v32H72Zm0,56v80h40V176a16,16,0,0,1,16-16h0a16,16,0,0,1,16,16v40h40V136l-56-32Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ o.createElement("path", { d: "M208,57.38V32a8,8,0,0,0-16,0V57.38A24,24,0,0,0,176,80v42.21L136,99.36V72a8,8,0,0,0-16,0V99.36L80,122.21V80A24,24,0,0,0,64,57.38V32a8,8,0,0,0-16,0V57.38A24,24,0,0,0,32,80V216a8,8,0,0,0,8,8h72a8,8,0,0,0,8-8V176a8,8,0,0,1,16,0v40a8,8,0,0,0,8,8h72a8,8,0,0,0,8-8V80A24,24,0,0,0,208,57.38ZM200,72a8,8,0,0,1,8,8v24H192V80A8,8,0,0,1,200,72ZM56,72a8,8,0,0,1,8,8v24H48V80A8,8,0,0,1,56,72Zm-8,48H64v88H48Zm80,32a24,24,0,0,0-24,24v32H80V140.64l48-27.43,48,27.43V208H152V176A24,24,0,0,0,128,152Zm64,56V120h16v88Z" }));
});
n.displayName = "Duotone";
export {
  n as Duotone
};
