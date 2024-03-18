import { LightningElement } from 'lwc';
import AssociateLogoURL from '@salesforce/resourceUrl/associateLogo';
import AppBuilderLogoURL from '@salesforce/resourceUrl/AppBuilderLogo';
import AdminLogoURL from '@salesforce/resourceUrl/AdminLogo';
import PD1LogoURL from '@salesforce/resourceUrl/PD1Logo';
import JSLogoURL from '@salesforce/resourceUrl/JSLogo';

export default class Certifications extends LightningElement {

    certifications = [
        {
            'name' : 'Associate', 
            'imageURL': AssociateLogoURL + '/AssociateLogo.png'
        },
        {
            'name' : 'Platform App Builder', 
            'imageURL': AppBuilderLogoURL + '/AppBuilderLogo.png'
        },
        {
            'name' : 'Adminisatrator', 
            'imageURL': AdminLogoURL + '/AdminLogo.png'
        },
        {
            'name': 'Platform Developer I', 
            'imageURL': PD1LogoURL + '/PD1Logo.png'
        },
        {
            'name' : 'JavaScript Developer I', 
            'imageURL': JSLogoURL + '/JSLogo.png'
        },
    ];

    getTileSize() {
        return window.innerWidth < 768 ? '12' : '4'; // 12 for mobile, 4 for tablet/laptop
    }
}