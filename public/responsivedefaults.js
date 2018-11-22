webpackJsonp([3],{

/***/ "./node_modules/@amcharts/amcharts4/.internal/charts/axes/AxisFillCircular.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AxisFillCircular; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AxisFill__ = __webpack_require__("./node_modules/@amcharts/amcharts4/.internal/charts/axes/AxisFill.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_utils_Percent__ = __webpack_require__("./node_modules/@amcharts/amcharts4/.internal/core/utils/Percent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_Registry__ = __webpack_require__("./node_modules/@amcharts/amcharts4/.internal/core/Registry.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_utils_Type__ = __webpack_require__("./node_modules/@amcharts/amcharts4/.internal/core/utils/Type.js");

/**
 * ============================================================================
 * IMPORTS
 * ============================================================================
 * @hidden
 */




/**
 * ============================================================================
 * MAIN CLASS
 * ============================================================================
 * @hidden
 */
/**
 * Provides fill element functionality for circular Axes.
 *
 * @see {@link IAxisFillCircularEvents} for a list of available events
 * @see {@link IAxisFillCircularAdapters} for a list of available Adapters
 * @todo Needs description
 */
var AxisFillCircular = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](AxisFillCircular, _super);
    /**
     * Constructor.
     *
     * @param {Axis} axis Axis
     */
    function AxisFillCircular(axis) {
        var _this = _super.call(this, axis) || this;
        _this.className = "AxisFillCircular";
        _this.element = _this.paper.add("path");
        _this.radius = Object(__WEBPACK_IMPORTED_MODULE_2__core_utils_Percent__["c" /* percent */])(100);
        _this.applyTheme();
        return _this;
    }
    /**
     * Draws the fill element.
     *
     * @ignore Exclude from docs
     */
    AxisFillCircular.prototype.draw = function () {
        _super.prototype.draw.call(this);
        if (this.axis) {
            var renderer = this.axis.renderer;
            this.fillPath = renderer.getPositionRangePath(this.startPosition, this.endPosition, this.radius, __WEBPACK_IMPORTED_MODULE_4__core_utils_Type__["d" /* hasValue */](this.innerRadius) ? this.innerRadius : renderer.innerRadius, this.cornerRadius);
            this.path = this.fillPath;
        }
    };
    Object.defineProperty(AxisFillCircular.prototype, "innerRadius", {
        /**
         * @return {number} Inner radius
         */
        get: function () {
            return this.getPropertyValue("innerRadius");
        },
        /**
         * Inner radius of the fill. Relative ([[Percent]]) or absolute (pixels).
         *
         * @param {number | Percent}  value  Inner radius
         */
        set: function (value) {
            this.setPercentProperty("innerRadius", value, true, false, 10, false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisFillCircular.prototype, "radius", {
        /**
         * @return {number} Outer radius
         */
        get: function () {
            return this.getPropertyValue("radius");
        },
        /**
         * Outer radius of the fill. Relative ([[Percent]]) or absolute (pixels).
         *
         * @param {number | Percent}  value  Outer radius
         */
        set: function (value) {
            this.setPercentProperty("radius", value, true, false, 10, false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisFillCircular.prototype, "cornerRadius", {
        /**
         * @return {number} Corner radius (px)
         */
        get: function () {
            return this.getPropertyValue("cornerRadius");
        },
        /**
         * Corner radius for the fill. In pixels.
         *
         * @param {number}  value  Corner radius (px)
         */
        set: function (value) {
            this.setPropertyValue("cornerRadius", value, true);
        },
        enumerable: true,
        configurable: true
    });
    return AxisFillCircular;
}(__WEBPACK_IMPORTED_MODULE_1__AxisFill__["a" /* AxisFill */]));

/**
 * Register class in system, so that it can be instantiated using its name from
 * anywhere.
 *
 * @ignore
 */
__WEBPACK_IMPORTED_MODULE_3__core_Registry__["a" /* registry */].registeredClasses["AxisFillCircular"] = AxisFillCircular;
//# sourceMappingURL=AxisFillCircular.js.map

/***/ }),

/***/ "./node_modules/@amcharts/amcharts4/.internal/charts/axes/AxisLabelCircular.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AxisLabelCircular; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AxisLabel__ = __webpack_require__("./node_modules/@amcharts/amcharts4/.internal/charts/axes/AxisLabel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_Registry__ = __webpack_require__("./node_modules/@amcharts/amcharts4/.internal/core/Registry.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_utils_Math__ = __webpack_require__("./node_modules/@amcharts/amcharts4/.internal/core/utils/Math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_utils_Type__ = __webpack_require__("./node_modules/@amcharts/amcharts4/.internal/core/utils/Type.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_utils_Utils__ = __webpack_require__("./node_modules/@amcharts/amcharts4/.internal/core/utils/Utils.js");
/**
 * Axis Label module
 */

/**
 * ============================================================================
 * IMPORTS
 * ============================================================================
 * @hidden
 */





/**
 * ============================================================================
 * MAIN CLASS
 * ============================================================================
 * @hidden
 */
/**
 * Use to create labels on circular axis.
 *
 * @see {@link IAxisLabelCircularEvents} for a list of available events
 * @see {@link IAxisLabelCircularAdapters} for a list of available Adapters
 */
var AxisLabelCircular = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](AxisLabelCircular, _super);
    /**
     * Constructor
     */
    function AxisLabelCircular() {
        var _this = _super.call(this) || this;
        /**
         *
         * @type {number}
         * @ignore
         */
        _this.fdx = 0;
        /**
         *
         * @type {number}
         * @ignore
         */
        _this.fdy = 0;
        _this.className = "AxisLabelCircular";
        _this.padding(0, 0, 0, 0);
        _this.location = 0.5;
        _this.radius = 0;
        _this.isMeasured = false;
        _this.applyTheme();
        return _this;
    }
    Object.defineProperty(AxisLabelCircular.prototype, "relativeRotation", {
        /**
         * @return {number} Rotation angle
         */
        get: function () {
            return this.getPropertyValue("relativeRotation");
        },
        /**
         * Relative rotation of the label.
         *
         * It is an angle to circle. In case 90, labels will be positioned like rays
         * of light, if 0 - positione along the circle.
         *
         * @param {number} value Rotation angle
         */
        set: function (value) {
            this.setPropertyValue("relativeRotation", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisLabelCircular.prototype, "radius", {
        /**
         * @return {number} Distance (px)
         */
        get: function () {
            return this.getPropertyValue("radius");
        },
        /**
         * Distance from axis circle to label in pixels or percent.
         *
         * @param {number} value Distance (px or percent)
         */
        set: function (value) {
            this.setPercentProperty("radius", value, true, false, 10, false);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * returns label radius in pixels
     */
    AxisLabelCircular.prototype.pixelRadius = function (axisRadius) {
        var sign = 1;
        if (this.inside) {
            sign = -1;
        }
        return __WEBPACK_IMPORTED_MODULE_5__core_utils_Utils__["B" /* relativeToValue */](this.radius, axisRadius) * sign;
    };
    /**
     * [fixPoint description]
     *
     * @ignore Exclude from docs
     * @todo Description
     * @param  {IPoint}  point       Label affixation point
     * @param  {number}  axisRadius  Distance from point (px)
     * @return {IPoint}              [description]
     */
    AxisLabelCircular.prototype.fixPoint = function (point, axisRadius) {
        var angle = __WEBPACK_IMPORTED_MODULE_3__core_utils_Math__["a" /* DEGREES */] * Math.atan2(point.y, point.x);
        if (this.invalid) {
            this.validate(); //@todo" check if we need this
        }
        var relativeRotation = this.relativeRotation;
        // we don't use valign for labels because then they would jump while animating. instead we modify dy depending on a y position
        // this math makes dy to be 1 at the top of the circle, 0.5 at the middle and 1 at the bottom
        // @todo with this math doesn't work well with inside = true
        this.dy = -this._measuredHeight * (1 - (point.y + axisRadius) / (2 * axisRadius));
        // simmilar with dx
        this.dx = -this._measuredWidth * (1 - (point.x + axisRadius) / (2 * axisRadius));
        var labelRadius = this.pixelRadius(axisRadius);
        if (__WEBPACK_IMPORTED_MODULE_4__core_utils_Type__["h" /* isNumber */](relativeRotation)) {
            var pixelWidth = this.bbox.width;
            var pixelHeight = this.bbox.height;
            if (angle > 90 || angle < -90) {
                if (relativeRotation == -90) {
                    relativeRotation = 90;
                    pixelWidth = 0;
                }
            }
            else {
                if (relativeRotation == -90) {
                    pixelHeight = -pixelHeight;
                }
                if (relativeRotation == 90) {
                    relativeRotation = -90;
                    pixelWidth = 0;
                    pixelHeight = -pixelHeight;
                }
            }
            this.rotation = relativeRotation + angle + 90;
            var dH = __WEBPACK_IMPORTED_MODULE_3__core_utils_Math__["v" /* sin */](relativeRotation) / 2;
            var dW = __WEBPACK_IMPORTED_MODULE_3__core_utils_Math__["f" /* cos */](relativeRotation) / 2;
            var rotation = this.rotation;
            this.dx = pixelHeight * dH * __WEBPACK_IMPORTED_MODULE_3__core_utils_Math__["v" /* sin */](rotation) - pixelWidth * dW * __WEBPACK_IMPORTED_MODULE_3__core_utils_Math__["f" /* cos */](rotation);
            this.dy = -pixelHeight * dH * __WEBPACK_IMPORTED_MODULE_3__core_utils_Math__["f" /* cos */](rotation) - pixelWidth * dW * __WEBPACK_IMPORTED_MODULE_3__core_utils_Math__["v" /* sin */](rotation);
            var pixelPaddingBottom = this.pixelPaddingBottom;
            var pixelPaddingTop = this.pixelPaddingTop;
            var pixelPaddingLeft = this.pixelPaddingLeft;
            var pixelPaddingRight = this.pixelPaddingRight;
            if (!this.inside) {
                labelRadius += (pixelHeight + pixelPaddingBottom + pixelPaddingTop) * __WEBPACK_IMPORTED_MODULE_3__core_utils_Math__["f" /* cos */](relativeRotation) + (pixelWidth + pixelPaddingLeft + pixelPaddingRight) * __WEBPACK_IMPORTED_MODULE_3__core_utils_Math__["v" /* sin */](relativeRotation);
            }
            else {
                if (angle > 90 || angle < -90) {
                    labelRadius -= (pixelPaddingBottom + pixelPaddingTop) * __WEBPACK_IMPORTED_MODULE_3__core_utils_Math__["f" /* cos */](relativeRotation) + (pixelPaddingLeft + pixelPaddingRight) * __WEBPACK_IMPORTED_MODULE_3__core_utils_Math__["v" /* sin */](relativeRotation);
                }
                else {
                    labelRadius += (pixelPaddingBottom + this.bbox.height + pixelPaddingTop) * __WEBPACK_IMPORTED_MODULE_3__core_utils_Math__["f" /* cos */](relativeRotation) + (pixelPaddingLeft + pixelPaddingRight + this.bbox.width) * __WEBPACK_IMPORTED_MODULE_3__core_utils_Math__["v" /* sin */](relativeRotation);
                }
            }
        }
        this.fdx = this.dx;
        this.fdy = this.dy;
        point.x += __WEBPACK_IMPORTED_MODULE_3__core_utils_Math__["f" /* cos */](angle) * labelRadius;
        point.y += __WEBPACK_IMPORTED_MODULE_3__core_utils_Math__["v" /* sin */](angle) * labelRadius;
        return point;
    };
    return AxisLabelCircular;
}(__WEBPACK_IMPORTED_MODULE_1__AxisLabel__["a" /* AxisLabel */]));

/**
 * Register class in system, so that it can be instantiated using its name from
 * anywhere.
 *
 * @ignore
 */
__WEBPACK_IMPORTED_MODULE_2__core_Registry__["a" /* registry */].registeredClasses["AxisLabelCircular"] = AxisLabelCircular;
//# sourceMappingURL=AxisLabelCircular.js.map

/***/ }),

/***/ "./node_modules/@amcharts/amcharts4/.internal/charts/axes/AxisRendererCircular.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AxisRendererCircular; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AxisRenderer__ = __webpack_require__("./node_modules/@amcharts/amcharts4/.internal/charts/axes/AxisRenderer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AxisFillCircular__ = __webpack_require__("./node_modules/@amcharts/amcharts4/.internal/charts/axes/AxisFillCircular.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__GridCircular__ = __webpack_require__("./node_modules/@amcharts/amcharts4/.internal/charts/axes/GridCircular.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AxisLabelCircular__ = __webpack_require__("./node_modules/@amcharts/amcharts4/.internal/charts/axes/AxisLabelCircular.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_Registry__ = __webpack_require__("./node_modules/@amcharts/amcharts4/.internal/core/Registry.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_utils_Percent__ = __webpack_require__("./node_modules/@amcharts/amcharts4/.internal/core/utils/Percent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_utils_Math__ = __webpack_require__("./node_modules/@amcharts/amcharts4/.internal/core/utils/Math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_rendering_Path__ = __webpack_require__("./node_modules/@amcharts/amcharts4/.internal/core/rendering/Path.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_utils_Utils__ = __webpack_require__("./node_modules/@amcharts/amcharts4/.internal/core/utils/Utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_utils_Type__ = __webpack_require__("./node_modules/@amcharts/amcharts4/.internal/core/utils/Type.js");
/**
 * Module, defining Axis Renderer for circular axes.
 */

/**
 * ============================================================================
 * IMPORTS
 * ============================================================================
 * @hidden
 */










/**
 * ============================================================================
 * MAIN CLASS
 * ============================================================================
 * @hidden
 */
/**
 * A renderer for circular axis.
 */
var AxisRendererCircular = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](AxisRendererCircular, _super);
    /**
     * Constructor.
     *
     * @param {Axis} axis Related axis
     */
    function AxisRendererCircular() {
        var _this = 
        // Init
        _super.call(this) || this;
        /**
         * @ignore
         */
        _this.pixelRadiusReal = 0;
        // axis.layout = "none"; // does not trigger redraw when size changes
        _this.layout = "none";
        _this.className = "AxisRendererCircular";
        _this.isMeasured = false;
        _this.startAngle = -90;
        _this.endAngle = 270;
        _this.useChartAngles = true;
        _this.radius = Object(__WEBPACK_IMPORTED_MODULE_6__core_utils_Percent__["c" /* percent */])(100);
        _this.isMeasured = false;
        _this.grid.template.location = 0;
        _this.labels.template.location = 0;
        _this.labels.template.radius = 15;
        _this.ticks.template.location = 0;
        _this.ticks.template.pixelPerfect = false;
        _this.tooltipLocation = 0;
        _this.line.strokeOpacity = 0;
        _this.applyTheme();
        return _this;
    }
    /**
    * @ignore
    */
    AxisRendererCircular.prototype.setAxis = function (axis) {
        var _this = this;
        _super.prototype.setAxis.call(this, axis);
        axis.isMeasured = false;
        // modify x and y so that tooltip would always be on circle
        var tooltip = axis.tooltip;
        tooltip.adapter.add("dx", function (x, target) {
            var point = __WEBPACK_IMPORTED_MODULE_9__core_utils_Utils__["L" /* svgPointToSprite */]({ x: target.pixelX, y: target.pixelY }, _this);
            return _this.pixelRadius * Math.cos(Math.atan2(point.y, point.x)) - point.x;
        });
        tooltip.adapter.add("dy", function (y, target) {
            var point = __WEBPACK_IMPORTED_MODULE_9__core_utils_Utils__["L" /* svgPointToSprite */]({ x: target.pixelX, y: target.pixelY }, _this);
            return _this.pixelRadius * Math.sin(Math.atan2(point.y, point.x)) - point.y;
        });
    };
    /**
     * Validates Axis renderer.
     *
     * @ignore Exclude from docs
     */
    AxisRendererCircular.prototype.validate = function () {
        // so that radius would be updated
        if (this.chart && this.chart.invalid) {
            this.chart.validate();
        }
        _super.prototype.validate.call(this);
    };
    Object.defineProperty(AxisRendererCircular.prototype, "axisLength", {
        /**
         * Returns actual length of the Axis, in pixels.
         *
         * @return {number} Length (px)
         */
        get: function () {
            return 2 * Math.PI * this.pixelRadius;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisRendererCircular.prototype, "radius", {
        /**
         * @return {number | Percent} Outer radius
         */
        get: function () {
            return this.getPropertyValue("radius");
        },
        /**
         * Outer radius of the axis.
         *
         * Can be absolute (px) or relative ([[Percent]]).
         *
         * @param {number | Percent}  value  Outer radius
         */
        set: function (value) {
            if (this.setPercentProperty("radius", value, false, false, 10, false)) {
                if (this.axis) {
                    this.axis.invalidate();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisRendererCircular.prototype, "pixelRadius", {
        /**
         * Outer radius in pixels.
         *
         * @return {number} Outer radius (px)
         */
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_9__core_utils_Utils__["A" /* relativeRadiusToValue */](this.radius, this.pixelRadiusReal) || 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisRendererCircular.prototype, "innerRadius", {
        /**
         * @return {number | Percent} Inner radius
         */
        get: function () {
            return this.getPropertyValue("innerRadius");
        },
        /**
         * Inner radius of the axis.
         *
         * Can be absolute (px) or relative ([[Percent]]).
         *
         * @param {number | Percent}  value  Inner radius
         */
        set: function (value) {
            if (this.setPercentProperty("innerRadius", value, false, false, 10, false)) {
                if (this.axis) {
                    this.axis.invalidate();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisRendererCircular.prototype, "useChartAngles", {
        /**
         * @return {boolean} Use chart angles
         */
        get: function () {
            return this.getPropertyValue("useChartAngles");
        },
        /**
         * Specifies if axis should use its own `startAngle` and `endAngle` or
         * inherit them from relative properties from chart.
         *
         * @default false
         * @param {boolean}  value  Use chart's angles
         */
        set: function (value) {
            this.setPropertyValue("useChartAngles", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisRendererCircular.prototype, "pixelInnerRadius", {
        /**
         * Inner radius in pixels.
         *
         * @return {number} Inner radius (px)
         */
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_9__core_utils_Utils__["A" /* relativeRadiusToValue */](this.innerRadius, this.pixelRadiusReal) || 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Converts relative position on axis to point coordinates.
     *
     * @param  {number}  position  Position (0-1)
     * @return {IPoint}            Point
     */
    AxisRendererCircular.prototype.positionToPoint = function (position) {
        var coordinate = this.positionToCoordinate(position);
        var angle = this.startAngle + (this.endAngle - this.startAngle) * coordinate / this.axisLength;
        return { x: this.pixelRadius * __WEBPACK_IMPORTED_MODULE_7__core_utils_Math__["f" /* cos */](angle), y: this.pixelRadius * __WEBPACK_IMPORTED_MODULE_7__core_utils_Math__["v" /* sin */](angle) };
    };
    /**
     * Converts relative position (0-1) on axis to angle in degrees (0-360).
     *
     * @param  {number}  position  Position (0-1)
     * @return {number}            Angle (0-360)
     */
    AxisRendererCircular.prototype.positionToAngle = function (position) {
        var axis = this.axis;
        var arc = (this.endAngle - this.startAngle) / (axis.end - axis.start);
        var angle;
        if (axis.renderer.inversed) {
            angle = this.startAngle + (axis.end - position) * arc;
        }
        else {
            angle = this.startAngle + (position - axis.start) * arc;
        }
        return __WEBPACK_IMPORTED_MODULE_7__core_utils_Math__["u" /* round */](angle, 3);
    };
    /**
     * Updates and positions the axis line element.
     *
     * @ignore Exclude from docs
     */
    AxisRendererCircular.prototype.updateAxisLine = function () {
        var radius = this.pixelRadius;
        var startAngle = this.startAngle;
        var endAngle = this.endAngle;
        var arc = endAngle - startAngle;
        this.line.path = __WEBPACK_IMPORTED_MODULE_8__core_rendering_Path__["f" /* moveTo */]({ x: radius * __WEBPACK_IMPORTED_MODULE_7__core_utils_Math__["f" /* cos */](startAngle), y: radius * __WEBPACK_IMPORTED_MODULE_7__core_utils_Math__["v" /* sin */](startAngle) }) + __WEBPACK_IMPORTED_MODULE_8__core_rendering_Path__["b" /* arcTo */](startAngle, arc, radius, radius);
    };
    /**
     * Updates and positions a grid element.
     *
     * @ignore Exclude from docs
     * @param {Grid}    grid         Grid element
     * @param {number}  position     Starting position
     * @param {number}  endPosition  End position
     */
    AxisRendererCircular.prototype.updateGridElement = function (grid, position, endPosition) {
        position = position + (endPosition - position) * grid.location;
        var point = this.positionToPoint(position);
        if (grid.element) {
            var angle = __WEBPACK_IMPORTED_MODULE_7__core_utils_Math__["a" /* DEGREES */] * Math.atan2(point.y, point.x);
            var radius = __WEBPACK_IMPORTED_MODULE_9__core_utils_Utils__["A" /* relativeRadiusToValue */](__WEBPACK_IMPORTED_MODULE_10__core_utils_Type__["d" /* hasValue */](grid.radius) ? grid.radius : Object(__WEBPACK_IMPORTED_MODULE_6__core_utils_Percent__["c" /* percent */])(100), this.pixelRadius);
            var gridInnerRadius = __WEBPACK_IMPORTED_MODULE_9__core_utils_Utils__["A" /* relativeRadiusToValue */](grid.innerRadius, this.pixelRadius);
            grid.zIndex = 0;
            var innerRadius = __WEBPACK_IMPORTED_MODULE_9__core_utils_Utils__["A" /* relativeRadiusToValue */](__WEBPACK_IMPORTED_MODULE_10__core_utils_Type__["h" /* isNumber */](gridInnerRadius) ? gridInnerRadius : this.innerRadius, this.pixelRadius, true);
            grid.path = __WEBPACK_IMPORTED_MODULE_8__core_rendering_Path__["f" /* moveTo */]({ x: innerRadius * __WEBPACK_IMPORTED_MODULE_7__core_utils_Math__["f" /* cos */](angle), y: innerRadius * __WEBPACK_IMPORTED_MODULE_7__core_utils_Math__["v" /* sin */](angle) }) + __WEBPACK_IMPORTED_MODULE_8__core_rendering_Path__["e" /* lineTo */]({ x: radius * __WEBPACK_IMPORTED_MODULE_7__core_utils_Math__["f" /* cos */](angle), y: radius * __WEBPACK_IMPORTED_MODULE_7__core_utils_Math__["v" /* sin */](angle) });
        }
        this.toggleVisibility(grid, position, 0, 1);
    };
    /**
     * Updates and positions a tick element.
     *
     * @ignore Exclude from docs
     * @param {AxisTick}  tick         Tick element
     * @param {number}    position     Starting position
     * @param {number}    endPosition  End position
     */
    AxisRendererCircular.prototype.updateTickElement = function (tick, position, endPosition) {
        position = position + (endPosition - position) * tick.location;
        var point = this.positionToPoint(position);
        if (tick.element) {
            var radius = this.pixelRadius;
            var angle = __WEBPACK_IMPORTED_MODULE_7__core_utils_Math__["a" /* DEGREES */] * Math.atan2(point.y, point.x);
            var tickLength = tick.length;
            if (tick.inside) {
                tickLength = -tickLength;
            }
            tick.zIndex = 1;
            tick.path = __WEBPACK_IMPORTED_MODULE_8__core_rendering_Path__["f" /* moveTo */]({ x: radius * __WEBPACK_IMPORTED_MODULE_7__core_utils_Math__["f" /* cos */](angle), y: radius * __WEBPACK_IMPORTED_MODULE_7__core_utils_Math__["v" /* sin */](angle) }) + __WEBPACK_IMPORTED_MODULE_8__core_rendering_Path__["e" /* lineTo */]({ x: (radius + tickLength) * __WEBPACK_IMPORTED_MODULE_7__core_utils_Math__["f" /* cos */](angle), y: (radius + tickLength) * __WEBPACK_IMPORTED_MODULE_7__core_utils_Math__["v" /* sin */](angle) });
        }
        this.toggleVisibility(tick, position, 0, 1);
    };
    /**
     * Updates and positions a label element.
     *
     * @ignore Exclude from docs
     * @param {AxisLabel}  label        Label element
     * @param {number}     position     Starting position
     * @param {number}     endPosition  Ending position
     */
    AxisRendererCircular.prototype.updateLabelElement = function (label, position, endPosition, location) {
        if (!__WEBPACK_IMPORTED_MODULE_10__core_utils_Type__["d" /* hasValue */](location)) {
            location = label.location;
        }
        position = position + (endPosition - position) * location;
        var point = this.positionToPoint(position);
        label.fixPoint(point, this.pixelRadius);
        label.zIndex = 2;
        this.positionItem(label, point);
        this.toggleVisibility(label, position, this.minLabelPosition, this.maxLabelPosition);
    };
    /**
     * Checks if point is within bounds of a container.
     *
     * @ignore Exclude from docs
     * @param  {IPoint}   point Point coordinates
     * @return {boolean}         Fits?
     */
    AxisRendererCircular.prototype.fitsToBounds = function (point) {
        return true;
    };
    Object.defineProperty(AxisRendererCircular.prototype, "startAngle", {
        /**
         * @return {number} Start angle
         */
        get: function () {
            return this.getPropertyValue("startAngle");
        },
        /**
         * Start angle of the axis in degrees (0-360).
         *
         * @param {number}  value  Start angle
         */
        set: function (value) {
            // do not normalize angel here!
            if (this.setPropertyValue("startAngle", value)) {
                if (this.axis) {
                    this.axis.invalidate();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisRendererCircular.prototype, "endAngle", {
        /**
         * @return {number} End angle
         */
        get: function () {
            return this.getPropertyValue("endAngle");
        },
        /**
         * End angle of the axis in degrees (0-360).
         *
         * @param {number}  value  End angle
         */
        set: function (value) {
            // do not normalize angel here!
            if (this.setPropertyValue("endAngle", value)) {
                if (this.axis) {
                    this.axis.invalidate();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * [getPositionRangePath description]
     *
     * @ignore Exclude from docs
     * @todo Description
     * @param  {number}  startPosition  Starting position
     * @param  {number}  endPosition    End position
     * @return {string}                 SVG path
     */
    AxisRendererCircular.prototype.getPositionRangePath = function (startPosition, endPosition, radius, innerRadius, cornerRadius) {
        var path = "";
        if (__WEBPACK_IMPORTED_MODULE_10__core_utils_Type__["h" /* isNumber */](startPosition) && __WEBPACK_IMPORTED_MODULE_10__core_utils_Type__["h" /* isNumber */](endPosition)) {
            if (!__WEBPACK_IMPORTED_MODULE_10__core_utils_Type__["d" /* hasValue */](radius)) {
                radius = this.radius;
            }
            startPosition = __WEBPACK_IMPORTED_MODULE_7__core_utils_Math__["s" /* max */](startPosition, this.axis.start);
            endPosition = __WEBPACK_IMPORTED_MODULE_7__core_utils_Math__["t" /* min */](endPosition, this.axis.end);
            if (endPosition < startPosition) {
                endPosition = startPosition;
            }
            var pixelRadius = __WEBPACK_IMPORTED_MODULE_9__core_utils_Utils__["A" /* relativeRadiusToValue */](radius, this.pixelRadius);
            var pixelInnerRadius = __WEBPACK_IMPORTED_MODULE_9__core_utils_Utils__["A" /* relativeRadiusToValue */](innerRadius, this.pixelRadius, true);
            var startAngle = this.positionToAngle(startPosition);
            var endAngle = this.positionToAngle(endPosition);
            var arc = endAngle - startAngle;
            path = __WEBPACK_IMPORTED_MODULE_8__core_rendering_Path__["a" /* arc */](startAngle, arc, pixelRadius, pixelInnerRadius, pixelRadius, cornerRadius);
        }
        return path;
    };
    /**
     * Returns a new grid element, suitable for this Axis Renderer type.
     *
     * @return {GridCircular} Grid element
     */
    AxisRendererCircular.prototype.createGrid = function () {
        return new __WEBPACK_IMPORTED_MODULE_3__GridCircular__["a" /* GridCircular */]();
    };
    /**
     * Returns a new fill element, suitable for this Axis Renderer type.
     *
     * @return {AxisFillCircular} Fill element
     */
    AxisRendererCircular.prototype.createFill = function (axis) {
        return new __WEBPACK_IMPORTED_MODULE_2__AxisFillCircular__["a" /* AxisFillCircular */](axis);
    };
    /**
     * Returns a new label element, suitable for this Axis Renderer type.
     *
     * @return {AxisLabelCircular} Label element
     */
    AxisRendererCircular.prototype.createLabel = function () {
        return new __WEBPACK_IMPORTED_MODULE_4__AxisLabelCircular__["a" /* AxisLabelCircular */]();
    };
    return AxisRendererCircular;
}(__WEBPACK_IMPORTED_MODULE_1__AxisRenderer__["a" /* AxisRenderer */]));

/**
 * Register class in system, so that it can be instantiated using its name from
 * anywhere.
 *
 * @ignore
 */
__WEBPACK_IMPORTED_MODULE_5__core_Registry__["a" /* registry */].registeredClasses["AxisRendererCircular"] = AxisRendererCircular;
//# sourceMappingURL=AxisRendererCircular.js.map

/***/ }),

/***/ "./node_modules/@amcharts/amcharts4/.internal/charts/axes/GridCircular.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridCircular; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Grid__ = __webpack_require__("./node_modules/@amcharts/amcharts4/.internal/charts/axes/Grid.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_Registry__ = __webpack_require__("./node_modules/@amcharts/amcharts4/.internal/core/Registry.js");
/**
 * A module defining functionality for circular axis grid elements.
 */



/**
 * ============================================================================
 * MAIN CLASS
 * ============================================================================
 * @hidden
 */
/**
 * Creates a circular grid element for circular-type axis.
 *
 * @see {@link IGridCircularEvents} for a list of available events
 * @see {@link IGridCircularAdapters} for a list of available Adapters
 * @todo Review: container is better, as we'll be able to attach something to the GridCircular, also with 3d charts we might need some additional elements
 */
var GridCircular = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](GridCircular, _super);
    /**
     * Constructor
     */
    function GridCircular() {
        var _this = _super.call(this) || this;
        _this.className = "GridCircular";
        _this.pixelPerfect = false;
        _this.applyTheme();
        return _this;
    }
    Object.defineProperty(GridCircular.prototype, "innerRadius", {
        /**
         * @return {number} Inner radius
         */
        get: function () {
            return this.getPropertyValue("innerRadius");
        },
        /**
         * Inner radius of the circular grid. (absolute or relative)
         *
         * @param {number | Percent} value Inner radius
         */
        set: function (value) {
            this.setPercentProperty("innerRadius", value, true, false, 10, false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridCircular.prototype, "radius", {
        /**
         * @return {number} Outer radius
         */
        get: function () {
            return this.getPropertyValue("radius");
        },
        /**
         * Outer radius of the circular grid. (absolute or relative)
         *
         * @param {number | Percent} value Outer radius
         */
        set: function (value) {
            this.setPercentProperty("radius", value, true, false, 10, false);
        },
        enumerable: true,
        configurable: true
    });
    return GridCircular;
}(__WEBPACK_IMPORTED_MODULE_1__Grid__["a" /* Grid */]));

/**
 * Register class in system, so that it can be instantiated using its name from
 * anywhere.
 *
 * @ignore
 */
__WEBPACK_IMPORTED_MODULE_2__core_Registry__["a" /* registry */].registeredClasses["GridCircular"] = GridCircular;
//# sourceMappingURL=GridCircular.js.map

/***/ }),

/***/ "./node_modules/@amcharts/amcharts4/.internal/core/responsive/ResponsiveDefaults.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__charts_axes_AxisRenderer__ = __webpack_require__("./node_modules/@amcharts/amcharts4/.internal/charts/axes/AxisRenderer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__charts_axes_AxisRendererX__ = __webpack_require__("./node_modules/@amcharts/amcharts4/.internal/charts/axes/AxisRendererX.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__charts_axes_AxisRendererY__ = __webpack_require__("./node_modules/@amcharts/amcharts4/.internal/charts/axes/AxisRendererY.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__charts_axes_AxisRendererCircular__ = __webpack_require__("./node_modules/@amcharts/amcharts4/.internal/charts/axes/AxisRendererCircular.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__charts_Chart__ = __webpack_require__("./node_modules/@amcharts/amcharts4/.internal/charts/Chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__charts_Legend__ = __webpack_require__("./node_modules/@amcharts/amcharts4/.internal/charts/Legend.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__charts_map_SmallMap__ = __webpack_require__("./node_modules/@amcharts/amcharts4/.internal/charts/map/SmallMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__charts_map_ZoomControl__ = __webpack_require__("./node_modules/@amcharts/amcharts4/.internal/charts/map/ZoomControl.js");
/**
 * Defines default Responsive rules
 * @hidden
 */








/**
 * ============================================================================
 * RULES
 * ============================================================================
 * @hidden
 */
/**
 * Default rules.
 *
 * @ignore Exclude from docs
 * @todo Do not create states for objects that do not have any overrides
 */
/* harmony default export */ __webpack_exports__["default"] = ([
    /**
     * --------------------------------------------------------------------------
     * Microcharts and sparklines
     * W<=100 || H<=100
     * @todo
     */
    {
        relevant: function (container) {
            if ((container.pixelWidth <= 100) || (container.pixelHeight <= 100)) {
                return true;
            }
            return false;
        },
        state: function (object, stateId) {
            // Put vertical axis labels inside
            if (object instanceof __WEBPACK_IMPORTED_MODULE_0__charts_axes_AxisRenderer__["a" /* AxisRenderer */]) {
                var state = object.states.create(stateId);
                state.properties.minLabelPosition = 1;
                state.properties.maxLabelPosition = 0;
                return state;
            }
        }
    },
    /**
     * --------------------------------------------------------------------------
     * Narrow
     * W<=200
     */
    {
        relevant: function (container) {
            if ((container.pixelWidth <= 200)) {
                return true;
            }
            return false;
        },
        state: function (object, stateId) {
            // Put vertical axis labels inside
            if (object instanceof __WEBPACK_IMPORTED_MODULE_2__charts_axes_AxisRendererY__["a" /* AxisRendererY */]) {
                var state = object.states.create(stateId);
                state.properties.inside = true;
                return state;
            }
            if (object instanceof __WEBPACK_IMPORTED_MODULE_3__charts_axes_AxisRendererCircular__["a" /* AxisRendererCircular */]) {
                var state = object.states.create(stateId);
                state.properties.inside = true;
                return state;
            }
            if (object instanceof __WEBPACK_IMPORTED_MODULE_6__charts_map_SmallMap__["a" /* SmallMap */]) {
                var state = object.states.create(stateId);
                state.properties.disabled = true;
                return state;
            }
            /*if (object instanceof Container && object.parent instanceof ZoomControl && !(object instanceof Button)) {
                let state = object.states.create(stateId);
                state.properties.height = 0;
                return state;
            }*/
            if (object instanceof __WEBPACK_IMPORTED_MODULE_7__charts_map_ZoomControl__["a" /* ZoomControl */]) {
                var state = object.states.create(stateId);
                state.properties.layout = "vertical";
                return state;
            }
            if (object instanceof __WEBPACK_IMPORTED_MODULE_4__charts_Chart__["a" /* Chart */]) {
                var state = object.states.create(stateId);
                state.properties.marginLeft = 0;
                state.properties.marginRight = 0;
                return state;
            }
            if (object instanceof __WEBPACK_IMPORTED_MODULE_5__charts_Legend__["a" /* Legend */] && (object.position == "left" || object.position == "right")) {
                var state = object.states.create(stateId);
                state.properties.position = "bottom";
                return state;
            }
        }
    },
    /**
     * --------------------------------------------------------------------------
     * Short
     * H<=200
     */
    {
        relevant: function (container) {
            if ((container.pixelHeight <= 200)) {
                return true;
            }
            return false;
        },
        state: function (object, stateId) {
            // Put vertical axis labels inside
            if (object instanceof __WEBPACK_IMPORTED_MODULE_1__charts_axes_AxisRendererX__["a" /* AxisRendererX */]) {
                var state = object.states.create(stateId);
                state.properties.inside = true;
                return state;
            }
            if (object instanceof __WEBPACK_IMPORTED_MODULE_3__charts_axes_AxisRendererCircular__["a" /* AxisRendererCircular */]) {
                var state = object.states.create(stateId);
                state.properties.inside = true;
                return state;
            }
            if (object instanceof __WEBPACK_IMPORTED_MODULE_6__charts_map_SmallMap__["a" /* SmallMap */]) {
                var state = object.states.create(stateId);
                state.properties.disabled = true;
                return state;
            }
            /*if (object instanceof Container && object.parent instanceof ZoomControl && !(object instanceof Button)) {
                let state = object.states.create(stateId);
                state.properties.width = 100;
                return state;
            }*/
            if (object instanceof __WEBPACK_IMPORTED_MODULE_7__charts_map_ZoomControl__["a" /* ZoomControl */]) {
                var state = object.states.create(stateId);
                state.properties.layout = "horizontal";
                return state;
            }
            if (object instanceof __WEBPACK_IMPORTED_MODULE_4__charts_Chart__["a" /* Chart */]) {
                var state = object.states.create(stateId);
                state.properties.marginTop = 0;
                state.properties.marginBottom = 0;
                return state;
            }
            if (object instanceof __WEBPACK_IMPORTED_MODULE_5__charts_Legend__["a" /* Legend */] && (object.position == "bottom" || object.position == "top")) {
                var state = object.states.create(stateId);
                state.properties.position = "right";
                return state;
            }
        }
    },
    /**
     * --------------------------------------------------------------------------
     * Super-small
     * W<=200 && H<=200
     */
    {
        relevant: function (container) {
            if ((container.pixelWidth <= 200) && (container.pixelHeight <= 200)) {
                return true;
            }
            return false;
        },
        state: function (object, stateId) {
            // Hide legend
            if (object instanceof __WEBPACK_IMPORTED_MODULE_5__charts_Legend__["a" /* Legend */]) {
                var state = object.states.create(stateId);
                state.properties.disabled = true;
                return state;
            }
            if (object instanceof __WEBPACK_IMPORTED_MODULE_7__charts_map_ZoomControl__["a" /* ZoomControl */]) {
                var state = object.states.create(stateId);
                state.properties.disabled = true;
                return state;
            }
        }
    }
]);
//# sourceMappingURL=ResponsiveDefaults.js.map

/***/ })

});