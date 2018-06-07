var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.game = (function() {

    /**
     * Namespace game.
     * @exports game
     * @namespace
     */
    var game = {};

    game.war = (function() {

        /**
         * Namespace war.
         * @memberof game
         * @namespace
         */
        var war = {};

        war.HeroInfo = (function() {

            /**
             * Properties of a HeroInfo.
             * @memberof game.war
             * @interface IHeroInfo
             * @property {number} heroId HeroInfo heroId
             * @property {number} modelId HeroInfo modelId
             * @property {number} fashionId HeroInfo fashionId
             * @property {number} level HeroInfo level
             * @property {Array.<number>|null} [equipmentList] HeroInfo equipmentList
             * @property {Array.<number>|null} [skillList] HeroInfo skillList
             * @property {Array.<number>|null} [weaponId] HeroInfo weaponId
             * @property {number} star HeroInfo star
             * @property {number} stairs HeroInfo stairs
             * @property {number} exp HeroInfo exp
             */

            /**
             * Constructs a new HeroInfo.
             * @memberof game.war
             * @classdesc Represents a HeroInfo.
             * @implements IHeroInfo
             * @constructor
             * @param {game.war.IHeroInfo=} [properties] Properties to set
             */
            function HeroInfo(properties) {
                this.equipmentList = [];
                this.skillList = [];
                this.weaponId = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * HeroInfo heroId.
             * @member {number} heroId
             * @memberof game.war.HeroInfo
             * @instance
             */
            HeroInfo.prototype.heroId = 0;

            /**
             * HeroInfo modelId.
             * @member {number} modelId
             * @memberof game.war.HeroInfo
             * @instance
             */
            HeroInfo.prototype.modelId = 0;

            /**
             * HeroInfo fashionId.
             * @member {number} fashionId
             * @memberof game.war.HeroInfo
             * @instance
             */
            HeroInfo.prototype.fashionId = 0;

            /**
             * HeroInfo level.
             * @member {number} level
             * @memberof game.war.HeroInfo
             * @instance
             */
            HeroInfo.prototype.level = 0;

            /**
             * HeroInfo equipmentList.
             * @member {Array.<number>} equipmentList
             * @memberof game.war.HeroInfo
             * @instance
             */
            HeroInfo.prototype.equipmentList = $util.emptyArray;

            /**
             * HeroInfo skillList.
             * @member {Array.<number>} skillList
             * @memberof game.war.HeroInfo
             * @instance
             */
            HeroInfo.prototype.skillList = $util.emptyArray;

            /**
             * HeroInfo weaponId.
             * @member {Array.<number>} weaponId
             * @memberof game.war.HeroInfo
             * @instance
             */
            HeroInfo.prototype.weaponId = $util.emptyArray;

            /**
             * HeroInfo star.
             * @member {number} star
             * @memberof game.war.HeroInfo
             * @instance
             */
            HeroInfo.prototype.star = 0;

            /**
             * HeroInfo stairs.
             * @member {number} stairs
             * @memberof game.war.HeroInfo
             * @instance
             */
            HeroInfo.prototype.stairs = 0;

            /**
             * HeroInfo exp.
             * @member {number} exp
             * @memberof game.war.HeroInfo
             * @instance
             */
            HeroInfo.prototype.exp = 0;

            /**
             * Creates a new HeroInfo instance using the specified properties.
             * @function create
             * @memberof game.war.HeroInfo
             * @static
             * @param {game.war.IHeroInfo=} [properties] Properties to set
             * @returns {game.war.HeroInfo} HeroInfo instance
             */
            HeroInfo.create = function create(properties) {
                return new HeroInfo(properties);
            };

            /**
             * Encodes the specified HeroInfo message. Does not implicitly {@link game.war.HeroInfo.verify|verify} messages.
             * @function encode
             * @memberof game.war.HeroInfo
             * @static
             * @param {game.war.IHeroInfo} message HeroInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HeroInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.heroId);
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.modelId);
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.fashionId);
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.level);
                if (message.equipmentList != null && message.equipmentList.length)
                    for (var i = 0; i < message.equipmentList.length; ++i)
                        writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.equipmentList[i]);
                if (message.skillList != null && message.skillList.length)
                    for (var i = 0; i < message.skillList.length; ++i)
                        writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.skillList[i]);
                if (message.weaponId != null && message.weaponId.length)
                    for (var i = 0; i < message.weaponId.length; ++i)
                        writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.weaponId[i]);
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.star);
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.stairs);
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.exp);
                return writer;
            };

            /**
             * Encodes the specified HeroInfo message, length delimited. Does not implicitly {@link game.war.HeroInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof game.war.HeroInfo
             * @static
             * @param {game.war.IHeroInfo} message HeroInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HeroInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a HeroInfo message from the specified reader or buffer.
             * @function decode
             * @memberof game.war.HeroInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.war.HeroInfo} HeroInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HeroInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.war.HeroInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.heroId = reader.uint32();
                        break;
                    case 2:
                        message.modelId = reader.uint32();
                        break;
                    case 3:
                        message.fashionId = reader.uint32();
                        break;
                    case 4:
                        message.level = reader.uint32();
                        break;
                    case 5:
                        if (!(message.equipmentList && message.equipmentList.length))
                            message.equipmentList = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.equipmentList.push(reader.uint32());
                        } else
                            message.equipmentList.push(reader.uint32());
                        break;
                    case 6:
                        if (!(message.skillList && message.skillList.length))
                            message.skillList = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.skillList.push(reader.uint32());
                        } else
                            message.skillList.push(reader.uint32());
                        break;
                    case 7:
                        if (!(message.weaponId && message.weaponId.length))
                            message.weaponId = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.weaponId.push(reader.uint32());
                        } else
                            message.weaponId.push(reader.uint32());
                        break;
                    case 8:
                        message.star = reader.uint32();
                        break;
                    case 9:
                        message.stairs = reader.uint32();
                        break;
                    case 10:
                        message.exp = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("heroId"))
                    throw $util.ProtocolError("missing required 'heroId'", { instance: message });
                if (!message.hasOwnProperty("modelId"))
                    throw $util.ProtocolError("missing required 'modelId'", { instance: message });
                if (!message.hasOwnProperty("fashionId"))
                    throw $util.ProtocolError("missing required 'fashionId'", { instance: message });
                if (!message.hasOwnProperty("level"))
                    throw $util.ProtocolError("missing required 'level'", { instance: message });
                if (!message.hasOwnProperty("star"))
                    throw $util.ProtocolError("missing required 'star'", { instance: message });
                if (!message.hasOwnProperty("stairs"))
                    throw $util.ProtocolError("missing required 'stairs'", { instance: message });
                if (!message.hasOwnProperty("exp"))
                    throw $util.ProtocolError("missing required 'exp'", { instance: message });
                return message;
            };

            /**
             * Decodes a HeroInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof game.war.HeroInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game.war.HeroInfo} HeroInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HeroInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a HeroInfo message.
             * @function verify
             * @memberof game.war.HeroInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            HeroInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.heroId))
                    return "heroId: integer expected";
                if (!$util.isInteger(message.modelId))
                    return "modelId: integer expected";
                if (!$util.isInteger(message.fashionId))
                    return "fashionId: integer expected";
                if (!$util.isInteger(message.level))
                    return "level: integer expected";
                if (message.equipmentList != null && message.hasOwnProperty("equipmentList")) {
                    if (!Array.isArray(message.equipmentList))
                        return "equipmentList: array expected";
                    for (var i = 0; i < message.equipmentList.length; ++i)
                        if (!$util.isInteger(message.equipmentList[i]))
                            return "equipmentList: integer[] expected";
                }
                if (message.skillList != null && message.hasOwnProperty("skillList")) {
                    if (!Array.isArray(message.skillList))
                        return "skillList: array expected";
                    for (var i = 0; i < message.skillList.length; ++i)
                        if (!$util.isInteger(message.skillList[i]))
                            return "skillList: integer[] expected";
                }
                if (message.weaponId != null && message.hasOwnProperty("weaponId")) {
                    if (!Array.isArray(message.weaponId))
                        return "weaponId: array expected";
                    for (var i = 0; i < message.weaponId.length; ++i)
                        if (!$util.isInteger(message.weaponId[i]))
                            return "weaponId: integer[] expected";
                }
                if (!$util.isInteger(message.star))
                    return "star: integer expected";
                if (!$util.isInteger(message.stairs))
                    return "stairs: integer expected";
                if (!$util.isInteger(message.exp))
                    return "exp: integer expected";
                return null;
            };

            /**
             * Creates a HeroInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof game.war.HeroInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {game.war.HeroInfo} HeroInfo
             */
            HeroInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.game.war.HeroInfo)
                    return object;
                var message = new $root.game.war.HeroInfo();
                if (object.heroId != null)
                    message.heroId = object.heroId >>> 0;
                if (object.modelId != null)
                    message.modelId = object.modelId >>> 0;
                if (object.fashionId != null)
                    message.fashionId = object.fashionId >>> 0;
                if (object.level != null)
                    message.level = object.level >>> 0;
                if (object.equipmentList) {
                    if (!Array.isArray(object.equipmentList))
                        throw TypeError(".game.war.HeroInfo.equipmentList: array expected");
                    message.equipmentList = [];
                    for (var i = 0; i < object.equipmentList.length; ++i)
                        message.equipmentList[i] = object.equipmentList[i] >>> 0;
                }
                if (object.skillList) {
                    if (!Array.isArray(object.skillList))
                        throw TypeError(".game.war.HeroInfo.skillList: array expected");
                    message.skillList = [];
                    for (var i = 0; i < object.skillList.length; ++i)
                        message.skillList[i] = object.skillList[i] >>> 0;
                }
                if (object.weaponId) {
                    if (!Array.isArray(object.weaponId))
                        throw TypeError(".game.war.HeroInfo.weaponId: array expected");
                    message.weaponId = [];
                    for (var i = 0; i < object.weaponId.length; ++i)
                        message.weaponId[i] = object.weaponId[i] >>> 0;
                }
                if (object.star != null)
                    message.star = object.star >>> 0;
                if (object.stairs != null)
                    message.stairs = object.stairs >>> 0;
                if (object.exp != null)
                    message.exp = object.exp >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a HeroInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof game.war.HeroInfo
             * @static
             * @param {game.war.HeroInfo} message HeroInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            HeroInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.equipmentList = [];
                    object.skillList = [];
                    object.weaponId = [];
                }
                if (options.defaults) {
                    object.heroId = 0;
                    object.modelId = 0;
                    object.fashionId = 0;
                    object.level = 0;
                    object.star = 0;
                    object.stairs = 0;
                    object.exp = 0;
                }
                if (message.heroId != null && message.hasOwnProperty("heroId"))
                    object.heroId = message.heroId;
                if (message.modelId != null && message.hasOwnProperty("modelId"))
                    object.modelId = message.modelId;
                if (message.fashionId != null && message.hasOwnProperty("fashionId"))
                    object.fashionId = message.fashionId;
                if (message.level != null && message.hasOwnProperty("level"))
                    object.level = message.level;
                if (message.equipmentList && message.equipmentList.length) {
                    object.equipmentList = [];
                    for (var j = 0; j < message.equipmentList.length; ++j)
                        object.equipmentList[j] = message.equipmentList[j];
                }
                if (message.skillList && message.skillList.length) {
                    object.skillList = [];
                    for (var j = 0; j < message.skillList.length; ++j)
                        object.skillList[j] = message.skillList[j];
                }
                if (message.weaponId && message.weaponId.length) {
                    object.weaponId = [];
                    for (var j = 0; j < message.weaponId.length; ++j)
                        object.weaponId[j] = message.weaponId[j];
                }
                if (message.star != null && message.hasOwnProperty("star"))
                    object.star = message.star;
                if (message.stairs != null && message.hasOwnProperty("stairs"))
                    object.stairs = message.stairs;
                if (message.exp != null && message.hasOwnProperty("exp"))
                    object.exp = message.exp;
                return object;
            };

            /**
             * Converts this HeroInfo to JSON.
             * @function toJSON
             * @memberof game.war.HeroInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            HeroInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return HeroInfo;
        })();

        war.CMSG_SelectInitializedHero_Req = (function() {

            /**
             * Properties of a CMSG_SelectInitializedHero_Req.
             * @memberof game.war
             * @interface ICMSG_SelectInitializedHero_Req
             * @property {number} id CMSG_SelectInitializedHero_Req id
             */

            /**
             * Constructs a new CMSG_SelectInitializedHero_Req.
             * @memberof game.war
             * @classdesc Represents a CMSG_SelectInitializedHero_Req.
             * @implements ICMSG_SelectInitializedHero_Req
             * @constructor
             * @param {game.war.ICMSG_SelectInitializedHero_Req=} [properties] Properties to set
             */
            function CMSG_SelectInitializedHero_Req(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CMSG_SelectInitializedHero_Req id.
             * @member {number} id
             * @memberof game.war.CMSG_SelectInitializedHero_Req
             * @instance
             */
            CMSG_SelectInitializedHero_Req.prototype.id = 0;

            /**
             * Creates a new CMSG_SelectInitializedHero_Req instance using the specified properties.
             * @function create
             * @memberof game.war.CMSG_SelectInitializedHero_Req
             * @static
             * @param {game.war.ICMSG_SelectInitializedHero_Req=} [properties] Properties to set
             * @returns {game.war.CMSG_SelectInitializedHero_Req} CMSG_SelectInitializedHero_Req instance
             */
            CMSG_SelectInitializedHero_Req.create = function create(properties) {
                return new CMSG_SelectInitializedHero_Req(properties);
            };

            /**
             * Encodes the specified CMSG_SelectInitializedHero_Req message. Does not implicitly {@link game.war.CMSG_SelectInitializedHero_Req.verify|verify} messages.
             * @function encode
             * @memberof game.war.CMSG_SelectInitializedHero_Req
             * @static
             * @param {game.war.ICMSG_SelectInitializedHero_Req} message CMSG_SelectInitializedHero_Req message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CMSG_SelectInitializedHero_Req.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
                return writer;
            };

            /**
             * Encodes the specified CMSG_SelectInitializedHero_Req message, length delimited. Does not implicitly {@link game.war.CMSG_SelectInitializedHero_Req.verify|verify} messages.
             * @function encodeDelimited
             * @memberof game.war.CMSG_SelectInitializedHero_Req
             * @static
             * @param {game.war.ICMSG_SelectInitializedHero_Req} message CMSG_SelectInitializedHero_Req message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CMSG_SelectInitializedHero_Req.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CMSG_SelectInitializedHero_Req message from the specified reader or buffer.
             * @function decode
             * @memberof game.war.CMSG_SelectInitializedHero_Req
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.war.CMSG_SelectInitializedHero_Req} CMSG_SelectInitializedHero_Req
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CMSG_SelectInitializedHero_Req.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.war.CMSG_SelectInitializedHero_Req();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("id"))
                    throw $util.ProtocolError("missing required 'id'", { instance: message });
                return message;
            };

            /**
             * Decodes a CMSG_SelectInitializedHero_Req message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof game.war.CMSG_SelectInitializedHero_Req
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game.war.CMSG_SelectInitializedHero_Req} CMSG_SelectInitializedHero_Req
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CMSG_SelectInitializedHero_Req.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CMSG_SelectInitializedHero_Req message.
             * @function verify
             * @memberof game.war.CMSG_SelectInitializedHero_Req
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CMSG_SelectInitializedHero_Req.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
                return null;
            };

            /**
             * Creates a CMSG_SelectInitializedHero_Req message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof game.war.CMSG_SelectInitializedHero_Req
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {game.war.CMSG_SelectInitializedHero_Req} CMSG_SelectInitializedHero_Req
             */
            CMSG_SelectInitializedHero_Req.fromObject = function fromObject(object) {
                if (object instanceof $root.game.war.CMSG_SelectInitializedHero_Req)
                    return object;
                var message = new $root.game.war.CMSG_SelectInitializedHero_Req();
                if (object.id != null)
                    message.id = object.id >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a CMSG_SelectInitializedHero_Req message. Also converts values to other types if specified.
             * @function toObject
             * @memberof game.war.CMSG_SelectInitializedHero_Req
             * @static
             * @param {game.war.CMSG_SelectInitializedHero_Req} message CMSG_SelectInitializedHero_Req
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CMSG_SelectInitializedHero_Req.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.id = 0;
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                return object;
            };

            /**
             * Converts this CMSG_SelectInitializedHero_Req to JSON.
             * @function toJSON
             * @memberof game.war.CMSG_SelectInitializedHero_Req
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CMSG_SelectInitializedHero_Req.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CMSG_SelectInitializedHero_Req;
        })();

        war.SMSG_SelectInitializedHero_Resp = (function() {

            /**
             * Properties of a SMSG_SelectInitializedHero_Resp.
             * @memberof game.war
             * @interface ISMSG_SelectInitializedHero_Resp
             * @property {number} heroId SMSG_SelectInitializedHero_Resp heroId
             */

            /**
             * Constructs a new SMSG_SelectInitializedHero_Resp.
             * @memberof game.war
             * @classdesc Represents a SMSG_SelectInitializedHero_Resp.
             * @implements ISMSG_SelectInitializedHero_Resp
             * @constructor
             * @param {game.war.ISMSG_SelectInitializedHero_Resp=} [properties] Properties to set
             */
            function SMSG_SelectInitializedHero_Resp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SMSG_SelectInitializedHero_Resp heroId.
             * @member {number} heroId
             * @memberof game.war.SMSG_SelectInitializedHero_Resp
             * @instance
             */
            SMSG_SelectInitializedHero_Resp.prototype.heroId = 0;

            /**
             * Creates a new SMSG_SelectInitializedHero_Resp instance using the specified properties.
             * @function create
             * @memberof game.war.SMSG_SelectInitializedHero_Resp
             * @static
             * @param {game.war.ISMSG_SelectInitializedHero_Resp=} [properties] Properties to set
             * @returns {game.war.SMSG_SelectInitializedHero_Resp} SMSG_SelectInitializedHero_Resp instance
             */
            SMSG_SelectInitializedHero_Resp.create = function create(properties) {
                return new SMSG_SelectInitializedHero_Resp(properties);
            };

            /**
             * Encodes the specified SMSG_SelectInitializedHero_Resp message. Does not implicitly {@link game.war.SMSG_SelectInitializedHero_Resp.verify|verify} messages.
             * @function encode
             * @memberof game.war.SMSG_SelectInitializedHero_Resp
             * @static
             * @param {game.war.ISMSG_SelectInitializedHero_Resp} message SMSG_SelectInitializedHero_Resp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SMSG_SelectInitializedHero_Resp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.heroId);
                return writer;
            };

            /**
             * Encodes the specified SMSG_SelectInitializedHero_Resp message, length delimited. Does not implicitly {@link game.war.SMSG_SelectInitializedHero_Resp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof game.war.SMSG_SelectInitializedHero_Resp
             * @static
             * @param {game.war.ISMSG_SelectInitializedHero_Resp} message SMSG_SelectInitializedHero_Resp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SMSG_SelectInitializedHero_Resp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SMSG_SelectInitializedHero_Resp message from the specified reader or buffer.
             * @function decode
             * @memberof game.war.SMSG_SelectInitializedHero_Resp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.war.SMSG_SelectInitializedHero_Resp} SMSG_SelectInitializedHero_Resp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SMSG_SelectInitializedHero_Resp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.war.SMSG_SelectInitializedHero_Resp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.heroId = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("heroId"))
                    throw $util.ProtocolError("missing required 'heroId'", { instance: message });
                return message;
            };

            /**
             * Decodes a SMSG_SelectInitializedHero_Resp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof game.war.SMSG_SelectInitializedHero_Resp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game.war.SMSG_SelectInitializedHero_Resp} SMSG_SelectInitializedHero_Resp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SMSG_SelectInitializedHero_Resp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SMSG_SelectInitializedHero_Resp message.
             * @function verify
             * @memberof game.war.SMSG_SelectInitializedHero_Resp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SMSG_SelectInitializedHero_Resp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.heroId))
                    return "heroId: integer expected";
                return null;
            };

            /**
             * Creates a SMSG_SelectInitializedHero_Resp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof game.war.SMSG_SelectInitializedHero_Resp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {game.war.SMSG_SelectInitializedHero_Resp} SMSG_SelectInitializedHero_Resp
             */
            SMSG_SelectInitializedHero_Resp.fromObject = function fromObject(object) {
                if (object instanceof $root.game.war.SMSG_SelectInitializedHero_Resp)
                    return object;
                var message = new $root.game.war.SMSG_SelectInitializedHero_Resp();
                if (object.heroId != null)
                    message.heroId = object.heroId >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a SMSG_SelectInitializedHero_Resp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof game.war.SMSG_SelectInitializedHero_Resp
             * @static
             * @param {game.war.SMSG_SelectInitializedHero_Resp} message SMSG_SelectInitializedHero_Resp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SMSG_SelectInitializedHero_Resp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.heroId = 0;
                if (message.heroId != null && message.hasOwnProperty("heroId"))
                    object.heroId = message.heroId;
                return object;
            };

            /**
             * Converts this SMSG_SelectInitializedHero_Resp to JSON.
             * @function toJSON
             * @memberof game.war.SMSG_SelectInitializedHero_Resp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SMSG_SelectInitializedHero_Resp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return SMSG_SelectInitializedHero_Resp;
        })();

        war.CMSG_UnlockHero_Req = (function() {

            /**
             * Properties of a CMSG_UnlockHero_Req.
             * @memberof game.war
             * @interface ICMSG_UnlockHero_Req
             * @property {number} heroId CMSG_UnlockHero_Req heroId
             */

            /**
             * Constructs a new CMSG_UnlockHero_Req.
             * @memberof game.war
             * @classdesc Represents a CMSG_UnlockHero_Req.
             * @implements ICMSG_UnlockHero_Req
             * @constructor
             * @param {game.war.ICMSG_UnlockHero_Req=} [properties] Properties to set
             */
            function CMSG_UnlockHero_Req(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CMSG_UnlockHero_Req heroId.
             * @member {number} heroId
             * @memberof game.war.CMSG_UnlockHero_Req
             * @instance
             */
            CMSG_UnlockHero_Req.prototype.heroId = 0;

            /**
             * Creates a new CMSG_UnlockHero_Req instance using the specified properties.
             * @function create
             * @memberof game.war.CMSG_UnlockHero_Req
             * @static
             * @param {game.war.ICMSG_UnlockHero_Req=} [properties] Properties to set
             * @returns {game.war.CMSG_UnlockHero_Req} CMSG_UnlockHero_Req instance
             */
            CMSG_UnlockHero_Req.create = function create(properties) {
                return new CMSG_UnlockHero_Req(properties);
            };

            /**
             * Encodes the specified CMSG_UnlockHero_Req message. Does not implicitly {@link game.war.CMSG_UnlockHero_Req.verify|verify} messages.
             * @function encode
             * @memberof game.war.CMSG_UnlockHero_Req
             * @static
             * @param {game.war.ICMSG_UnlockHero_Req} message CMSG_UnlockHero_Req message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CMSG_UnlockHero_Req.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.heroId);
                return writer;
            };

            /**
             * Encodes the specified CMSG_UnlockHero_Req message, length delimited. Does not implicitly {@link game.war.CMSG_UnlockHero_Req.verify|verify} messages.
             * @function encodeDelimited
             * @memberof game.war.CMSG_UnlockHero_Req
             * @static
             * @param {game.war.ICMSG_UnlockHero_Req} message CMSG_UnlockHero_Req message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CMSG_UnlockHero_Req.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CMSG_UnlockHero_Req message from the specified reader or buffer.
             * @function decode
             * @memberof game.war.CMSG_UnlockHero_Req
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.war.CMSG_UnlockHero_Req} CMSG_UnlockHero_Req
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CMSG_UnlockHero_Req.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.war.CMSG_UnlockHero_Req();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.heroId = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("heroId"))
                    throw $util.ProtocolError("missing required 'heroId'", { instance: message });
                return message;
            };

            /**
             * Decodes a CMSG_UnlockHero_Req message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof game.war.CMSG_UnlockHero_Req
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game.war.CMSG_UnlockHero_Req} CMSG_UnlockHero_Req
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CMSG_UnlockHero_Req.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CMSG_UnlockHero_Req message.
             * @function verify
             * @memberof game.war.CMSG_UnlockHero_Req
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CMSG_UnlockHero_Req.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.heroId))
                    return "heroId: integer expected";
                return null;
            };

            /**
             * Creates a CMSG_UnlockHero_Req message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof game.war.CMSG_UnlockHero_Req
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {game.war.CMSG_UnlockHero_Req} CMSG_UnlockHero_Req
             */
            CMSG_UnlockHero_Req.fromObject = function fromObject(object) {
                if (object instanceof $root.game.war.CMSG_UnlockHero_Req)
                    return object;
                var message = new $root.game.war.CMSG_UnlockHero_Req();
                if (object.heroId != null)
                    message.heroId = object.heroId >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a CMSG_UnlockHero_Req message. Also converts values to other types if specified.
             * @function toObject
             * @memberof game.war.CMSG_UnlockHero_Req
             * @static
             * @param {game.war.CMSG_UnlockHero_Req} message CMSG_UnlockHero_Req
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CMSG_UnlockHero_Req.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.heroId = 0;
                if (message.heroId != null && message.hasOwnProperty("heroId"))
                    object.heroId = message.heroId;
                return object;
            };

            /**
             * Converts this CMSG_UnlockHero_Req to JSON.
             * @function toJSON
             * @memberof game.war.CMSG_UnlockHero_Req
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CMSG_UnlockHero_Req.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CMSG_UnlockHero_Req;
        })();

        war.SMSG_UnlockHero_Resp = (function() {

            /**
             * Properties of a SMSG_UnlockHero_Resp.
             * @memberof game.war
             * @interface ISMSG_UnlockHero_Resp
             * @property {number} heroId SMSG_UnlockHero_Resp heroId
             */

            /**
             * Constructs a new SMSG_UnlockHero_Resp.
             * @memberof game.war
             * @classdesc Represents a SMSG_UnlockHero_Resp.
             * @implements ISMSG_UnlockHero_Resp
             * @constructor
             * @param {game.war.ISMSG_UnlockHero_Resp=} [properties] Properties to set
             */
            function SMSG_UnlockHero_Resp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SMSG_UnlockHero_Resp heroId.
             * @member {number} heroId
             * @memberof game.war.SMSG_UnlockHero_Resp
             * @instance
             */
            SMSG_UnlockHero_Resp.prototype.heroId = 0;

            /**
             * Creates a new SMSG_UnlockHero_Resp instance using the specified properties.
             * @function create
             * @memberof game.war.SMSG_UnlockHero_Resp
             * @static
             * @param {game.war.ISMSG_UnlockHero_Resp=} [properties] Properties to set
             * @returns {game.war.SMSG_UnlockHero_Resp} SMSG_UnlockHero_Resp instance
             */
            SMSG_UnlockHero_Resp.create = function create(properties) {
                return new SMSG_UnlockHero_Resp(properties);
            };

            /**
             * Encodes the specified SMSG_UnlockHero_Resp message. Does not implicitly {@link game.war.SMSG_UnlockHero_Resp.verify|verify} messages.
             * @function encode
             * @memberof game.war.SMSG_UnlockHero_Resp
             * @static
             * @param {game.war.ISMSG_UnlockHero_Resp} message SMSG_UnlockHero_Resp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SMSG_UnlockHero_Resp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.heroId);
                return writer;
            };

            /**
             * Encodes the specified SMSG_UnlockHero_Resp message, length delimited. Does not implicitly {@link game.war.SMSG_UnlockHero_Resp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof game.war.SMSG_UnlockHero_Resp
             * @static
             * @param {game.war.ISMSG_UnlockHero_Resp} message SMSG_UnlockHero_Resp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SMSG_UnlockHero_Resp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SMSG_UnlockHero_Resp message from the specified reader or buffer.
             * @function decode
             * @memberof game.war.SMSG_UnlockHero_Resp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.war.SMSG_UnlockHero_Resp} SMSG_UnlockHero_Resp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SMSG_UnlockHero_Resp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.war.SMSG_UnlockHero_Resp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.heroId = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("heroId"))
                    throw $util.ProtocolError("missing required 'heroId'", { instance: message });
                return message;
            };

            /**
             * Decodes a SMSG_UnlockHero_Resp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof game.war.SMSG_UnlockHero_Resp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game.war.SMSG_UnlockHero_Resp} SMSG_UnlockHero_Resp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SMSG_UnlockHero_Resp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SMSG_UnlockHero_Resp message.
             * @function verify
             * @memberof game.war.SMSG_UnlockHero_Resp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SMSG_UnlockHero_Resp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.heroId))
                    return "heroId: integer expected";
                return null;
            };

            /**
             * Creates a SMSG_UnlockHero_Resp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof game.war.SMSG_UnlockHero_Resp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {game.war.SMSG_UnlockHero_Resp} SMSG_UnlockHero_Resp
             */
            SMSG_UnlockHero_Resp.fromObject = function fromObject(object) {
                if (object instanceof $root.game.war.SMSG_UnlockHero_Resp)
                    return object;
                var message = new $root.game.war.SMSG_UnlockHero_Resp();
                if (object.heroId != null)
                    message.heroId = object.heroId >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a SMSG_UnlockHero_Resp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof game.war.SMSG_UnlockHero_Resp
             * @static
             * @param {game.war.SMSG_UnlockHero_Resp} message SMSG_UnlockHero_Resp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SMSG_UnlockHero_Resp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.heroId = 0;
                if (message.heroId != null && message.hasOwnProperty("heroId"))
                    object.heroId = message.heroId;
                return object;
            };

            /**
             * Converts this SMSG_UnlockHero_Resp to JSON.
             * @function toJSON
             * @memberof game.war.SMSG_UnlockHero_Resp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SMSG_UnlockHero_Resp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return SMSG_UnlockHero_Resp;
        })();

        war.SMSG_AddHero_Ntf = (function() {

            /**
             * Properties of a SMSG_AddHero_Ntf.
             * @memberof game.war
             * @interface ISMSG_AddHero_Ntf
             * @property {game.war.IHeroInfo} info SMSG_AddHero_Ntf info
             */

            /**
             * Constructs a new SMSG_AddHero_Ntf.
             * @memberof game.war
             * @classdesc Represents a SMSG_AddHero_Ntf.
             * @implements ISMSG_AddHero_Ntf
             * @constructor
             * @param {game.war.ISMSG_AddHero_Ntf=} [properties] Properties to set
             */
            function SMSG_AddHero_Ntf(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SMSG_AddHero_Ntf info.
             * @member {game.war.IHeroInfo} info
             * @memberof game.war.SMSG_AddHero_Ntf
             * @instance
             */
            SMSG_AddHero_Ntf.prototype.info = null;

            /**
             * Creates a new SMSG_AddHero_Ntf instance using the specified properties.
             * @function create
             * @memberof game.war.SMSG_AddHero_Ntf
             * @static
             * @param {game.war.ISMSG_AddHero_Ntf=} [properties] Properties to set
             * @returns {game.war.SMSG_AddHero_Ntf} SMSG_AddHero_Ntf instance
             */
            SMSG_AddHero_Ntf.create = function create(properties) {
                return new SMSG_AddHero_Ntf(properties);
            };

            /**
             * Encodes the specified SMSG_AddHero_Ntf message. Does not implicitly {@link game.war.SMSG_AddHero_Ntf.verify|verify} messages.
             * @function encode
             * @memberof game.war.SMSG_AddHero_Ntf
             * @static
             * @param {game.war.ISMSG_AddHero_Ntf} message SMSG_AddHero_Ntf message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SMSG_AddHero_Ntf.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                $root.game.war.HeroInfo.encode(message.info, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified SMSG_AddHero_Ntf message, length delimited. Does not implicitly {@link game.war.SMSG_AddHero_Ntf.verify|verify} messages.
             * @function encodeDelimited
             * @memberof game.war.SMSG_AddHero_Ntf
             * @static
             * @param {game.war.ISMSG_AddHero_Ntf} message SMSG_AddHero_Ntf message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SMSG_AddHero_Ntf.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SMSG_AddHero_Ntf message from the specified reader or buffer.
             * @function decode
             * @memberof game.war.SMSG_AddHero_Ntf
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.war.SMSG_AddHero_Ntf} SMSG_AddHero_Ntf
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SMSG_AddHero_Ntf.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.war.SMSG_AddHero_Ntf();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.info = $root.game.war.HeroInfo.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("info"))
                    throw $util.ProtocolError("missing required 'info'", { instance: message });
                return message;
            };

            /**
             * Decodes a SMSG_AddHero_Ntf message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof game.war.SMSG_AddHero_Ntf
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game.war.SMSG_AddHero_Ntf} SMSG_AddHero_Ntf
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SMSG_AddHero_Ntf.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SMSG_AddHero_Ntf message.
             * @function verify
             * @memberof game.war.SMSG_AddHero_Ntf
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SMSG_AddHero_Ntf.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                {
                    var error = $root.game.war.HeroInfo.verify(message.info);
                    if (error)
                        return "info." + error;
                }
                return null;
            };

            /**
             * Creates a SMSG_AddHero_Ntf message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof game.war.SMSG_AddHero_Ntf
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {game.war.SMSG_AddHero_Ntf} SMSG_AddHero_Ntf
             */
            SMSG_AddHero_Ntf.fromObject = function fromObject(object) {
                if (object instanceof $root.game.war.SMSG_AddHero_Ntf)
                    return object;
                var message = new $root.game.war.SMSG_AddHero_Ntf();
                if (object.info != null) {
                    if (typeof object.info !== "object")
                        throw TypeError(".game.war.SMSG_AddHero_Ntf.info: object expected");
                    message.info = $root.game.war.HeroInfo.fromObject(object.info);
                }
                return message;
            };

            /**
             * Creates a plain object from a SMSG_AddHero_Ntf message. Also converts values to other types if specified.
             * @function toObject
             * @memberof game.war.SMSG_AddHero_Ntf
             * @static
             * @param {game.war.SMSG_AddHero_Ntf} message SMSG_AddHero_Ntf
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SMSG_AddHero_Ntf.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.info = null;
                if (message.info != null && message.hasOwnProperty("info"))
                    object.info = $root.game.war.HeroInfo.toObject(message.info, options);
                return object;
            };

            /**
             * Converts this SMSG_AddHero_Ntf to JSON.
             * @function toJSON
             * @memberof game.war.SMSG_AddHero_Ntf
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SMSG_AddHero_Ntf.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return SMSG_AddHero_Ntf;
        })();

        war.CMSG_HeroStarLevelup_Req = (function() {

            /**
             * Properties of a CMSG_HeroStarLevelup_Req.
             * @memberof game.war
             * @interface ICMSG_HeroStarLevelup_Req
             * @property {number} heroId CMSG_HeroStarLevelup_Req heroId
             */

            /**
             * Constructs a new CMSG_HeroStarLevelup_Req.
             * @memberof game.war
             * @classdesc Represents a CMSG_HeroStarLevelup_Req.
             * @implements ICMSG_HeroStarLevelup_Req
             * @constructor
             * @param {game.war.ICMSG_HeroStarLevelup_Req=} [properties] Properties to set
             */
            function CMSG_HeroStarLevelup_Req(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CMSG_HeroStarLevelup_Req heroId.
             * @member {number} heroId
             * @memberof game.war.CMSG_HeroStarLevelup_Req
             * @instance
             */
            CMSG_HeroStarLevelup_Req.prototype.heroId = 0;

            /**
             * Creates a new CMSG_HeroStarLevelup_Req instance using the specified properties.
             * @function create
             * @memberof game.war.CMSG_HeroStarLevelup_Req
             * @static
             * @param {game.war.ICMSG_HeroStarLevelup_Req=} [properties] Properties to set
             * @returns {game.war.CMSG_HeroStarLevelup_Req} CMSG_HeroStarLevelup_Req instance
             */
            CMSG_HeroStarLevelup_Req.create = function create(properties) {
                return new CMSG_HeroStarLevelup_Req(properties);
            };

            /**
             * Encodes the specified CMSG_HeroStarLevelup_Req message. Does not implicitly {@link game.war.CMSG_HeroStarLevelup_Req.verify|verify} messages.
             * @function encode
             * @memberof game.war.CMSG_HeroStarLevelup_Req
             * @static
             * @param {game.war.ICMSG_HeroStarLevelup_Req} message CMSG_HeroStarLevelup_Req message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CMSG_HeroStarLevelup_Req.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.heroId);
                return writer;
            };

            /**
             * Encodes the specified CMSG_HeroStarLevelup_Req message, length delimited. Does not implicitly {@link game.war.CMSG_HeroStarLevelup_Req.verify|verify} messages.
             * @function encodeDelimited
             * @memberof game.war.CMSG_HeroStarLevelup_Req
             * @static
             * @param {game.war.ICMSG_HeroStarLevelup_Req} message CMSG_HeroStarLevelup_Req message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CMSG_HeroStarLevelup_Req.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CMSG_HeroStarLevelup_Req message from the specified reader or buffer.
             * @function decode
             * @memberof game.war.CMSG_HeroStarLevelup_Req
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.war.CMSG_HeroStarLevelup_Req} CMSG_HeroStarLevelup_Req
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CMSG_HeroStarLevelup_Req.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.war.CMSG_HeroStarLevelup_Req();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.heroId = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("heroId"))
                    throw $util.ProtocolError("missing required 'heroId'", { instance: message });
                return message;
            };

            /**
             * Decodes a CMSG_HeroStarLevelup_Req message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof game.war.CMSG_HeroStarLevelup_Req
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game.war.CMSG_HeroStarLevelup_Req} CMSG_HeroStarLevelup_Req
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CMSG_HeroStarLevelup_Req.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CMSG_HeroStarLevelup_Req message.
             * @function verify
             * @memberof game.war.CMSG_HeroStarLevelup_Req
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CMSG_HeroStarLevelup_Req.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.heroId))
                    return "heroId: integer expected";
                return null;
            };

            /**
             * Creates a CMSG_HeroStarLevelup_Req message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof game.war.CMSG_HeroStarLevelup_Req
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {game.war.CMSG_HeroStarLevelup_Req} CMSG_HeroStarLevelup_Req
             */
            CMSG_HeroStarLevelup_Req.fromObject = function fromObject(object) {
                if (object instanceof $root.game.war.CMSG_HeroStarLevelup_Req)
                    return object;
                var message = new $root.game.war.CMSG_HeroStarLevelup_Req();
                if (object.heroId != null)
                    message.heroId = object.heroId >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a CMSG_HeroStarLevelup_Req message. Also converts values to other types if specified.
             * @function toObject
             * @memberof game.war.CMSG_HeroStarLevelup_Req
             * @static
             * @param {game.war.CMSG_HeroStarLevelup_Req} message CMSG_HeroStarLevelup_Req
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CMSG_HeroStarLevelup_Req.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.heroId = 0;
                if (message.heroId != null && message.hasOwnProperty("heroId"))
                    object.heroId = message.heroId;
                return object;
            };

            /**
             * Converts this CMSG_HeroStarLevelup_Req to JSON.
             * @function toJSON
             * @memberof game.war.CMSG_HeroStarLevelup_Req
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CMSG_HeroStarLevelup_Req.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CMSG_HeroStarLevelup_Req;
        })();

        war.SMSG_HeroStarLevelup_Resp = (function() {

            /**
             * Properties of a SMSG_HeroStarLevelup_Resp.
             * @memberof game.war
             * @interface ISMSG_HeroStarLevelup_Resp
             * @property {number} heroId SMSG_HeroStarLevelup_Resp heroId
             * @property {number} heroStar SMSG_HeroStarLevelup_Resp heroStar
             */

            /**
             * Constructs a new SMSG_HeroStarLevelup_Resp.
             * @memberof game.war
             * @classdesc Represents a SMSG_HeroStarLevelup_Resp.
             * @implements ISMSG_HeroStarLevelup_Resp
             * @constructor
             * @param {game.war.ISMSG_HeroStarLevelup_Resp=} [properties] Properties to set
             */
            function SMSG_HeroStarLevelup_Resp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SMSG_HeroStarLevelup_Resp heroId.
             * @member {number} heroId
             * @memberof game.war.SMSG_HeroStarLevelup_Resp
             * @instance
             */
            SMSG_HeroStarLevelup_Resp.prototype.heroId = 0;

            /**
             * SMSG_HeroStarLevelup_Resp heroStar.
             * @member {number} heroStar
             * @memberof game.war.SMSG_HeroStarLevelup_Resp
             * @instance
             */
            SMSG_HeroStarLevelup_Resp.prototype.heroStar = 0;

            /**
             * Creates a new SMSG_HeroStarLevelup_Resp instance using the specified properties.
             * @function create
             * @memberof game.war.SMSG_HeroStarLevelup_Resp
             * @static
             * @param {game.war.ISMSG_HeroStarLevelup_Resp=} [properties] Properties to set
             * @returns {game.war.SMSG_HeroStarLevelup_Resp} SMSG_HeroStarLevelup_Resp instance
             */
            SMSG_HeroStarLevelup_Resp.create = function create(properties) {
                return new SMSG_HeroStarLevelup_Resp(properties);
            };

            /**
             * Encodes the specified SMSG_HeroStarLevelup_Resp message. Does not implicitly {@link game.war.SMSG_HeroStarLevelup_Resp.verify|verify} messages.
             * @function encode
             * @memberof game.war.SMSG_HeroStarLevelup_Resp
             * @static
             * @param {game.war.ISMSG_HeroStarLevelup_Resp} message SMSG_HeroStarLevelup_Resp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SMSG_HeroStarLevelup_Resp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.heroId);
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.heroStar);
                return writer;
            };

            /**
             * Encodes the specified SMSG_HeroStarLevelup_Resp message, length delimited. Does not implicitly {@link game.war.SMSG_HeroStarLevelup_Resp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof game.war.SMSG_HeroStarLevelup_Resp
             * @static
             * @param {game.war.ISMSG_HeroStarLevelup_Resp} message SMSG_HeroStarLevelup_Resp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SMSG_HeroStarLevelup_Resp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SMSG_HeroStarLevelup_Resp message from the specified reader or buffer.
             * @function decode
             * @memberof game.war.SMSG_HeroStarLevelup_Resp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.war.SMSG_HeroStarLevelup_Resp} SMSG_HeroStarLevelup_Resp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SMSG_HeroStarLevelup_Resp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.war.SMSG_HeroStarLevelup_Resp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.heroId = reader.uint32();
                        break;
                    case 2:
                        message.heroStar = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("heroId"))
                    throw $util.ProtocolError("missing required 'heroId'", { instance: message });
                if (!message.hasOwnProperty("heroStar"))
                    throw $util.ProtocolError("missing required 'heroStar'", { instance: message });
                return message;
            };

            /**
             * Decodes a SMSG_HeroStarLevelup_Resp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof game.war.SMSG_HeroStarLevelup_Resp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game.war.SMSG_HeroStarLevelup_Resp} SMSG_HeroStarLevelup_Resp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SMSG_HeroStarLevelup_Resp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SMSG_HeroStarLevelup_Resp message.
             * @function verify
             * @memberof game.war.SMSG_HeroStarLevelup_Resp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SMSG_HeroStarLevelup_Resp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.heroId))
                    return "heroId: integer expected";
                if (!$util.isInteger(message.heroStar))
                    return "heroStar: integer expected";
                return null;
            };

            /**
             * Creates a SMSG_HeroStarLevelup_Resp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof game.war.SMSG_HeroStarLevelup_Resp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {game.war.SMSG_HeroStarLevelup_Resp} SMSG_HeroStarLevelup_Resp
             */
            SMSG_HeroStarLevelup_Resp.fromObject = function fromObject(object) {
                if (object instanceof $root.game.war.SMSG_HeroStarLevelup_Resp)
                    return object;
                var message = new $root.game.war.SMSG_HeroStarLevelup_Resp();
                if (object.heroId != null)
                    message.heroId = object.heroId >>> 0;
                if (object.heroStar != null)
                    message.heroStar = object.heroStar >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a SMSG_HeroStarLevelup_Resp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof game.war.SMSG_HeroStarLevelup_Resp
             * @static
             * @param {game.war.SMSG_HeroStarLevelup_Resp} message SMSG_HeroStarLevelup_Resp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SMSG_HeroStarLevelup_Resp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.heroId = 0;
                    object.heroStar = 0;
                }
                if (message.heroId != null && message.hasOwnProperty("heroId"))
                    object.heroId = message.heroId;
                if (message.heroStar != null && message.hasOwnProperty("heroStar"))
                    object.heroStar = message.heroStar;
                return object;
            };

            /**
             * Converts this SMSG_HeroStarLevelup_Resp to JSON.
             * @function toJSON
             * @memberof game.war.SMSG_HeroStarLevelup_Resp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SMSG_HeroStarLevelup_Resp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return SMSG_HeroStarLevelup_Resp;
        })();

        war.CMSG_CompoundHeroUpgradeEquip_Req = (function() {

            /**
             * Properties of a CMSG_CompoundHeroUpgradeEquip_Req.
             * @memberof game.war
             * @interface ICMSG_CompoundHeroUpgradeEquip_Req
             * @property {number} equipId CMSG_CompoundHeroUpgradeEquip_Req equipId
             * @property {number} heroId CMSG_CompoundHeroUpgradeEquip_Req heroId
             */

            /**
             * Constructs a new CMSG_CompoundHeroUpgradeEquip_Req.
             * @memberof game.war
             * @classdesc Represents a CMSG_CompoundHeroUpgradeEquip_Req.
             * @implements ICMSG_CompoundHeroUpgradeEquip_Req
             * @constructor
             * @param {game.war.ICMSG_CompoundHeroUpgradeEquip_Req=} [properties] Properties to set
             */
            function CMSG_CompoundHeroUpgradeEquip_Req(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CMSG_CompoundHeroUpgradeEquip_Req equipId.
             * @member {number} equipId
             * @memberof game.war.CMSG_CompoundHeroUpgradeEquip_Req
             * @instance
             */
            CMSG_CompoundHeroUpgradeEquip_Req.prototype.equipId = 0;

            /**
             * CMSG_CompoundHeroUpgradeEquip_Req heroId.
             * @member {number} heroId
             * @memberof game.war.CMSG_CompoundHeroUpgradeEquip_Req
             * @instance
             */
            CMSG_CompoundHeroUpgradeEquip_Req.prototype.heroId = 0;

            /**
             * Creates a new CMSG_CompoundHeroUpgradeEquip_Req instance using the specified properties.
             * @function create
             * @memberof game.war.CMSG_CompoundHeroUpgradeEquip_Req
             * @static
             * @param {game.war.ICMSG_CompoundHeroUpgradeEquip_Req=} [properties] Properties to set
             * @returns {game.war.CMSG_CompoundHeroUpgradeEquip_Req} CMSG_CompoundHeroUpgradeEquip_Req instance
             */
            CMSG_CompoundHeroUpgradeEquip_Req.create = function create(properties) {
                return new CMSG_CompoundHeroUpgradeEquip_Req(properties);
            };

            /**
             * Encodes the specified CMSG_CompoundHeroUpgradeEquip_Req message. Does not implicitly {@link game.war.CMSG_CompoundHeroUpgradeEquip_Req.verify|verify} messages.
             * @function encode
             * @memberof game.war.CMSG_CompoundHeroUpgradeEquip_Req
             * @static
             * @param {game.war.ICMSG_CompoundHeroUpgradeEquip_Req} message CMSG_CompoundHeroUpgradeEquip_Req message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CMSG_CompoundHeroUpgradeEquip_Req.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.equipId);
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.heroId);
                return writer;
            };

            /**
             * Encodes the specified CMSG_CompoundHeroUpgradeEquip_Req message, length delimited. Does not implicitly {@link game.war.CMSG_CompoundHeroUpgradeEquip_Req.verify|verify} messages.
             * @function encodeDelimited
             * @memberof game.war.CMSG_CompoundHeroUpgradeEquip_Req
             * @static
             * @param {game.war.ICMSG_CompoundHeroUpgradeEquip_Req} message CMSG_CompoundHeroUpgradeEquip_Req message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CMSG_CompoundHeroUpgradeEquip_Req.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CMSG_CompoundHeroUpgradeEquip_Req message from the specified reader or buffer.
             * @function decode
             * @memberof game.war.CMSG_CompoundHeroUpgradeEquip_Req
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.war.CMSG_CompoundHeroUpgradeEquip_Req} CMSG_CompoundHeroUpgradeEquip_Req
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CMSG_CompoundHeroUpgradeEquip_Req.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.war.CMSG_CompoundHeroUpgradeEquip_Req();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.equipId = reader.uint32();
                        break;
                    case 2:
                        message.heroId = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("equipId"))
                    throw $util.ProtocolError("missing required 'equipId'", { instance: message });
                if (!message.hasOwnProperty("heroId"))
                    throw $util.ProtocolError("missing required 'heroId'", { instance: message });
                return message;
            };

            /**
             * Decodes a CMSG_CompoundHeroUpgradeEquip_Req message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof game.war.CMSG_CompoundHeroUpgradeEquip_Req
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game.war.CMSG_CompoundHeroUpgradeEquip_Req} CMSG_CompoundHeroUpgradeEquip_Req
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CMSG_CompoundHeroUpgradeEquip_Req.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CMSG_CompoundHeroUpgradeEquip_Req message.
             * @function verify
             * @memberof game.war.CMSG_CompoundHeroUpgradeEquip_Req
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CMSG_CompoundHeroUpgradeEquip_Req.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.equipId))
                    return "equipId: integer expected";
                if (!$util.isInteger(message.heroId))
                    return "heroId: integer expected";
                return null;
            };

            /**
             * Creates a CMSG_CompoundHeroUpgradeEquip_Req message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof game.war.CMSG_CompoundHeroUpgradeEquip_Req
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {game.war.CMSG_CompoundHeroUpgradeEquip_Req} CMSG_CompoundHeroUpgradeEquip_Req
             */
            CMSG_CompoundHeroUpgradeEquip_Req.fromObject = function fromObject(object) {
                if (object instanceof $root.game.war.CMSG_CompoundHeroUpgradeEquip_Req)
                    return object;
                var message = new $root.game.war.CMSG_CompoundHeroUpgradeEquip_Req();
                if (object.equipId != null)
                    message.equipId = object.equipId >>> 0;
                if (object.heroId != null)
                    message.heroId = object.heroId >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a CMSG_CompoundHeroUpgradeEquip_Req message. Also converts values to other types if specified.
             * @function toObject
             * @memberof game.war.CMSG_CompoundHeroUpgradeEquip_Req
             * @static
             * @param {game.war.CMSG_CompoundHeroUpgradeEquip_Req} message CMSG_CompoundHeroUpgradeEquip_Req
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CMSG_CompoundHeroUpgradeEquip_Req.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.equipId = 0;
                    object.heroId = 0;
                }
                if (message.equipId != null && message.hasOwnProperty("equipId"))
                    object.equipId = message.equipId;
                if (message.heroId != null && message.hasOwnProperty("heroId"))
                    object.heroId = message.heroId;
                return object;
            };

            /**
             * Converts this CMSG_CompoundHeroUpgradeEquip_Req to JSON.
             * @function toJSON
             * @memberof game.war.CMSG_CompoundHeroUpgradeEquip_Req
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CMSG_CompoundHeroUpgradeEquip_Req.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CMSG_CompoundHeroUpgradeEquip_Req;
        })();

        war.SMSG_CompoundHeroUpgradeEquip_Resp = (function() {

            /**
             * Properties of a SMSG_CompoundHeroUpgradeEquip_Resp.
             * @memberof game.war
             * @interface ISMSG_CompoundHeroUpgradeEquip_Resp
             * @property {number} result SMSG_CompoundHeroUpgradeEquip_Resp result
             * @property {number} heroId SMSG_CompoundHeroUpgradeEquip_Resp heroId
             * @property {Array.<number>|null} [equipList] SMSG_CompoundHeroUpgradeEquip_Resp equipList
             */

            /**
             * Constructs a new SMSG_CompoundHeroUpgradeEquip_Resp.
             * @memberof game.war
             * @classdesc Represents a SMSG_CompoundHeroUpgradeEquip_Resp.
             * @implements ISMSG_CompoundHeroUpgradeEquip_Resp
             * @constructor
             * @param {game.war.ISMSG_CompoundHeroUpgradeEquip_Resp=} [properties] Properties to set
             */
            function SMSG_CompoundHeroUpgradeEquip_Resp(properties) {
                this.equipList = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SMSG_CompoundHeroUpgradeEquip_Resp result.
             * @member {number} result
             * @memberof game.war.SMSG_CompoundHeroUpgradeEquip_Resp
             * @instance
             */
            SMSG_CompoundHeroUpgradeEquip_Resp.prototype.result = 0;

            /**
             * SMSG_CompoundHeroUpgradeEquip_Resp heroId.
             * @member {number} heroId
             * @memberof game.war.SMSG_CompoundHeroUpgradeEquip_Resp
             * @instance
             */
            SMSG_CompoundHeroUpgradeEquip_Resp.prototype.heroId = 0;

            /**
             * SMSG_CompoundHeroUpgradeEquip_Resp equipList.
             * @member {Array.<number>} equipList
             * @memberof game.war.SMSG_CompoundHeroUpgradeEquip_Resp
             * @instance
             */
            SMSG_CompoundHeroUpgradeEquip_Resp.prototype.equipList = $util.emptyArray;

            /**
             * Creates a new SMSG_CompoundHeroUpgradeEquip_Resp instance using the specified properties.
             * @function create
             * @memberof game.war.SMSG_CompoundHeroUpgradeEquip_Resp
             * @static
             * @param {game.war.ISMSG_CompoundHeroUpgradeEquip_Resp=} [properties] Properties to set
             * @returns {game.war.SMSG_CompoundHeroUpgradeEquip_Resp} SMSG_CompoundHeroUpgradeEquip_Resp instance
             */
            SMSG_CompoundHeroUpgradeEquip_Resp.create = function create(properties) {
                return new SMSG_CompoundHeroUpgradeEquip_Resp(properties);
            };

            /**
             * Encodes the specified SMSG_CompoundHeroUpgradeEquip_Resp message. Does not implicitly {@link game.war.SMSG_CompoundHeroUpgradeEquip_Resp.verify|verify} messages.
             * @function encode
             * @memberof game.war.SMSG_CompoundHeroUpgradeEquip_Resp
             * @static
             * @param {game.war.ISMSG_CompoundHeroUpgradeEquip_Resp} message SMSG_CompoundHeroUpgradeEquip_Resp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SMSG_CompoundHeroUpgradeEquip_Resp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.result);
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.heroId);
                if (message.equipList != null && message.equipList.length)
                    for (var i = 0; i < message.equipList.length; ++i)
                        writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.equipList[i]);
                return writer;
            };

            /**
             * Encodes the specified SMSG_CompoundHeroUpgradeEquip_Resp message, length delimited. Does not implicitly {@link game.war.SMSG_CompoundHeroUpgradeEquip_Resp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof game.war.SMSG_CompoundHeroUpgradeEquip_Resp
             * @static
             * @param {game.war.ISMSG_CompoundHeroUpgradeEquip_Resp} message SMSG_CompoundHeroUpgradeEquip_Resp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SMSG_CompoundHeroUpgradeEquip_Resp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SMSG_CompoundHeroUpgradeEquip_Resp message from the specified reader or buffer.
             * @function decode
             * @memberof game.war.SMSG_CompoundHeroUpgradeEquip_Resp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.war.SMSG_CompoundHeroUpgradeEquip_Resp} SMSG_CompoundHeroUpgradeEquip_Resp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SMSG_CompoundHeroUpgradeEquip_Resp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.war.SMSG_CompoundHeroUpgradeEquip_Resp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.result = reader.uint32();
                        break;
                    case 2:
                        message.heroId = reader.uint32();
                        break;
                    case 3:
                        if (!(message.equipList && message.equipList.length))
                            message.equipList = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.equipList.push(reader.uint32());
                        } else
                            message.equipList.push(reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("result"))
                    throw $util.ProtocolError("missing required 'result'", { instance: message });
                if (!message.hasOwnProperty("heroId"))
                    throw $util.ProtocolError("missing required 'heroId'", { instance: message });
                return message;
            };

            /**
             * Decodes a SMSG_CompoundHeroUpgradeEquip_Resp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof game.war.SMSG_CompoundHeroUpgradeEquip_Resp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game.war.SMSG_CompoundHeroUpgradeEquip_Resp} SMSG_CompoundHeroUpgradeEquip_Resp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SMSG_CompoundHeroUpgradeEquip_Resp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SMSG_CompoundHeroUpgradeEquip_Resp message.
             * @function verify
             * @memberof game.war.SMSG_CompoundHeroUpgradeEquip_Resp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SMSG_CompoundHeroUpgradeEquip_Resp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
                if (!$util.isInteger(message.heroId))
                    return "heroId: integer expected";
                if (message.equipList != null && message.hasOwnProperty("equipList")) {
                    if (!Array.isArray(message.equipList))
                        return "equipList: array expected";
                    for (var i = 0; i < message.equipList.length; ++i)
                        if (!$util.isInteger(message.equipList[i]))
                            return "equipList: integer[] expected";
                }
                return null;
            };

            /**
             * Creates a SMSG_CompoundHeroUpgradeEquip_Resp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof game.war.SMSG_CompoundHeroUpgradeEquip_Resp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {game.war.SMSG_CompoundHeroUpgradeEquip_Resp} SMSG_CompoundHeroUpgradeEquip_Resp
             */
            SMSG_CompoundHeroUpgradeEquip_Resp.fromObject = function fromObject(object) {
                if (object instanceof $root.game.war.SMSG_CompoundHeroUpgradeEquip_Resp)
                    return object;
                var message = new $root.game.war.SMSG_CompoundHeroUpgradeEquip_Resp();
                if (object.result != null)
                    message.result = object.result >>> 0;
                if (object.heroId != null)
                    message.heroId = object.heroId >>> 0;
                if (object.equipList) {
                    if (!Array.isArray(object.equipList))
                        throw TypeError(".game.war.SMSG_CompoundHeroUpgradeEquip_Resp.equipList: array expected");
                    message.equipList = [];
                    for (var i = 0; i < object.equipList.length; ++i)
                        message.equipList[i] = object.equipList[i] >>> 0;
                }
                return message;
            };

            /**
             * Creates a plain object from a SMSG_CompoundHeroUpgradeEquip_Resp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof game.war.SMSG_CompoundHeroUpgradeEquip_Resp
             * @static
             * @param {game.war.SMSG_CompoundHeroUpgradeEquip_Resp} message SMSG_CompoundHeroUpgradeEquip_Resp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SMSG_CompoundHeroUpgradeEquip_Resp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.equipList = [];
                if (options.defaults) {
                    object.result = 0;
                    object.heroId = 0;
                }
                if (message.result != null && message.hasOwnProperty("result"))
                    object.result = message.result;
                if (message.heroId != null && message.hasOwnProperty("heroId"))
                    object.heroId = message.heroId;
                if (message.equipList && message.equipList.length) {
                    object.equipList = [];
                    for (var j = 0; j < message.equipList.length; ++j)
                        object.equipList[j] = message.equipList[j];
                }
                return object;
            };

            /**
             * Converts this SMSG_CompoundHeroUpgradeEquip_Resp to JSON.
             * @function toJSON
             * @memberof game.war.SMSG_CompoundHeroUpgradeEquip_Resp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SMSG_CompoundHeroUpgradeEquip_Resp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return SMSG_CompoundHeroUpgradeEquip_Resp;
        })();

        war.CMSG_HeroUpgradeStairs_Req = (function() {

            /**
             * Properties of a CMSG_HeroUpgradeStairs_Req.
             * @memberof game.war
             * @interface ICMSG_HeroUpgradeStairs_Req
             * @property {number} heroId CMSG_HeroUpgradeStairs_Req heroId
             */

            /**
             * Constructs a new CMSG_HeroUpgradeStairs_Req.
             * @memberof game.war
             * @classdesc Represents a CMSG_HeroUpgradeStairs_Req.
             * @implements ICMSG_HeroUpgradeStairs_Req
             * @constructor
             * @param {game.war.ICMSG_HeroUpgradeStairs_Req=} [properties] Properties to set
             */
            function CMSG_HeroUpgradeStairs_Req(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CMSG_HeroUpgradeStairs_Req heroId.
             * @member {number} heroId
             * @memberof game.war.CMSG_HeroUpgradeStairs_Req
             * @instance
             */
            CMSG_HeroUpgradeStairs_Req.prototype.heroId = 0;

            /**
             * Creates a new CMSG_HeroUpgradeStairs_Req instance using the specified properties.
             * @function create
             * @memberof game.war.CMSG_HeroUpgradeStairs_Req
             * @static
             * @param {game.war.ICMSG_HeroUpgradeStairs_Req=} [properties] Properties to set
             * @returns {game.war.CMSG_HeroUpgradeStairs_Req} CMSG_HeroUpgradeStairs_Req instance
             */
            CMSG_HeroUpgradeStairs_Req.create = function create(properties) {
                return new CMSG_HeroUpgradeStairs_Req(properties);
            };

            /**
             * Encodes the specified CMSG_HeroUpgradeStairs_Req message. Does not implicitly {@link game.war.CMSG_HeroUpgradeStairs_Req.verify|verify} messages.
             * @function encode
             * @memberof game.war.CMSG_HeroUpgradeStairs_Req
             * @static
             * @param {game.war.ICMSG_HeroUpgradeStairs_Req} message CMSG_HeroUpgradeStairs_Req message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CMSG_HeroUpgradeStairs_Req.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.heroId);
                return writer;
            };

            /**
             * Encodes the specified CMSG_HeroUpgradeStairs_Req message, length delimited. Does not implicitly {@link game.war.CMSG_HeroUpgradeStairs_Req.verify|verify} messages.
             * @function encodeDelimited
             * @memberof game.war.CMSG_HeroUpgradeStairs_Req
             * @static
             * @param {game.war.ICMSG_HeroUpgradeStairs_Req} message CMSG_HeroUpgradeStairs_Req message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CMSG_HeroUpgradeStairs_Req.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CMSG_HeroUpgradeStairs_Req message from the specified reader or buffer.
             * @function decode
             * @memberof game.war.CMSG_HeroUpgradeStairs_Req
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.war.CMSG_HeroUpgradeStairs_Req} CMSG_HeroUpgradeStairs_Req
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CMSG_HeroUpgradeStairs_Req.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.war.CMSG_HeroUpgradeStairs_Req();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.heroId = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("heroId"))
                    throw $util.ProtocolError("missing required 'heroId'", { instance: message });
                return message;
            };

            /**
             * Decodes a CMSG_HeroUpgradeStairs_Req message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof game.war.CMSG_HeroUpgradeStairs_Req
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game.war.CMSG_HeroUpgradeStairs_Req} CMSG_HeroUpgradeStairs_Req
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CMSG_HeroUpgradeStairs_Req.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CMSG_HeroUpgradeStairs_Req message.
             * @function verify
             * @memberof game.war.CMSG_HeroUpgradeStairs_Req
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CMSG_HeroUpgradeStairs_Req.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.heroId))
                    return "heroId: integer expected";
                return null;
            };

            /**
             * Creates a CMSG_HeroUpgradeStairs_Req message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof game.war.CMSG_HeroUpgradeStairs_Req
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {game.war.CMSG_HeroUpgradeStairs_Req} CMSG_HeroUpgradeStairs_Req
             */
            CMSG_HeroUpgradeStairs_Req.fromObject = function fromObject(object) {
                if (object instanceof $root.game.war.CMSG_HeroUpgradeStairs_Req)
                    return object;
                var message = new $root.game.war.CMSG_HeroUpgradeStairs_Req();
                if (object.heroId != null)
                    message.heroId = object.heroId >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a CMSG_HeroUpgradeStairs_Req message. Also converts values to other types if specified.
             * @function toObject
             * @memberof game.war.CMSG_HeroUpgradeStairs_Req
             * @static
             * @param {game.war.CMSG_HeroUpgradeStairs_Req} message CMSG_HeroUpgradeStairs_Req
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CMSG_HeroUpgradeStairs_Req.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.heroId = 0;
                if (message.heroId != null && message.hasOwnProperty("heroId"))
                    object.heroId = message.heroId;
                return object;
            };

            /**
             * Converts this CMSG_HeroUpgradeStairs_Req to JSON.
             * @function toJSON
             * @memberof game.war.CMSG_HeroUpgradeStairs_Req
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CMSG_HeroUpgradeStairs_Req.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CMSG_HeroUpgradeStairs_Req;
        })();

        war.SMSG_HeroUpgradeStairs_Resp = (function() {

            /**
             * Properties of a SMSG_HeroUpgradeStairs_Resp.
             * @memberof game.war
             * @interface ISMSG_HeroUpgradeStairs_Resp
             * @property {number} heroId SMSG_HeroUpgradeStairs_Resp heroId
             * @property {number} heroStairs SMSG_HeroUpgradeStairs_Resp heroStairs
             * @property {Array.<number>|null} [equipList] SMSG_HeroUpgradeStairs_Resp equipList
             */

            /**
             * Constructs a new SMSG_HeroUpgradeStairs_Resp.
             * @memberof game.war
             * @classdesc Represents a SMSG_HeroUpgradeStairs_Resp.
             * @implements ISMSG_HeroUpgradeStairs_Resp
             * @constructor
             * @param {game.war.ISMSG_HeroUpgradeStairs_Resp=} [properties] Properties to set
             */
            function SMSG_HeroUpgradeStairs_Resp(properties) {
                this.equipList = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SMSG_HeroUpgradeStairs_Resp heroId.
             * @member {number} heroId
             * @memberof game.war.SMSG_HeroUpgradeStairs_Resp
             * @instance
             */
            SMSG_HeroUpgradeStairs_Resp.prototype.heroId = 0;

            /**
             * SMSG_HeroUpgradeStairs_Resp heroStairs.
             * @member {number} heroStairs
             * @memberof game.war.SMSG_HeroUpgradeStairs_Resp
             * @instance
             */
            SMSG_HeroUpgradeStairs_Resp.prototype.heroStairs = 0;

            /**
             * SMSG_HeroUpgradeStairs_Resp equipList.
             * @member {Array.<number>} equipList
             * @memberof game.war.SMSG_HeroUpgradeStairs_Resp
             * @instance
             */
            SMSG_HeroUpgradeStairs_Resp.prototype.equipList = $util.emptyArray;

            /**
             * Creates a new SMSG_HeroUpgradeStairs_Resp instance using the specified properties.
             * @function create
             * @memberof game.war.SMSG_HeroUpgradeStairs_Resp
             * @static
             * @param {game.war.ISMSG_HeroUpgradeStairs_Resp=} [properties] Properties to set
             * @returns {game.war.SMSG_HeroUpgradeStairs_Resp} SMSG_HeroUpgradeStairs_Resp instance
             */
            SMSG_HeroUpgradeStairs_Resp.create = function create(properties) {
                return new SMSG_HeroUpgradeStairs_Resp(properties);
            };

            /**
             * Encodes the specified SMSG_HeroUpgradeStairs_Resp message. Does not implicitly {@link game.war.SMSG_HeroUpgradeStairs_Resp.verify|verify} messages.
             * @function encode
             * @memberof game.war.SMSG_HeroUpgradeStairs_Resp
             * @static
             * @param {game.war.ISMSG_HeroUpgradeStairs_Resp} message SMSG_HeroUpgradeStairs_Resp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SMSG_HeroUpgradeStairs_Resp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.heroId);
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.heroStairs);
                if (message.equipList != null && message.equipList.length)
                    for (var i = 0; i < message.equipList.length; ++i)
                        writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.equipList[i]);
                return writer;
            };

            /**
             * Encodes the specified SMSG_HeroUpgradeStairs_Resp message, length delimited. Does not implicitly {@link game.war.SMSG_HeroUpgradeStairs_Resp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof game.war.SMSG_HeroUpgradeStairs_Resp
             * @static
             * @param {game.war.ISMSG_HeroUpgradeStairs_Resp} message SMSG_HeroUpgradeStairs_Resp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SMSG_HeroUpgradeStairs_Resp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SMSG_HeroUpgradeStairs_Resp message from the specified reader or buffer.
             * @function decode
             * @memberof game.war.SMSG_HeroUpgradeStairs_Resp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.war.SMSG_HeroUpgradeStairs_Resp} SMSG_HeroUpgradeStairs_Resp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SMSG_HeroUpgradeStairs_Resp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.war.SMSG_HeroUpgradeStairs_Resp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.heroId = reader.uint32();
                        break;
                    case 2:
                        message.heroStairs = reader.uint32();
                        break;
                    case 3:
                        if (!(message.equipList && message.equipList.length))
                            message.equipList = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.equipList.push(reader.uint32());
                        } else
                            message.equipList.push(reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("heroId"))
                    throw $util.ProtocolError("missing required 'heroId'", { instance: message });
                if (!message.hasOwnProperty("heroStairs"))
                    throw $util.ProtocolError("missing required 'heroStairs'", { instance: message });
                return message;
            };

            /**
             * Decodes a SMSG_HeroUpgradeStairs_Resp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof game.war.SMSG_HeroUpgradeStairs_Resp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game.war.SMSG_HeroUpgradeStairs_Resp} SMSG_HeroUpgradeStairs_Resp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SMSG_HeroUpgradeStairs_Resp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SMSG_HeroUpgradeStairs_Resp message.
             * @function verify
             * @memberof game.war.SMSG_HeroUpgradeStairs_Resp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SMSG_HeroUpgradeStairs_Resp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.heroId))
                    return "heroId: integer expected";
                if (!$util.isInteger(message.heroStairs))
                    return "heroStairs: integer expected";
                if (message.equipList != null && message.hasOwnProperty("equipList")) {
                    if (!Array.isArray(message.equipList))
                        return "equipList: array expected";
                    for (var i = 0; i < message.equipList.length; ++i)
                        if (!$util.isInteger(message.equipList[i]))
                            return "equipList: integer[] expected";
                }
                return null;
            };

            /**
             * Creates a SMSG_HeroUpgradeStairs_Resp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof game.war.SMSG_HeroUpgradeStairs_Resp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {game.war.SMSG_HeroUpgradeStairs_Resp} SMSG_HeroUpgradeStairs_Resp
             */
            SMSG_HeroUpgradeStairs_Resp.fromObject = function fromObject(object) {
                if (object instanceof $root.game.war.SMSG_HeroUpgradeStairs_Resp)
                    return object;
                var message = new $root.game.war.SMSG_HeroUpgradeStairs_Resp();
                if (object.heroId != null)
                    message.heroId = object.heroId >>> 0;
                if (object.heroStairs != null)
                    message.heroStairs = object.heroStairs >>> 0;
                if (object.equipList) {
                    if (!Array.isArray(object.equipList))
                        throw TypeError(".game.war.SMSG_HeroUpgradeStairs_Resp.equipList: array expected");
                    message.equipList = [];
                    for (var i = 0; i < object.equipList.length; ++i)
                        message.equipList[i] = object.equipList[i] >>> 0;
                }
                return message;
            };

            /**
             * Creates a plain object from a SMSG_HeroUpgradeStairs_Resp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof game.war.SMSG_HeroUpgradeStairs_Resp
             * @static
             * @param {game.war.SMSG_HeroUpgradeStairs_Resp} message SMSG_HeroUpgradeStairs_Resp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SMSG_HeroUpgradeStairs_Resp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.equipList = [];
                if (options.defaults) {
                    object.heroId = 0;
                    object.heroStairs = 0;
                }
                if (message.heroId != null && message.hasOwnProperty("heroId"))
                    object.heroId = message.heroId;
                if (message.heroStairs != null && message.hasOwnProperty("heroStairs"))
                    object.heroStairs = message.heroStairs;
                if (message.equipList && message.equipList.length) {
                    object.equipList = [];
                    for (var j = 0; j < message.equipList.length; ++j)
                        object.equipList[j] = message.equipList[j];
                }
                return object;
            };

            /**
             * Converts this SMSG_HeroUpgradeStairs_Resp to JSON.
             * @function toJSON
             * @memberof game.war.SMSG_HeroUpgradeStairs_Resp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SMSG_HeroUpgradeStairs_Resp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return SMSG_HeroUpgradeStairs_Resp;
        })();

        war.CMSG_UnitLevelingUp_Req = (function() {

            /**
             * Properties of a CMSG_UnitLevelingUp_Req.
             * @memberof game.war
             * @interface ICMSG_UnitLevelingUp_Req
             * @property {number} type CMSG_UnitLevelingUp_Req type
             * @property {number} id CMSG_UnitLevelingUp_Req id
             * @property {number} level CMSG_UnitLevelingUp_Req level
             */

            /**
             * Constructs a new CMSG_UnitLevelingUp_Req.
             * @memberof game.war
             * @classdesc Represents a CMSG_UnitLevelingUp_Req.
             * @implements ICMSG_UnitLevelingUp_Req
             * @constructor
             * @param {game.war.ICMSG_UnitLevelingUp_Req=} [properties] Properties to set
             */
            function CMSG_UnitLevelingUp_Req(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CMSG_UnitLevelingUp_Req type.
             * @member {number} type
             * @memberof game.war.CMSG_UnitLevelingUp_Req
             * @instance
             */
            CMSG_UnitLevelingUp_Req.prototype.type = 0;

            /**
             * CMSG_UnitLevelingUp_Req id.
             * @member {number} id
             * @memberof game.war.CMSG_UnitLevelingUp_Req
             * @instance
             */
            CMSG_UnitLevelingUp_Req.prototype.id = 0;

            /**
             * CMSG_UnitLevelingUp_Req level.
             * @member {number} level
             * @memberof game.war.CMSG_UnitLevelingUp_Req
             * @instance
             */
            CMSG_UnitLevelingUp_Req.prototype.level = 0;

            /**
             * Creates a new CMSG_UnitLevelingUp_Req instance using the specified properties.
             * @function create
             * @memberof game.war.CMSG_UnitLevelingUp_Req
             * @static
             * @param {game.war.ICMSG_UnitLevelingUp_Req=} [properties] Properties to set
             * @returns {game.war.CMSG_UnitLevelingUp_Req} CMSG_UnitLevelingUp_Req instance
             */
            CMSG_UnitLevelingUp_Req.create = function create(properties) {
                return new CMSG_UnitLevelingUp_Req(properties);
            };

            /**
             * Encodes the specified CMSG_UnitLevelingUp_Req message. Does not implicitly {@link game.war.CMSG_UnitLevelingUp_Req.verify|verify} messages.
             * @function encode
             * @memberof game.war.CMSG_UnitLevelingUp_Req
             * @static
             * @param {game.war.ICMSG_UnitLevelingUp_Req} message CMSG_UnitLevelingUp_Req message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CMSG_UnitLevelingUp_Req.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.type);
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.id);
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.level);
                return writer;
            };

            /**
             * Encodes the specified CMSG_UnitLevelingUp_Req message, length delimited. Does not implicitly {@link game.war.CMSG_UnitLevelingUp_Req.verify|verify} messages.
             * @function encodeDelimited
             * @memberof game.war.CMSG_UnitLevelingUp_Req
             * @static
             * @param {game.war.ICMSG_UnitLevelingUp_Req} message CMSG_UnitLevelingUp_Req message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CMSG_UnitLevelingUp_Req.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CMSG_UnitLevelingUp_Req message from the specified reader or buffer.
             * @function decode
             * @memberof game.war.CMSG_UnitLevelingUp_Req
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.war.CMSG_UnitLevelingUp_Req} CMSG_UnitLevelingUp_Req
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CMSG_UnitLevelingUp_Req.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.war.CMSG_UnitLevelingUp_Req();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type = reader.uint32();
                        break;
                    case 2:
                        message.id = reader.uint32();
                        break;
                    case 3:
                        message.level = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("type"))
                    throw $util.ProtocolError("missing required 'type'", { instance: message });
                if (!message.hasOwnProperty("id"))
                    throw $util.ProtocolError("missing required 'id'", { instance: message });
                if (!message.hasOwnProperty("level"))
                    throw $util.ProtocolError("missing required 'level'", { instance: message });
                return message;
            };

            /**
             * Decodes a CMSG_UnitLevelingUp_Req message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof game.war.CMSG_UnitLevelingUp_Req
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game.war.CMSG_UnitLevelingUp_Req} CMSG_UnitLevelingUp_Req
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CMSG_UnitLevelingUp_Req.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CMSG_UnitLevelingUp_Req message.
             * @function verify
             * @memberof game.war.CMSG_UnitLevelingUp_Req
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CMSG_UnitLevelingUp_Req.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
                if (!$util.isInteger(message.level))
                    return "level: integer expected";
                return null;
            };

            /**
             * Creates a CMSG_UnitLevelingUp_Req message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof game.war.CMSG_UnitLevelingUp_Req
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {game.war.CMSG_UnitLevelingUp_Req} CMSG_UnitLevelingUp_Req
             */
            CMSG_UnitLevelingUp_Req.fromObject = function fromObject(object) {
                if (object instanceof $root.game.war.CMSG_UnitLevelingUp_Req)
                    return object;
                var message = new $root.game.war.CMSG_UnitLevelingUp_Req();
                if (object.type != null)
                    message.type = object.type >>> 0;
                if (object.id != null)
                    message.id = object.id >>> 0;
                if (object.level != null)
                    message.level = object.level >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a CMSG_UnitLevelingUp_Req message. Also converts values to other types if specified.
             * @function toObject
             * @memberof game.war.CMSG_UnitLevelingUp_Req
             * @static
             * @param {game.war.CMSG_UnitLevelingUp_Req} message CMSG_UnitLevelingUp_Req
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CMSG_UnitLevelingUp_Req.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.type = 0;
                    object.id = 0;
                    object.level = 0;
                }
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = message.type;
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.level != null && message.hasOwnProperty("level"))
                    object.level = message.level;
                return object;
            };

            /**
             * Converts this CMSG_UnitLevelingUp_Req to JSON.
             * @function toJSON
             * @memberof game.war.CMSG_UnitLevelingUp_Req
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CMSG_UnitLevelingUp_Req.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CMSG_UnitLevelingUp_Req;
        })();

        war.SMSG_UnitLevelingUp_Resp = (function() {

            /**
             * Properties of a SMSG_UnitLevelingUp_Resp.
             * @memberof game.war
             * @interface ISMSG_UnitLevelingUp_Resp
             * @property {number} type SMSG_UnitLevelingUp_Resp type
             * @property {number} id SMSG_UnitLevelingUp_Resp id
             * @property {number|null} [exp] SMSG_UnitLevelingUp_Resp exp
             * @property {number|null} [level] SMSG_UnitLevelingUp_Resp level
             * @property {number|null} [prisonLevel] SMSG_UnitLevelingUp_Resp prisonLevel
             * @property {number|null} [prisonExp] SMSG_UnitLevelingUp_Resp prisonExp
             * @property {number|null} [prisonTechPoints] SMSG_UnitLevelingUp_Resp prisonTechPoints
             */

            /**
             * Constructs a new SMSG_UnitLevelingUp_Resp.
             * @memberof game.war
             * @classdesc Represents a SMSG_UnitLevelingUp_Resp.
             * @implements ISMSG_UnitLevelingUp_Resp
             * @constructor
             * @param {game.war.ISMSG_UnitLevelingUp_Resp=} [properties] Properties to set
             */
            function SMSG_UnitLevelingUp_Resp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SMSG_UnitLevelingUp_Resp type.
             * @member {number} type
             * @memberof game.war.SMSG_UnitLevelingUp_Resp
             * @instance
             */
            SMSG_UnitLevelingUp_Resp.prototype.type = 0;

            /**
             * SMSG_UnitLevelingUp_Resp id.
             * @member {number} id
             * @memberof game.war.SMSG_UnitLevelingUp_Resp
             * @instance
             */
            SMSG_UnitLevelingUp_Resp.prototype.id = 0;

            /**
             * SMSG_UnitLevelingUp_Resp exp.
             * @member {number} exp
             * @memberof game.war.SMSG_UnitLevelingUp_Resp
             * @instance
             */
            SMSG_UnitLevelingUp_Resp.prototype.exp = 0;

            /**
             * SMSG_UnitLevelingUp_Resp level.
             * @member {number} level
             * @memberof game.war.SMSG_UnitLevelingUp_Resp
             * @instance
             */
            SMSG_UnitLevelingUp_Resp.prototype.level = 0;

            /**
             * SMSG_UnitLevelingUp_Resp prisonLevel.
             * @member {number} prisonLevel
             * @memberof game.war.SMSG_UnitLevelingUp_Resp
             * @instance
             */
            SMSG_UnitLevelingUp_Resp.prototype.prisonLevel = 0;

            /**
             * SMSG_UnitLevelingUp_Resp prisonExp.
             * @member {number} prisonExp
             * @memberof game.war.SMSG_UnitLevelingUp_Resp
             * @instance
             */
            SMSG_UnitLevelingUp_Resp.prototype.prisonExp = 0;

            /**
             * SMSG_UnitLevelingUp_Resp prisonTechPoints.
             * @member {number} prisonTechPoints
             * @memberof game.war.SMSG_UnitLevelingUp_Resp
             * @instance
             */
            SMSG_UnitLevelingUp_Resp.prototype.prisonTechPoints = 0;

            /**
             * Creates a new SMSG_UnitLevelingUp_Resp instance using the specified properties.
             * @function create
             * @memberof game.war.SMSG_UnitLevelingUp_Resp
             * @static
             * @param {game.war.ISMSG_UnitLevelingUp_Resp=} [properties] Properties to set
             * @returns {game.war.SMSG_UnitLevelingUp_Resp} SMSG_UnitLevelingUp_Resp instance
             */
            SMSG_UnitLevelingUp_Resp.create = function create(properties) {
                return new SMSG_UnitLevelingUp_Resp(properties);
            };

            /**
             * Encodes the specified SMSG_UnitLevelingUp_Resp message. Does not implicitly {@link game.war.SMSG_UnitLevelingUp_Resp.verify|verify} messages.
             * @function encode
             * @memberof game.war.SMSG_UnitLevelingUp_Resp
             * @static
             * @param {game.war.ISMSG_UnitLevelingUp_Resp} message SMSG_UnitLevelingUp_Resp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SMSG_UnitLevelingUp_Resp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.type);
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.id);
                if (message.exp != null && message.hasOwnProperty("exp"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.exp);
                if (message.level != null && message.hasOwnProperty("level"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.level);
                if (message.prisonLevel != null && message.hasOwnProperty("prisonLevel"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.prisonLevel);
                if (message.prisonExp != null && message.hasOwnProperty("prisonExp"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.prisonExp);
                if (message.prisonTechPoints != null && message.hasOwnProperty("prisonTechPoints"))
                    writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.prisonTechPoints);
                return writer;
            };

            /**
             * Encodes the specified SMSG_UnitLevelingUp_Resp message, length delimited. Does not implicitly {@link game.war.SMSG_UnitLevelingUp_Resp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof game.war.SMSG_UnitLevelingUp_Resp
             * @static
             * @param {game.war.ISMSG_UnitLevelingUp_Resp} message SMSG_UnitLevelingUp_Resp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SMSG_UnitLevelingUp_Resp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SMSG_UnitLevelingUp_Resp message from the specified reader or buffer.
             * @function decode
             * @memberof game.war.SMSG_UnitLevelingUp_Resp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.war.SMSG_UnitLevelingUp_Resp} SMSG_UnitLevelingUp_Resp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SMSG_UnitLevelingUp_Resp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.war.SMSG_UnitLevelingUp_Resp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type = reader.uint32();
                        break;
                    case 2:
                        message.id = reader.uint32();
                        break;
                    case 3:
                        message.exp = reader.uint32();
                        break;
                    case 4:
                        message.level = reader.uint32();
                        break;
                    case 5:
                        message.prisonLevel = reader.uint32();
                        break;
                    case 6:
                        message.prisonExp = reader.uint32();
                        break;
                    case 7:
                        message.prisonTechPoints = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("type"))
                    throw $util.ProtocolError("missing required 'type'", { instance: message });
                if (!message.hasOwnProperty("id"))
                    throw $util.ProtocolError("missing required 'id'", { instance: message });
                return message;
            };

            /**
             * Decodes a SMSG_UnitLevelingUp_Resp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof game.war.SMSG_UnitLevelingUp_Resp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game.war.SMSG_UnitLevelingUp_Resp} SMSG_UnitLevelingUp_Resp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SMSG_UnitLevelingUp_Resp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SMSG_UnitLevelingUp_Resp message.
             * @function verify
             * @memberof game.war.SMSG_UnitLevelingUp_Resp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SMSG_UnitLevelingUp_Resp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
                if (message.exp != null && message.hasOwnProperty("exp"))
                    if (!$util.isInteger(message.exp))
                        return "exp: integer expected";
                if (message.level != null && message.hasOwnProperty("level"))
                    if (!$util.isInteger(message.level))
                        return "level: integer expected";
                if (message.prisonLevel != null && message.hasOwnProperty("prisonLevel"))
                    if (!$util.isInteger(message.prisonLevel))
                        return "prisonLevel: integer expected";
                if (message.prisonExp != null && message.hasOwnProperty("prisonExp"))
                    if (!$util.isInteger(message.prisonExp))
                        return "prisonExp: integer expected";
                if (message.prisonTechPoints != null && message.hasOwnProperty("prisonTechPoints"))
                    if (!$util.isInteger(message.prisonTechPoints))
                        return "prisonTechPoints: integer expected";
                return null;
            };

            /**
             * Creates a SMSG_UnitLevelingUp_Resp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof game.war.SMSG_UnitLevelingUp_Resp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {game.war.SMSG_UnitLevelingUp_Resp} SMSG_UnitLevelingUp_Resp
             */
            SMSG_UnitLevelingUp_Resp.fromObject = function fromObject(object) {
                if (object instanceof $root.game.war.SMSG_UnitLevelingUp_Resp)
                    return object;
                var message = new $root.game.war.SMSG_UnitLevelingUp_Resp();
                if (object.type != null)
                    message.type = object.type >>> 0;
                if (object.id != null)
                    message.id = object.id >>> 0;
                if (object.exp != null)
                    message.exp = object.exp >>> 0;
                if (object.level != null)
                    message.level = object.level >>> 0;
                if (object.prisonLevel != null)
                    message.prisonLevel = object.prisonLevel >>> 0;
                if (object.prisonExp != null)
                    message.prisonExp = object.prisonExp >>> 0;
                if (object.prisonTechPoints != null)
                    message.prisonTechPoints = object.prisonTechPoints >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a SMSG_UnitLevelingUp_Resp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof game.war.SMSG_UnitLevelingUp_Resp
             * @static
             * @param {game.war.SMSG_UnitLevelingUp_Resp} message SMSG_UnitLevelingUp_Resp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SMSG_UnitLevelingUp_Resp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.type = 0;
                    object.id = 0;
                    object.exp = 0;
                    object.level = 0;
                    object.prisonLevel = 0;
                    object.prisonExp = 0;
                    object.prisonTechPoints = 0;
                }
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = message.type;
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.exp != null && message.hasOwnProperty("exp"))
                    object.exp = message.exp;
                if (message.level != null && message.hasOwnProperty("level"))
                    object.level = message.level;
                if (message.prisonLevel != null && message.hasOwnProperty("prisonLevel"))
                    object.prisonLevel = message.prisonLevel;
                if (message.prisonExp != null && message.hasOwnProperty("prisonExp"))
                    object.prisonExp = message.prisonExp;
                if (message.prisonTechPoints != null && message.hasOwnProperty("prisonTechPoints"))
                    object.prisonTechPoints = message.prisonTechPoints;
                return object;
            };

            /**
             * Converts this SMSG_UnitLevelingUp_Resp to JSON.
             * @function toJSON
             * @memberof game.war.SMSG_UnitLevelingUp_Resp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SMSG_UnitLevelingUp_Resp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return SMSG_UnitLevelingUp_Resp;
        })();

        war.CMSG_HeroSetting_Req = (function() {

            /**
             * Properties of a CMSG_HeroSetting_Req.
             * @memberof game.war
             * @interface ICMSG_HeroSetting_Req
             * @property {number} heroId CMSG_HeroSetting_Req heroId
             * @property {number} operationType CMSG_HeroSetting_Req operationType
             * @property {number} id CMSG_HeroSetting_Req id
             * @property {number} position CMSG_HeroSetting_Req position
             */

            /**
             * Constructs a new CMSG_HeroSetting_Req.
             * @memberof game.war
             * @classdesc Represents a CMSG_HeroSetting_Req.
             * @implements ICMSG_HeroSetting_Req
             * @constructor
             * @param {game.war.ICMSG_HeroSetting_Req=} [properties] Properties to set
             */
            function CMSG_HeroSetting_Req(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CMSG_HeroSetting_Req heroId.
             * @member {number} heroId
             * @memberof game.war.CMSG_HeroSetting_Req
             * @instance
             */
            CMSG_HeroSetting_Req.prototype.heroId = 0;

            /**
             * CMSG_HeroSetting_Req operationType.
             * @member {number} operationType
             * @memberof game.war.CMSG_HeroSetting_Req
             * @instance
             */
            CMSG_HeroSetting_Req.prototype.operationType = 0;

            /**
             * CMSG_HeroSetting_Req id.
             * @member {number} id
             * @memberof game.war.CMSG_HeroSetting_Req
             * @instance
             */
            CMSG_HeroSetting_Req.prototype.id = 0;

            /**
             * CMSG_HeroSetting_Req position.
             * @member {number} position
             * @memberof game.war.CMSG_HeroSetting_Req
             * @instance
             */
            CMSG_HeroSetting_Req.prototype.position = 0;

            /**
             * Creates a new CMSG_HeroSetting_Req instance using the specified properties.
             * @function create
             * @memberof game.war.CMSG_HeroSetting_Req
             * @static
             * @param {game.war.ICMSG_HeroSetting_Req=} [properties] Properties to set
             * @returns {game.war.CMSG_HeroSetting_Req} CMSG_HeroSetting_Req instance
             */
            CMSG_HeroSetting_Req.create = function create(properties) {
                return new CMSG_HeroSetting_Req(properties);
            };

            /**
             * Encodes the specified CMSG_HeroSetting_Req message. Does not implicitly {@link game.war.CMSG_HeroSetting_Req.verify|verify} messages.
             * @function encode
             * @memberof game.war.CMSG_HeroSetting_Req
             * @static
             * @param {game.war.ICMSG_HeroSetting_Req} message CMSG_HeroSetting_Req message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CMSG_HeroSetting_Req.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.heroId);
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.operationType);
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.id);
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.position);
                return writer;
            };

            /**
             * Encodes the specified CMSG_HeroSetting_Req message, length delimited. Does not implicitly {@link game.war.CMSG_HeroSetting_Req.verify|verify} messages.
             * @function encodeDelimited
             * @memberof game.war.CMSG_HeroSetting_Req
             * @static
             * @param {game.war.ICMSG_HeroSetting_Req} message CMSG_HeroSetting_Req message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CMSG_HeroSetting_Req.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CMSG_HeroSetting_Req message from the specified reader or buffer.
             * @function decode
             * @memberof game.war.CMSG_HeroSetting_Req
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.war.CMSG_HeroSetting_Req} CMSG_HeroSetting_Req
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CMSG_HeroSetting_Req.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.war.CMSG_HeroSetting_Req();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.heroId = reader.uint32();
                        break;
                    case 2:
                        message.operationType = reader.uint32();
                        break;
                    case 3:
                        message.id = reader.uint32();
                        break;
                    case 4:
                        message.position = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("heroId"))
                    throw $util.ProtocolError("missing required 'heroId'", { instance: message });
                if (!message.hasOwnProperty("operationType"))
                    throw $util.ProtocolError("missing required 'operationType'", { instance: message });
                if (!message.hasOwnProperty("id"))
                    throw $util.ProtocolError("missing required 'id'", { instance: message });
                if (!message.hasOwnProperty("position"))
                    throw $util.ProtocolError("missing required 'position'", { instance: message });
                return message;
            };

            /**
             * Decodes a CMSG_HeroSetting_Req message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof game.war.CMSG_HeroSetting_Req
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game.war.CMSG_HeroSetting_Req} CMSG_HeroSetting_Req
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CMSG_HeroSetting_Req.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CMSG_HeroSetting_Req message.
             * @function verify
             * @memberof game.war.CMSG_HeroSetting_Req
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CMSG_HeroSetting_Req.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.heroId))
                    return "heroId: integer expected";
                if (!$util.isInteger(message.operationType))
                    return "operationType: integer expected";
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
                if (!$util.isInteger(message.position))
                    return "position: integer expected";
                return null;
            };

            /**
             * Creates a CMSG_HeroSetting_Req message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof game.war.CMSG_HeroSetting_Req
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {game.war.CMSG_HeroSetting_Req} CMSG_HeroSetting_Req
             */
            CMSG_HeroSetting_Req.fromObject = function fromObject(object) {
                if (object instanceof $root.game.war.CMSG_HeroSetting_Req)
                    return object;
                var message = new $root.game.war.CMSG_HeroSetting_Req();
                if (object.heroId != null)
                    message.heroId = object.heroId >>> 0;
                if (object.operationType != null)
                    message.operationType = object.operationType >>> 0;
                if (object.id != null)
                    message.id = object.id >>> 0;
                if (object.position != null)
                    message.position = object.position >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a CMSG_HeroSetting_Req message. Also converts values to other types if specified.
             * @function toObject
             * @memberof game.war.CMSG_HeroSetting_Req
             * @static
             * @param {game.war.CMSG_HeroSetting_Req} message CMSG_HeroSetting_Req
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CMSG_HeroSetting_Req.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.heroId = 0;
                    object.operationType = 0;
                    object.id = 0;
                    object.position = 0;
                }
                if (message.heroId != null && message.hasOwnProperty("heroId"))
                    object.heroId = message.heroId;
                if (message.operationType != null && message.hasOwnProperty("operationType"))
                    object.operationType = message.operationType;
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.position != null && message.hasOwnProperty("position"))
                    object.position = message.position;
                return object;
            };

            /**
             * Converts this CMSG_HeroSetting_Req to JSON.
             * @function toJSON
             * @memberof game.war.CMSG_HeroSetting_Req
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CMSG_HeroSetting_Req.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CMSG_HeroSetting_Req;
        })();

        war.SMSG_HeroSetting_Resp = (function() {

            /**
             * Properties of a SMSG_HeroSetting_Resp.
             * @memberof game.war
             * @interface ISMSG_HeroSetting_Resp
             * @property {number} heroId SMSG_HeroSetting_Resp heroId
             * @property {number} operationType SMSG_HeroSetting_Resp operationType
             * @property {number} id SMSG_HeroSetting_Resp id
             * @property {number} position SMSG_HeroSetting_Resp position
             */

            /**
             * Constructs a new SMSG_HeroSetting_Resp.
             * @memberof game.war
             * @classdesc Represents a SMSG_HeroSetting_Resp.
             * @implements ISMSG_HeroSetting_Resp
             * @constructor
             * @param {game.war.ISMSG_HeroSetting_Resp=} [properties] Properties to set
             */
            function SMSG_HeroSetting_Resp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SMSG_HeroSetting_Resp heroId.
             * @member {number} heroId
             * @memberof game.war.SMSG_HeroSetting_Resp
             * @instance
             */
            SMSG_HeroSetting_Resp.prototype.heroId = 0;

            /**
             * SMSG_HeroSetting_Resp operationType.
             * @member {number} operationType
             * @memberof game.war.SMSG_HeroSetting_Resp
             * @instance
             */
            SMSG_HeroSetting_Resp.prototype.operationType = 0;

            /**
             * SMSG_HeroSetting_Resp id.
             * @member {number} id
             * @memberof game.war.SMSG_HeroSetting_Resp
             * @instance
             */
            SMSG_HeroSetting_Resp.prototype.id = 0;

            /**
             * SMSG_HeroSetting_Resp position.
             * @member {number} position
             * @memberof game.war.SMSG_HeroSetting_Resp
             * @instance
             */
            SMSG_HeroSetting_Resp.prototype.position = 0;

            /**
             * Creates a new SMSG_HeroSetting_Resp instance using the specified properties.
             * @function create
             * @memberof game.war.SMSG_HeroSetting_Resp
             * @static
             * @param {game.war.ISMSG_HeroSetting_Resp=} [properties] Properties to set
             * @returns {game.war.SMSG_HeroSetting_Resp} SMSG_HeroSetting_Resp instance
             */
            SMSG_HeroSetting_Resp.create = function create(properties) {
                return new SMSG_HeroSetting_Resp(properties);
            };

            /**
             * Encodes the specified SMSG_HeroSetting_Resp message. Does not implicitly {@link game.war.SMSG_HeroSetting_Resp.verify|verify} messages.
             * @function encode
             * @memberof game.war.SMSG_HeroSetting_Resp
             * @static
             * @param {game.war.ISMSG_HeroSetting_Resp} message SMSG_HeroSetting_Resp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SMSG_HeroSetting_Resp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.heroId);
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.operationType);
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.id);
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.position);
                return writer;
            };

            /**
             * Encodes the specified SMSG_HeroSetting_Resp message, length delimited. Does not implicitly {@link game.war.SMSG_HeroSetting_Resp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof game.war.SMSG_HeroSetting_Resp
             * @static
             * @param {game.war.ISMSG_HeroSetting_Resp} message SMSG_HeroSetting_Resp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SMSG_HeroSetting_Resp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SMSG_HeroSetting_Resp message from the specified reader or buffer.
             * @function decode
             * @memberof game.war.SMSG_HeroSetting_Resp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.war.SMSG_HeroSetting_Resp} SMSG_HeroSetting_Resp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SMSG_HeroSetting_Resp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.war.SMSG_HeroSetting_Resp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.heroId = reader.uint32();
                        break;
                    case 2:
                        message.operationType = reader.uint32();
                        break;
                    case 3:
                        message.id = reader.uint32();
                        break;
                    case 4:
                        message.position = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("heroId"))
                    throw $util.ProtocolError("missing required 'heroId'", { instance: message });
                if (!message.hasOwnProperty("operationType"))
                    throw $util.ProtocolError("missing required 'operationType'", { instance: message });
                if (!message.hasOwnProperty("id"))
                    throw $util.ProtocolError("missing required 'id'", { instance: message });
                if (!message.hasOwnProperty("position"))
                    throw $util.ProtocolError("missing required 'position'", { instance: message });
                return message;
            };

            /**
             * Decodes a SMSG_HeroSetting_Resp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof game.war.SMSG_HeroSetting_Resp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game.war.SMSG_HeroSetting_Resp} SMSG_HeroSetting_Resp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SMSG_HeroSetting_Resp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SMSG_HeroSetting_Resp message.
             * @function verify
             * @memberof game.war.SMSG_HeroSetting_Resp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SMSG_HeroSetting_Resp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.heroId))
                    return "heroId: integer expected";
                if (!$util.isInteger(message.operationType))
                    return "operationType: integer expected";
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
                if (!$util.isInteger(message.position))
                    return "position: integer expected";
                return null;
            };

            /**
             * Creates a SMSG_HeroSetting_Resp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof game.war.SMSG_HeroSetting_Resp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {game.war.SMSG_HeroSetting_Resp} SMSG_HeroSetting_Resp
             */
            SMSG_HeroSetting_Resp.fromObject = function fromObject(object) {
                if (object instanceof $root.game.war.SMSG_HeroSetting_Resp)
                    return object;
                var message = new $root.game.war.SMSG_HeroSetting_Resp();
                if (object.heroId != null)
                    message.heroId = object.heroId >>> 0;
                if (object.operationType != null)
                    message.operationType = object.operationType >>> 0;
                if (object.id != null)
                    message.id = object.id >>> 0;
                if (object.position != null)
                    message.position = object.position >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a SMSG_HeroSetting_Resp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof game.war.SMSG_HeroSetting_Resp
             * @static
             * @param {game.war.SMSG_HeroSetting_Resp} message SMSG_HeroSetting_Resp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SMSG_HeroSetting_Resp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.heroId = 0;
                    object.operationType = 0;
                    object.id = 0;
                    object.position = 0;
                }
                if (message.heroId != null && message.hasOwnProperty("heroId"))
                    object.heroId = message.heroId;
                if (message.operationType != null && message.hasOwnProperty("operationType"))
                    object.operationType = message.operationType;
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.position != null && message.hasOwnProperty("position"))
                    object.position = message.position;
                return object;
            };

            /**
             * Converts this SMSG_HeroSetting_Resp to JSON.
             * @function toJSON
             * @memberof game.war.SMSG_HeroSetting_Resp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SMSG_HeroSetting_Resp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return SMSG_HeroSetting_Resp;
        })();

        war.CMSG_SelectHeroByBattleFormation_Req = (function() {

            /**
             * Properties of a CMSG_SelectHeroByBattleFormation_Req.
             * @memberof game.war
             * @interface ICMSG_SelectHeroByBattleFormation_Req
             * @property {number} heroId CMSG_SelectHeroByBattleFormation_Req heroId
             */

            /**
             * Constructs a new CMSG_SelectHeroByBattleFormation_Req.
             * @memberof game.war
             * @classdesc Represents a CMSG_SelectHeroByBattleFormation_Req.
             * @implements ICMSG_SelectHeroByBattleFormation_Req
             * @constructor
             * @param {game.war.ICMSG_SelectHeroByBattleFormation_Req=} [properties] Properties to set
             */
            function CMSG_SelectHeroByBattleFormation_Req(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CMSG_SelectHeroByBattleFormation_Req heroId.
             * @member {number} heroId
             * @memberof game.war.CMSG_SelectHeroByBattleFormation_Req
             * @instance
             */
            CMSG_SelectHeroByBattleFormation_Req.prototype.heroId = 0;

            /**
             * Creates a new CMSG_SelectHeroByBattleFormation_Req instance using the specified properties.
             * @function create
             * @memberof game.war.CMSG_SelectHeroByBattleFormation_Req
             * @static
             * @param {game.war.ICMSG_SelectHeroByBattleFormation_Req=} [properties] Properties to set
             * @returns {game.war.CMSG_SelectHeroByBattleFormation_Req} CMSG_SelectHeroByBattleFormation_Req instance
             */
            CMSG_SelectHeroByBattleFormation_Req.create = function create(properties) {
                return new CMSG_SelectHeroByBattleFormation_Req(properties);
            };

            /**
             * Encodes the specified CMSG_SelectHeroByBattleFormation_Req message. Does not implicitly {@link game.war.CMSG_SelectHeroByBattleFormation_Req.verify|verify} messages.
             * @function encode
             * @memberof game.war.CMSG_SelectHeroByBattleFormation_Req
             * @static
             * @param {game.war.ICMSG_SelectHeroByBattleFormation_Req} message CMSG_SelectHeroByBattleFormation_Req message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CMSG_SelectHeroByBattleFormation_Req.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.heroId);
                return writer;
            };

            /**
             * Encodes the specified CMSG_SelectHeroByBattleFormation_Req message, length delimited. Does not implicitly {@link game.war.CMSG_SelectHeroByBattleFormation_Req.verify|verify} messages.
             * @function encodeDelimited
             * @memberof game.war.CMSG_SelectHeroByBattleFormation_Req
             * @static
             * @param {game.war.ICMSG_SelectHeroByBattleFormation_Req} message CMSG_SelectHeroByBattleFormation_Req message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CMSG_SelectHeroByBattleFormation_Req.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CMSG_SelectHeroByBattleFormation_Req message from the specified reader or buffer.
             * @function decode
             * @memberof game.war.CMSG_SelectHeroByBattleFormation_Req
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.war.CMSG_SelectHeroByBattleFormation_Req} CMSG_SelectHeroByBattleFormation_Req
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CMSG_SelectHeroByBattleFormation_Req.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.war.CMSG_SelectHeroByBattleFormation_Req();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.heroId = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("heroId"))
                    throw $util.ProtocolError("missing required 'heroId'", { instance: message });
                return message;
            };

            /**
             * Decodes a CMSG_SelectHeroByBattleFormation_Req message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof game.war.CMSG_SelectHeroByBattleFormation_Req
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game.war.CMSG_SelectHeroByBattleFormation_Req} CMSG_SelectHeroByBattleFormation_Req
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CMSG_SelectHeroByBattleFormation_Req.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CMSG_SelectHeroByBattleFormation_Req message.
             * @function verify
             * @memberof game.war.CMSG_SelectHeroByBattleFormation_Req
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CMSG_SelectHeroByBattleFormation_Req.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.heroId))
                    return "heroId: integer expected";
                return null;
            };

            /**
             * Creates a CMSG_SelectHeroByBattleFormation_Req message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof game.war.CMSG_SelectHeroByBattleFormation_Req
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {game.war.CMSG_SelectHeroByBattleFormation_Req} CMSG_SelectHeroByBattleFormation_Req
             */
            CMSG_SelectHeroByBattleFormation_Req.fromObject = function fromObject(object) {
                if (object instanceof $root.game.war.CMSG_SelectHeroByBattleFormation_Req)
                    return object;
                var message = new $root.game.war.CMSG_SelectHeroByBattleFormation_Req();
                if (object.heroId != null)
                    message.heroId = object.heroId >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a CMSG_SelectHeroByBattleFormation_Req message. Also converts values to other types if specified.
             * @function toObject
             * @memberof game.war.CMSG_SelectHeroByBattleFormation_Req
             * @static
             * @param {game.war.CMSG_SelectHeroByBattleFormation_Req} message CMSG_SelectHeroByBattleFormation_Req
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CMSG_SelectHeroByBattleFormation_Req.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.heroId = 0;
                if (message.heroId != null && message.hasOwnProperty("heroId"))
                    object.heroId = message.heroId;
                return object;
            };

            /**
             * Converts this CMSG_SelectHeroByBattleFormation_Req to JSON.
             * @function toJSON
             * @memberof game.war.CMSG_SelectHeroByBattleFormation_Req
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CMSG_SelectHeroByBattleFormation_Req.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CMSG_SelectHeroByBattleFormation_Req;
        })();

        war.SMSG_SelectHeroByBattleFormation_Resp = (function() {

            /**
             * Properties of a SMSG_SelectHeroByBattleFormation_Resp.
             * @memberof game.war
             * @interface ISMSG_SelectHeroByBattleFormation_Resp
             * @property {number} heroId SMSG_SelectHeroByBattleFormation_Resp heroId
             */

            /**
             * Constructs a new SMSG_SelectHeroByBattleFormation_Resp.
             * @memberof game.war
             * @classdesc Represents a SMSG_SelectHeroByBattleFormation_Resp.
             * @implements ISMSG_SelectHeroByBattleFormation_Resp
             * @constructor
             * @param {game.war.ISMSG_SelectHeroByBattleFormation_Resp=} [properties] Properties to set
             */
            function SMSG_SelectHeroByBattleFormation_Resp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SMSG_SelectHeroByBattleFormation_Resp heroId.
             * @member {number} heroId
             * @memberof game.war.SMSG_SelectHeroByBattleFormation_Resp
             * @instance
             */
            SMSG_SelectHeroByBattleFormation_Resp.prototype.heroId = 0;

            /**
             * Creates a new SMSG_SelectHeroByBattleFormation_Resp instance using the specified properties.
             * @function create
             * @memberof game.war.SMSG_SelectHeroByBattleFormation_Resp
             * @static
             * @param {game.war.ISMSG_SelectHeroByBattleFormation_Resp=} [properties] Properties to set
             * @returns {game.war.SMSG_SelectHeroByBattleFormation_Resp} SMSG_SelectHeroByBattleFormation_Resp instance
             */
            SMSG_SelectHeroByBattleFormation_Resp.create = function create(properties) {
                return new SMSG_SelectHeroByBattleFormation_Resp(properties);
            };

            /**
             * Encodes the specified SMSG_SelectHeroByBattleFormation_Resp message. Does not implicitly {@link game.war.SMSG_SelectHeroByBattleFormation_Resp.verify|verify} messages.
             * @function encode
             * @memberof game.war.SMSG_SelectHeroByBattleFormation_Resp
             * @static
             * @param {game.war.ISMSG_SelectHeroByBattleFormation_Resp} message SMSG_SelectHeroByBattleFormation_Resp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SMSG_SelectHeroByBattleFormation_Resp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.heroId);
                return writer;
            };

            /**
             * Encodes the specified SMSG_SelectHeroByBattleFormation_Resp message, length delimited. Does not implicitly {@link game.war.SMSG_SelectHeroByBattleFormation_Resp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof game.war.SMSG_SelectHeroByBattleFormation_Resp
             * @static
             * @param {game.war.ISMSG_SelectHeroByBattleFormation_Resp} message SMSG_SelectHeroByBattleFormation_Resp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SMSG_SelectHeroByBattleFormation_Resp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SMSG_SelectHeroByBattleFormation_Resp message from the specified reader or buffer.
             * @function decode
             * @memberof game.war.SMSG_SelectHeroByBattleFormation_Resp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.war.SMSG_SelectHeroByBattleFormation_Resp} SMSG_SelectHeroByBattleFormation_Resp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SMSG_SelectHeroByBattleFormation_Resp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.war.SMSG_SelectHeroByBattleFormation_Resp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.heroId = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("heroId"))
                    throw $util.ProtocolError("missing required 'heroId'", { instance: message });
                return message;
            };

            /**
             * Decodes a SMSG_SelectHeroByBattleFormation_Resp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof game.war.SMSG_SelectHeroByBattleFormation_Resp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game.war.SMSG_SelectHeroByBattleFormation_Resp} SMSG_SelectHeroByBattleFormation_Resp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SMSG_SelectHeroByBattleFormation_Resp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SMSG_SelectHeroByBattleFormation_Resp message.
             * @function verify
             * @memberof game.war.SMSG_SelectHeroByBattleFormation_Resp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SMSG_SelectHeroByBattleFormation_Resp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.heroId))
                    return "heroId: integer expected";
                return null;
            };

            /**
             * Creates a SMSG_SelectHeroByBattleFormation_Resp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof game.war.SMSG_SelectHeroByBattleFormation_Resp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {game.war.SMSG_SelectHeroByBattleFormation_Resp} SMSG_SelectHeroByBattleFormation_Resp
             */
            SMSG_SelectHeroByBattleFormation_Resp.fromObject = function fromObject(object) {
                if (object instanceof $root.game.war.SMSG_SelectHeroByBattleFormation_Resp)
                    return object;
                var message = new $root.game.war.SMSG_SelectHeroByBattleFormation_Resp();
                if (object.heroId != null)
                    message.heroId = object.heroId >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a SMSG_SelectHeroByBattleFormation_Resp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof game.war.SMSG_SelectHeroByBattleFormation_Resp
             * @static
             * @param {game.war.SMSG_SelectHeroByBattleFormation_Resp} message SMSG_SelectHeroByBattleFormation_Resp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SMSG_SelectHeroByBattleFormation_Resp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.heroId = 0;
                if (message.heroId != null && message.hasOwnProperty("heroId"))
                    object.heroId = message.heroId;
                return object;
            };

            /**
             * Converts this SMSG_SelectHeroByBattleFormation_Resp to JSON.
             * @function toJSON
             * @memberof game.war.SMSG_SelectHeroByBattleFormation_Resp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SMSG_SelectHeroByBattleFormation_Resp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return SMSG_SelectHeroByBattleFormation_Resp;
        })();

        war.CMSG_HeroSkillLevelingUp_Req = (function() {

            /**
             * Properties of a CMSG_HeroSkillLevelingUp_Req.
             * @memberof game.war
             * @interface ICMSG_HeroSkillLevelingUp_Req
             * @property {number} heroId CMSG_HeroSkillLevelingUp_Req heroId
             * @property {number} skillId CMSG_HeroSkillLevelingUp_Req skillId
             */

            /**
             * Constructs a new CMSG_HeroSkillLevelingUp_Req.
             * @memberof game.war
             * @classdesc Represents a CMSG_HeroSkillLevelingUp_Req.
             * @implements ICMSG_HeroSkillLevelingUp_Req
             * @constructor
             * @param {game.war.ICMSG_HeroSkillLevelingUp_Req=} [properties] Properties to set
             */
            function CMSG_HeroSkillLevelingUp_Req(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CMSG_HeroSkillLevelingUp_Req heroId.
             * @member {number} heroId
             * @memberof game.war.CMSG_HeroSkillLevelingUp_Req
             * @instance
             */
            CMSG_HeroSkillLevelingUp_Req.prototype.heroId = 0;

            /**
             * CMSG_HeroSkillLevelingUp_Req skillId.
             * @member {number} skillId
             * @memberof game.war.CMSG_HeroSkillLevelingUp_Req
             * @instance
             */
            CMSG_HeroSkillLevelingUp_Req.prototype.skillId = 0;

            /**
             * Creates a new CMSG_HeroSkillLevelingUp_Req instance using the specified properties.
             * @function create
             * @memberof game.war.CMSG_HeroSkillLevelingUp_Req
             * @static
             * @param {game.war.ICMSG_HeroSkillLevelingUp_Req=} [properties] Properties to set
             * @returns {game.war.CMSG_HeroSkillLevelingUp_Req} CMSG_HeroSkillLevelingUp_Req instance
             */
            CMSG_HeroSkillLevelingUp_Req.create = function create(properties) {
                return new CMSG_HeroSkillLevelingUp_Req(properties);
            };

            /**
             * Encodes the specified CMSG_HeroSkillLevelingUp_Req message. Does not implicitly {@link game.war.CMSG_HeroSkillLevelingUp_Req.verify|verify} messages.
             * @function encode
             * @memberof game.war.CMSG_HeroSkillLevelingUp_Req
             * @static
             * @param {game.war.ICMSG_HeroSkillLevelingUp_Req} message CMSG_HeroSkillLevelingUp_Req message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CMSG_HeroSkillLevelingUp_Req.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.heroId);
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.skillId);
                return writer;
            };

            /**
             * Encodes the specified CMSG_HeroSkillLevelingUp_Req message, length delimited. Does not implicitly {@link game.war.CMSG_HeroSkillLevelingUp_Req.verify|verify} messages.
             * @function encodeDelimited
             * @memberof game.war.CMSG_HeroSkillLevelingUp_Req
             * @static
             * @param {game.war.ICMSG_HeroSkillLevelingUp_Req} message CMSG_HeroSkillLevelingUp_Req message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CMSG_HeroSkillLevelingUp_Req.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CMSG_HeroSkillLevelingUp_Req message from the specified reader or buffer.
             * @function decode
             * @memberof game.war.CMSG_HeroSkillLevelingUp_Req
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.war.CMSG_HeroSkillLevelingUp_Req} CMSG_HeroSkillLevelingUp_Req
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CMSG_HeroSkillLevelingUp_Req.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.war.CMSG_HeroSkillLevelingUp_Req();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.heroId = reader.uint32();
                        break;
                    case 2:
                        message.skillId = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("heroId"))
                    throw $util.ProtocolError("missing required 'heroId'", { instance: message });
                if (!message.hasOwnProperty("skillId"))
                    throw $util.ProtocolError("missing required 'skillId'", { instance: message });
                return message;
            };

            /**
             * Decodes a CMSG_HeroSkillLevelingUp_Req message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof game.war.CMSG_HeroSkillLevelingUp_Req
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game.war.CMSG_HeroSkillLevelingUp_Req} CMSG_HeroSkillLevelingUp_Req
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CMSG_HeroSkillLevelingUp_Req.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CMSG_HeroSkillLevelingUp_Req message.
             * @function verify
             * @memberof game.war.CMSG_HeroSkillLevelingUp_Req
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CMSG_HeroSkillLevelingUp_Req.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.heroId))
                    return "heroId: integer expected";
                if (!$util.isInteger(message.skillId))
                    return "skillId: integer expected";
                return null;
            };

            /**
             * Creates a CMSG_HeroSkillLevelingUp_Req message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof game.war.CMSG_HeroSkillLevelingUp_Req
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {game.war.CMSG_HeroSkillLevelingUp_Req} CMSG_HeroSkillLevelingUp_Req
             */
            CMSG_HeroSkillLevelingUp_Req.fromObject = function fromObject(object) {
                if (object instanceof $root.game.war.CMSG_HeroSkillLevelingUp_Req)
                    return object;
                var message = new $root.game.war.CMSG_HeroSkillLevelingUp_Req();
                if (object.heroId != null)
                    message.heroId = object.heroId >>> 0;
                if (object.skillId != null)
                    message.skillId = object.skillId >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a CMSG_HeroSkillLevelingUp_Req message. Also converts values to other types if specified.
             * @function toObject
             * @memberof game.war.CMSG_HeroSkillLevelingUp_Req
             * @static
             * @param {game.war.CMSG_HeroSkillLevelingUp_Req} message CMSG_HeroSkillLevelingUp_Req
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CMSG_HeroSkillLevelingUp_Req.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.heroId = 0;
                    object.skillId = 0;
                }
                if (message.heroId != null && message.hasOwnProperty("heroId"))
                    object.heroId = message.heroId;
                if (message.skillId != null && message.hasOwnProperty("skillId"))
                    object.skillId = message.skillId;
                return object;
            };

            /**
             * Converts this CMSG_HeroSkillLevelingUp_Req to JSON.
             * @function toJSON
             * @memberof game.war.CMSG_HeroSkillLevelingUp_Req
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CMSG_HeroSkillLevelingUp_Req.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CMSG_HeroSkillLevelingUp_Req;
        })();

        war.SMSG_HeroSkillLevelingUp_Resp = (function() {

            /**
             * Properties of a SMSG_HeroSkillLevelingUp_Resp.
             * @memberof game.war
             * @interface ISMSG_HeroSkillLevelingUp_Resp
             * @property {number} heroId SMSG_HeroSkillLevelingUp_Resp heroId
             * @property {number} skillId SMSG_HeroSkillLevelingUp_Resp skillId
             * @property {number} level SMSG_HeroSkillLevelingUp_Resp level
             */

            /**
             * Constructs a new SMSG_HeroSkillLevelingUp_Resp.
             * @memberof game.war
             * @classdesc Represents a SMSG_HeroSkillLevelingUp_Resp.
             * @implements ISMSG_HeroSkillLevelingUp_Resp
             * @constructor
             * @param {game.war.ISMSG_HeroSkillLevelingUp_Resp=} [properties] Properties to set
             */
            function SMSG_HeroSkillLevelingUp_Resp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SMSG_HeroSkillLevelingUp_Resp heroId.
             * @member {number} heroId
             * @memberof game.war.SMSG_HeroSkillLevelingUp_Resp
             * @instance
             */
            SMSG_HeroSkillLevelingUp_Resp.prototype.heroId = 0;

            /**
             * SMSG_HeroSkillLevelingUp_Resp skillId.
             * @member {number} skillId
             * @memberof game.war.SMSG_HeroSkillLevelingUp_Resp
             * @instance
             */
            SMSG_HeroSkillLevelingUp_Resp.prototype.skillId = 0;

            /**
             * SMSG_HeroSkillLevelingUp_Resp level.
             * @member {number} level
             * @memberof game.war.SMSG_HeroSkillLevelingUp_Resp
             * @instance
             */
            SMSG_HeroSkillLevelingUp_Resp.prototype.level = 0;

            /**
             * Creates a new SMSG_HeroSkillLevelingUp_Resp instance using the specified properties.
             * @function create
             * @memberof game.war.SMSG_HeroSkillLevelingUp_Resp
             * @static
             * @param {game.war.ISMSG_HeroSkillLevelingUp_Resp=} [properties] Properties to set
             * @returns {game.war.SMSG_HeroSkillLevelingUp_Resp} SMSG_HeroSkillLevelingUp_Resp instance
             */
            SMSG_HeroSkillLevelingUp_Resp.create = function create(properties) {
                return new SMSG_HeroSkillLevelingUp_Resp(properties);
            };

            /**
             * Encodes the specified SMSG_HeroSkillLevelingUp_Resp message. Does not implicitly {@link game.war.SMSG_HeroSkillLevelingUp_Resp.verify|verify} messages.
             * @function encode
             * @memberof game.war.SMSG_HeroSkillLevelingUp_Resp
             * @static
             * @param {game.war.ISMSG_HeroSkillLevelingUp_Resp} message SMSG_HeroSkillLevelingUp_Resp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SMSG_HeroSkillLevelingUp_Resp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.heroId);
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.skillId);
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.level);
                return writer;
            };

            /**
             * Encodes the specified SMSG_HeroSkillLevelingUp_Resp message, length delimited. Does not implicitly {@link game.war.SMSG_HeroSkillLevelingUp_Resp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof game.war.SMSG_HeroSkillLevelingUp_Resp
             * @static
             * @param {game.war.ISMSG_HeroSkillLevelingUp_Resp} message SMSG_HeroSkillLevelingUp_Resp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SMSG_HeroSkillLevelingUp_Resp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SMSG_HeroSkillLevelingUp_Resp message from the specified reader or buffer.
             * @function decode
             * @memberof game.war.SMSG_HeroSkillLevelingUp_Resp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.war.SMSG_HeroSkillLevelingUp_Resp} SMSG_HeroSkillLevelingUp_Resp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SMSG_HeroSkillLevelingUp_Resp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.war.SMSG_HeroSkillLevelingUp_Resp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.heroId = reader.uint32();
                        break;
                    case 2:
                        message.skillId = reader.uint32();
                        break;
                    case 3:
                        message.level = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("heroId"))
                    throw $util.ProtocolError("missing required 'heroId'", { instance: message });
                if (!message.hasOwnProperty("skillId"))
                    throw $util.ProtocolError("missing required 'skillId'", { instance: message });
                if (!message.hasOwnProperty("level"))
                    throw $util.ProtocolError("missing required 'level'", { instance: message });
                return message;
            };

            /**
             * Decodes a SMSG_HeroSkillLevelingUp_Resp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof game.war.SMSG_HeroSkillLevelingUp_Resp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game.war.SMSG_HeroSkillLevelingUp_Resp} SMSG_HeroSkillLevelingUp_Resp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SMSG_HeroSkillLevelingUp_Resp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SMSG_HeroSkillLevelingUp_Resp message.
             * @function verify
             * @memberof game.war.SMSG_HeroSkillLevelingUp_Resp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SMSG_HeroSkillLevelingUp_Resp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.heroId))
                    return "heroId: integer expected";
                if (!$util.isInteger(message.skillId))
                    return "skillId: integer expected";
                if (!$util.isInteger(message.level))
                    return "level: integer expected";
                return null;
            };

            /**
             * Creates a SMSG_HeroSkillLevelingUp_Resp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof game.war.SMSG_HeroSkillLevelingUp_Resp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {game.war.SMSG_HeroSkillLevelingUp_Resp} SMSG_HeroSkillLevelingUp_Resp
             */
            SMSG_HeroSkillLevelingUp_Resp.fromObject = function fromObject(object) {
                if (object instanceof $root.game.war.SMSG_HeroSkillLevelingUp_Resp)
                    return object;
                var message = new $root.game.war.SMSG_HeroSkillLevelingUp_Resp();
                if (object.heroId != null)
                    message.heroId = object.heroId >>> 0;
                if (object.skillId != null)
                    message.skillId = object.skillId >>> 0;
                if (object.level != null)
                    message.level = object.level >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a SMSG_HeroSkillLevelingUp_Resp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof game.war.SMSG_HeroSkillLevelingUp_Resp
             * @static
             * @param {game.war.SMSG_HeroSkillLevelingUp_Resp} message SMSG_HeroSkillLevelingUp_Resp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SMSG_HeroSkillLevelingUp_Resp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.heroId = 0;
                    object.skillId = 0;
                    object.level = 0;
                }
                if (message.heroId != null && message.hasOwnProperty("heroId"))
                    object.heroId = message.heroId;
                if (message.skillId != null && message.hasOwnProperty("skillId"))
                    object.skillId = message.skillId;
                if (message.level != null && message.hasOwnProperty("level"))
                    object.level = message.level;
                return object;
            };

            /**
             * Converts this SMSG_HeroSkillLevelingUp_Resp to JSON.
             * @function toJSON
             * @memberof game.war.SMSG_HeroSkillLevelingUp_Resp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SMSG_HeroSkillLevelingUp_Resp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return SMSG_HeroSkillLevelingUp_Resp;
        })();

        war.CMSG_ResetHeroSkillLevel_Req = (function() {

            /**
             * Properties of a CMSG_ResetHeroSkillLevel_Req.
             * @memberof game.war
             * @interface ICMSG_ResetHeroSkillLevel_Req
             * @property {number} heroId CMSG_ResetHeroSkillLevel_Req heroId
             */

            /**
             * Constructs a new CMSG_ResetHeroSkillLevel_Req.
             * @memberof game.war
             * @classdesc Represents a CMSG_ResetHeroSkillLevel_Req.
             * @implements ICMSG_ResetHeroSkillLevel_Req
             * @constructor
             * @param {game.war.ICMSG_ResetHeroSkillLevel_Req=} [properties] Properties to set
             */
            function CMSG_ResetHeroSkillLevel_Req(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CMSG_ResetHeroSkillLevel_Req heroId.
             * @member {number} heroId
             * @memberof game.war.CMSG_ResetHeroSkillLevel_Req
             * @instance
             */
            CMSG_ResetHeroSkillLevel_Req.prototype.heroId = 0;

            /**
             * Creates a new CMSG_ResetHeroSkillLevel_Req instance using the specified properties.
             * @function create
             * @memberof game.war.CMSG_ResetHeroSkillLevel_Req
             * @static
             * @param {game.war.ICMSG_ResetHeroSkillLevel_Req=} [properties] Properties to set
             * @returns {game.war.CMSG_ResetHeroSkillLevel_Req} CMSG_ResetHeroSkillLevel_Req instance
             */
            CMSG_ResetHeroSkillLevel_Req.create = function create(properties) {
                return new CMSG_ResetHeroSkillLevel_Req(properties);
            };

            /**
             * Encodes the specified CMSG_ResetHeroSkillLevel_Req message. Does not implicitly {@link game.war.CMSG_ResetHeroSkillLevel_Req.verify|verify} messages.
             * @function encode
             * @memberof game.war.CMSG_ResetHeroSkillLevel_Req
             * @static
             * @param {game.war.ICMSG_ResetHeroSkillLevel_Req} message CMSG_ResetHeroSkillLevel_Req message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CMSG_ResetHeroSkillLevel_Req.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.heroId);
                return writer;
            };

            /**
             * Encodes the specified CMSG_ResetHeroSkillLevel_Req message, length delimited. Does not implicitly {@link game.war.CMSG_ResetHeroSkillLevel_Req.verify|verify} messages.
             * @function encodeDelimited
             * @memberof game.war.CMSG_ResetHeroSkillLevel_Req
             * @static
             * @param {game.war.ICMSG_ResetHeroSkillLevel_Req} message CMSG_ResetHeroSkillLevel_Req message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CMSG_ResetHeroSkillLevel_Req.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CMSG_ResetHeroSkillLevel_Req message from the specified reader or buffer.
             * @function decode
             * @memberof game.war.CMSG_ResetHeroSkillLevel_Req
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.war.CMSG_ResetHeroSkillLevel_Req} CMSG_ResetHeroSkillLevel_Req
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CMSG_ResetHeroSkillLevel_Req.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.war.CMSG_ResetHeroSkillLevel_Req();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.heroId = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("heroId"))
                    throw $util.ProtocolError("missing required 'heroId'", { instance: message });
                return message;
            };

            /**
             * Decodes a CMSG_ResetHeroSkillLevel_Req message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof game.war.CMSG_ResetHeroSkillLevel_Req
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game.war.CMSG_ResetHeroSkillLevel_Req} CMSG_ResetHeroSkillLevel_Req
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CMSG_ResetHeroSkillLevel_Req.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CMSG_ResetHeroSkillLevel_Req message.
             * @function verify
             * @memberof game.war.CMSG_ResetHeroSkillLevel_Req
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CMSG_ResetHeroSkillLevel_Req.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.heroId))
                    return "heroId: integer expected";
                return null;
            };

            /**
             * Creates a CMSG_ResetHeroSkillLevel_Req message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof game.war.CMSG_ResetHeroSkillLevel_Req
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {game.war.CMSG_ResetHeroSkillLevel_Req} CMSG_ResetHeroSkillLevel_Req
             */
            CMSG_ResetHeroSkillLevel_Req.fromObject = function fromObject(object) {
                if (object instanceof $root.game.war.CMSG_ResetHeroSkillLevel_Req)
                    return object;
                var message = new $root.game.war.CMSG_ResetHeroSkillLevel_Req();
                if (object.heroId != null)
                    message.heroId = object.heroId >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a CMSG_ResetHeroSkillLevel_Req message. Also converts values to other types if specified.
             * @function toObject
             * @memberof game.war.CMSG_ResetHeroSkillLevel_Req
             * @static
             * @param {game.war.CMSG_ResetHeroSkillLevel_Req} message CMSG_ResetHeroSkillLevel_Req
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CMSG_ResetHeroSkillLevel_Req.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.heroId = 0;
                if (message.heroId != null && message.hasOwnProperty("heroId"))
                    object.heroId = message.heroId;
                return object;
            };

            /**
             * Converts this CMSG_ResetHeroSkillLevel_Req to JSON.
             * @function toJSON
             * @memberof game.war.CMSG_ResetHeroSkillLevel_Req
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CMSG_ResetHeroSkillLevel_Req.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CMSG_ResetHeroSkillLevel_Req;
        })();

        war.SMSG_ResetHeroSkillLevel_Resp = (function() {

            /**
             * Properties of a SMSG_ResetHeroSkillLevel_Resp.
             * @memberof game.war
             * @interface ISMSG_ResetHeroSkillLevel_Resp
             * @property {number} heroId SMSG_ResetHeroSkillLevel_Resp heroId
             * @property {number} skillPoint SMSG_ResetHeroSkillLevel_Resp skillPoint
             */

            /**
             * Constructs a new SMSG_ResetHeroSkillLevel_Resp.
             * @memberof game.war
             * @classdesc Represents a SMSG_ResetHeroSkillLevel_Resp.
             * @implements ISMSG_ResetHeroSkillLevel_Resp
             * @constructor
             * @param {game.war.ISMSG_ResetHeroSkillLevel_Resp=} [properties] Properties to set
             */
            function SMSG_ResetHeroSkillLevel_Resp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SMSG_ResetHeroSkillLevel_Resp heroId.
             * @member {number} heroId
             * @memberof game.war.SMSG_ResetHeroSkillLevel_Resp
             * @instance
             */
            SMSG_ResetHeroSkillLevel_Resp.prototype.heroId = 0;

            /**
             * SMSG_ResetHeroSkillLevel_Resp skillPoint.
             * @member {number} skillPoint
             * @memberof game.war.SMSG_ResetHeroSkillLevel_Resp
             * @instance
             */
            SMSG_ResetHeroSkillLevel_Resp.prototype.skillPoint = 0;

            /**
             * Creates a new SMSG_ResetHeroSkillLevel_Resp instance using the specified properties.
             * @function create
             * @memberof game.war.SMSG_ResetHeroSkillLevel_Resp
             * @static
             * @param {game.war.ISMSG_ResetHeroSkillLevel_Resp=} [properties] Properties to set
             * @returns {game.war.SMSG_ResetHeroSkillLevel_Resp} SMSG_ResetHeroSkillLevel_Resp instance
             */
            SMSG_ResetHeroSkillLevel_Resp.create = function create(properties) {
                return new SMSG_ResetHeroSkillLevel_Resp(properties);
            };

            /**
             * Encodes the specified SMSG_ResetHeroSkillLevel_Resp message. Does not implicitly {@link game.war.SMSG_ResetHeroSkillLevel_Resp.verify|verify} messages.
             * @function encode
             * @memberof game.war.SMSG_ResetHeroSkillLevel_Resp
             * @static
             * @param {game.war.ISMSG_ResetHeroSkillLevel_Resp} message SMSG_ResetHeroSkillLevel_Resp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SMSG_ResetHeroSkillLevel_Resp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.heroId);
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.skillPoint);
                return writer;
            };

            /**
             * Encodes the specified SMSG_ResetHeroSkillLevel_Resp message, length delimited. Does not implicitly {@link game.war.SMSG_ResetHeroSkillLevel_Resp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof game.war.SMSG_ResetHeroSkillLevel_Resp
             * @static
             * @param {game.war.ISMSG_ResetHeroSkillLevel_Resp} message SMSG_ResetHeroSkillLevel_Resp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SMSG_ResetHeroSkillLevel_Resp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SMSG_ResetHeroSkillLevel_Resp message from the specified reader or buffer.
             * @function decode
             * @memberof game.war.SMSG_ResetHeroSkillLevel_Resp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.war.SMSG_ResetHeroSkillLevel_Resp} SMSG_ResetHeroSkillLevel_Resp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SMSG_ResetHeroSkillLevel_Resp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.war.SMSG_ResetHeroSkillLevel_Resp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.heroId = reader.uint32();
                        break;
                    case 2:
                        message.skillPoint = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("heroId"))
                    throw $util.ProtocolError("missing required 'heroId'", { instance: message });
                if (!message.hasOwnProperty("skillPoint"))
                    throw $util.ProtocolError("missing required 'skillPoint'", { instance: message });
                return message;
            };

            /**
             * Decodes a SMSG_ResetHeroSkillLevel_Resp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof game.war.SMSG_ResetHeroSkillLevel_Resp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game.war.SMSG_ResetHeroSkillLevel_Resp} SMSG_ResetHeroSkillLevel_Resp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SMSG_ResetHeroSkillLevel_Resp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SMSG_ResetHeroSkillLevel_Resp message.
             * @function verify
             * @memberof game.war.SMSG_ResetHeroSkillLevel_Resp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SMSG_ResetHeroSkillLevel_Resp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.heroId))
                    return "heroId: integer expected";
                if (!$util.isInteger(message.skillPoint))
                    return "skillPoint: integer expected";
                return null;
            };

            /**
             * Creates a SMSG_ResetHeroSkillLevel_Resp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof game.war.SMSG_ResetHeroSkillLevel_Resp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {game.war.SMSG_ResetHeroSkillLevel_Resp} SMSG_ResetHeroSkillLevel_Resp
             */
            SMSG_ResetHeroSkillLevel_Resp.fromObject = function fromObject(object) {
                if (object instanceof $root.game.war.SMSG_ResetHeroSkillLevel_Resp)
                    return object;
                var message = new $root.game.war.SMSG_ResetHeroSkillLevel_Resp();
                if (object.heroId != null)
                    message.heroId = object.heroId >>> 0;
                if (object.skillPoint != null)
                    message.skillPoint = object.skillPoint >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a SMSG_ResetHeroSkillLevel_Resp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof game.war.SMSG_ResetHeroSkillLevel_Resp
             * @static
             * @param {game.war.SMSG_ResetHeroSkillLevel_Resp} message SMSG_ResetHeroSkillLevel_Resp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SMSG_ResetHeroSkillLevel_Resp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.heroId = 0;
                    object.skillPoint = 0;
                }
                if (message.heroId != null && message.hasOwnProperty("heroId"))
                    object.heroId = message.heroId;
                if (message.skillPoint != null && message.hasOwnProperty("skillPoint"))
                    object.skillPoint = message.skillPoint;
                return object;
            };

            /**
             * Converts this SMSG_ResetHeroSkillLevel_Resp to JSON.
             * @function toJSON
             * @memberof game.war.SMSG_ResetHeroSkillLevel_Resp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SMSG_ResetHeroSkillLevel_Resp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return SMSG_ResetHeroSkillLevel_Resp;
        })();

        war.SMSG_HeroSkillInfo_Ntf = (function() {

            /**
             * Properties of a SMSG_HeroSkillInfo_Ntf.
             * @memberof game.war
             * @interface ISMSG_HeroSkillInfo_Ntf
             * @property {number} heroId SMSG_HeroSkillInfo_Ntf heroId
             * @property {Array.<number>|null} [activeSkills] SMSG_HeroSkillInfo_Ntf activeSkills
             */

            /**
             * Constructs a new SMSG_HeroSkillInfo_Ntf.
             * @memberof game.war
             * @classdesc Represents a SMSG_HeroSkillInfo_Ntf.
             * @implements ISMSG_HeroSkillInfo_Ntf
             * @constructor
             * @param {game.war.ISMSG_HeroSkillInfo_Ntf=} [properties] Properties to set
             */
            function SMSG_HeroSkillInfo_Ntf(properties) {
                this.activeSkills = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SMSG_HeroSkillInfo_Ntf heroId.
             * @member {number} heroId
             * @memberof game.war.SMSG_HeroSkillInfo_Ntf
             * @instance
             */
            SMSG_HeroSkillInfo_Ntf.prototype.heroId = 0;

            /**
             * SMSG_HeroSkillInfo_Ntf activeSkills.
             * @member {Array.<number>} activeSkills
             * @memberof game.war.SMSG_HeroSkillInfo_Ntf
             * @instance
             */
            SMSG_HeroSkillInfo_Ntf.prototype.activeSkills = $util.emptyArray;

            /**
             * Creates a new SMSG_HeroSkillInfo_Ntf instance using the specified properties.
             * @function create
             * @memberof game.war.SMSG_HeroSkillInfo_Ntf
             * @static
             * @param {game.war.ISMSG_HeroSkillInfo_Ntf=} [properties] Properties to set
             * @returns {game.war.SMSG_HeroSkillInfo_Ntf} SMSG_HeroSkillInfo_Ntf instance
             */
            SMSG_HeroSkillInfo_Ntf.create = function create(properties) {
                return new SMSG_HeroSkillInfo_Ntf(properties);
            };

            /**
             * Encodes the specified SMSG_HeroSkillInfo_Ntf message. Does not implicitly {@link game.war.SMSG_HeroSkillInfo_Ntf.verify|verify} messages.
             * @function encode
             * @memberof game.war.SMSG_HeroSkillInfo_Ntf
             * @static
             * @param {game.war.ISMSG_HeroSkillInfo_Ntf} message SMSG_HeroSkillInfo_Ntf message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SMSG_HeroSkillInfo_Ntf.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.heroId);
                if (message.activeSkills != null && message.activeSkills.length)
                    for (var i = 0; i < message.activeSkills.length; ++i)
                        writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.activeSkills[i]);
                return writer;
            };

            /**
             * Encodes the specified SMSG_HeroSkillInfo_Ntf message, length delimited. Does not implicitly {@link game.war.SMSG_HeroSkillInfo_Ntf.verify|verify} messages.
             * @function encodeDelimited
             * @memberof game.war.SMSG_HeroSkillInfo_Ntf
             * @static
             * @param {game.war.ISMSG_HeroSkillInfo_Ntf} message SMSG_HeroSkillInfo_Ntf message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SMSG_HeroSkillInfo_Ntf.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SMSG_HeroSkillInfo_Ntf message from the specified reader or buffer.
             * @function decode
             * @memberof game.war.SMSG_HeroSkillInfo_Ntf
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.war.SMSG_HeroSkillInfo_Ntf} SMSG_HeroSkillInfo_Ntf
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SMSG_HeroSkillInfo_Ntf.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.war.SMSG_HeroSkillInfo_Ntf();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.heroId = reader.uint32();
                        break;
                    case 3:
                        if (!(message.activeSkills && message.activeSkills.length))
                            message.activeSkills = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.activeSkills.push(reader.uint32());
                        } else
                            message.activeSkills.push(reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("heroId"))
                    throw $util.ProtocolError("missing required 'heroId'", { instance: message });
                return message;
            };

            /**
             * Decodes a SMSG_HeroSkillInfo_Ntf message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof game.war.SMSG_HeroSkillInfo_Ntf
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game.war.SMSG_HeroSkillInfo_Ntf} SMSG_HeroSkillInfo_Ntf
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SMSG_HeroSkillInfo_Ntf.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SMSG_HeroSkillInfo_Ntf message.
             * @function verify
             * @memberof game.war.SMSG_HeroSkillInfo_Ntf
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SMSG_HeroSkillInfo_Ntf.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.heroId))
                    return "heroId: integer expected";
                if (message.activeSkills != null && message.hasOwnProperty("activeSkills")) {
                    if (!Array.isArray(message.activeSkills))
                        return "activeSkills: array expected";
                    for (var i = 0; i < message.activeSkills.length; ++i)
                        if (!$util.isInteger(message.activeSkills[i]))
                            return "activeSkills: integer[] expected";
                }
                return null;
            };

            /**
             * Creates a SMSG_HeroSkillInfo_Ntf message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof game.war.SMSG_HeroSkillInfo_Ntf
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {game.war.SMSG_HeroSkillInfo_Ntf} SMSG_HeroSkillInfo_Ntf
             */
            SMSG_HeroSkillInfo_Ntf.fromObject = function fromObject(object) {
                if (object instanceof $root.game.war.SMSG_HeroSkillInfo_Ntf)
                    return object;
                var message = new $root.game.war.SMSG_HeroSkillInfo_Ntf();
                if (object.heroId != null)
                    message.heroId = object.heroId >>> 0;
                if (object.activeSkills) {
                    if (!Array.isArray(object.activeSkills))
                        throw TypeError(".game.war.SMSG_HeroSkillInfo_Ntf.activeSkills: array expected");
                    message.activeSkills = [];
                    for (var i = 0; i < object.activeSkills.length; ++i)
                        message.activeSkills[i] = object.activeSkills[i] >>> 0;
                }
                return message;
            };

            /**
             * Creates a plain object from a SMSG_HeroSkillInfo_Ntf message. Also converts values to other types if specified.
             * @function toObject
             * @memberof game.war.SMSG_HeroSkillInfo_Ntf
             * @static
             * @param {game.war.SMSG_HeroSkillInfo_Ntf} message SMSG_HeroSkillInfo_Ntf
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SMSG_HeroSkillInfo_Ntf.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.activeSkills = [];
                if (options.defaults)
                    object.heroId = 0;
                if (message.heroId != null && message.hasOwnProperty("heroId"))
                    object.heroId = message.heroId;
                if (message.activeSkills && message.activeSkills.length) {
                    object.activeSkills = [];
                    for (var j = 0; j < message.activeSkills.length; ++j)
                        object.activeSkills[j] = message.activeSkills[j];
                }
                return object;
            };

            /**
             * Converts this SMSG_HeroSkillInfo_Ntf to JSON.
             * @function toJSON
             * @memberof game.war.SMSG_HeroSkillInfo_Ntf
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SMSG_HeroSkillInfo_Ntf.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return SMSG_HeroSkillInfo_Ntf;
        })();

        return war;
    })();

    return game;
})();

$root.mylaya = (function() {

    /**
     * Namespace mylaya.
     * @exports mylaya
     * @namespace
     */
    var mylaya = {};

    mylaya.Test = (function() {

        /**
         * Properties of a Test.
         * @memberof mylaya
         * @interface ITest
         * @property {string|null} [string] Test string
         * @property {number|null} [uint32] Test uint32
         * @property {mylaya.Test.IInner|null} [inner] Test inner
         * @property {number|null} [float] Test float
         */

        /**
         * Constructs a new Test.
         * @memberof mylaya
         * @classdesc Represents a Test.
         * @implements ITest
         * @constructor
         * @param {mylaya.ITest=} [properties] Properties to set
         */
        function Test(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Test string.
         * @member {string} string
         * @memberof mylaya.Test
         * @instance
         */
        Test.prototype.string = "";

        /**
         * Test uint32.
         * @member {number} uint32
         * @memberof mylaya.Test
         * @instance
         */
        Test.prototype.uint32 = 0;

        /**
         * Test inner.
         * @member {mylaya.Test.IInner|null|undefined} inner
         * @memberof mylaya.Test
         * @instance
         */
        Test.prototype.inner = null;

        /**
         * Test float.
         * @member {number} float
         * @memberof mylaya.Test
         * @instance
         */
        Test.prototype.float = 0;

        /**
         * Creates a new Test instance using the specified properties.
         * @function create
         * @memberof mylaya.Test
         * @static
         * @param {mylaya.ITest=} [properties] Properties to set
         * @returns {mylaya.Test} Test instance
         */
        Test.create = function create(properties) {
            return new Test(properties);
        };

        /**
         * Encodes the specified Test message. Does not implicitly {@link mylaya.Test.verify|verify} messages.
         * @function encode
         * @memberof mylaya.Test
         * @static
         * @param {mylaya.ITest} message Test message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Test.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.string != null && message.hasOwnProperty("string"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.string);
            if (message.uint32 != null && message.hasOwnProperty("uint32"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.uint32);
            if (message.inner != null && message.hasOwnProperty("inner"))
                $root.mylaya.Test.Inner.encode(message.inner, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.float != null && message.hasOwnProperty("float"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.float);
            return writer;
        };

        /**
         * Encodes the specified Test message, length delimited. Does not implicitly {@link mylaya.Test.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mylaya.Test
         * @static
         * @param {mylaya.ITest} message Test message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Test.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Test message from the specified reader or buffer.
         * @function decode
         * @memberof mylaya.Test
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mylaya.Test} Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Test.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mylaya.Test();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.string = reader.string();
                    break;
                case 2:
                    message.uint32 = reader.uint32();
                    break;
                case 3:
                    message.inner = $root.mylaya.Test.Inner.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.float = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Test message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mylaya.Test
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mylaya.Test} Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Test.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Test message.
         * @function verify
         * @memberof mylaya.Test
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Test.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.string != null && message.hasOwnProperty("string"))
                if (!$util.isString(message.string))
                    return "string: string expected";
            if (message.uint32 != null && message.hasOwnProperty("uint32"))
                if (!$util.isInteger(message.uint32))
                    return "uint32: integer expected";
            if (message.inner != null && message.hasOwnProperty("inner")) {
                var error = $root.mylaya.Test.Inner.verify(message.inner);
                if (error)
                    return "inner." + error;
            }
            if (message.float != null && message.hasOwnProperty("float"))
                if (typeof message.float !== "number")
                    return "float: number expected";
            return null;
        };

        /**
         * Creates a Test message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mylaya.Test
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mylaya.Test} Test
         */
        Test.fromObject = function fromObject(object) {
            if (object instanceof $root.mylaya.Test)
                return object;
            var message = new $root.mylaya.Test();
            if (object.string != null)
                message.string = String(object.string);
            if (object.uint32 != null)
                message.uint32 = object.uint32 >>> 0;
            if (object.inner != null) {
                if (typeof object.inner !== "object")
                    throw TypeError(".mylaya.Test.inner: object expected");
                message.inner = $root.mylaya.Test.Inner.fromObject(object.inner);
            }
            if (object.float != null)
                message.float = Number(object.float);
            return message;
        };

        /**
         * Creates a plain object from a Test message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mylaya.Test
         * @static
         * @param {mylaya.Test} message Test
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Test.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.string = "";
                object.uint32 = 0;
                object.inner = null;
                object.float = 0;
            }
            if (message.string != null && message.hasOwnProperty("string"))
                object.string = message.string;
            if (message.uint32 != null && message.hasOwnProperty("uint32"))
                object.uint32 = message.uint32;
            if (message.inner != null && message.hasOwnProperty("inner"))
                object.inner = $root.mylaya.Test.Inner.toObject(message.inner, options);
            if (message.float != null && message.hasOwnProperty("float"))
                object.float = options.json && !isFinite(message.float) ? String(message.float) : message.float;
            return object;
        };

        /**
         * Converts this Test to JSON.
         * @function toJSON
         * @memberof mylaya.Test
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Test.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        Test.Inner = (function() {

            /**
             * Properties of an Inner.
             * @memberof mylaya.Test
             * @interface IInner
             * @property {number|null} [int32] Inner int32
             * @property {mylaya.Test.Inner.IInnerInner|null} [innerInner] Inner innerInner
             * @property {mylaya.IOuter|null} [outer] Inner outer
             */

            /**
             * Constructs a new Inner.
             * @memberof mylaya.Test
             * @classdesc Represents an Inner.
             * @implements IInner
             * @constructor
             * @param {mylaya.Test.IInner=} [properties] Properties to set
             */
            function Inner(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Inner int32.
             * @member {number} int32
             * @memberof mylaya.Test.Inner
             * @instance
             */
            Inner.prototype.int32 = 0;

            /**
             * Inner innerInner.
             * @member {mylaya.Test.Inner.IInnerInner|null|undefined} innerInner
             * @memberof mylaya.Test.Inner
             * @instance
             */
            Inner.prototype.innerInner = null;

            /**
             * Inner outer.
             * @member {mylaya.IOuter|null|undefined} outer
             * @memberof mylaya.Test.Inner
             * @instance
             */
            Inner.prototype.outer = null;

            /**
             * Creates a new Inner instance using the specified properties.
             * @function create
             * @memberof mylaya.Test.Inner
             * @static
             * @param {mylaya.Test.IInner=} [properties] Properties to set
             * @returns {mylaya.Test.Inner} Inner instance
             */
            Inner.create = function create(properties) {
                return new Inner(properties);
            };

            /**
             * Encodes the specified Inner message. Does not implicitly {@link mylaya.Test.Inner.verify|verify} messages.
             * @function encode
             * @memberof mylaya.Test.Inner
             * @static
             * @param {mylaya.Test.IInner} message Inner message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Inner.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.int32 != null && message.hasOwnProperty("int32"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.int32);
                if (message.innerInner != null && message.hasOwnProperty("innerInner"))
                    $root.mylaya.Test.Inner.InnerInner.encode(message.innerInner, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.outer != null && message.hasOwnProperty("outer"))
                    $root.mylaya.Outer.encode(message.outer, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Inner message, length delimited. Does not implicitly {@link mylaya.Test.Inner.verify|verify} messages.
             * @function encodeDelimited
             * @memberof mylaya.Test.Inner
             * @static
             * @param {mylaya.Test.IInner} message Inner message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Inner.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Inner message from the specified reader or buffer.
             * @function decode
             * @memberof mylaya.Test.Inner
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mylaya.Test.Inner} Inner
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Inner.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mylaya.Test.Inner();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.int32 = reader.int32();
                        break;
                    case 2:
                        message.innerInner = $root.mylaya.Test.Inner.InnerInner.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.outer = $root.mylaya.Outer.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Inner message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof mylaya.Test.Inner
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {mylaya.Test.Inner} Inner
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Inner.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Inner message.
             * @function verify
             * @memberof mylaya.Test.Inner
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Inner.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.int32 != null && message.hasOwnProperty("int32"))
                    if (!$util.isInteger(message.int32))
                        return "int32: integer expected";
                if (message.innerInner != null && message.hasOwnProperty("innerInner")) {
                    var error = $root.mylaya.Test.Inner.InnerInner.verify(message.innerInner);
                    if (error)
                        return "innerInner." + error;
                }
                if (message.outer != null && message.hasOwnProperty("outer")) {
                    var error = $root.mylaya.Outer.verify(message.outer);
                    if (error)
                        return "outer." + error;
                }
                return null;
            };

            /**
             * Creates an Inner message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mylaya.Test.Inner
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mylaya.Test.Inner} Inner
             */
            Inner.fromObject = function fromObject(object) {
                if (object instanceof $root.mylaya.Test.Inner)
                    return object;
                var message = new $root.mylaya.Test.Inner();
                if (object.int32 != null)
                    message.int32 = object.int32 | 0;
                if (object.innerInner != null) {
                    if (typeof object.innerInner !== "object")
                        throw TypeError(".mylaya.Test.Inner.innerInner: object expected");
                    message.innerInner = $root.mylaya.Test.Inner.InnerInner.fromObject(object.innerInner);
                }
                if (object.outer != null) {
                    if (typeof object.outer !== "object")
                        throw TypeError(".mylaya.Test.Inner.outer: object expected");
                    message.outer = $root.mylaya.Outer.fromObject(object.outer);
                }
                return message;
            };

            /**
             * Creates a plain object from an Inner message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mylaya.Test.Inner
             * @static
             * @param {mylaya.Test.Inner} message Inner
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Inner.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.int32 = 0;
                    object.innerInner = null;
                    object.outer = null;
                }
                if (message.int32 != null && message.hasOwnProperty("int32"))
                    object.int32 = message.int32;
                if (message.innerInner != null && message.hasOwnProperty("innerInner"))
                    object.innerInner = $root.mylaya.Test.Inner.InnerInner.toObject(message.innerInner, options);
                if (message.outer != null && message.hasOwnProperty("outer"))
                    object.outer = $root.mylaya.Outer.toObject(message.outer, options);
                return object;
            };

            /**
             * Converts this Inner to JSON.
             * @function toJSON
             * @memberof mylaya.Test.Inner
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Inner.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            Inner.InnerInner = (function() {

                /**
                 * Properties of an InnerInner.
                 * @memberof mylaya.Test.Inner
                 * @interface IInnerInner
                 * @property {number|Long|null} [long] InnerInner long
                 * @property {mylaya.Test.Enum|null} ["enum"] InnerInner enum
                 * @property {number|null} [sint32] InnerInner sint32
                 */

                /**
                 * Constructs a new InnerInner.
                 * @memberof mylaya.Test.Inner
                 * @classdesc Represents an InnerInner.
                 * @implements IInnerInner
                 * @constructor
                 * @param {mylaya.Test.Inner.IInnerInner=} [properties] Properties to set
                 */
                function InnerInner(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * InnerInner long.
                 * @member {number|Long} long
                 * @memberof mylaya.Test.Inner.InnerInner
                 * @instance
                 */
                InnerInner.prototype.long = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * InnerInner enum.
                 * @member {mylaya.Test.Enum} enum
                 * @memberof mylaya.Test.Inner.InnerInner
                 * @instance
                 */
                InnerInner.prototype["enum"] = 0;

                /**
                 * InnerInner sint32.
                 * @member {number} sint32
                 * @memberof mylaya.Test.Inner.InnerInner
                 * @instance
                 */
                InnerInner.prototype.sint32 = 0;

                /**
                 * Creates a new InnerInner instance using the specified properties.
                 * @function create
                 * @memberof mylaya.Test.Inner.InnerInner
                 * @static
                 * @param {mylaya.Test.Inner.IInnerInner=} [properties] Properties to set
                 * @returns {mylaya.Test.Inner.InnerInner} InnerInner instance
                 */
                InnerInner.create = function create(properties) {
                    return new InnerInner(properties);
                };

                /**
                 * Encodes the specified InnerInner message. Does not implicitly {@link mylaya.Test.Inner.InnerInner.verify|verify} messages.
                 * @function encode
                 * @memberof mylaya.Test.Inner.InnerInner
                 * @static
                 * @param {mylaya.Test.Inner.IInnerInner} message InnerInner message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                InnerInner.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.long != null && message.hasOwnProperty("long"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.long);
                    if (message["enum"] != null && message.hasOwnProperty("enum"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message["enum"]);
                    if (message.sint32 != null && message.hasOwnProperty("sint32"))
                        writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.sint32);
                    return writer;
                };

                /**
                 * Encodes the specified InnerInner message, length delimited. Does not implicitly {@link mylaya.Test.Inner.InnerInner.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof mylaya.Test.Inner.InnerInner
                 * @static
                 * @param {mylaya.Test.Inner.IInnerInner} message InnerInner message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                InnerInner.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an InnerInner message from the specified reader or buffer.
                 * @function decode
                 * @memberof mylaya.Test.Inner.InnerInner
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {mylaya.Test.Inner.InnerInner} InnerInner
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                InnerInner.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mylaya.Test.Inner.InnerInner();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.long = reader.int64();
                            break;
                        case 2:
                            message["enum"] = reader.int32();
                            break;
                        case 3:
                            message.sint32 = reader.sint32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an InnerInner message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof mylaya.Test.Inner.InnerInner
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {mylaya.Test.Inner.InnerInner} InnerInner
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                InnerInner.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an InnerInner message.
                 * @function verify
                 * @memberof mylaya.Test.Inner.InnerInner
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                InnerInner.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.long != null && message.hasOwnProperty("long"))
                        if (!$util.isInteger(message.long) && !(message.long && $util.isInteger(message.long.low) && $util.isInteger(message.long.high)))
                            return "long: integer|Long expected";
                    if (message["enum"] != null && message.hasOwnProperty("enum"))
                        switch (message["enum"]) {
                        default:
                            return "enum: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                            break;
                        }
                    if (message.sint32 != null && message.hasOwnProperty("sint32"))
                        if (!$util.isInteger(message.sint32))
                            return "sint32: integer expected";
                    return null;
                };

                /**
                 * Creates an InnerInner message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof mylaya.Test.Inner.InnerInner
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {mylaya.Test.Inner.InnerInner} InnerInner
                 */
                InnerInner.fromObject = function fromObject(object) {
                    if (object instanceof $root.mylaya.Test.Inner.InnerInner)
                        return object;
                    var message = new $root.mylaya.Test.Inner.InnerInner();
                    if (object.long != null)
                        if ($util.Long)
                            (message.long = $util.Long.fromValue(object.long)).unsigned = false;
                        else if (typeof object.long === "string")
                            message.long = parseInt(object.long, 10);
                        else if (typeof object.long === "number")
                            message.long = object.long;
                        else if (typeof object.long === "object")
                            message.long = new $util.LongBits(object.long.low >>> 0, object.long.high >>> 0).toNumber();
                    switch (object["enum"]) {
                    case "ONE":
                    case 0:
                        message["enum"] = 0;
                        break;
                    case "TWO":
                    case 1:
                        message["enum"] = 1;
                        break;
                    case "THREE":
                    case 2:
                        message["enum"] = 2;
                        break;
                    case "FOUR":
                    case 3:
                        message["enum"] = 3;
                        break;
                    case "FIVE":
                    case 4:
                        message["enum"] = 4;
                        break;
                    }
                    if (object.sint32 != null)
                        message.sint32 = object.sint32 | 0;
                    return message;
                };

                /**
                 * Creates a plain object from an InnerInner message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof mylaya.Test.Inner.InnerInner
                 * @static
                 * @param {mylaya.Test.Inner.InnerInner} message InnerInner
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                InnerInner.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.long = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.long = options.longs === String ? "0" : 0;
                        object["enum"] = options.enums === String ? "ONE" : 0;
                        object.sint32 = 0;
                    }
                    if (message.long != null && message.hasOwnProperty("long"))
                        if (typeof message.long === "number")
                            object.long = options.longs === String ? String(message.long) : message.long;
                        else
                            object.long = options.longs === String ? $util.Long.prototype.toString.call(message.long) : options.longs === Number ? new $util.LongBits(message.long.low >>> 0, message.long.high >>> 0).toNumber() : message.long;
                    if (message["enum"] != null && message.hasOwnProperty("enum"))
                        object["enum"] = options.enums === String ? $root.mylaya.Test.Enum[message["enum"]] : message["enum"];
                    if (message.sint32 != null && message.hasOwnProperty("sint32"))
                        object.sint32 = message.sint32;
                    return object;
                };

                /**
                 * Converts this InnerInner to JSON.
                 * @function toJSON
                 * @memberof mylaya.Test.Inner.InnerInner
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                InnerInner.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return InnerInner;
            })();

            return Inner;
        })();

        /**
         * Enum enum.
         * @name mylaya.Test.Enum
         * @enum {string}
         * @property {number} ONE=0 ONE value
         * @property {number} TWO=1 TWO value
         * @property {number} THREE=2 THREE value
         * @property {number} FOUR=3 FOUR value
         * @property {number} FIVE=4 FIVE value
         */
        Test.Enum = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ONE"] = 0;
            values[valuesById[1] = "TWO"] = 1;
            values[valuesById[2] = "THREE"] = 2;
            values[valuesById[3] = "FOUR"] = 3;
            values[valuesById[4] = "FIVE"] = 4;
            return values;
        })();

        return Test;
    })();

    mylaya.Outer = (function() {

        /**
         * Properties of an Outer.
         * @memberof mylaya
         * @interface IOuter
         * @property {Array.<boolean>|null} [bool] Outer bool
         * @property {number|null} [double] Outer double
         */

        /**
         * Constructs a new Outer.
         * @memberof mylaya
         * @classdesc Represents an Outer.
         * @implements IOuter
         * @constructor
         * @param {mylaya.IOuter=} [properties] Properties to set
         */
        function Outer(properties) {
            this.bool = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Outer bool.
         * @member {Array.<boolean>} bool
         * @memberof mylaya.Outer
         * @instance
         */
        Outer.prototype.bool = $util.emptyArray;

        /**
         * Outer double.
         * @member {number} double
         * @memberof mylaya.Outer
         * @instance
         */
        Outer.prototype.double = 0;

        /**
         * Creates a new Outer instance using the specified properties.
         * @function create
         * @memberof mylaya.Outer
         * @static
         * @param {mylaya.IOuter=} [properties] Properties to set
         * @returns {mylaya.Outer} Outer instance
         */
        Outer.create = function create(properties) {
            return new Outer(properties);
        };

        /**
         * Encodes the specified Outer message. Does not implicitly {@link mylaya.Outer.verify|verify} messages.
         * @function encode
         * @memberof mylaya.Outer
         * @static
         * @param {mylaya.IOuter} message Outer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Outer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bool != null && message.bool.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.bool.length; ++i)
                    writer.bool(message.bool[i]);
                writer.ldelim();
            }
            if (message.double != null && message.hasOwnProperty("double"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.double);
            return writer;
        };

        /**
         * Encodes the specified Outer message, length delimited. Does not implicitly {@link mylaya.Outer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mylaya.Outer
         * @static
         * @param {mylaya.IOuter} message Outer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Outer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Outer message from the specified reader or buffer.
         * @function decode
         * @memberof mylaya.Outer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mylaya.Outer} Outer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Outer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mylaya.Outer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.bool && message.bool.length))
                        message.bool = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.bool.push(reader.bool());
                    } else
                        message.bool.push(reader.bool());
                    break;
                case 2:
                    message.double = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Outer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mylaya.Outer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mylaya.Outer} Outer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Outer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Outer message.
         * @function verify
         * @memberof mylaya.Outer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Outer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.bool != null && message.hasOwnProperty("bool")) {
                if (!Array.isArray(message.bool))
                    return "bool: array expected";
                for (var i = 0; i < message.bool.length; ++i)
                    if (typeof message.bool[i] !== "boolean")
                        return "bool: boolean[] expected";
            }
            if (message.double != null && message.hasOwnProperty("double"))
                if (typeof message.double !== "number")
                    return "double: number expected";
            return null;
        };

        /**
         * Creates an Outer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mylaya.Outer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mylaya.Outer} Outer
         */
        Outer.fromObject = function fromObject(object) {
            if (object instanceof $root.mylaya.Outer)
                return object;
            var message = new $root.mylaya.Outer();
            if (object.bool) {
                if (!Array.isArray(object.bool))
                    throw TypeError(".mylaya.Outer.bool: array expected");
                message.bool = [];
                for (var i = 0; i < object.bool.length; ++i)
                    message.bool[i] = Boolean(object.bool[i]);
            }
            if (object.double != null)
                message.double = Number(object.double);
            return message;
        };

        /**
         * Creates a plain object from an Outer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mylaya.Outer
         * @static
         * @param {mylaya.Outer} message Outer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Outer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.bool = [];
            if (options.defaults)
                object.double = 0;
            if (message.bool && message.bool.length) {
                object.bool = [];
                for (var j = 0; j < message.bool.length; ++j)
                    object.bool[j] = message.bool[j];
            }
            if (message.double != null && message.hasOwnProperty("double"))
                object.double = options.json && !isFinite(message.double) ? String(message.double) : message.double;
            return object;
        };

        /**
         * Converts this Outer to JSON.
         * @function toJSON
         * @memberof mylaya.Outer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Outer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Outer;
    })();

    return mylaya;
})();