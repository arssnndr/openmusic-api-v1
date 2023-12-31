const InvarianError = require('../../exceptions/InvarianError');
const { SongPayloadSchema } = require('./schema');

const SongsValidator = {
    validateSongPayload: (payload) => {
        const validationResult = SongPayloadSchema.validate(payload);
        if (validationResult.error) {
            throw new InvarianError(validationResult.error.message);
        }
    },
};

module.exports = SongsValidator;
