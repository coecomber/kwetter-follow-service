import { HttpException, HttpStatus } from "@nestjs/common";

class UnauthorizedException extends HttpException {
	constructor(message: string = "Unauthorized...") {
		super(message, HttpStatus.UNAUTHORIZED);
	}
}

export default UnauthorizedException;
