import type { Icon } from "../lib/types";
/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNDhIMzJBMTYsMTYsMCwwLDAsMTYsNjRWMTkyYTE2LDE2LDAsMCwwLDE2LDE2SDIyNGExNiwxNiwwLDAsMCwxNi0xNlY2NEExNiwxNiwwLDAsMCwyMjQsNDhabTAsMTZWODhIMzJWNjRabTAsMTI4SDMyVjEwNEgyMjR2ODhabS0xNi0yNGE4LDgsMCwwLDEtOCw4SDE2OGE4LDgsMCwwLDEsMC0xNmgzMkE4LDgsMCwwLDEsMjA4LDE2OFptLTY0LDBhOCw4LDAsMCwxLTgsOEgxMjBhOCw4LDAsMCwxLDAtMTZoMTZBOCw4LDAsMCwxLDE0NCwxNjhaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNTJIMzJBMTIsMTIsMCwwLDAsMjAsNjRWMTkyYTEyLDEyLDAsMCwwLDEyLDEySDIyNGExMiwxMiwwLDAsMCwxMi0xMlY2NEExMiwxMiwwLDAsMCwyMjQsNTJaTTMyLDYwSDIyNGE0LDQsMCwwLDEsNCw0VjkySDI4VjY0QTQsNCwwLDAsMSwzMiw2MFpNMjI0LDE5NkgzMmE0LDQsMCwwLDEtNC00VjEwMEgyMjh2OTJBNCw0LDAsMCwxLDIyNCwxOTZabS0yMC0yOGE0LDQsMCwwLDEtNCw0SDE2OGE0LDQsMCwwLDEsMC04aDMyQTQsNCwwLDAsMSwyMDQsMTY4Wm0tNjQsMGE0LDQsMCwwLDEtNCw0SDEyMGE0LDQsMCwwLDEsMC04aDE2QTQsNCwwLDAsMSwxNDAsMTY4WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNTBIMzJBMTQsMTQsMCwwLDAsMTgsNjRWMTkyYTE0LDE0LDAsMCwwLDE0LDE0SDIyNGExNCwxNCwwLDAsMCwxNC0xNFY2NEExNCwxNCwwLDAsMCwyMjQsNTBaTTMyLDYySDIyNGEyLDIsMCwwLDEsMiwyVjkwSDMwVjY0QTIsMiwwLDAsMSwzMiw2MlpNMjI0LDE5NEgzMmEyLDIsMCwwLDEtMi0yVjEwMkgyMjZ2OTBBMiwyLDAsMCwxLDIyNCwxOTRabS0xOC0yNmE2LDYsMCwwLDEtNiw2SDE2OGE2LDYsMCwwLDEsMC0xMmgzMkE2LDYsMCwwLDEsMjA2LDE2OFptLTY0LDBhNiw2LDAsMCwxLTYsNkgxMjBhNiw2LDAsMCwxLDAtMTJoMTZBNiw2LDAsMCwxLDE0MiwxNjhaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNDRIMzJBMjAsMjAsMCwwLDAsMTIsNjRWMTkyYTIwLDIwLDAsMCwwLDIwLDIwSDIyNGEyMCwyMCwwLDAsMCwyMC0yMFY2NEEyMCwyMCwwLDAsMCwyMjQsNDRabS00LDI0Vjg4SDM2VjY4Wk0zNiwxODhWMTEySDIyMHY3NlptMTcyLTI0YTEyLDEyLDAsMCwxLTEyLDEySDE2NGExMiwxMiwwLDAsMSwwLTI0aDMyQTEyLDEyLDAsMCwxLDIwOCwxNjRabS02OCwwYTEyLDEyLDAsMCwxLTEyLDEySDExNmExMiwxMiwwLDAsMSwwLTI0aDEyQTEyLDEyLDAsMCwxLDE0MCwxNjRaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNDhIMzJBMTYsMTYsMCwwLDAsMTYsNjRWMTkyYTE2LDE2LDAsMCwwLDE2LDE2SDIyNGExNiwxNiwwLDAsMCwxNi0xNlY2NEExNiwxNiwwLDAsMCwyMjQsNDhaTTEzNiwxNzZIMTIwYTgsOCwwLDAsMSwwLTE2aDE2YTgsOCwwLDAsMSwwLDE2Wm02NCwwSDE2OGE4LDgsMCwwLDEsMC0xNmgzMmE4LDgsMCwwLDEsMCwxNlpNMzIsODhWNjRIMjI0Vjg4WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsOTZ2OTZhOCw4LDAsMCwxLTgsOEgzMmE4LDgsMCwwLDEtOC04Vjk2WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIyNCw0OEgzMkExNiwxNiwwLDAsMCwxNiw2NFYxOTJhMTYsMTYsMCwwLDAsMTYsMTZIMjI0YTE2LDE2LDAsMCwwLDE2LTE2VjY0QTE2LDE2LDAsMCwwLDIyNCw0OFptMCwxNlY4OEgzMlY2NFptMCwxMjhIMzJWMTA0SDIyNHY4OFptLTE2LTI0YTgsOCwwLDAsMS04LDhIMTY4YTgsOCwwLDAsMSwwLTE2aDMyQTgsOCwwLDAsMSwyMDgsMTY4Wm0tNjQsMGE4LDgsMCwwLDEtOCw4SDEyMGE4LDgsMCwwLDEsMC0xNmgxNkE4LDgsMCwwLDEsMTQ0LDE2OFoiLz48L3N2Zz4=)
 */
declare const I: Icon;
export { I as CreditCard };