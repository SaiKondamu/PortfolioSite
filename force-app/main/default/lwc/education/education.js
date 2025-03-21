import { LightningElement, api, track } from 'lwc';
import VCELogoURL from '@salesforce/resourceUrl/VasaviLogo';
import NEULogoURL from '@salesforce/resourceUrl/NEULogo';

export default class Education extends LightningElement {
    @track 
    currentIndex = 0;

    @api 
    bachelorsCollegeName = 'vasavi';

    get cardClass() {
        return (edu) => this.currentIndex === this.education_details.indexOf(edu) ? 'active' : 'hidden';
    }

    get indicatorClass() {
        return (edu) => this.currentIndex === this.education_details.indexOf(edu) ? 'active' : 'inactive';
    }

    education_details = [{
            "degree": "Bachelors (May 2016 - May 2020)",
            "school": "Vasavi College of Engineering", 
            "imageURL": VCELogoURL + '/VCE.png',
            "address" : "Hyderabad, Telangana, India",
            "majors" : "Information Technology", 
            "courses": ["C", "C++", "Java", "Java Script", "Operating Systems", "Networks Structures", "Web Designing"]
        },
        {
            "degree": "Masters (Jan 2020 - Dec 2022)",
            "school": "Northeastern University",
            "imageURL": NEULogoURL + '/NEU.png',
            "address" : "Boston, Massachusetts, US",
            "majors": "Information Systems",
            "courses": ["Cloud Computing", "Web Designing", "UI/UX", "Application Development"]
    }];

    handleIndicatorClick(event) {
        const selectedId = parseInt(event.target.dataset.id, 10);
        this.currentIndex = this.education_details.findIndex(edu => edu.degree === selectedId);
    }    
   	
}