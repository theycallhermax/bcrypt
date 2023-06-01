const js_bcrypt = async () => {
    return import("https://www.unpkg.com/bcrypt@latest/bcrypt.js").then({res});
}

class bcrypt {
    getInfo() {
        return {
            id: "bcrypt",
            name: "bcrypt",
            blocks: [
                {
                    opcode: "hash",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "hash [STRING] with salt rounds of [ROUNDS]",
                    arguments: {
                        STRING: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "password"
                        },
                        ROUNDS: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 10
                        },
                    }
                }
            ]
        };
    }

    hash(args) {
        const salt = js_bcrypt.genSaltSync(args.ROUNDS);
        return js_bcrypt.hashSync(args.STRING, salt);
    }
}

Scratch.extensions.register(new bcrypt());