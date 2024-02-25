import { TRegisterTour } from "./registerTour.interface";
import { RegisterTourModel } from "./registerTour.model";
const registerTourIntoDB = async (payload: TRegisterTour) => {
    const result =  RegisterTourModel.create(payload);
    return result;
}

const getAllRegisteredTours = async() => {
    const result = RegisterTourModel.find().populate('tourId').populate('participants.userId');
    console.log(result,'from dddddddddddddddddd');
    return result;

}
 
const getMyRegisteredTours = async (_id: string): Promise<any[]> => {
    console.log(_id,'from service');
    try {
        const allRegisteredTours = await RegisterTourModel.find();

        // Array to store registered tours where the user is a participant
        const myRegisteredTours: any[] = [];

        // Iterate through each registered tour
        for (const registeredTour of allRegisteredTours) {
            // Check if the user is a participant in this registered tour
            const isParticipant = registeredTour.participants.some((participant: any) => participant.userId.toString() === _id);

            // If user is a participant, add the registered tour to myRegisteredTours
            if (isParticipant) {
                myRegisteredTours.push(registeredTour);
            }
        }

        // Populate the fields as needed
        await RegisterTourModel.populate(myRegisteredTours, [{ path: 'tourId' }, { path: 'participants.userId'}]);

        return myRegisteredTours;
    } catch (error) {
        console.error('Error fetching registered tours:', error);
        throw error;
    }
};
 

export const RegisterTourServices = {
    registerTourIntoDB,
    getMyRegisteredTours,
    getAllRegisteredTours
   
}




