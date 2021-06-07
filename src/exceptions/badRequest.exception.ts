import { HttpException, HttpStatus } from "@nestjs/common";

class BadRequestException extends HttpException {
	constructor(message: string = "Bad request...") {
		super(message, HttpStatus.BAD_REQUEST);
	}
}

export default BadRequestException;
