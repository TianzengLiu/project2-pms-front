export class Permit {
    permit_id: number // primary key
    parking_spot: number
    vehicle_license: string
    initial_date: number
    expiry_date: number

    constructor(permit_id: number, parking_spot: number, 
        vehicle_license: string = '', initial_date: number, 
        expiry_date: number) {
            this.permit_id = permit_id;
            this.parking_spot = parking_spot;
            this.vehicle_license = vehicle_license;
            this.initial_date = initial_date;
            this.expiry_date = expiry_date
        }

}

