import type { Icon } from "../lib/types";
/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsOTZhMTYsMTYsMCwwLDAsMTYtMTZWNDhhMTYsMTYsMCwwLDAtMTYtMTZIMTc2YTE2LDE2LDAsMCwwLTE2LDE2djhIOTZWNDhBMTYsMTYsMCwwLDAsODAsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWODBBMTYsMTYsMCwwLDAsNDgsOTZoOHY2NEg0OGExNiwxNiwwLDAsMC0xNiwxNnYzMmExNiwxNiwwLDAsMCwxNiwxNkg4MGExNiwxNiwwLDAsMCwxNi0xNnYtOGg2NHY4YTE2LDE2LDAsMCwwLDE2LDE2aDMyYTE2LDE2LDAsMCwwLDE2LTE2VjE3NmExNiwxNiwwLDAsMC0xNi0xNmgtOFY5NlpNMTc2LDQ4aDMyVjgwSDE3NlpNNDgsNDhIODBWNjMuOWEuNTEuNTEsMCwwLDAsMCwuMlY4MEg0OFpNODAsMjA4SDQ4VjE3Nkg4MHYxNS45YS41MS41MSwwLDAsMCwwLC4yVjIwOFptMTI4LDBIMTc2VjE3NmgzMlptLTI0LTQ4aC04YTE2LDE2LDAsMCwwLTE2LDE2djhIOTZ2LThhMTYsMTYsMCwwLDAtMTYtMTZINzJWOTZoOEExNiwxNiwwLDAsMCw5Niw4MFY3Mmg2NHY4YTE2LDE2LDAsMCwwLDE2LDE2aDhaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsOTJhMTIsMTIsMCwwLDAsMTItMTJWNDhhMTIsMTIsMCwwLDAtMTItMTJIMTc2YTEyLDEyLDAsMCwwLTEyLDEyVjYwSDkyVjQ4QTEyLDEyLDAsMCwwLDgwLDM2SDQ4QTEyLDEyLDAsMCwwLDM2LDQ4VjgwQTEyLDEyLDAsMCwwLDQ4LDkySDYwdjcySDQ4YTEyLDEyLDAsMCwwLTEyLDEydjMyYTEyLDEyLDAsMCwwLDEyLDEySDgwYTEyLDEyLDAsMCwwLDEyLTEyVjE5Nmg3MnYxMmExMiwxMiwwLDAsMCwxMiwxMmgzMmExMiwxMiwwLDAsMCwxMi0xMlYxNzZhMTIsMTIsMCwwLDAtMTItMTJIMTk2VjkyWk0xNzIsNDhhNCw0LDAsMCwxLDQtNGgzMmE0LDQsMCwwLDEsNCw0VjgwYTQsNCwwLDAsMS00LDRIMTc2YTQsNCwwLDAsMS00LTRaTTQ0LDgwVjQ4YTQsNCwwLDAsMSw0LTRIODBhNCw0LDAsMCwxLDQsNFY4MGE0LDQsMCwwLDEtNCw0SDQ4QTQsNCwwLDAsMSw0NCw4MFpNODQsMjA4YTQsNCwwLDAsMS00LDRINDhhNCw0LDAsMCwxLTQtNFYxNzZhNCw0LDAsMCwxLDQtNEg4MGE0LDQsMCwwLDEsNCw0Wm0xMjgtMzJ2MzJhNCw0LDAsMCwxLTQsNEgxNzZhNCw0LDAsMCwxLTQtNFYxNzZhNCw0LDAsMCwxLDQtNGgzMkE0LDQsMCwwLDEsMjEyLDE3NlptLTI0LTEySDE3NmExMiwxMiwwLDAsMC0xMiwxMnYxMkg5MlYxNzZhMTIsMTIsMCwwLDAtMTItMTJINjhWOTJIODBBMTIsMTIsMCwwLDAsOTIsODBWNjhoNzJWODBhMTIsMTIsMCwwLDAsMTIsMTJoMTJaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsOTRhMTQsMTQsMCwwLDAsMTQtMTRWNDhhMTQsMTQsMCwwLDAtMTQtMTRIMTc2YTE0LDE0LDAsMCwwLTE0LDE0VjU4SDk0VjQ4QTE0LDE0LDAsMCwwLDgwLDM0SDQ4QTE0LDE0LDAsMCwwLDM0LDQ4VjgwQTE0LDE0LDAsMCwwLDQ4LDk0SDU4djY4SDQ4YTE0LDE0LDAsMCwwLTE0LDE0djMyYTE0LDE0LDAsMCwwLDE0LDE0SDgwYTE0LDE0LDAsMCwwLDE0LTE0VjE5OGg2OHYxMGExNCwxNCwwLDAsMCwxNCwxNGgzMmExNCwxNCwwLDAsMCwxNC0xNFYxNzZhMTQsMTQsMCwwLDAtMTQtMTRIMTk4Vjk0Wk0xNzQsNDhhMiwyLDAsMCwxLDItMmgzMmEyLDIsMCwwLDEsMiwyVjgwYTIsMiwwLDAsMS0yLDJIMTc2YTIsMiwwLDAsMS0yLTJaTTQ2LDgwVjQ4YTIsMiwwLDAsMSwyLTJIODBhMiwyLDAsMCwxLDIsMlY4MGEyLDIsMCwwLDEtMiwySDQ4QTIsMiwwLDAsMSw0Niw4MFpNODIsMjA4YTIsMiwwLDAsMS0yLDJINDhhMiwyLDAsMCwxLTItMlYxNzZhMiwyLDAsMCwxLDItMkg4MGEyLDIsMCwwLDEsMiwyWm0xMjgtMzJ2MzJhMiwyLDAsMCwxLTIsMkgxNzZhMiwyLDAsMCwxLTItMlYxNzZhMiwyLDAsMCwxLDItMmgzMkEyLDIsMCwwLDEsMjEwLDE3NlptLTI0LTE0SDE3NmExNCwxNCwwLDAsMC0xNCwxNHYxMEg5NFYxNzZhMTQsMTQsMCwwLDAtMTQtMTRINzBWOTRIODBBMTQsMTQsMCwwLDAsOTQsODBWNzBoNjhWODBhMTQsMTQsMCwwLDAsMTQsMTRoMTBaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMTAwYTIwLDIwLDAsMCwwLDIwLTIwVjQ4YTIwLDIwLDAsMCwwLTIwLTIwSDE3NmEyMCwyMCwwLDAsMC0yMCwyMHY0SDEwMFY0OEEyMCwyMCwwLDAsMCw4MCwyOEg0OEEyMCwyMCwwLDAsMCwyOCw0OFY4MGEyMCwyMCwwLDAsMCwyMCwyMGg0djU2SDQ4YTIwLDIwLDAsMCwwLTIwLDIwdjMyYTIwLDIwLDAsMCwwLDIwLDIwSDgwYTIwLDIwLDAsMCwwLDIwLTIwdi00aDU2djRhMjAsMjAsMCwwLDAsMjAsMjBoMzJhMjAsMjAsMCwwLDAsMjAtMjBWMTc2YTIwLDIwLDAsMCwwLTIwLTIwaC00VjEwMFpNMTgwLDUyaDI0Vjc2SDE4MFpNNTIsNTJINzZWNzZINTJaTTc2LDIwNEg1MlYxODBINzZabTEyOCwwSDE4MFYxODBoMjRabS0yNC00OGgtNGEyMCwyMCwwLDAsMC0yMCwyMHY0SDEwMHYtNGEyMCwyMCwwLDAsMC0yMC0yMEg3NlYxMDBoNGEyMCwyMCwwLDAsMCwyMC0yMFY3Nmg1NnY0YTIwLDIwLDAsMCwwLDIwLDIwaDRaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsOTZhMTYsMTYsMCwwLDAsMTYtMTZWNDhhMTYsMTYsMCwwLDAtMTYtMTZIMTc2YTE2LDE2LDAsMCwwLTE2LDE2djhIOTZWNDhBMTYsMTYsMCwwLDAsODAsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWODBBMTYsMTYsMCwwLDAsNDgsOTZoOHY2NEg0OGExNiwxNiwwLDAsMC0xNiwxNnYzMmExNiwxNiwwLDAsMCwxNiwxNkg4MGExNiwxNiwwLDAsMCwxNi0xNnYtOGg2NHY4YTE2LDE2LDAsMCwwLDE2LDE2aDMyYTE2LDE2LDAsMCwwLDE2LTE2VjE3NmExNiwxNiwwLDAsMC0xNi0xNmgtOFY5NlptLTI0LDY0aC04YTE2LDE2LDAsMCwwLTE2LDE2djhIOTZ2LThhMTYsMTYsMCwwLDAtMTYtMTZINzJWOTZoOEExNiwxNiwwLDAsMCw5Niw4MFY3Mmg2NHY4YTE2LDE2LDAsMCwwLDE2LDE2aDhaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDhWODBhOCw4LDAsMCwxLTgsOEgxNzZhOCw4LDAsMCwxLTgtOFY0OGE4LDgsMCwwLDEsOC04aDMyQTgsOCwwLDAsMSwyMTYsNDhaTTgwLDQwSDQ4YTgsOCwwLDAsMC04LDhWODBhOCw4LDAsMCwwLDgsOEg4MGE4LDgsMCwwLDAsOC04VjQ4QTgsOCwwLDAsMCw4MCw0MFpNMjA4LDE2OEgxNzZhOCw4LDAsMCwwLTgsOHYzMmE4LDgsMCwwLDAsOCw4aDMyYTgsOCwwLDAsMCw4LThWMTc2QTgsOCwwLDAsMCwyMDgsMTY4Wk04MCwxNjhINDhhOCw4LDAsMCwwLTgsOHYzMmE4LDgsMCwwLDAsOCw4SDgwYTgsOCwwLDAsMCw4LThWMTc2QTgsOCwwLDAsMCw4MCwxNjhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjA4LDk2YTE2LDE2LDAsMCwwLDE2LTE2VjQ4YTE2LDE2LDAsMCwwLTE2LTE2SDE3NmExNiwxNiwwLDAsMC0xNiwxNnY4SDk2VjQ4QTE2LDE2LDAsMCwwLDgwLDMySDQ4QTE2LDE2LDAsMCwwLDMyLDQ4VjgwQTE2LDE2LDAsMCwwLDQ4LDk2aDh2NjRINDhhMTYsMTYsMCwwLDAtMTYsMTZ2MzJhMTYsMTYsMCwwLDAsMTYsMTZIODBhMTYsMTYsMCwwLDAsMTYtMTZ2LThoNjR2OGExNiwxNiwwLDAsMCwxNiwxNmgzMmExNiwxNiwwLDAsMCwxNi0xNlYxNzZhMTYsMTYsMCwwLDAtMTYtMTZoLThWOTZaTTE3Niw0OGgzMlY4MEgxNzZaTTQ4LDQ4SDgwVjYzLjlhLjUxLjUxLDAsMCwwLDAsLjJWODBINDhaTTgwLDIwOEg0OFYxNzZIODB2MTUuOWEuNTEuNTEsMCwwLDAsMCwuMlYyMDhabTEyOCwwSDE3NlYxNzZoMzJabS0yNC00OGgtOGExNiwxNiwwLDAsMC0xNiwxNnY4SDk2di04YTE2LDE2LDAsMCwwLTE2LTE2SDcyVjk2aDhBMTYsMTYsMCwwLDAsOTYsODBWNzJoNjR2OGExNiwxNiwwLDAsMCwxNiwxNmg4WiIvPjwvc3ZnPg==)
 */
declare const I: Icon;
export { I as BoundingBox };