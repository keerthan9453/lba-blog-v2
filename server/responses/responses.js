class SuccessResponse {
    constructor(data) {
        this.response = {
            success: true,
            data: data,
        }
    }

    getResponse() {
        return this.response
    }
}

class ErrorResponse {
    constructor(errorCode, userFacingError) {
        this.response = {
            success: false,
            error: errorCode,
            userFacingError: userFacingError,
        }
    }

    getResponse() {
        return this.response
    }
}

modules.exports = { SuccessResponse, ErrorResponse }
