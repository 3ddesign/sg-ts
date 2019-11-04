import { User } from './User'
import { Company } from './Company'

export class CustomMap {
    public googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    addUserMarker(user: User) {
        new this.google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: user.location.lat,
                lng: user.location.lng
            }
        });
    }

    addCompanyMarker(company: Company) {
        
    }
}