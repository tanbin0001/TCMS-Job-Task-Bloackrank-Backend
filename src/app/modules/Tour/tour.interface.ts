export interface TTour {
    tourName:      string;
    tourDetails:   TourDetails;
    tourCreator:   string;
    expenseStatus: 'pending' | 'paid';
}

export interface TourDetails {
    destination: string;
    duration:    string;
}
