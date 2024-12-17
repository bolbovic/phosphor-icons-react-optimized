var p = Object.defineProperty;
var h = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var Z = (a, e, H) => e in a ? p(a, e, { enumerable: !0, configurable: !0, writable: !0, value: H }) : a[e] = H, V = (a, e) => {
  for (var H in e || (e = {}))
    r.call(e, H) && Z(a, H, e[H]);
  if (h)
    for (var H of h(e))
      A.call(e, H) && Z(a, H, e[H]);
  return a;
};
var o = (a, e) => {
  var H = {};
  for (var m in a)
    r.call(a, m) && e.indexOf(m) < 0 && (H[m] = a[m]);
  if (a != null && h)
    for (var m of h(a))
      e.indexOf(m) < 0 && A.call(a, m) && (H[m] = a[m]);
  return H;
};
import i, { forwardRef as n } from "react";
import M from "../../lib/OptiBase.mjs";
const c = n((m, H) => {
  var t = m, { children: a } = t, e = o(t, ["children"]);
  return /* @__PURE__ */ i.createElement(M, V({ ref: H }, e), a, /* @__PURE__ */ i.createElement("path", { d: "M240,212H228V72a4,4,0,0,0-4-4H180V40a4,4,0,0,0-4-4H80a4,4,0,0,0-4,4v60H32a4,4,0,0,0-4,4V212H16a4,4,0,0,0,0,8H240a4,4,0,0,0,0-8ZM36,108H80a4,4,0,0,0,4-4V44h88V72a4,4,0,0,0,4,4h44V212H148V168a4,4,0,0,0-4-4H112a4,4,0,0,0-4,4v44H36ZM140,212H116V172h24ZM116,72a4,4,0,0,1,4-4h16a4,4,0,0,1,0,8H120A4,4,0,0,1,116,72Zm0,32a4,4,0,0,1,4-4h16a4,4,0,0,1,0,8H120A4,4,0,0,1,116,104Zm56,0a4,4,0,0,1,4-4h16a4,4,0,0,1,0,8H176A4,4,0,0,1,172,104ZM84,136a4,4,0,0,1-4,4H64a4,4,0,0,1,0-8H80A4,4,0,0,1,84,136Zm0,32a4,4,0,0,1-4,4H64a4,4,0,0,1,0-8H80A4,4,0,0,1,84,168Zm32-32a4,4,0,0,1,4-4h16a4,4,0,0,1,0,8H120A4,4,0,0,1,116,136Zm56,0a4,4,0,0,1,4-4h16a4,4,0,0,1,0,8H176A4,4,0,0,1,172,136Zm0,32a4,4,0,0,1,4-4h16a4,4,0,0,1,0,8H176A4,4,0,0,1,172,168Z" }));
});
c.displayName = "Thin";
export {
  c as Thin
};
