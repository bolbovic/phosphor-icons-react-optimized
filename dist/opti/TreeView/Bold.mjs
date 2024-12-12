var l = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? l(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    m.call(t, e) && H(a, e, t[e]);
  if (o)
    for (var e of o(t))
      V.call(t, e) && H(a, e, t[e]);
  return a;
};
var v = (a, t) => {
  var e = {};
  for (var h in a)
    m.call(a, h) && t.indexOf(h) < 0 && (e[h] = a[h]);
  if (a != null && o)
    for (var h of o(a))
      t.indexOf(h) < 0 && V.call(a, h) && (e[h] = a[h]);
  return e;
};
import d, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((h, e) => {
  var r = h, { children: a } = r, t = v(r, ["children"]);
  return /* @__PURE__ */ d.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ d.createElement("path", { d: "M176,156h32a20,20,0,0,0,20-20V104a20,20,0,0,0-20-20H176a20,20,0,0,0-20,20v4H92V84h4a20,20,0,0,0,20-20V32A20,20,0,0,0,96,12H64A20,20,0,0,0,44,32V64A20,20,0,0,0,64,84h4V192a28,28,0,0,0,28,28h60v4a20,20,0,0,0,20,20h32a20,20,0,0,0,20-20V192a20,20,0,0,0-20-20H176a20,20,0,0,0-20,20v4H96a4,4,0,0,1-4-4V132h64v4A20,20,0,0,0,176,156ZM68,36H92V60H68ZM180,196h24v24H180Zm0-88h24v24H180Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
