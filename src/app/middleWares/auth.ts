import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors/AppError';
import httpStatus from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import catchAsync from '../../utils/catchAsync';
import { TUserRole } from '../modules/User/user.interface';
import { User } from '../modules/User/user.model';





const auth = (...requiredRoles: TUserRole[]) => {
    return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization;

        if (!token) {
            throw new AppError(httpStatus.UNAUTHORIZED, 'Unauthorized Access', 'You do not have the necessary permissions to access this resource.');
        }

        const decoded = jwt.verify(token, config.jwt_access_secret as string) as JwtPayload;
        const { role, email, iat } = decoded;

        const userData = await User.findOne({ email });

        if (!userData) {
            throw new AppError(httpStatus.NOT_FOUND, 'User Not Found', 'This user is not found.');
        }

        const updatedAt = userData.updatedAt;

        if (updatedAt && User.isJwtIssuedBeforePasswordChange(updatedAt, iat as number)) {
            throw new AppError(httpStatus.UNAUTHORIZED, 'Unauthorized Access', 'You do not have the necessary permissions to access this resource.');
        }

        if (requiredRoles && !requiredRoles.includes(role)) {
            throw new AppError(httpStatus.UNAUTHORIZED, 'Unauthorized Access', 'You do not have the necessary permissions to access this resource.');
        }

        req.user = decoded as JwtPayload;
        next();
    } catch (error) {

        const errorResponse = {
            success: false,
            message: 'Unauthorized Access',
            errorMessage: 'You do not have the necessary permissions to access this resource.',
            errorDetails:   null,
            stack:  null,
        };

 
        res.status( httpStatus.UNAUTHORIZED).json(errorResponse);
    }
});

}
export default auth;