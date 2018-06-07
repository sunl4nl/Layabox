type Long = protobuf.Long;

/** Namespace game. */
declare namespace game {

    /** Namespace war. */
    namespace war {

        /** Properties of a HeroInfo. */
        interface IHeroInfo {

            /** HeroInfo heroId */
            heroId: number;

            /** HeroInfo modelId */
            modelId: number;

            /** HeroInfo fashionId */
            fashionId: number;

            /** HeroInfo level */
            level: number;

            /** HeroInfo equipmentList */
            equipmentList?: (number[]|null);

            /** HeroInfo skillList */
            skillList?: (number[]|null);

            /** HeroInfo weaponId */
            weaponId?: (number[]|null);

            /** HeroInfo star */
            star: number;

            /** HeroInfo stairs */
            stairs: number;

            /** HeroInfo exp */
            exp: number;
        }

        /** Represents a HeroInfo. */
        class HeroInfo implements IHeroInfo {

            /**
             * Constructs a new HeroInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.war.IHeroInfo);

            /** HeroInfo heroId. */
            public heroId: number;

            /** HeroInfo modelId. */
            public modelId: number;

            /** HeroInfo fashionId. */
            public fashionId: number;

            /** HeroInfo level. */
            public level: number;

            /** HeroInfo equipmentList. */
            public equipmentList: number[];

            /** HeroInfo skillList. */
            public skillList: number[];

            /** HeroInfo weaponId. */
            public weaponId: number[];

            /** HeroInfo star. */
            public star: number;

            /** HeroInfo stairs. */
            public stairs: number;

            /** HeroInfo exp. */
            public exp: number;

            /**
             * Creates a new HeroInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HeroInfo instance
             */
            public static create(properties?: game.war.IHeroInfo): game.war.HeroInfo;

            /**
             * Encodes the specified HeroInfo message. Does not implicitly {@link game.war.HeroInfo.verify|verify} messages.
             * @param message HeroInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.war.IHeroInfo, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified HeroInfo message, length delimited. Does not implicitly {@link game.war.HeroInfo.verify|verify} messages.
             * @param message HeroInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: game.war.IHeroInfo, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a HeroInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HeroInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.war.HeroInfo;

            /**
             * Decodes a HeroInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HeroInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.war.HeroInfo;

            /**
             * Verifies a HeroInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HeroInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HeroInfo
             */
            public static fromObject(object: { [k: string]: any }): game.war.HeroInfo;

            /**
             * Creates a plain object from a HeroInfo message. Also converts values to other types if specified.
             * @param message HeroInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: game.war.HeroInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HeroInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CMSG_SelectInitializedHero_Req. */
        interface ICMSG_SelectInitializedHero_Req {

            /** CMSG_SelectInitializedHero_Req id */
            id: number;
        }

        /** Represents a CMSG_SelectInitializedHero_Req. */
        class CMSG_SelectInitializedHero_Req implements ICMSG_SelectInitializedHero_Req {

            /**
             * Constructs a new CMSG_SelectInitializedHero_Req.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.war.ICMSG_SelectInitializedHero_Req);

            /** CMSG_SelectInitializedHero_Req id. */
            public id: number;

            /**
             * Creates a new CMSG_SelectInitializedHero_Req instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CMSG_SelectInitializedHero_Req instance
             */
            public static create(properties?: game.war.ICMSG_SelectInitializedHero_Req): game.war.CMSG_SelectInitializedHero_Req;

            /**
             * Encodes the specified CMSG_SelectInitializedHero_Req message. Does not implicitly {@link game.war.CMSG_SelectInitializedHero_Req.verify|verify} messages.
             * @param message CMSG_SelectInitializedHero_Req message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.war.ICMSG_SelectInitializedHero_Req, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified CMSG_SelectInitializedHero_Req message, length delimited. Does not implicitly {@link game.war.CMSG_SelectInitializedHero_Req.verify|verify} messages.
             * @param message CMSG_SelectInitializedHero_Req message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: game.war.ICMSG_SelectInitializedHero_Req, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CMSG_SelectInitializedHero_Req message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CMSG_SelectInitializedHero_Req
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.war.CMSG_SelectInitializedHero_Req;

            /**
             * Decodes a CMSG_SelectInitializedHero_Req message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CMSG_SelectInitializedHero_Req
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.war.CMSG_SelectInitializedHero_Req;

            /**
             * Verifies a CMSG_SelectInitializedHero_Req message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CMSG_SelectInitializedHero_Req message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CMSG_SelectInitializedHero_Req
             */
            public static fromObject(object: { [k: string]: any }): game.war.CMSG_SelectInitializedHero_Req;

            /**
             * Creates a plain object from a CMSG_SelectInitializedHero_Req message. Also converts values to other types if specified.
             * @param message CMSG_SelectInitializedHero_Req
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: game.war.CMSG_SelectInitializedHero_Req, options?: protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CMSG_SelectInitializedHero_Req to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SMSG_SelectInitializedHero_Resp. */
        interface ISMSG_SelectInitializedHero_Resp {

            /** SMSG_SelectInitializedHero_Resp heroId */
            heroId: number;
        }

        /** Represents a SMSG_SelectInitializedHero_Resp. */
        class SMSG_SelectInitializedHero_Resp implements ISMSG_SelectInitializedHero_Resp {

            /**
             * Constructs a new SMSG_SelectInitializedHero_Resp.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.war.ISMSG_SelectInitializedHero_Resp);

            /** SMSG_SelectInitializedHero_Resp heroId. */
            public heroId: number;

            /**
             * Creates a new SMSG_SelectInitializedHero_Resp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SMSG_SelectInitializedHero_Resp instance
             */
            public static create(properties?: game.war.ISMSG_SelectInitializedHero_Resp): game.war.SMSG_SelectInitializedHero_Resp;

            /**
             * Encodes the specified SMSG_SelectInitializedHero_Resp message. Does not implicitly {@link game.war.SMSG_SelectInitializedHero_Resp.verify|verify} messages.
             * @param message SMSG_SelectInitializedHero_Resp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.war.ISMSG_SelectInitializedHero_Resp, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified SMSG_SelectInitializedHero_Resp message, length delimited. Does not implicitly {@link game.war.SMSG_SelectInitializedHero_Resp.verify|verify} messages.
             * @param message SMSG_SelectInitializedHero_Resp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: game.war.ISMSG_SelectInitializedHero_Resp, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a SMSG_SelectInitializedHero_Resp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SMSG_SelectInitializedHero_Resp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.war.SMSG_SelectInitializedHero_Resp;

            /**
             * Decodes a SMSG_SelectInitializedHero_Resp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SMSG_SelectInitializedHero_Resp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.war.SMSG_SelectInitializedHero_Resp;

            /**
             * Verifies a SMSG_SelectInitializedHero_Resp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SMSG_SelectInitializedHero_Resp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SMSG_SelectInitializedHero_Resp
             */
            public static fromObject(object: { [k: string]: any }): game.war.SMSG_SelectInitializedHero_Resp;

            /**
             * Creates a plain object from a SMSG_SelectInitializedHero_Resp message. Also converts values to other types if specified.
             * @param message SMSG_SelectInitializedHero_Resp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: game.war.SMSG_SelectInitializedHero_Resp, options?: protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SMSG_SelectInitializedHero_Resp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CMSG_UnlockHero_Req. */
        interface ICMSG_UnlockHero_Req {

            /** CMSG_UnlockHero_Req heroId */
            heroId: number;
        }

        /** Represents a CMSG_UnlockHero_Req. */
        class CMSG_UnlockHero_Req implements ICMSG_UnlockHero_Req {

            /**
             * Constructs a new CMSG_UnlockHero_Req.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.war.ICMSG_UnlockHero_Req);

            /** CMSG_UnlockHero_Req heroId. */
            public heroId: number;

            /**
             * Creates a new CMSG_UnlockHero_Req instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CMSG_UnlockHero_Req instance
             */
            public static create(properties?: game.war.ICMSG_UnlockHero_Req): game.war.CMSG_UnlockHero_Req;

            /**
             * Encodes the specified CMSG_UnlockHero_Req message. Does not implicitly {@link game.war.CMSG_UnlockHero_Req.verify|verify} messages.
             * @param message CMSG_UnlockHero_Req message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.war.ICMSG_UnlockHero_Req, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified CMSG_UnlockHero_Req message, length delimited. Does not implicitly {@link game.war.CMSG_UnlockHero_Req.verify|verify} messages.
             * @param message CMSG_UnlockHero_Req message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: game.war.ICMSG_UnlockHero_Req, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CMSG_UnlockHero_Req message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CMSG_UnlockHero_Req
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.war.CMSG_UnlockHero_Req;

            /**
             * Decodes a CMSG_UnlockHero_Req message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CMSG_UnlockHero_Req
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.war.CMSG_UnlockHero_Req;

            /**
             * Verifies a CMSG_UnlockHero_Req message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CMSG_UnlockHero_Req message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CMSG_UnlockHero_Req
             */
            public static fromObject(object: { [k: string]: any }): game.war.CMSG_UnlockHero_Req;

            /**
             * Creates a plain object from a CMSG_UnlockHero_Req message. Also converts values to other types if specified.
             * @param message CMSG_UnlockHero_Req
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: game.war.CMSG_UnlockHero_Req, options?: protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CMSG_UnlockHero_Req to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SMSG_UnlockHero_Resp. */
        interface ISMSG_UnlockHero_Resp {

            /** SMSG_UnlockHero_Resp heroId */
            heroId: number;
        }

        /** Represents a SMSG_UnlockHero_Resp. */
        class SMSG_UnlockHero_Resp implements ISMSG_UnlockHero_Resp {

            /**
             * Constructs a new SMSG_UnlockHero_Resp.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.war.ISMSG_UnlockHero_Resp);

            /** SMSG_UnlockHero_Resp heroId. */
            public heroId: number;

            /**
             * Creates a new SMSG_UnlockHero_Resp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SMSG_UnlockHero_Resp instance
             */
            public static create(properties?: game.war.ISMSG_UnlockHero_Resp): game.war.SMSG_UnlockHero_Resp;

            /**
             * Encodes the specified SMSG_UnlockHero_Resp message. Does not implicitly {@link game.war.SMSG_UnlockHero_Resp.verify|verify} messages.
             * @param message SMSG_UnlockHero_Resp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.war.ISMSG_UnlockHero_Resp, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified SMSG_UnlockHero_Resp message, length delimited. Does not implicitly {@link game.war.SMSG_UnlockHero_Resp.verify|verify} messages.
             * @param message SMSG_UnlockHero_Resp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: game.war.ISMSG_UnlockHero_Resp, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a SMSG_UnlockHero_Resp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SMSG_UnlockHero_Resp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.war.SMSG_UnlockHero_Resp;

            /**
             * Decodes a SMSG_UnlockHero_Resp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SMSG_UnlockHero_Resp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.war.SMSG_UnlockHero_Resp;

            /**
             * Verifies a SMSG_UnlockHero_Resp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SMSG_UnlockHero_Resp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SMSG_UnlockHero_Resp
             */
            public static fromObject(object: { [k: string]: any }): game.war.SMSG_UnlockHero_Resp;

            /**
             * Creates a plain object from a SMSG_UnlockHero_Resp message. Also converts values to other types if specified.
             * @param message SMSG_UnlockHero_Resp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: game.war.SMSG_UnlockHero_Resp, options?: protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SMSG_UnlockHero_Resp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SMSG_AddHero_Ntf. */
        interface ISMSG_AddHero_Ntf {

            /** SMSG_AddHero_Ntf info */
            info: game.war.IHeroInfo;
        }

        /** Represents a SMSG_AddHero_Ntf. */
        class SMSG_AddHero_Ntf implements ISMSG_AddHero_Ntf {

            /**
             * Constructs a new SMSG_AddHero_Ntf.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.war.ISMSG_AddHero_Ntf);

            /** SMSG_AddHero_Ntf info. */
            public info: game.war.IHeroInfo;

            /**
             * Creates a new SMSG_AddHero_Ntf instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SMSG_AddHero_Ntf instance
             */
            public static create(properties?: game.war.ISMSG_AddHero_Ntf): game.war.SMSG_AddHero_Ntf;

            /**
             * Encodes the specified SMSG_AddHero_Ntf message. Does not implicitly {@link game.war.SMSG_AddHero_Ntf.verify|verify} messages.
             * @param message SMSG_AddHero_Ntf message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.war.ISMSG_AddHero_Ntf, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified SMSG_AddHero_Ntf message, length delimited. Does not implicitly {@link game.war.SMSG_AddHero_Ntf.verify|verify} messages.
             * @param message SMSG_AddHero_Ntf message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: game.war.ISMSG_AddHero_Ntf, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a SMSG_AddHero_Ntf message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SMSG_AddHero_Ntf
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.war.SMSG_AddHero_Ntf;

            /**
             * Decodes a SMSG_AddHero_Ntf message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SMSG_AddHero_Ntf
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.war.SMSG_AddHero_Ntf;

            /**
             * Verifies a SMSG_AddHero_Ntf message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SMSG_AddHero_Ntf message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SMSG_AddHero_Ntf
             */
            public static fromObject(object: { [k: string]: any }): game.war.SMSG_AddHero_Ntf;

            /**
             * Creates a plain object from a SMSG_AddHero_Ntf message. Also converts values to other types if specified.
             * @param message SMSG_AddHero_Ntf
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: game.war.SMSG_AddHero_Ntf, options?: protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SMSG_AddHero_Ntf to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CMSG_HeroStarLevelup_Req. */
        interface ICMSG_HeroStarLevelup_Req {

            /** CMSG_HeroStarLevelup_Req heroId */
            heroId: number;
        }

        /** Represents a CMSG_HeroStarLevelup_Req. */
        class CMSG_HeroStarLevelup_Req implements ICMSG_HeroStarLevelup_Req {

            /**
             * Constructs a new CMSG_HeroStarLevelup_Req.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.war.ICMSG_HeroStarLevelup_Req);

            /** CMSG_HeroStarLevelup_Req heroId. */
            public heroId: number;

            /**
             * Creates a new CMSG_HeroStarLevelup_Req instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CMSG_HeroStarLevelup_Req instance
             */
            public static create(properties?: game.war.ICMSG_HeroStarLevelup_Req): game.war.CMSG_HeroStarLevelup_Req;

            /**
             * Encodes the specified CMSG_HeroStarLevelup_Req message. Does not implicitly {@link game.war.CMSG_HeroStarLevelup_Req.verify|verify} messages.
             * @param message CMSG_HeroStarLevelup_Req message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.war.ICMSG_HeroStarLevelup_Req, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified CMSG_HeroStarLevelup_Req message, length delimited. Does not implicitly {@link game.war.CMSG_HeroStarLevelup_Req.verify|verify} messages.
             * @param message CMSG_HeroStarLevelup_Req message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: game.war.ICMSG_HeroStarLevelup_Req, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CMSG_HeroStarLevelup_Req message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CMSG_HeroStarLevelup_Req
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.war.CMSG_HeroStarLevelup_Req;

            /**
             * Decodes a CMSG_HeroStarLevelup_Req message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CMSG_HeroStarLevelup_Req
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.war.CMSG_HeroStarLevelup_Req;

            /**
             * Verifies a CMSG_HeroStarLevelup_Req message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CMSG_HeroStarLevelup_Req message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CMSG_HeroStarLevelup_Req
             */
            public static fromObject(object: { [k: string]: any }): game.war.CMSG_HeroStarLevelup_Req;

            /**
             * Creates a plain object from a CMSG_HeroStarLevelup_Req message. Also converts values to other types if specified.
             * @param message CMSG_HeroStarLevelup_Req
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: game.war.CMSG_HeroStarLevelup_Req, options?: protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CMSG_HeroStarLevelup_Req to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SMSG_HeroStarLevelup_Resp. */
        interface ISMSG_HeroStarLevelup_Resp {

            /** SMSG_HeroStarLevelup_Resp heroId */
            heroId: number;

            /** SMSG_HeroStarLevelup_Resp heroStar */
            heroStar: number;
        }

        /** Represents a SMSG_HeroStarLevelup_Resp. */
        class SMSG_HeroStarLevelup_Resp implements ISMSG_HeroStarLevelup_Resp {

            /**
             * Constructs a new SMSG_HeroStarLevelup_Resp.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.war.ISMSG_HeroStarLevelup_Resp);

            /** SMSG_HeroStarLevelup_Resp heroId. */
            public heroId: number;

            /** SMSG_HeroStarLevelup_Resp heroStar. */
            public heroStar: number;

            /**
             * Creates a new SMSG_HeroStarLevelup_Resp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SMSG_HeroStarLevelup_Resp instance
             */
            public static create(properties?: game.war.ISMSG_HeroStarLevelup_Resp): game.war.SMSG_HeroStarLevelup_Resp;

            /**
             * Encodes the specified SMSG_HeroStarLevelup_Resp message. Does not implicitly {@link game.war.SMSG_HeroStarLevelup_Resp.verify|verify} messages.
             * @param message SMSG_HeroStarLevelup_Resp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.war.ISMSG_HeroStarLevelup_Resp, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified SMSG_HeroStarLevelup_Resp message, length delimited. Does not implicitly {@link game.war.SMSG_HeroStarLevelup_Resp.verify|verify} messages.
             * @param message SMSG_HeroStarLevelup_Resp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: game.war.ISMSG_HeroStarLevelup_Resp, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a SMSG_HeroStarLevelup_Resp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SMSG_HeroStarLevelup_Resp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.war.SMSG_HeroStarLevelup_Resp;

            /**
             * Decodes a SMSG_HeroStarLevelup_Resp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SMSG_HeroStarLevelup_Resp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.war.SMSG_HeroStarLevelup_Resp;

            /**
             * Verifies a SMSG_HeroStarLevelup_Resp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SMSG_HeroStarLevelup_Resp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SMSG_HeroStarLevelup_Resp
             */
            public static fromObject(object: { [k: string]: any }): game.war.SMSG_HeroStarLevelup_Resp;

            /**
             * Creates a plain object from a SMSG_HeroStarLevelup_Resp message. Also converts values to other types if specified.
             * @param message SMSG_HeroStarLevelup_Resp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: game.war.SMSG_HeroStarLevelup_Resp, options?: protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SMSG_HeroStarLevelup_Resp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CMSG_CompoundHeroUpgradeEquip_Req. */
        interface ICMSG_CompoundHeroUpgradeEquip_Req {

            /** CMSG_CompoundHeroUpgradeEquip_Req equipId */
            equipId: number;

            /** CMSG_CompoundHeroUpgradeEquip_Req heroId */
            heroId: number;
        }

        /** Represents a CMSG_CompoundHeroUpgradeEquip_Req. */
        class CMSG_CompoundHeroUpgradeEquip_Req implements ICMSG_CompoundHeroUpgradeEquip_Req {

            /**
             * Constructs a new CMSG_CompoundHeroUpgradeEquip_Req.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.war.ICMSG_CompoundHeroUpgradeEquip_Req);

            /** CMSG_CompoundHeroUpgradeEquip_Req equipId. */
            public equipId: number;

            /** CMSG_CompoundHeroUpgradeEquip_Req heroId. */
            public heroId: number;

            /**
             * Creates a new CMSG_CompoundHeroUpgradeEquip_Req instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CMSG_CompoundHeroUpgradeEquip_Req instance
             */
            public static create(properties?: game.war.ICMSG_CompoundHeroUpgradeEquip_Req): game.war.CMSG_CompoundHeroUpgradeEquip_Req;

            /**
             * Encodes the specified CMSG_CompoundHeroUpgradeEquip_Req message. Does not implicitly {@link game.war.CMSG_CompoundHeroUpgradeEquip_Req.verify|verify} messages.
             * @param message CMSG_CompoundHeroUpgradeEquip_Req message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.war.ICMSG_CompoundHeroUpgradeEquip_Req, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified CMSG_CompoundHeroUpgradeEquip_Req message, length delimited. Does not implicitly {@link game.war.CMSG_CompoundHeroUpgradeEquip_Req.verify|verify} messages.
             * @param message CMSG_CompoundHeroUpgradeEquip_Req message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: game.war.ICMSG_CompoundHeroUpgradeEquip_Req, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CMSG_CompoundHeroUpgradeEquip_Req message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CMSG_CompoundHeroUpgradeEquip_Req
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.war.CMSG_CompoundHeroUpgradeEquip_Req;

            /**
             * Decodes a CMSG_CompoundHeroUpgradeEquip_Req message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CMSG_CompoundHeroUpgradeEquip_Req
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.war.CMSG_CompoundHeroUpgradeEquip_Req;

            /**
             * Verifies a CMSG_CompoundHeroUpgradeEquip_Req message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CMSG_CompoundHeroUpgradeEquip_Req message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CMSG_CompoundHeroUpgradeEquip_Req
             */
            public static fromObject(object: { [k: string]: any }): game.war.CMSG_CompoundHeroUpgradeEquip_Req;

            /**
             * Creates a plain object from a CMSG_CompoundHeroUpgradeEquip_Req message. Also converts values to other types if specified.
             * @param message CMSG_CompoundHeroUpgradeEquip_Req
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: game.war.CMSG_CompoundHeroUpgradeEquip_Req, options?: protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CMSG_CompoundHeroUpgradeEquip_Req to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SMSG_CompoundHeroUpgradeEquip_Resp. */
        interface ISMSG_CompoundHeroUpgradeEquip_Resp {

            /** SMSG_CompoundHeroUpgradeEquip_Resp result */
            result: number;

            /** SMSG_CompoundHeroUpgradeEquip_Resp heroId */
            heroId: number;

            /** SMSG_CompoundHeroUpgradeEquip_Resp equipList */
            equipList?: (number[]|null);
        }

        /** Represents a SMSG_CompoundHeroUpgradeEquip_Resp. */
        class SMSG_CompoundHeroUpgradeEquip_Resp implements ISMSG_CompoundHeroUpgradeEquip_Resp {

            /**
             * Constructs a new SMSG_CompoundHeroUpgradeEquip_Resp.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.war.ISMSG_CompoundHeroUpgradeEquip_Resp);

            /** SMSG_CompoundHeroUpgradeEquip_Resp result. */
            public result: number;

            /** SMSG_CompoundHeroUpgradeEquip_Resp heroId. */
            public heroId: number;

            /** SMSG_CompoundHeroUpgradeEquip_Resp equipList. */
            public equipList: number[];

            /**
             * Creates a new SMSG_CompoundHeroUpgradeEquip_Resp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SMSG_CompoundHeroUpgradeEquip_Resp instance
             */
            public static create(properties?: game.war.ISMSG_CompoundHeroUpgradeEquip_Resp): game.war.SMSG_CompoundHeroUpgradeEquip_Resp;

            /**
             * Encodes the specified SMSG_CompoundHeroUpgradeEquip_Resp message. Does not implicitly {@link game.war.SMSG_CompoundHeroUpgradeEquip_Resp.verify|verify} messages.
             * @param message SMSG_CompoundHeroUpgradeEquip_Resp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.war.ISMSG_CompoundHeroUpgradeEquip_Resp, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified SMSG_CompoundHeroUpgradeEquip_Resp message, length delimited. Does not implicitly {@link game.war.SMSG_CompoundHeroUpgradeEquip_Resp.verify|verify} messages.
             * @param message SMSG_CompoundHeroUpgradeEquip_Resp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: game.war.ISMSG_CompoundHeroUpgradeEquip_Resp, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a SMSG_CompoundHeroUpgradeEquip_Resp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SMSG_CompoundHeroUpgradeEquip_Resp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.war.SMSG_CompoundHeroUpgradeEquip_Resp;

            /**
             * Decodes a SMSG_CompoundHeroUpgradeEquip_Resp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SMSG_CompoundHeroUpgradeEquip_Resp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.war.SMSG_CompoundHeroUpgradeEquip_Resp;

            /**
             * Verifies a SMSG_CompoundHeroUpgradeEquip_Resp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SMSG_CompoundHeroUpgradeEquip_Resp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SMSG_CompoundHeroUpgradeEquip_Resp
             */
            public static fromObject(object: { [k: string]: any }): game.war.SMSG_CompoundHeroUpgradeEquip_Resp;

            /**
             * Creates a plain object from a SMSG_CompoundHeroUpgradeEquip_Resp message. Also converts values to other types if specified.
             * @param message SMSG_CompoundHeroUpgradeEquip_Resp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: game.war.SMSG_CompoundHeroUpgradeEquip_Resp, options?: protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SMSG_CompoundHeroUpgradeEquip_Resp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CMSG_HeroUpgradeStairs_Req. */
        interface ICMSG_HeroUpgradeStairs_Req {

            /** CMSG_HeroUpgradeStairs_Req heroId */
            heroId: number;
        }

        /** Represents a CMSG_HeroUpgradeStairs_Req. */
        class CMSG_HeroUpgradeStairs_Req implements ICMSG_HeroUpgradeStairs_Req {

            /**
             * Constructs a new CMSG_HeroUpgradeStairs_Req.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.war.ICMSG_HeroUpgradeStairs_Req);

            /** CMSG_HeroUpgradeStairs_Req heroId. */
            public heroId: number;

            /**
             * Creates a new CMSG_HeroUpgradeStairs_Req instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CMSG_HeroUpgradeStairs_Req instance
             */
            public static create(properties?: game.war.ICMSG_HeroUpgradeStairs_Req): game.war.CMSG_HeroUpgradeStairs_Req;

            /**
             * Encodes the specified CMSG_HeroUpgradeStairs_Req message. Does not implicitly {@link game.war.CMSG_HeroUpgradeStairs_Req.verify|verify} messages.
             * @param message CMSG_HeroUpgradeStairs_Req message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.war.ICMSG_HeroUpgradeStairs_Req, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified CMSG_HeroUpgradeStairs_Req message, length delimited. Does not implicitly {@link game.war.CMSG_HeroUpgradeStairs_Req.verify|verify} messages.
             * @param message CMSG_HeroUpgradeStairs_Req message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: game.war.ICMSG_HeroUpgradeStairs_Req, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CMSG_HeroUpgradeStairs_Req message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CMSG_HeroUpgradeStairs_Req
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.war.CMSG_HeroUpgradeStairs_Req;

            /**
             * Decodes a CMSG_HeroUpgradeStairs_Req message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CMSG_HeroUpgradeStairs_Req
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.war.CMSG_HeroUpgradeStairs_Req;

            /**
             * Verifies a CMSG_HeroUpgradeStairs_Req message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CMSG_HeroUpgradeStairs_Req message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CMSG_HeroUpgradeStairs_Req
             */
            public static fromObject(object: { [k: string]: any }): game.war.CMSG_HeroUpgradeStairs_Req;

            /**
             * Creates a plain object from a CMSG_HeroUpgradeStairs_Req message. Also converts values to other types if specified.
             * @param message CMSG_HeroUpgradeStairs_Req
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: game.war.CMSG_HeroUpgradeStairs_Req, options?: protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CMSG_HeroUpgradeStairs_Req to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SMSG_HeroUpgradeStairs_Resp. */
        interface ISMSG_HeroUpgradeStairs_Resp {

            /** SMSG_HeroUpgradeStairs_Resp heroId */
            heroId: number;

            /** SMSG_HeroUpgradeStairs_Resp heroStairs */
            heroStairs: number;

            /** SMSG_HeroUpgradeStairs_Resp equipList */
            equipList?: (number[]|null);
        }

        /** Represents a SMSG_HeroUpgradeStairs_Resp. */
        class SMSG_HeroUpgradeStairs_Resp implements ISMSG_HeroUpgradeStairs_Resp {

            /**
             * Constructs a new SMSG_HeroUpgradeStairs_Resp.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.war.ISMSG_HeroUpgradeStairs_Resp);

            /** SMSG_HeroUpgradeStairs_Resp heroId. */
            public heroId: number;

            /** SMSG_HeroUpgradeStairs_Resp heroStairs. */
            public heroStairs: number;

            /** SMSG_HeroUpgradeStairs_Resp equipList. */
            public equipList: number[];

            /**
             * Creates a new SMSG_HeroUpgradeStairs_Resp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SMSG_HeroUpgradeStairs_Resp instance
             */
            public static create(properties?: game.war.ISMSG_HeroUpgradeStairs_Resp): game.war.SMSG_HeroUpgradeStairs_Resp;

            /**
             * Encodes the specified SMSG_HeroUpgradeStairs_Resp message. Does not implicitly {@link game.war.SMSG_HeroUpgradeStairs_Resp.verify|verify} messages.
             * @param message SMSG_HeroUpgradeStairs_Resp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.war.ISMSG_HeroUpgradeStairs_Resp, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified SMSG_HeroUpgradeStairs_Resp message, length delimited. Does not implicitly {@link game.war.SMSG_HeroUpgradeStairs_Resp.verify|verify} messages.
             * @param message SMSG_HeroUpgradeStairs_Resp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: game.war.ISMSG_HeroUpgradeStairs_Resp, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a SMSG_HeroUpgradeStairs_Resp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SMSG_HeroUpgradeStairs_Resp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.war.SMSG_HeroUpgradeStairs_Resp;

            /**
             * Decodes a SMSG_HeroUpgradeStairs_Resp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SMSG_HeroUpgradeStairs_Resp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.war.SMSG_HeroUpgradeStairs_Resp;

            /**
             * Verifies a SMSG_HeroUpgradeStairs_Resp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SMSG_HeroUpgradeStairs_Resp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SMSG_HeroUpgradeStairs_Resp
             */
            public static fromObject(object: { [k: string]: any }): game.war.SMSG_HeroUpgradeStairs_Resp;

            /**
             * Creates a plain object from a SMSG_HeroUpgradeStairs_Resp message. Also converts values to other types if specified.
             * @param message SMSG_HeroUpgradeStairs_Resp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: game.war.SMSG_HeroUpgradeStairs_Resp, options?: protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SMSG_HeroUpgradeStairs_Resp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CMSG_UnitLevelingUp_Req. */
        interface ICMSG_UnitLevelingUp_Req {

            /** CMSG_UnitLevelingUp_Req type */
            type: number;

            /** CMSG_UnitLevelingUp_Req id */
            id: number;

            /** CMSG_UnitLevelingUp_Req level */
            level: number;
        }

        /** Represents a CMSG_UnitLevelingUp_Req. */
        class CMSG_UnitLevelingUp_Req implements ICMSG_UnitLevelingUp_Req {

            /**
             * Constructs a new CMSG_UnitLevelingUp_Req.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.war.ICMSG_UnitLevelingUp_Req);

            /** CMSG_UnitLevelingUp_Req type. */
            public type: number;

            /** CMSG_UnitLevelingUp_Req id. */
            public id: number;

            /** CMSG_UnitLevelingUp_Req level. */
            public level: number;

            /**
             * Creates a new CMSG_UnitLevelingUp_Req instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CMSG_UnitLevelingUp_Req instance
             */
            public static create(properties?: game.war.ICMSG_UnitLevelingUp_Req): game.war.CMSG_UnitLevelingUp_Req;

            /**
             * Encodes the specified CMSG_UnitLevelingUp_Req message. Does not implicitly {@link game.war.CMSG_UnitLevelingUp_Req.verify|verify} messages.
             * @param message CMSG_UnitLevelingUp_Req message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.war.ICMSG_UnitLevelingUp_Req, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified CMSG_UnitLevelingUp_Req message, length delimited. Does not implicitly {@link game.war.CMSG_UnitLevelingUp_Req.verify|verify} messages.
             * @param message CMSG_UnitLevelingUp_Req message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: game.war.ICMSG_UnitLevelingUp_Req, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CMSG_UnitLevelingUp_Req message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CMSG_UnitLevelingUp_Req
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.war.CMSG_UnitLevelingUp_Req;

            /**
             * Decodes a CMSG_UnitLevelingUp_Req message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CMSG_UnitLevelingUp_Req
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.war.CMSG_UnitLevelingUp_Req;

            /**
             * Verifies a CMSG_UnitLevelingUp_Req message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CMSG_UnitLevelingUp_Req message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CMSG_UnitLevelingUp_Req
             */
            public static fromObject(object: { [k: string]: any }): game.war.CMSG_UnitLevelingUp_Req;

            /**
             * Creates a plain object from a CMSG_UnitLevelingUp_Req message. Also converts values to other types if specified.
             * @param message CMSG_UnitLevelingUp_Req
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: game.war.CMSG_UnitLevelingUp_Req, options?: protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CMSG_UnitLevelingUp_Req to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SMSG_UnitLevelingUp_Resp. */
        interface ISMSG_UnitLevelingUp_Resp {

            /** SMSG_UnitLevelingUp_Resp type */
            type: number;

            /** SMSG_UnitLevelingUp_Resp id */
            id: number;

            /** SMSG_UnitLevelingUp_Resp exp */
            exp?: (number|null);

            /** SMSG_UnitLevelingUp_Resp level */
            level?: (number|null);

            /** SMSG_UnitLevelingUp_Resp prisonLevel */
            prisonLevel?: (number|null);

            /** SMSG_UnitLevelingUp_Resp prisonExp */
            prisonExp?: (number|null);

            /** SMSG_UnitLevelingUp_Resp prisonTechPoints */
            prisonTechPoints?: (number|null);
        }

        /** Represents a SMSG_UnitLevelingUp_Resp. */
        class SMSG_UnitLevelingUp_Resp implements ISMSG_UnitLevelingUp_Resp {

            /**
             * Constructs a new SMSG_UnitLevelingUp_Resp.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.war.ISMSG_UnitLevelingUp_Resp);

            /** SMSG_UnitLevelingUp_Resp type. */
            public type: number;

            /** SMSG_UnitLevelingUp_Resp id. */
            public id: number;

            /** SMSG_UnitLevelingUp_Resp exp. */
            public exp: number;

            /** SMSG_UnitLevelingUp_Resp level. */
            public level: number;

            /** SMSG_UnitLevelingUp_Resp prisonLevel. */
            public prisonLevel: number;

            /** SMSG_UnitLevelingUp_Resp prisonExp. */
            public prisonExp: number;

            /** SMSG_UnitLevelingUp_Resp prisonTechPoints. */
            public prisonTechPoints: number;

            /**
             * Creates a new SMSG_UnitLevelingUp_Resp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SMSG_UnitLevelingUp_Resp instance
             */
            public static create(properties?: game.war.ISMSG_UnitLevelingUp_Resp): game.war.SMSG_UnitLevelingUp_Resp;

            /**
             * Encodes the specified SMSG_UnitLevelingUp_Resp message. Does not implicitly {@link game.war.SMSG_UnitLevelingUp_Resp.verify|verify} messages.
             * @param message SMSG_UnitLevelingUp_Resp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.war.ISMSG_UnitLevelingUp_Resp, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified SMSG_UnitLevelingUp_Resp message, length delimited. Does not implicitly {@link game.war.SMSG_UnitLevelingUp_Resp.verify|verify} messages.
             * @param message SMSG_UnitLevelingUp_Resp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: game.war.ISMSG_UnitLevelingUp_Resp, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a SMSG_UnitLevelingUp_Resp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SMSG_UnitLevelingUp_Resp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.war.SMSG_UnitLevelingUp_Resp;

            /**
             * Decodes a SMSG_UnitLevelingUp_Resp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SMSG_UnitLevelingUp_Resp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.war.SMSG_UnitLevelingUp_Resp;

            /**
             * Verifies a SMSG_UnitLevelingUp_Resp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SMSG_UnitLevelingUp_Resp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SMSG_UnitLevelingUp_Resp
             */
            public static fromObject(object: { [k: string]: any }): game.war.SMSG_UnitLevelingUp_Resp;

            /**
             * Creates a plain object from a SMSG_UnitLevelingUp_Resp message. Also converts values to other types if specified.
             * @param message SMSG_UnitLevelingUp_Resp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: game.war.SMSG_UnitLevelingUp_Resp, options?: protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SMSG_UnitLevelingUp_Resp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CMSG_HeroSetting_Req. */
        interface ICMSG_HeroSetting_Req {

            /** CMSG_HeroSetting_Req heroId */
            heroId: number;

            /** CMSG_HeroSetting_Req operationType */
            operationType: number;

            /** CMSG_HeroSetting_Req id */
            id: number;

            /** CMSG_HeroSetting_Req position */
            position: number;
        }

        /** Represents a CMSG_HeroSetting_Req. */
        class CMSG_HeroSetting_Req implements ICMSG_HeroSetting_Req {

            /**
             * Constructs a new CMSG_HeroSetting_Req.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.war.ICMSG_HeroSetting_Req);

            /** CMSG_HeroSetting_Req heroId. */
            public heroId: number;

            /** CMSG_HeroSetting_Req operationType. */
            public operationType: number;

            /** CMSG_HeroSetting_Req id. */
            public id: number;

            /** CMSG_HeroSetting_Req position. */
            public position: number;

            /**
             * Creates a new CMSG_HeroSetting_Req instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CMSG_HeroSetting_Req instance
             */
            public static create(properties?: game.war.ICMSG_HeroSetting_Req): game.war.CMSG_HeroSetting_Req;

            /**
             * Encodes the specified CMSG_HeroSetting_Req message. Does not implicitly {@link game.war.CMSG_HeroSetting_Req.verify|verify} messages.
             * @param message CMSG_HeroSetting_Req message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.war.ICMSG_HeroSetting_Req, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified CMSG_HeroSetting_Req message, length delimited. Does not implicitly {@link game.war.CMSG_HeroSetting_Req.verify|verify} messages.
             * @param message CMSG_HeroSetting_Req message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: game.war.ICMSG_HeroSetting_Req, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CMSG_HeroSetting_Req message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CMSG_HeroSetting_Req
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.war.CMSG_HeroSetting_Req;

            /**
             * Decodes a CMSG_HeroSetting_Req message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CMSG_HeroSetting_Req
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.war.CMSG_HeroSetting_Req;

            /**
             * Verifies a CMSG_HeroSetting_Req message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CMSG_HeroSetting_Req message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CMSG_HeroSetting_Req
             */
            public static fromObject(object: { [k: string]: any }): game.war.CMSG_HeroSetting_Req;

            /**
             * Creates a plain object from a CMSG_HeroSetting_Req message. Also converts values to other types if specified.
             * @param message CMSG_HeroSetting_Req
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: game.war.CMSG_HeroSetting_Req, options?: protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CMSG_HeroSetting_Req to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SMSG_HeroSetting_Resp. */
        interface ISMSG_HeroSetting_Resp {

            /** SMSG_HeroSetting_Resp heroId */
            heroId: number;

            /** SMSG_HeroSetting_Resp operationType */
            operationType: number;

            /** SMSG_HeroSetting_Resp id */
            id: number;

            /** SMSG_HeroSetting_Resp position */
            position: number;
        }

        /** Represents a SMSG_HeroSetting_Resp. */
        class SMSG_HeroSetting_Resp implements ISMSG_HeroSetting_Resp {

            /**
             * Constructs a new SMSG_HeroSetting_Resp.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.war.ISMSG_HeroSetting_Resp);

            /** SMSG_HeroSetting_Resp heroId. */
            public heroId: number;

            /** SMSG_HeroSetting_Resp operationType. */
            public operationType: number;

            /** SMSG_HeroSetting_Resp id. */
            public id: number;

            /** SMSG_HeroSetting_Resp position. */
            public position: number;

            /**
             * Creates a new SMSG_HeroSetting_Resp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SMSG_HeroSetting_Resp instance
             */
            public static create(properties?: game.war.ISMSG_HeroSetting_Resp): game.war.SMSG_HeroSetting_Resp;

            /**
             * Encodes the specified SMSG_HeroSetting_Resp message. Does not implicitly {@link game.war.SMSG_HeroSetting_Resp.verify|verify} messages.
             * @param message SMSG_HeroSetting_Resp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.war.ISMSG_HeroSetting_Resp, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified SMSG_HeroSetting_Resp message, length delimited. Does not implicitly {@link game.war.SMSG_HeroSetting_Resp.verify|verify} messages.
             * @param message SMSG_HeroSetting_Resp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: game.war.ISMSG_HeroSetting_Resp, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a SMSG_HeroSetting_Resp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SMSG_HeroSetting_Resp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.war.SMSG_HeroSetting_Resp;

            /**
             * Decodes a SMSG_HeroSetting_Resp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SMSG_HeroSetting_Resp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.war.SMSG_HeroSetting_Resp;

            /**
             * Verifies a SMSG_HeroSetting_Resp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SMSG_HeroSetting_Resp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SMSG_HeroSetting_Resp
             */
            public static fromObject(object: { [k: string]: any }): game.war.SMSG_HeroSetting_Resp;

            /**
             * Creates a plain object from a SMSG_HeroSetting_Resp message. Also converts values to other types if specified.
             * @param message SMSG_HeroSetting_Resp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: game.war.SMSG_HeroSetting_Resp, options?: protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SMSG_HeroSetting_Resp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CMSG_SelectHeroByBattleFormation_Req. */
        interface ICMSG_SelectHeroByBattleFormation_Req {

            /** CMSG_SelectHeroByBattleFormation_Req heroId */
            heroId: number;
        }

        /** Represents a CMSG_SelectHeroByBattleFormation_Req. */
        class CMSG_SelectHeroByBattleFormation_Req implements ICMSG_SelectHeroByBattleFormation_Req {

            /**
             * Constructs a new CMSG_SelectHeroByBattleFormation_Req.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.war.ICMSG_SelectHeroByBattleFormation_Req);

            /** CMSG_SelectHeroByBattleFormation_Req heroId. */
            public heroId: number;

            /**
             * Creates a new CMSG_SelectHeroByBattleFormation_Req instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CMSG_SelectHeroByBattleFormation_Req instance
             */
            public static create(properties?: game.war.ICMSG_SelectHeroByBattleFormation_Req): game.war.CMSG_SelectHeroByBattleFormation_Req;

            /**
             * Encodes the specified CMSG_SelectHeroByBattleFormation_Req message. Does not implicitly {@link game.war.CMSG_SelectHeroByBattleFormation_Req.verify|verify} messages.
             * @param message CMSG_SelectHeroByBattleFormation_Req message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.war.ICMSG_SelectHeroByBattleFormation_Req, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified CMSG_SelectHeroByBattleFormation_Req message, length delimited. Does not implicitly {@link game.war.CMSG_SelectHeroByBattleFormation_Req.verify|verify} messages.
             * @param message CMSG_SelectHeroByBattleFormation_Req message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: game.war.ICMSG_SelectHeroByBattleFormation_Req, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CMSG_SelectHeroByBattleFormation_Req message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CMSG_SelectHeroByBattleFormation_Req
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.war.CMSG_SelectHeroByBattleFormation_Req;

            /**
             * Decodes a CMSG_SelectHeroByBattleFormation_Req message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CMSG_SelectHeroByBattleFormation_Req
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.war.CMSG_SelectHeroByBattleFormation_Req;

            /**
             * Verifies a CMSG_SelectHeroByBattleFormation_Req message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CMSG_SelectHeroByBattleFormation_Req message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CMSG_SelectHeroByBattleFormation_Req
             */
            public static fromObject(object: { [k: string]: any }): game.war.CMSG_SelectHeroByBattleFormation_Req;

            /**
             * Creates a plain object from a CMSG_SelectHeroByBattleFormation_Req message. Also converts values to other types if specified.
             * @param message CMSG_SelectHeroByBattleFormation_Req
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: game.war.CMSG_SelectHeroByBattleFormation_Req, options?: protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CMSG_SelectHeroByBattleFormation_Req to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SMSG_SelectHeroByBattleFormation_Resp. */
        interface ISMSG_SelectHeroByBattleFormation_Resp {

            /** SMSG_SelectHeroByBattleFormation_Resp heroId */
            heroId: number;
        }

        /** Represents a SMSG_SelectHeroByBattleFormation_Resp. */
        class SMSG_SelectHeroByBattleFormation_Resp implements ISMSG_SelectHeroByBattleFormation_Resp {

            /**
             * Constructs a new SMSG_SelectHeroByBattleFormation_Resp.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.war.ISMSG_SelectHeroByBattleFormation_Resp);

            /** SMSG_SelectHeroByBattleFormation_Resp heroId. */
            public heroId: number;

            /**
             * Creates a new SMSG_SelectHeroByBattleFormation_Resp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SMSG_SelectHeroByBattleFormation_Resp instance
             */
            public static create(properties?: game.war.ISMSG_SelectHeroByBattleFormation_Resp): game.war.SMSG_SelectHeroByBattleFormation_Resp;

            /**
             * Encodes the specified SMSG_SelectHeroByBattleFormation_Resp message. Does not implicitly {@link game.war.SMSG_SelectHeroByBattleFormation_Resp.verify|verify} messages.
             * @param message SMSG_SelectHeroByBattleFormation_Resp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.war.ISMSG_SelectHeroByBattleFormation_Resp, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified SMSG_SelectHeroByBattleFormation_Resp message, length delimited. Does not implicitly {@link game.war.SMSG_SelectHeroByBattleFormation_Resp.verify|verify} messages.
             * @param message SMSG_SelectHeroByBattleFormation_Resp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: game.war.ISMSG_SelectHeroByBattleFormation_Resp, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a SMSG_SelectHeroByBattleFormation_Resp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SMSG_SelectHeroByBattleFormation_Resp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.war.SMSG_SelectHeroByBattleFormation_Resp;

            /**
             * Decodes a SMSG_SelectHeroByBattleFormation_Resp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SMSG_SelectHeroByBattleFormation_Resp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.war.SMSG_SelectHeroByBattleFormation_Resp;

            /**
             * Verifies a SMSG_SelectHeroByBattleFormation_Resp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SMSG_SelectHeroByBattleFormation_Resp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SMSG_SelectHeroByBattleFormation_Resp
             */
            public static fromObject(object: { [k: string]: any }): game.war.SMSG_SelectHeroByBattleFormation_Resp;

            /**
             * Creates a plain object from a SMSG_SelectHeroByBattleFormation_Resp message. Also converts values to other types if specified.
             * @param message SMSG_SelectHeroByBattleFormation_Resp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: game.war.SMSG_SelectHeroByBattleFormation_Resp, options?: protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SMSG_SelectHeroByBattleFormation_Resp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CMSG_HeroSkillLevelingUp_Req. */
        interface ICMSG_HeroSkillLevelingUp_Req {

            /** CMSG_HeroSkillLevelingUp_Req heroId */
            heroId: number;

            /** CMSG_HeroSkillLevelingUp_Req skillId */
            skillId: number;
        }

        /** Represents a CMSG_HeroSkillLevelingUp_Req. */
        class CMSG_HeroSkillLevelingUp_Req implements ICMSG_HeroSkillLevelingUp_Req {

            /**
             * Constructs a new CMSG_HeroSkillLevelingUp_Req.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.war.ICMSG_HeroSkillLevelingUp_Req);

            /** CMSG_HeroSkillLevelingUp_Req heroId. */
            public heroId: number;

            /** CMSG_HeroSkillLevelingUp_Req skillId. */
            public skillId: number;

            /**
             * Creates a new CMSG_HeroSkillLevelingUp_Req instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CMSG_HeroSkillLevelingUp_Req instance
             */
            public static create(properties?: game.war.ICMSG_HeroSkillLevelingUp_Req): game.war.CMSG_HeroSkillLevelingUp_Req;

            /**
             * Encodes the specified CMSG_HeroSkillLevelingUp_Req message. Does not implicitly {@link game.war.CMSG_HeroSkillLevelingUp_Req.verify|verify} messages.
             * @param message CMSG_HeroSkillLevelingUp_Req message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.war.ICMSG_HeroSkillLevelingUp_Req, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified CMSG_HeroSkillLevelingUp_Req message, length delimited. Does not implicitly {@link game.war.CMSG_HeroSkillLevelingUp_Req.verify|verify} messages.
             * @param message CMSG_HeroSkillLevelingUp_Req message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: game.war.ICMSG_HeroSkillLevelingUp_Req, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CMSG_HeroSkillLevelingUp_Req message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CMSG_HeroSkillLevelingUp_Req
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.war.CMSG_HeroSkillLevelingUp_Req;

            /**
             * Decodes a CMSG_HeroSkillLevelingUp_Req message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CMSG_HeroSkillLevelingUp_Req
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.war.CMSG_HeroSkillLevelingUp_Req;

            /**
             * Verifies a CMSG_HeroSkillLevelingUp_Req message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CMSG_HeroSkillLevelingUp_Req message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CMSG_HeroSkillLevelingUp_Req
             */
            public static fromObject(object: { [k: string]: any }): game.war.CMSG_HeroSkillLevelingUp_Req;

            /**
             * Creates a plain object from a CMSG_HeroSkillLevelingUp_Req message. Also converts values to other types if specified.
             * @param message CMSG_HeroSkillLevelingUp_Req
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: game.war.CMSG_HeroSkillLevelingUp_Req, options?: protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CMSG_HeroSkillLevelingUp_Req to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SMSG_HeroSkillLevelingUp_Resp. */
        interface ISMSG_HeroSkillLevelingUp_Resp {

            /** SMSG_HeroSkillLevelingUp_Resp heroId */
            heroId: number;

            /** SMSG_HeroSkillLevelingUp_Resp skillId */
            skillId: number;

            /** SMSG_HeroSkillLevelingUp_Resp level */
            level: number;
        }

        /** Represents a SMSG_HeroSkillLevelingUp_Resp. */
        class SMSG_HeroSkillLevelingUp_Resp implements ISMSG_HeroSkillLevelingUp_Resp {

            /**
             * Constructs a new SMSG_HeroSkillLevelingUp_Resp.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.war.ISMSG_HeroSkillLevelingUp_Resp);

            /** SMSG_HeroSkillLevelingUp_Resp heroId. */
            public heroId: number;

            /** SMSG_HeroSkillLevelingUp_Resp skillId. */
            public skillId: number;

            /** SMSG_HeroSkillLevelingUp_Resp level. */
            public level: number;

            /**
             * Creates a new SMSG_HeroSkillLevelingUp_Resp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SMSG_HeroSkillLevelingUp_Resp instance
             */
            public static create(properties?: game.war.ISMSG_HeroSkillLevelingUp_Resp): game.war.SMSG_HeroSkillLevelingUp_Resp;

            /**
             * Encodes the specified SMSG_HeroSkillLevelingUp_Resp message. Does not implicitly {@link game.war.SMSG_HeroSkillLevelingUp_Resp.verify|verify} messages.
             * @param message SMSG_HeroSkillLevelingUp_Resp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.war.ISMSG_HeroSkillLevelingUp_Resp, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified SMSG_HeroSkillLevelingUp_Resp message, length delimited. Does not implicitly {@link game.war.SMSG_HeroSkillLevelingUp_Resp.verify|verify} messages.
             * @param message SMSG_HeroSkillLevelingUp_Resp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: game.war.ISMSG_HeroSkillLevelingUp_Resp, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a SMSG_HeroSkillLevelingUp_Resp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SMSG_HeroSkillLevelingUp_Resp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.war.SMSG_HeroSkillLevelingUp_Resp;

            /**
             * Decodes a SMSG_HeroSkillLevelingUp_Resp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SMSG_HeroSkillLevelingUp_Resp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.war.SMSG_HeroSkillLevelingUp_Resp;

            /**
             * Verifies a SMSG_HeroSkillLevelingUp_Resp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SMSG_HeroSkillLevelingUp_Resp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SMSG_HeroSkillLevelingUp_Resp
             */
            public static fromObject(object: { [k: string]: any }): game.war.SMSG_HeroSkillLevelingUp_Resp;

            /**
             * Creates a plain object from a SMSG_HeroSkillLevelingUp_Resp message. Also converts values to other types if specified.
             * @param message SMSG_HeroSkillLevelingUp_Resp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: game.war.SMSG_HeroSkillLevelingUp_Resp, options?: protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SMSG_HeroSkillLevelingUp_Resp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CMSG_ResetHeroSkillLevel_Req. */
        interface ICMSG_ResetHeroSkillLevel_Req {

            /** CMSG_ResetHeroSkillLevel_Req heroId */
            heroId: number;
        }

        /** Represents a CMSG_ResetHeroSkillLevel_Req. */
        class CMSG_ResetHeroSkillLevel_Req implements ICMSG_ResetHeroSkillLevel_Req {

            /**
             * Constructs a new CMSG_ResetHeroSkillLevel_Req.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.war.ICMSG_ResetHeroSkillLevel_Req);

            /** CMSG_ResetHeroSkillLevel_Req heroId. */
            public heroId: number;

            /**
             * Creates a new CMSG_ResetHeroSkillLevel_Req instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CMSG_ResetHeroSkillLevel_Req instance
             */
            public static create(properties?: game.war.ICMSG_ResetHeroSkillLevel_Req): game.war.CMSG_ResetHeroSkillLevel_Req;

            /**
             * Encodes the specified CMSG_ResetHeroSkillLevel_Req message. Does not implicitly {@link game.war.CMSG_ResetHeroSkillLevel_Req.verify|verify} messages.
             * @param message CMSG_ResetHeroSkillLevel_Req message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.war.ICMSG_ResetHeroSkillLevel_Req, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified CMSG_ResetHeroSkillLevel_Req message, length delimited. Does not implicitly {@link game.war.CMSG_ResetHeroSkillLevel_Req.verify|verify} messages.
             * @param message CMSG_ResetHeroSkillLevel_Req message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: game.war.ICMSG_ResetHeroSkillLevel_Req, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CMSG_ResetHeroSkillLevel_Req message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CMSG_ResetHeroSkillLevel_Req
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.war.CMSG_ResetHeroSkillLevel_Req;

            /**
             * Decodes a CMSG_ResetHeroSkillLevel_Req message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CMSG_ResetHeroSkillLevel_Req
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.war.CMSG_ResetHeroSkillLevel_Req;

            /**
             * Verifies a CMSG_ResetHeroSkillLevel_Req message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CMSG_ResetHeroSkillLevel_Req message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CMSG_ResetHeroSkillLevel_Req
             */
            public static fromObject(object: { [k: string]: any }): game.war.CMSG_ResetHeroSkillLevel_Req;

            /**
             * Creates a plain object from a CMSG_ResetHeroSkillLevel_Req message. Also converts values to other types if specified.
             * @param message CMSG_ResetHeroSkillLevel_Req
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: game.war.CMSG_ResetHeroSkillLevel_Req, options?: protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CMSG_ResetHeroSkillLevel_Req to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SMSG_ResetHeroSkillLevel_Resp. */
        interface ISMSG_ResetHeroSkillLevel_Resp {

            /** SMSG_ResetHeroSkillLevel_Resp heroId */
            heroId: number;

            /** SMSG_ResetHeroSkillLevel_Resp skillPoint */
            skillPoint: number;
        }

        /** Represents a SMSG_ResetHeroSkillLevel_Resp. */
        class SMSG_ResetHeroSkillLevel_Resp implements ISMSG_ResetHeroSkillLevel_Resp {

            /**
             * Constructs a new SMSG_ResetHeroSkillLevel_Resp.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.war.ISMSG_ResetHeroSkillLevel_Resp);

            /** SMSG_ResetHeroSkillLevel_Resp heroId. */
            public heroId: number;

            /** SMSG_ResetHeroSkillLevel_Resp skillPoint. */
            public skillPoint: number;

            /**
             * Creates a new SMSG_ResetHeroSkillLevel_Resp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SMSG_ResetHeroSkillLevel_Resp instance
             */
            public static create(properties?: game.war.ISMSG_ResetHeroSkillLevel_Resp): game.war.SMSG_ResetHeroSkillLevel_Resp;

            /**
             * Encodes the specified SMSG_ResetHeroSkillLevel_Resp message. Does not implicitly {@link game.war.SMSG_ResetHeroSkillLevel_Resp.verify|verify} messages.
             * @param message SMSG_ResetHeroSkillLevel_Resp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.war.ISMSG_ResetHeroSkillLevel_Resp, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified SMSG_ResetHeroSkillLevel_Resp message, length delimited. Does not implicitly {@link game.war.SMSG_ResetHeroSkillLevel_Resp.verify|verify} messages.
             * @param message SMSG_ResetHeroSkillLevel_Resp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: game.war.ISMSG_ResetHeroSkillLevel_Resp, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a SMSG_ResetHeroSkillLevel_Resp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SMSG_ResetHeroSkillLevel_Resp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.war.SMSG_ResetHeroSkillLevel_Resp;

            /**
             * Decodes a SMSG_ResetHeroSkillLevel_Resp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SMSG_ResetHeroSkillLevel_Resp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.war.SMSG_ResetHeroSkillLevel_Resp;

            /**
             * Verifies a SMSG_ResetHeroSkillLevel_Resp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SMSG_ResetHeroSkillLevel_Resp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SMSG_ResetHeroSkillLevel_Resp
             */
            public static fromObject(object: { [k: string]: any }): game.war.SMSG_ResetHeroSkillLevel_Resp;

            /**
             * Creates a plain object from a SMSG_ResetHeroSkillLevel_Resp message. Also converts values to other types if specified.
             * @param message SMSG_ResetHeroSkillLevel_Resp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: game.war.SMSG_ResetHeroSkillLevel_Resp, options?: protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SMSG_ResetHeroSkillLevel_Resp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SMSG_HeroSkillInfo_Ntf. */
        interface ISMSG_HeroSkillInfo_Ntf {

            /** SMSG_HeroSkillInfo_Ntf heroId */
            heroId: number;

            /** SMSG_HeroSkillInfo_Ntf activeSkills */
            activeSkills?: (number[]|null);
        }

        /** Represents a SMSG_HeroSkillInfo_Ntf. */
        class SMSG_HeroSkillInfo_Ntf implements ISMSG_HeroSkillInfo_Ntf {

            /**
             * Constructs a new SMSG_HeroSkillInfo_Ntf.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.war.ISMSG_HeroSkillInfo_Ntf);

            /** SMSG_HeroSkillInfo_Ntf heroId. */
            public heroId: number;

            /** SMSG_HeroSkillInfo_Ntf activeSkills. */
            public activeSkills: number[];

            /**
             * Creates a new SMSG_HeroSkillInfo_Ntf instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SMSG_HeroSkillInfo_Ntf instance
             */
            public static create(properties?: game.war.ISMSG_HeroSkillInfo_Ntf): game.war.SMSG_HeroSkillInfo_Ntf;

            /**
             * Encodes the specified SMSG_HeroSkillInfo_Ntf message. Does not implicitly {@link game.war.SMSG_HeroSkillInfo_Ntf.verify|verify} messages.
             * @param message SMSG_HeroSkillInfo_Ntf message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.war.ISMSG_HeroSkillInfo_Ntf, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified SMSG_HeroSkillInfo_Ntf message, length delimited. Does not implicitly {@link game.war.SMSG_HeroSkillInfo_Ntf.verify|verify} messages.
             * @param message SMSG_HeroSkillInfo_Ntf message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: game.war.ISMSG_HeroSkillInfo_Ntf, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a SMSG_HeroSkillInfo_Ntf message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SMSG_HeroSkillInfo_Ntf
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.war.SMSG_HeroSkillInfo_Ntf;

            /**
             * Decodes a SMSG_HeroSkillInfo_Ntf message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SMSG_HeroSkillInfo_Ntf
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.war.SMSG_HeroSkillInfo_Ntf;

            /**
             * Verifies a SMSG_HeroSkillInfo_Ntf message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SMSG_HeroSkillInfo_Ntf message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SMSG_HeroSkillInfo_Ntf
             */
            public static fromObject(object: { [k: string]: any }): game.war.SMSG_HeroSkillInfo_Ntf;

            /**
             * Creates a plain object from a SMSG_HeroSkillInfo_Ntf message. Also converts values to other types if specified.
             * @param message SMSG_HeroSkillInfo_Ntf
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: game.war.SMSG_HeroSkillInfo_Ntf, options?: protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SMSG_HeroSkillInfo_Ntf to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}

/** Namespace mylaya. */
declare namespace mylaya {

    /** Properties of a Test. */
    interface ITest {

        /** Test string */
        string?: (string|null);

        /** Test uint32 */
        uint32?: (number|null);

        /** Test inner */
        inner?: (mylaya.Test.IInner|null);

        /** Test float */
        float?: (number|null);
    }

    /** Represents a Test. */
    class Test implements ITest {

        /**
         * Constructs a new Test.
         * @param [properties] Properties to set
         */
        constructor(properties?: mylaya.ITest);

        /** Test string. */
        public string: string;

        /** Test uint32. */
        public uint32: number;

        /** Test inner. */
        public inner?: (mylaya.Test.IInner|null);

        /** Test float. */
        public float: number;

        /**
         * Creates a new Test instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Test instance
         */
        public static create(properties?: mylaya.ITest): mylaya.Test;

        /**
         * Encodes the specified Test message. Does not implicitly {@link mylaya.Test.verify|verify} messages.
         * @param message Test message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mylaya.ITest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Test message, length delimited. Does not implicitly {@link mylaya.Test.verify|verify} messages.
         * @param message Test message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mylaya.ITest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Test message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): mylaya.Test;

        /**
         * Decodes a Test message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): mylaya.Test;

        /**
         * Verifies a Test message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Test message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Test
         */
        public static fromObject(object: { [k: string]: any }): mylaya.Test;

        /**
         * Creates a plain object from a Test message. Also converts values to other types if specified.
         * @param message Test
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mylaya.Test, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Test to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Test {

        /** Properties of an Inner. */
        interface IInner {

            /** Inner int32 */
            int32?: (number|null);

            /** Inner innerInner */
            innerInner?: (mylaya.Test.Inner.IInnerInner|null);

            /** Inner outer */
            outer?: (mylaya.IOuter|null);
        }

        /** Represents an Inner. */
        class Inner implements IInner {

            /**
             * Constructs a new Inner.
             * @param [properties] Properties to set
             */
            constructor(properties?: mylaya.Test.IInner);

            /** Inner int32. */
            public int32: number;

            /** Inner innerInner. */
            public innerInner?: (mylaya.Test.Inner.IInnerInner|null);

            /** Inner outer. */
            public outer?: (mylaya.IOuter|null);

            /**
             * Creates a new Inner instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Inner instance
             */
            public static create(properties?: mylaya.Test.IInner): mylaya.Test.Inner;

            /**
             * Encodes the specified Inner message. Does not implicitly {@link mylaya.Test.Inner.verify|verify} messages.
             * @param message Inner message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mylaya.Test.IInner, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified Inner message, length delimited. Does not implicitly {@link mylaya.Test.Inner.verify|verify} messages.
             * @param message Inner message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mylaya.Test.IInner, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes an Inner message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Inner
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): mylaya.Test.Inner;

            /**
             * Decodes an Inner message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Inner
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): mylaya.Test.Inner;

            /**
             * Verifies an Inner message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Inner message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Inner
             */
            public static fromObject(object: { [k: string]: any }): mylaya.Test.Inner;

            /**
             * Creates a plain object from an Inner message. Also converts values to other types if specified.
             * @param message Inner
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mylaya.Test.Inner, options?: protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Inner to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Inner {

            /** Properties of an InnerInner. */
            interface IInnerInner {

                /** InnerInner long */
                long?: (number|Long|null);

                /** InnerInner enum */
                "enum"?: (mylaya.Test.Enum|null);

                /** InnerInner sint32 */
                sint32?: (number|null);
            }

            /** Represents an InnerInner. */
            class InnerInner implements IInnerInner {

                /**
                 * Constructs a new InnerInner.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: mylaya.Test.Inner.IInnerInner);

                /** InnerInner long. */
                public long: (number|Long);

                /** InnerInner enum. */
                public enum: mylaya.Test.Enum;

                /** InnerInner sint32. */
                public sint32: number;

                /**
                 * Creates a new InnerInner instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns InnerInner instance
                 */
                public static create(properties?: mylaya.Test.Inner.IInnerInner): mylaya.Test.Inner.InnerInner;

                /**
                 * Encodes the specified InnerInner message. Does not implicitly {@link mylaya.Test.Inner.InnerInner.verify|verify} messages.
                 * @param message InnerInner message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: mylaya.Test.Inner.IInnerInner, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified InnerInner message, length delimited. Does not implicitly {@link mylaya.Test.Inner.InnerInner.verify|verify} messages.
                 * @param message InnerInner message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: mylaya.Test.Inner.IInnerInner, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes an InnerInner message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns InnerInner
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): mylaya.Test.Inner.InnerInner;

                /**
                 * Decodes an InnerInner message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns InnerInner
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): mylaya.Test.Inner.InnerInner;

                /**
                 * Verifies an InnerInner message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an InnerInner message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns InnerInner
                 */
                public static fromObject(object: { [k: string]: any }): mylaya.Test.Inner.InnerInner;

                /**
                 * Creates a plain object from an InnerInner message. Also converts values to other types if specified.
                 * @param message InnerInner
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: mylaya.Test.Inner.InnerInner, options?: protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this InnerInner to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Enum enum. */
        enum Enum {
            ONE = 0,
            TWO = 1,
            THREE = 2,
            FOUR = 3,
            FIVE = 4
        }
    }

    /** Properties of an Outer. */
    interface IOuter {

        /** Outer bool */
        bool?: (boolean[]|null);

        /** Outer double */
        double?: (number|null);
    }

    /** Represents an Outer. */
    class Outer implements IOuter {

        /**
         * Constructs a new Outer.
         * @param [properties] Properties to set
         */
        constructor(properties?: mylaya.IOuter);

        /** Outer bool. */
        public bool: boolean[];

        /** Outer double. */
        public double: number;

        /**
         * Creates a new Outer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Outer instance
         */
        public static create(properties?: mylaya.IOuter): mylaya.Outer;

        /**
         * Encodes the specified Outer message. Does not implicitly {@link mylaya.Outer.verify|verify} messages.
         * @param message Outer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mylaya.IOuter, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Outer message, length delimited. Does not implicitly {@link mylaya.Outer.verify|verify} messages.
         * @param message Outer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mylaya.IOuter, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an Outer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Outer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): mylaya.Outer;

        /**
         * Decodes an Outer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Outer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): mylaya.Outer;

        /**
         * Verifies an Outer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Outer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Outer
         */
        public static fromObject(object: { [k: string]: any }): mylaya.Outer;

        /**
         * Creates a plain object from an Outer message. Also converts values to other types if specified.
         * @param message Outer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mylaya.Outer, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Outer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
