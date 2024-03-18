import { LightningElement, api } from 'lwc';
import VCELogoURL from '@salesforce/resourceUrl/VasaviLogo';
import NEULogoURL from '@salesforce/resourceUrl/NEULogo';

export default class Education extends LightningElement {

    @api bachelorsCollegeName = 'vasavi';
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
        
   	
}