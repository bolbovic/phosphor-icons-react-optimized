import type { Icon } from "../lib/types";
/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjgsMjI0YTgsOCwwLDAsMS04LDhIOTZhOCw4LDAsMSwxLDAtMTZoNjRBOCw4LDAsMCwxLDE2OCwyMjRabTUzLjg1LTMyQTE1LjgsMTUuOCwwLDAsMSwyMDgsMjAwSDQ4YTE2LDE2LDAsMCwxLTEzLjgtMjQuMDZDMzkuNzUsMTY2LjM4LDQ4LDEzOS4zNCw0OCwxMDRhODAsODAsMCwxLDEsMTYwLDBjMCwzNS4zMyw4LjI2LDYyLjM4LDEzLjgxLDcxLjk0QTE1Ljg5LDE1Ljg5LDAsMCwxLDIyMS44NCwxOTJaTTIwOCwxODRjLTcuNzMtMTMuMjctMTYtNDMuOTUtMTYtODBhNjQsNjQsMCwxLDAtMTI4LDBjMCwzNi4wNi04LjI4LDY2Ljc0LTE2LDgwWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjQsMjI0YTQsNCwwLDAsMS00LDRIOTZhNCw0LDAsMCwxLDAtOGg2NEE0LDQsMCwwLDEsMTY0LDIyNFptNTQuMzgtMzRBMTEuODQsMTEuODQsMCwwLDEsMjA4LDE5Nkg0OEExMiwxMiwwLDAsMSwzNy42NSwxNzhDNDMuNDIsMTY4LDUyLDE0MC4xMyw1MiwxMDRhNzYsNzYsMCwxLDEsMTUyLDBjMCwzNi4xMyw4LjU5LDY0LDE0LjM2LDczLjk1QTExLjkyLDExLjkyLDAsMCwxLDIxOC4zOCwxOTBabS02Ljk1LThDMjA0LDE2OS4xNywxOTYsMTM5LjMxLDE5NiwxMDRhNjgsNjgsMCwxLDAtMTM2LDBjMCwzNS4zMi04LDY1LjE3LTE1LjQ0LDc4YTQsNCwwLDAsMCwwLDRBMy45MSwzLjkxLDAsMCwwLDQ4LDE4OEgyMDhhMy45MSwzLjkxLDAsMCwwLDMuNDQtMkE0LDQsMCwwLDAsMjExLjQzLDE4MloiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjYsMjI0YTYsNiwwLDAsMS02LDZIOTZhNiw2LDAsMCwxLDAtMTJoNjRBNiw2LDAsMCwxLDE2NiwyMjRabTU0LjExLTMzYTEzLjgzLDEzLjgzLDAsMCwxLTEyLjEsN0g0OGExNCwxNCwwLDAsMS0xMi4wNi0yMS4wNkM0MS41OSwxNjcuMiw1MCwxMzkuNzQsNTAsMTA0YTc4LDc4LDAsMSwxLDE1NiwwYzAsMzUuNzMsOC40Miw2My4yLDE0LjA4LDcyLjk0QTEzLjksMTMuOSwwLDAsMSwyMjAuMTEsMTkxWm0tMTAuNDEtOEMyMDIuMTMsMTcwLDE5NCwxMzkuNjgsMTk0LDEwNGE2Niw2NiwwLDEsMC0xMzIsMGMwLDM1LjY5LTguMTQsNjYtMTUuNzEsNzlhMiwyLDAsMCwwLDAsMiwxLjksMS45LDAsMCwwLDEuNywxSDIwOGExLjksMS45LDAsMCwwLDEuNy0xQTIsMiwwLDAsMCwyMDkuNywxODNaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjUuMjksMTY1LjkzQzIxNi42MSwxNTEsMjEyLDEyOS41NywyMTIsMTA0YTg0LDg0LDAsMCwwLTE2OCwwYzAsMjUuNTgtNC41OSw0Ny0xMy4yNyw2MS45M0EyMC4wOCwyMC4wOCwwLDAsMCwzMC42NiwxODYsMTkuNzcsMTkuNzcsMCwwLDAsNDgsMTk2SDIwOGExOS43NywxOS43NywwLDAsMCwxNy4zMS0xMEEyMC4wOCwyMC4wOCwwLDAsMCwyMjUuMjksMTY1LjkzWk01NC42NiwxNzJDNjMuNTEsMTU0LDY4LDEzMS4xNCw2OCwxMDRhNjAsNjAsMCwwLDEsMTIwLDBjMCwyNy4xMyw0LjQ4LDUwLDEzLjMzLDY4Wk0xNzIsMjI0YTEyLDEyLDAsMCwxLTEyLDEySDk2YTEyLDEyLDAsMCwxLDAtMjRoNjRBMTIsMTIsMCwwLDEsMTcyLDIyNFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjgsMjI0YTgsOCwwLDAsMS04LDhIOTZhOCw4LDAsMSwxLDAtMTZoNjRBOCw4LDAsMCwxLDE2OCwyMjRabTUzLjgxLTQ4LjA2QzIxNi4yNSwxNjYuMzgsMjA4LDEzOS4zMywyMDgsMTA0YTgwLDgwLDAsMSwwLTE2MCwwYzAsMzUuMzQtOC4yNiw2Mi4zOC0xMy44MSw3MS45NEExNiwxNiwwLDAsMCw0OCwyMDBIMjA4YTE2LDE2LDAsMCwwLDEzLjgtMjQuMDZaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMTkySDQ4YTgsOCwwLDAsMS02Ljg4LTEyQzQ3LjcxLDE2OC42LDU2LDEzOS44MSw1NiwxMDRhNzIsNzIsMCwwLDEsMTQ0LDBjMCwzNS44Miw4LjMsNjQuNiwxNC45LDc2QTgsOCwwLDAsMSwyMDgsMTkyWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTE2OCwyMjRhOCw4LDAsMCwxLTgsOEg5NmE4LDgsMCwxLDEsMC0xNmg2NEE4LDgsMCwwLDEsMTY4LDIyNFptNTMuODUtMzJBMTUuOCwxNS44LDAsMCwxLDIwOCwyMDBINDhhMTYsMTYsMCwwLDEtMTMuOC0yNC4wNkMzOS43NSwxNjYuMzgsNDgsMTM5LjM0LDQ4LDEwNGE4MCw4MCwwLDEsMSwxNjAsMGMwLDM1LjMzLDguMjYsNjIuMzgsMTMuODEsNzEuOTRBMTUuODksMTUuODksMCwwLDEsMjIxLjg0LDE5MlpNMjA4LDE4NGMtNy43My0xMy4yNy0xNi00My45NS0xNi04MGE2NCw2NCwwLDEsMC0xMjgsMGMwLDM2LjA2LTguMjgsNjYuNzQtMTYsODBaIi8+PC9zdmc+)
 */
declare const I: Icon;
export { I as BellSimple };